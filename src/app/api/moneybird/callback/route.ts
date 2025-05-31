import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');
  
  // Get the state from cookie for verification
  const storedState = request.cookies.get('moneybird_oauth_state')?.value;
  
  // Check if there was an error or state doesn't match
  if (error) {
    return NextResponse.redirect(
      new URL(`/getting-started?error=${error}`, process.env.NEXT_PUBLIC_BASE_URL)
    );
  }
  
  if (!state || state !== storedState) {
    return NextResponse.redirect(
      new URL('/getting-started?error=invalid_state', process.env.NEXT_PUBLIC_BASE_URL)
    );
  }
  
  if (!code) {
    return NextResponse.redirect(
      new URL('/getting-started?error=missing_code', process.env.NEXT_PUBLIC_BASE_URL)
    );
  }
  
  try {
    // Exchange the authorization code for an access token
    const MONEYBIRD_CLIENT_ID = process.env.MONEYBIRD_CLIENT_ID;
    const MONEYBIRD_CLIENT_SECRET = process.env.MONEYBIRD_CLIENT_SECRET;
    const REDIRECT_URI = process.env.NEXT_PUBLIC_BASE_URL + '/api/moneybird/callback';
    
    const tokenResponse = await fetch('https://moneybird.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: MONEYBIRD_CLIENT_ID,
        client_secret: MONEYBIRD_CLIENT_SECRET,
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
    });
    
    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for token');
    }
    
    const tokenData = await tokenResponse.json();
    
    // Store the tokens securely (in this example, in cookies)
    // In production, you might want to use a more secure storage method
    const response = NextResponse.redirect(
      new URL('/getting-started?auth=success', process.env.NEXT_PUBLIC_BASE_URL)
    );
    
    response.cookies.set('moneybird_access_token', tokenData.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: tokenData.expires_in,
      path: '/',
    });
    
    if (tokenData.refresh_token) {
      response.cookies.set('moneybird_refresh_token', tokenData.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });
    }
    
    return response;
  } catch (error) {
    console.error('OAuth callback error:', error);
    return NextResponse.redirect(
      new URL('/getting-started?error=token_exchange_failed', process.env.NEXT_PUBLIC_BASE_URL)
    );
  }
}
