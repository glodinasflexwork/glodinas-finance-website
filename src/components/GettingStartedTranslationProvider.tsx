'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

// Create a context for Getting Started page translations
interface GettingStartedTranslationsContextType {
  t: (key: string, options?: any) => string;
  getTranslatedArray: (key: string, defaultArray?: string[]) => string[];
  getFAQQuestions: () => Array<{question: string, answer: string}>;
}

const GettingStartedTranslationsContext = createContext<GettingStartedTranslationsContextType | null>(null);

// Provider component
export const GettingStartedTranslationProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const { t, i18n } = useTranslation();
  
  // Helper function to safely get arrays from translations
  const getTranslatedArray = (key: string, defaultArray: string[] = []) => {
    try {
      const result = t(key, { returnObjects: true });
      return Array.isArray(result) ? result : defaultArray;
    } catch (error) {
      console.error(`Error getting translation array for key: ${key}`, error);
      return defaultArray;
    }
  };
  
  // Helper function to safely get FAQ questions
  const getFAQQuestions = () => {
    try {
      const result = t('gettingStarted.faq.questions', { returnObjects: true });
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error('Error getting FAQ questions', error);
      return [];
    }
  };
  
  const value = {
    t,
    getTranslatedArray,
    getFAQQuestions
  };
  
  return (
    <GettingStartedTranslationsContext.Provider value={value}>
      {children}
    </GettingStartedTranslationsContext.Provider>
  );
};

// Custom hook to use the Getting Started translations
export const useGettingStartedTranslations = () => {
  const context = useContext(GettingStartedTranslationsContext);
  if (!context) {
    throw new Error('useGettingStartedTranslations must be used within a GettingStartedTranslationProvider');
  }
  return context;
};
