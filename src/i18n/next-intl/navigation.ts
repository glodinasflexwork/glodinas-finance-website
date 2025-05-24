import { createPathnameDictionary } from 'next-intl/navigation';

// Define the locales supported by the application
export const locales = ['en', 'nl', 'ro', 'tr', 'ru'] as const;
export type Locale = (typeof locales)[number];

// Define the default locale
export const defaultLocale: Locale = 'en';

// Define the localized pathnames for each route
export const pathnames = {
  '/': {
    en: '/',
    nl: '/',
    ro: '/',
    tr: '/',
    ru: '/'
  },
  '/about': {
    en: '/about',
    nl: '/over-ons',
    ro: '/despre-noi',
    tr: '/hakkimizda',
    ru: '/o-nas'
  },
  '/services': {
    en: '/services',
    nl: '/diensten',
    ro: '/servicii',
    tr: '/hizmetler',
    ru: '/uslugi'
  },
  '/contact': {
    en: '/contact',
    nl: '/contact',
    ro: '/contact',
    tr: '/iletisim',
    ru: '/kontakt'
  },
  '/getting-started': {
    en: '/getting-started',
    nl: '/aan-de-slag',
    ro: '/primii-pasi',
    tr: '/baslangic',
    ru: '/nachalo-raboty'
  }
};

// Helper function to get localized path
export function getLocalizedPath(path: string, locale: string) {
  if (path === '/') {
    return '/';
  }
  
  const pathKey = Object.keys(pathnames).find(key => key === path);
  if (pathKey && pathnames[pathKey as keyof typeof pathnames][locale as Locale]) {
    return pathnames[pathKey as keyof typeof pathnames][locale as Locale];
  }
  
  return path;
}

// Create navigation utilities using available APIs
export const pathnamesDictionary = createPathnameDictionary(pathnames);
