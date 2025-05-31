import { NextResponse } from 'next/server';

export async function GET() {
  const MONEYBIRD_CLIENT_ID = process.env.MONEYBIRD_CLIENT_ID;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_BASE_URL + '/api/moneybird/callback';
  
  // Generate a random state parameter to prevent CSRF attacks
  const state = Math.random().toString(36).substring(2, 15);
  
  // Store state in a cookie for verification when callback is received
  const response = NextResponse.redirect(
    `https://moneybird.com/oauth/authorize?client_id=${MONEYBIRD_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&state=${state}`
  );
  
  response.cookies.set('moneybird_oauth_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 10, // 10 minutes
    path: '/',
  });
  
  return response;
}
