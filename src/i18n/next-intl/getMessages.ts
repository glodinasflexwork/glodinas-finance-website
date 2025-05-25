import { pathnames } from './navigation';

// Define the locales supported by the application
export const locales = ['en', 'nl', 'ro', 'tr', 'ru'] as const;
export type Locale = (typeof locales)[number];

// Define the default locale
export const defaultLocale: Locale = 'en';

// Function to get messages for a specific locale
export async function getMessages(locale: string) {
  return (await import(`./messages/${locale}.json`)).default;
}
