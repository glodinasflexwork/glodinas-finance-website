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
    
    // Get access token from cookie
    const accessToken = request.cookies.get('moneybird_access_token')?.value;
    
    if (!accessToken) {
      return NextResponse.json(
        { message: 'Not authenticated with Moneybird' },
        { status: 401 }
      );
    }
    
    // Get the administration ID
    // First, we need to get a list of administrations the user has access to
    console.log('Fetching Moneybird administrations...');
    const adminResponse = await fetch('https://moneybird.com/api/v2/administrations', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    
    console.log('Administration response status:', adminResponse.status);
    
    if (!adminResponse.ok) {
      if (adminResponse.status === 401) {
        // Token expired, should implement token refresh here
        return NextResponse.json(
          { message: 'Authentication expired, please reconnect with Moneybird' },
          { status: 401 }
        );
      }
      
      // Try to get error details
      let errorText = '';
      try {
        errorText = await adminResponse.text();
        console.error('Administration fetch error response:', errorText);
      } catch (e) {
        console.error('Could not read administration error response');
      }
      
      return NextResponse.json(
        { message: `Failed to fetch administrations: ${adminResponse.status} ${adminResponse.statusText}`, details: errorText },
        { status: adminResponse.status }
      );
    }
    
    // Safely parse the JSON response
    let administrations;
    try {
      const contentType = adminResponse.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('Unexpected content type from administrations endpoint:', contentType);
        const responseText = await adminResponse.text();
        console.error('Administration response body:', responseText);
        return NextResponse.json(
          { message: 'Moneybird returned an unexpected response format' },
          { status: 500 }
        );
      }
      
      administrations = await adminResponse.json();
      console.log('Administrations found:', administrations.length);
    } catch (error) {
      console.error('Error parsing administrations JSON:', error);
      return NextResponse.json(
        { message: 'Failed to parse Moneybird response' },
        { status: 500 }
      );
    }
    
    if (!administrations || administrations.length === 0) {
      return NextResponse.json(
        { message: 'No administrations found. Please ensure you have access to at least one Moneybird administration.' },
        { status: 404 }
      );
    }
    
    // Use the first administration (you might want to let the user choose or use a specific one)
    const administrationId = administrations[0].id;
    console.log('Using administration ID:', administrationId);
    
    // Send invitation using the Moneybird API
    console.log('Sending invitation to Moneybird for:', email);
    const inviteResponse = await fetch(
      `https://moneybird.com/api/v2/${administrationId}/user_invites`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_invite: {
            email: email,
            name: name,
            language: language,
            role: 'client' // Adjust based on Moneybird's available roles
          }
        }),
      }
    );
    
    console.log('Invitation response status:', inviteResponse.status);
    
    if (!inviteResponse.ok) {
      // Safely handle error response which might not be JSON
      let errorData = '';
      try {
        const contentType = inviteResponse.headers.get('content-type');
        console.log('Error response content type:', contentType);
        
        if (contentType && contentType.includes('application/json')) {
          errorData = await inviteResponse.json();
          console.error('Moneybird API error (JSON):', JSON.stringify(errorData));
        } else {
          errorData = await inviteResponse.text();
          console.error('Moneybird API error (text):', errorData);
        }
      } catch (error) {
        console.error('Error reading invitation error response:', error);
        errorData = 'Could not read error details';
      }
      
      return NextResponse.json(
        { 
          message: 'Failed to send invitation through Moneybird', 
          status: inviteResponse.status,
          details: typeof errorData === 'string' ? errorData : JSON.stringify(errorData)
        },
        { status: inviteResponse.status }
      );
    }
    
    // Safely parse the success response
    let data;
    try {
      const contentType = inviteResponse.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.warn('Unexpected content type from invitation endpoint:', contentType);
        const responseText = await inviteResponse.text();
        console.log('Invitation success response (non-JSON):', responseText);
        
        // Even though it's not JSON, we'll treat it as a success if the status was OK
        return NextResponse.json({
          message: 'Invitation sent successfully',
          data: { rawResponse: responseText }
        });
      }
      
      data = await inviteResponse.json();
      console.log('Invitation sent successfully');
    } catch (error) {
      console.error('Error parsing invitation response JSON:', error);
      return NextResponse.json(
        { message: 'Invitation was sent but response could not be parsed' },
        { status: 207 } // Partial success
      );
    }
    
    // Return success response
    return NextResponse.json({
      message: 'Invitation sent successfully',
      data: data
    });
    
  } catch (error) {
    console.error('Error sending Moneybird invitation:', error);
    
    // Provide more specific error message based on the error type
    let errorMessage = 'Internal server error';
    if (error instanceof SyntaxError && error.message.includes('JSON')) {
      errorMessage = 'Invalid JSON response from Moneybird API';
    } else if (error instanceof Error) {
      errorMessage = `Error: ${error.message}`;
    }
    
    return NextResponse.json(
      { message: errorMessage, error: error instanceof Error ? error.stack : String(error) },
      { status: 500 }
    );
  }
}
