import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/i18n/next-intl/navigation';

// Create middleware for language detection and routing
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // The default locale to use when visiting a non-localized route
  defaultLocale,
  // Only apply to the Getting Started page as a proof of concept
  pathnames: {
    '/getting-started': {
      en: '/getting-started',
      nl: '/aan-de-slag',
      ro: '/primii-pasi',
      tr: '/baslangic',
      ru: '/nachalo-raboty'
    }
  }
});

// Configure middleware matcher to only apply to the Getting Started page
export const config = {
  // Match only the localized routes for the Getting Started page
  matcher: ['/(nl|en|ro|tr|ru)/getting-started', '/(nl|en|ro|tr|ru)/aan-de-slag', '/(nl|en|ro|tr|ru)/primii-pasi', '/(nl|en|ro|tr|ru)/baslangic', '/(nl|en|ro|tr|ru)/nachalo-raboty']
};
