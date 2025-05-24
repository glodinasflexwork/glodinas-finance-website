'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// SEO component for language-specific metadata
const SEO = ({ locale }: { locale: string }) => {
  const t = useTranslations('about');
  const baseUrl = 'https://glodinas-finance.com';
  const currentUrl = `${baseUrl}/${locale}/about`;
  
  const locales = ['en', 'nl', 'ro', 'tr', 'ru'];
  const localizedPaths = {
    en: 'about',
    nl: 'over-ons',
    ro: 'despre-noi',
    tr: 'hakkimizda',
    ru: 'o-nas'
  };
  
  return (
    <Head>
      <title>{t('hero.title')} | Glodinas Finance</title>
      <meta name="description" content={t('hero.subtitle')} />
      <meta property="og:title" content={`${t('hero.title')} | Glodinas Finance`} />
      <meta property="og:description" content={t('hero.subtitle')} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseUrl}/images/about-og-image-${locale}.jpg`} />
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
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en/about`} />
    </Head>
  );
};

const AboutPage = () => {
  const t = useTranslations('about');
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
      
      {/* Company Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('company.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4">{t('company.paragraph1')}</p>
                <p className="text-gray-700 mb-4">{t('company.paragraph2')}</p>
                <p className="text-gray-700">{t('company.paragraph3')}</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/office.jpg" 
                  alt={t('company.imageAlt')}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('team.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('team.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/images/team/cihat-kaya.jpg" 
                alt={t('team.member1.imageAlt')}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{t('team.member1.name')}</h3>
                <p className="text-blue-600 mb-4">{t('team.member1.role')}</p>
                <p className="text-gray-600 mb-4">{t('team.member1.bio')}</p>
                <a 
                  href="https://linkedin.com/in/cihat-kaya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  {t('team.linkedinProfile')}
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/images/team/gabriel-stan.jpg" 
                alt={t('team.member2.imageAlt')}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{t('team.member2.name')}</h3>
                <p className="text-blue-600 mb-4">{t('team.member2.role')}</p>
                <p className="text-gray-600 mb-4">{t('team.member2.bio')}</p>
                <a 
                  href="https://linkedin.com/in/gabriel-stan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  {t('team.linkedinProfile')}
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/images/team/ana-dogotari.jpg" 
                alt={t('team.member3.imageAlt')}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{t('team.member3.name')}</h3>
                <p className="text-blue-600 mb-4">{t('team.member3.role')}</p>
                <p className="text-gray-600 mb-4">{t('team.member3.bio')}</p>
                <a 
                  href="https://linkedin.com/in/ana-dogotari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  {t('team.linkedinProfile')}
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('cta.subtitle')}</p>
          <Link 
            href={`/${locale}/contact`}
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition duration-300"
          >
            {t('cta.buttonText')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
