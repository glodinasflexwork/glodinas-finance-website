'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

// Create a context for Footer translations
interface FooterTranslationsContextType {
  t: (key: string, defaultValue?: string) => string;
}

const FooterTranslationsContext = createContext<FooterTranslationsContextType | null>(null);

// Provider component
export const FooterTranslationProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const { t, i18n } = useTranslation();
  
  // Enhanced translation function with fallbacks
  const safeTranslate = (key: string, defaultValue?: string): string => {
    try {
      // First try to get the translation
      const translation = t(key);
      
      // If the translation is the same as the key, it means it wasn't found
      // In that case, return the default value if provided
      if (translation === key && defaultValue) {
        return defaultValue;
      }
      
      return translation;
    } catch (error) {
      console.error(`Error translating key: ${key}`, error);
      return defaultValue || key;
    }
  };
  
  const value = {
    t: safeTranslate
  };
  
  return (
    <FooterTranslationsContext.Provider value={value}>
      {children}
    </FooterTranslationsContext.Provider>
  );
};

// Custom hook to use the Footer translations
export const useFooterTranslations = () => {
  const context = useContext(FooterTranslationsContext);
  if (!context) {
    throw new Error('useFooterTranslations must be used within a FooterTranslationProvider');
  }
  return context;
};
