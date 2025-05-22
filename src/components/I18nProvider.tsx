'use client';

import { useTranslation } from 'react-i18next';
import '../i18n/config';
import { useEffect } from 'react';

const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();

  // Load saved language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return <>{children}</>;
};

export default I18nProvider;
