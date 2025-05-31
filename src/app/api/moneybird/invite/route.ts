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
    const adminResponse = await fetch('https://moneybird.com/api/v2/administrations', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    
    if (!adminResponse.ok) {
      if (adminResponse.status === 401) {
        // Token expired, should implement token refresh here
        return NextResponse.json(
          { message: 'Authentication expired, please reconnect with Moneybird' },
          { status: 401 }
        );
      }
      throw new Error('Failed to fetch administrations');
    }
    
    const administrations = await adminResponse.json();
    
    if (!administrations || administrations.length === 0) {
      return NextResponse.json(
        { message: 'No administrations found' },
        { status: 404 }
      );
    }
    
    // Use the first administration (you might want to let the user choose or use a specific one)
    const administrationId = administrations[0].id;
    
    // Send invitation using the Moneybird API
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
    
    if (!inviteResponse.ok) {
      const errorData = await inviteResponse.json();
      console.error('Moneybird API error:', errorData);
      return NextResponse.json(
        { message: 'Failed to send invitation through Moneybird' },
        { status: inviteResponse.status }
      );
    }
    
    const data = await inviteResponse.json();
    
    // Return success response
    return NextResponse.json({
      message: 'Invitation sent successfully',
      data: data
    });
    
  } catch (error) {
    console.error('Error sending Moneybird invitation:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
