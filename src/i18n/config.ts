'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationEN from './locales/en/translation.json';
import translationNL from './locales/nl/translation.json';
import translationRO from './locales/ro/translation.json';
import translationTR from './locales/tr/translation.json';
import translationRU from './locales/ru/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  nl: {
    translation: translationNL
  },
  ro: {
    translation: translationRO
  },
  tr: {
    translation: translationTR
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'nl', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
