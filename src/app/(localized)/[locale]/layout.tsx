'use client';

import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import LocalizedHeader from '../../../components/LocalizedHeader';
import LocalizedFooter from '../../../components/LocalizedFooter';
import { getMessages } from '@/i18n/next-intl/getMessages';

// Layout component for localized pages
export default async function LocalizedLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Get messages for the current locale
  const messages = await getMessages(locale);
  
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex flex-col min-h-screen">
        <LocalizedHeader />
        <main className="flex-grow">
          {children}
        </main>
        <LocalizedFooter />
      </div>
    </NextIntlClientProvider>
  );
}
