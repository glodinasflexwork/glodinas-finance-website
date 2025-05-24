// Define the locales supported by the application
export const locales = ['en', 'nl', 'ro', 'tr', 'ru'];
export const defaultLocale = 'nl';

// Define the pathnames mapping for the Getting Started page
export const pathnames = {
  // Only include the Getting Started page in the next-intl navigation
  '/getting-started': {
    en: '/getting-started',
    nl: '/aan-de-slag',
    ro: '/primii-pasi',
    tr: '/baslangic',
    ru: '/nachalo-raboty'
  }
};

// Helper function to get localized path
export function getLocalizedPath(path: string, locale: string): string {
  if (path in pathnames) {
    const localePaths = pathnames[path as keyof typeof pathnames];
    return localePaths[locale as keyof typeof localePaths] || path;
  }
  return path;
}
