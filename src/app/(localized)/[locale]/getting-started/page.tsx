'use client';

import React from 'react';
import {useLocale, useTranslations} from 'next-intl';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';
import Head from 'next/head';

// Create a layout component for the Getting Started page with language-specific layouts
const GettingStartedPage = () => {
  // Use next-intl hooks for translations and locale
  const t = useTranslations('GettingStarted');
  const locale = useLocale();
  
  // Define language-specific layout variations
  const getLayoutVariation = () => {
    switch(locale) {
      case 'nl':
        return {
          heroClass: 'bg-blue-100 py-20', // Dutch version has a different hero background and padding
          processColumns: 'grid-cols-1 md:grid-cols-3', // Default 3-column layout
          expectationsColumns: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4', // Default 4-column layout
          ctaClass: 'bg-blue-700 text-white', // Dutch version has a darker CTA background
          title: 'Aan de Slag met Glodinas Finance | Boekhouding voor ZZP en BV',
          description: 'Volg ons eenvoudige driestappenproces om uw boekhouding op te zetten en soepel te laten verlopen met Glodinas Finance.'
        };
      case 'ro':
        return {
          heroClass: 'bg-blue-50 py-16', // Default hero style
          processColumns: 'grid-cols-1 md:grid-cols-1 lg:grid-cols-3', // Romanian version stacks process steps on medium screens
          expectationsColumns: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4', // Default 4-column layout
          ctaClass: 'bg-blue-600 text-white', // Default CTA style
          title: 'Primii Pași cu Glodinas Finance | Contabilitate pentru Antreprenori',
          description: 'Urmați procesul nostru simplu în trei pași pentru a configura și gestiona contabilitatea dumneavoastră fără probleme.'
        };
      case 'tr':
        return {
          heroClass: 'bg-blue-50 py-16', // Default hero style
          processColumns: 'grid-cols-1 md:grid-cols-3', // Default 3-column layout
          expectationsColumns: 'grid-cols-1 lg:grid-cols-4', // Turkish version stacks expectations on medium screens
          ctaClass: 'bg-blue-600 text-white', // Default CTA style
          title: 'Glodinas Finance ile Başlangıç | Girişimciler için Muhasebe',
          description: 'Muhasebenizi kurmak ve sorunsuz çalıştırmak için basit üç adımlı sürecimizi izleyin.'
        };
      case 'ru':
        return {
          heroClass: 'bg-blue-50 py-16', // Default hero style
          processColumns: 'grid-cols-1 md:grid-cols-3', // Default 3-column layout
          expectationsColumns: 'grid-cols-1 md:grid-cols-4', // Russian version has 4 columns even on medium screens
          ctaClass: 'bg-blue-800 text-white', // Russian version has a darker CTA background
          title: 'Начало Работы с Glodinas Finance | Бухгалтерия для Предпринимателей',
          description: 'Следуйте нашему простому трехэтапному процессу, чтобы настроить и обеспечить бесперебойную работу вашего бухгалтерского учета.'
        };
      default: // 'en' and fallback
        return {
          heroClass: 'bg-blue-50 py-16', // Default hero style
          processColumns: 'grid-cols-1 md:grid-cols-3', // Default 3-column layout
          expectationsColumns: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4', // Default 4-column layout
          ctaClass: 'bg-blue-600 text-white', // Default CTA style
          title: 'Getting Started with Glodinas Finance | Bookkeeping for Entrepreneurs',
          description: 'Follow our simple three-step process to get your bookkeeping set up and running smoothly with Glodinas Finance.'
        };
    }
  };
  
  const layout = getLayoutVariation();
  
  // Helper function to safely render array items
  const renderItems = (key: string) => {
    try {
      const items = t(key);
      if (typeof items === 'string') {
        return [items];
      }
      return Array.isArray(items) ? items : [];
    } catch (error) {
      console.error(`Error rendering items for key ${key}:`, error);
      return [];
    }
  };
  
  // Helper function to safely render FAQ items
  const renderFaqItems = (key: string) => {
    try {
      const items = t(key);
      if (typeof items === 'string') {
        return [{question: items, answer: ''}];
      }
      return Array.isArray(items) ? items : [];
    } catch (error) {
      console.error(`Error rendering FAQ items for key ${key}:`, error);
      return [];
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Metadata */}
      <Head>
        <title>{layout.title}</title>
        <meta name="description" content={layout.description} />
        <meta property="og:title" content={layout.title} />
        <meta property="og:description" content={layout.description} />
        <meta property="og:url" content={`https://www.glodinasfinance.nl/${locale}/getting-started`} />
        <meta property="og:site_name" content="Glodinas Finance" />
        <meta property="og:locale" content={locale} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://www.glodinasfinance.nl/${locale}/getting-started`} />
        {/* Language alternates */}
        <link rel="alternate" hrefLang="en" href="https://www.glodinasfinance.nl/en/getting-started" />
        <link rel="alternate" hrefLang="nl" href="https://www.glodinasfinance.nl/nl/aan-de-slag" />
        <link rel="alternate" hrefLang="ro" href="https://www.glodinasfinance.nl/ro/primii-pasi" />
        <link rel="alternate" hrefLang="tr" href="https://www.glodinasfinance.nl/tr/baslangic" />
        <link rel="alternate" hrefLang="ru" href="https://www.glodinasfinance.nl/ru/nachalo-raboty" />
      </Head>
      
      {/* Hero Section */}
      <div className={layout.heroClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('hero.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('hero.subtitle')}</p>
          
          {/* Language-specific hero image */}
          <div className="mt-8 flex justify-center">
            <PlaceholderImage 
              width={800}
              height={400}
              text={`${t('hero.title')} - Hero Image`}
              locale={locale}
            />
          </div>
        </div>
      </div>
      
      {/* Process Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('process.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('process.subtitle')}</p>
          </div>
          
          <div className={`${layout.processColumns} gap-8`}>
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">{t('process.step1.title')}</h3>
                <p className="text-gray-600 mb-4">{t('process.step1.description')}</p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  {renderItems('process.step1.items').map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://moneybird.com/" target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center transition duration-150">
                  {t('process.step1.button')}
                </a>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">{t('process.step2.title')}</h3>
                <p className="text-gray-600 mb-4">{t('process.step2.description')}</p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  {renderItems('process.step2.items').map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={`/${locale}/contact`} className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center transition duration-150">
                  {t('process.step2.button')}
                </Link>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">{t('process.step3.title')}</h3>
                <p className="text-gray-600 mb-4">{t('process.step3.description')}</p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  {renderItems('process.step3.items').map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-4">
                  <Link href={`/${locale}/services`} className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center transition duration-150">
                    {t('process.step3.button1')}
                  </Link>
                  <Link href={`/${locale}/services#personal-loans`} className="block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2 px-4 rounded text-center transition duration-150">
                    {t('process.step3.button2')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Expectations Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('expectations.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('expectations.subtitle')}</p>
          </div>
          
          <div className={`${layout.expectationsColumns} gap-8`}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('expectations.item1.title')}</h3>
              <p className="text-gray-600">{t('expectations.item1.description')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('expectations.item2.title')}</h3>
              <p className="text-gray-600">{t('expectations.item2.description')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('expectations.item3.title')}</h3>
              <p className="text-gray-600">{t('expectations.item3.description')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('expectations.item4.title')}</h3>
              <p className="text-gray-600">{t('expectations.item4.description')}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('faq.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('faq.subtitle')}</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {renderFaqItems('faq.items').map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className={`py-16 ${layout.ctaClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">{t('cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${locale}/contact`} className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-center transition duration-150">
              {t('cta.button1')}
            </Link>
            <Link href={`/${locale}/services`} className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-bold py-3 px-6 rounded-lg text-center transition duration-150">
              {t('cta.button2')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedPage;
