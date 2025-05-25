import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/i18n/next-intl/navigation';

// Create middleware for language detection and routing
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // The default locale to use when visiting a non-localized route
  defaultLocale,
  // Apply to all pages on the site
  localePrefix: 'always'
});

// Configure middleware matcher to apply to all pages
export const config = {
  // Match all routes that start with a locale prefix
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
