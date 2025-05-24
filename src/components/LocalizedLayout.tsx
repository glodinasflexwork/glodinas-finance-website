'use client';

import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface LocalizedLayoutProps {
  children: ReactNode;
  layouts: {
    [locale: string]: React.ComponentType<{children: ReactNode}>;
  };
  fallback?: React.ComponentType<{children: ReactNode}>;
}

/**
 * A component that renders different layouts based on the current language
 * 
 * Usage:
 * <LocalizedLayout
 *   layouts={{
 *     nl: DutchHomeLayout,
 *     en: EnglishHomeLayout,
 *   }}
 *   fallback={DefaultHomeLayout}
 * >
 *   <h1>Page Content</h1>
 * </LocalizedLayout>
 */
export default function LocalizedLayout({ 
  children, 
  layouts, 
  fallback: FallbackLayout 
}: LocalizedLayoutProps) {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  
  // Get the layout for the current locale, or fallback
  const Layout = layouts[locale] || FallbackLayout || (({ children }) => <>{children}</>);
  
  return <Layout>{children}</Layout>;
}
