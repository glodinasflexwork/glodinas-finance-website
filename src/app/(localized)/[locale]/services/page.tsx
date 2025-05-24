'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// SEO component for language-specific metadata
const SEO = ({ locale }: { locale: string }) => {
  const t = useTranslations('services');
  const baseUrl = 'https://glodinas-finance.com';
  const currentUrl = `${baseUrl}/${locale}/services`;
  
  const locales = ['en', 'nl', 'ro', 'tr', 'ru'];
  const localizedPaths = {
    en: 'services',
    nl: 'diensten',
    ro: 'servicii',
    tr: 'hizmetler',
    ru: 'uslugi'
  };
  
  return (
    <Head>
      <title>{t('hero.title')} | Glodinas Finance</title>
      <meta name="description" content={t('hero.subtitle')} />
      <meta property="og:title" content={`${t('hero.title')} | Glodinas Finance`} />
      <meta property="og:description" content={t('hero.subtitle')} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseUrl}/images/services-og-image-${locale}.jpg`} />
      <link rel="canonical" href={currentUrl} />
      
      {/* hreflang tags for language targeting */}
      {locales.map((lang) => (
        <link 
          key={lang}
          rel="alternate" 
          hrefLang={lang} 
          href={`${baseUrl}/${lang}/${localizedPaths[lang as keyof typeof localizedPaths]}`} 
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en/services`} />
    </Head>
  );
};

const ServicesPage = () => {
  const t = useTranslations('services');
  const params = useParams();
  const locale = params.locale as string;
  
  return (
    <div className="min-h-screen">
      <SEO locale={locale} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl mb-8">{t('hero.subtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Bookkeeping ZZP Section */}
      <section id="bookkeeping-zzp" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{t('bookkeepingZZP.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4">{t('bookkeepingZZP.description1')}</p>
                <p className="text-gray-700 mb-6">{t('bookkeepingZZP.description2')}</p>
                <h3 className="text-xl font-semibold mb-4">{t('bookkeepingZZP.included')}</h3>
                <ul className="space-y-2">
                  {Array.isArray(t.raw('bookkeepingZZP.items')) && t.raw('bookkeepingZZP.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link 
                    href={`/${locale}/contact?service=bookkeeping-zzp`}
                    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300"
                  >
                    {t('bookkeepingZZP.requestQuote')}
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/services/bookkeeping-zzp.jpg" 
                  alt={t('bookkeepingZZP.title')}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bookkeeping BV Section */}
      <section id="bookkeeping-bv" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{t('bookkeepingBV.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/services/bookkeeping-bv.jpg" 
                  alt={t('bookkeepingBV.title')}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-gray-700 mb-4">{t('bookkeepingBV.description1')}</p>
                <p className="text-gray-700 mb-6">{t('bookkeepingBV.description2')}</p>
                <h3 className="text-xl font-semibold mb-4">{t('bookkeepingBV.included')}</h3>
                <ul className="space-y-2">
                  {Array.isArray(t.raw('bookkeepingBV.items')) && t.raw('bookkeepingBV.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link 
                    href={`/${locale}/contact?service=bookkeeping-bv`}
                    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300"
                  >
                    {t('bookkeepingBV.requestQuote')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('pricing.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('pricing.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* ZZP Package */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{t('pricing.zzpPackage.title')}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">{t('pricing.zzpPackage.price')}</span>
                <span className="text-gray-500">{t('pricing.zzpPackage.period')}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {Array.isArray(t.raw('pricing.zzpPackage.features')) && t.raw('pricing.zzpPackage.features').map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={`/${locale}/contact?service=zzp-package`}
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 text-center"
              >
                {t('pricing.zzpPackage.getStarted')}
              </Link>
            </div>
            
            {/* BV Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500 flex flex-col relative transform scale-105 z-10">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                {t('pricing.popular')}
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('pricing.bvPackage.title')}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">{t('pricing.bvPackage.price')}</span>
                <span className="text-gray-500">{t('pricing.bvPackage.period')}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {Array.isArray(t.raw('pricing.bvPackage.features')) && t.raw('pricing.bvPackage.features').map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={`/${locale}/contact?service=bv-package`}
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition duration-300 text-center"
              >
                {t('pricing.bvPackage.getStarted')}
              </Link>
            </div>
            
            {/* Custom Package */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{t('pricing.customPackage.title')}</h3>
              <p className="text-gray-600 mb-6">{t('pricing.customPackage.description')}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {Array.isArray(t.raw('pricing.customPackage.features')) && t.raw('pricing.customPackage.features').map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href={`/${locale}/contact?service=custom-package`}
                className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-6 py-3 rounded-md font-medium transition duration-300 text-center"
              >
                {t('pricing.customPackage.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
