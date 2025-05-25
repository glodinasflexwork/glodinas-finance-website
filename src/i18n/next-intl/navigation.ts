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
  },
  '/blog': {
    en: '/blog',
    nl: '/blog',
    ro: '/blog',
    tr: '/blog',
    ru: '/blog'
  },
  '/terms-of-service': {
    en: '/terms-of-service',
    nl: '/voorwaarden',
    ro: '/termeni-si-conditii',
    tr: '/hizmet-sartlari',
    ru: '/usloviya-obsluzhivaniya'
  },
  '/privacy-policy': {
    en: '/privacy-policy',
    nl: '/privacybeleid',
    ro: '/politica-de-confidentialitate',
    tr: '/gizlilik-politikasi',
    ru: '/politika-konfidentsialnosti'
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
  
  // For blog posts, maintain the slug but use localized blog path
  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    return `/${locale}/blog/${slug}`;
  }
  
  return path;
}
