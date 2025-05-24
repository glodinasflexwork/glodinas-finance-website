import React from 'react';
import { LocalizedHeader } from '../components/LocalizedHeader';
import { LocalizedFooter } from '../components/LocalizedFooter';
import { NextIntlClientProvider } from 'next-intl';

// Layout component for localized pages
export default function LocalizedLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <LocalizedHeader />
      <main className="flex-grow">
        {children}
      </main>
      <LocalizedFooter />
    </div>
  );
}
