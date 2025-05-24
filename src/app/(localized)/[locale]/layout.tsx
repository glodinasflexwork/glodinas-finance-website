import React from 'react';
import {NextIntlGettingStartedProvider} from '@/i18n/next-intl/provider';
import {locales} from '@/i18n/next-intl/navigation';

// Define the layout component for the localized Getting Started page
export default function LocalizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
}
