import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    
    // Format language for better readability
    const languageText = language === 'nl' ? 'Dutch' : 'English';
    
    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
      subject: 'New Moneybird Client Registration',
      html: `
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
      `,
      text: `
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
      `,
    };
    
    // Send email
    console.log('Sending email notification for new client registration');
    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully');
    
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
