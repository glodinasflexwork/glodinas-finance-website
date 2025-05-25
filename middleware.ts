// Simple middleware for Next.js
export default function middleware() {
  // No internationalization logic needed for English-only site
  return;
}

// Configure middleware matcher to apply to all pages
export const config = {
  // Match all routes except API routes and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
