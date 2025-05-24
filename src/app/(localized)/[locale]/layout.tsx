import {NextIntlGettingStartedProvider} from '@/i18n/next-intl/provider';
import {locales} from '@/i18n/next-intl/navigation';

// Define the layout component for the localized Getting Started page
export default function LocalizedLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Validate that the locale is supported
  if (!locales.includes(locale)) {
    // Default to English for unsupported locales
    locale = 'en';
  }

  return (
    <NextIntlGettingStartedProvider locale={locale}>
      {children}
    </NextIntlGettingStartedProvider>
  );
}
