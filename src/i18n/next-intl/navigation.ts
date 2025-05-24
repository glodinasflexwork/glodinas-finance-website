import {createSharedPathnamesNavigation} from 'next-intl/navigation';

// Define the locales supported by the application
export const locales = ['en', 'nl', 'ro', 'tr', 'ru'];
export const defaultLocale = 'nl';

// Create the navigation utilities for the Getting Started page only
export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation({
  locales,
  pathnames: {
    // Only include the Getting Started page in the next-intl navigation
    '/getting-started': {
      en: '/getting-started',
      nl: '/aan-de-slag',
      ro: '/primii-pasi',
      tr: '/baslangic',
      ru: '/nachalo-raboty'
    }
  }
});
