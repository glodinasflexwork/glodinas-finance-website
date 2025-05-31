import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, language } = await request.json();
    
    // Validate inputs
    if (!name || !email || !language) {
      return NextResponse.json(
        { message: 'Name, email, and language are required' },
        { status: 400 }
      );
    }
    
    // Format language for better readability
    const languageText = language === 'nl' ? 'Dutch' : 'English';
    
    // Prepare email content
    const emailHtml = `
      <h1>New Client Registration</h1>
      <p>A new client has registered for Moneybird access through your website:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Preferred Language:</strong> ${languageText}</li>
      </ul>
      <p>Please log in to your Moneybird account and send them an invitation manually.</p>
      <p>Steps to invite a client in Moneybird:</p>
      <ol>
        <li>Log in to your Moneybird account</li>
        <li>Go to your Administration Office</li>
        <li>Click "Invite new administration"</li>
        <li>Enter the client's information</li>
        <li>Send the invitation</li>
      </ol>
    `;
    
    const emailText = `
      New Client Registration
      
      A new client has registered for Moneybird access through your website:
      
      Name: ${name}
      Email: ${email}
      Preferred Language: ${languageText}
      
      Please log in to your Moneybird account and send them an invitation manually.
      
      Steps to invite a client in Moneybird:
      1. Log in to your Moneybird account
      2. Go to your Administration Office
      3. Click "Invite new administration"
      4. Enter the client's information
      5. Send the invitation
    `;
    
    // Prepare Mailtrap API request
    const mailtrapToken = process.env.MAILTRAP_API_TOKEN || '61857f86ac57aadb3a143f10cb81d9ce';
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'your-email@example.com';
    const fromEmail = process.env.EMAIL_FROM || 'noreply@glodinasfinance.nl';
    
    const payload = {
      from: {
        email: fromEmail,
        name: "Glodinas Finance"
      },
      to: [
        {
          email: notificationEmail
        }
      ],
      subject: "New Moneybird Client Registration",
      html: emailHtml,
      text: emailText
    };
    
    // Send email using Mailtrap API
    console.log('Sending email notification via Mailtrap API for new client registration');
    const response = await fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${mailtrapToken}`
      },
      body: JSON.stringify(payload)
    });
    
    // Check if the API request was successful
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Mailtrap API error:', errorData);
      throw new Error(`Mailtrap API error: ${response.status} ${response.statusText}`);
    }
    
    const responseData = await response.json();
    console.log('Email notification sent successfully via Mailtrap API', responseData);
    
    // Return success response
    return NextResponse.json({
      message: 'Client information submitted successfully',
    });
    
  } catch (error) {
    console.error('Error processing client information:', error);
    
    // Provide more specific error message based on the error type
    let errorMessage = 'Internal server error';
    if (error instanceof Error) {
      errorMessage = `Error: ${error.message}`;
    }
    
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}
