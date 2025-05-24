import {createMiddleware} from 'next-intl/middleware';
import {locales, defaultLocale} from './src/i18n/next-intl/navigation';

// Create middleware for language detection and routing
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  
  // Used when no locale matches
  defaultLocale,
  
  // This function is called when a user visits a page without a locale prefix
  localePrefix: 'always',
  
  // Detect locale from cookies, headers, or query parameters
  localeDetection: true
});

// Configure the middleware to only apply to the Getting Started page
export const config = {
  // Match only the Getting Started page and its localized variants
  matcher: [
    // Match all paths that start with one of the supported locales
    '/(nl|en|ro|tr|ru)/getting-started',
    '/(nl|en|ro|tr|ru)/aan-de-slag',
    '/(nl|en|ro|tr|ru)/primii-pasi',
    '/(nl|en|ro|tr|ru)/baslangic',
    '/(nl|en|ro|tr|ru)/nachalo-raboty',
    
    // Also match the default paths without locale prefix
    '/getting-started',
    '/aan-de-slag',
    '/primii-pasi',
    '/baslangic',
    '/nachalo-raboty',
    
    // Skip all paths that should not be internationalized
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
