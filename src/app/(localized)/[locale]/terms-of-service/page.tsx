'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function TermsOfService() {
  const t = useTranslations('terms');
  const params = useParams();
  const locale = params.locale as string;
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-500 mb-8">{t('lastUpdated')}</p>
            
            <h2>{t('sections.introduction.title')}</h2>
            <p>{t('sections.introduction.content')}</p>
            
            <h2>{t('sections.services.title')}</h2>
            <p>{t('sections.services.content1')}</p>
            <p>{t('sections.services.content2')}</p>
            
            <h2>{t('sections.fees.title')}</h2>
            <p>{t('sections.fees.content1')}</p>
            <p>{t('sections.fees.content2')}</p>
            
            <h2>{t('sections.intellectual.title')}</h2>
            <p>{t('sections.intellectual.content1')}</p>
            <p>{t('sections.intellectual.content2')}</p>
            
            <h2>{t('sections.userContent.title')}</h2>
            <p>{t('sections.userContent.content1')}</p>
            <p>{t('sections.userContent.content2')}</p>
            
            <h2>{t('sections.privacy.title')}</h2>
            <p>{t('sections.privacy.content')}</p>
            <p>
              <Link href={`/${locale}/privacy-policy`} className="text-blue-600 hover:text-blue-800">
                {t('sections.privacy.link')}
              </Link>
            </p>
            
            <h2>{t('sections.termination.title')}</h2>
            <p>{t('sections.termination.content1')}</p>
            <p>{t('sections.termination.content2')}</p>
            
            <h2>{t('sections.disclaimer.title')}</h2>
            <p>{t('sections.disclaimer.content1')}</p>
            <p>{t('sections.disclaimer.content2')}</p>
            
            <h2>{t('sections.limitation.title')}</h2>
            <p>{t('sections.limitation.content1')}</p>
            <p>{t('sections.limitation.content2')}</p>
            
            <h2>{t('sections.governing.title')}</h2>
            <p>{t('sections.governing.content')}</p>
            
            <h2>{t('sections.changes.title')}</h2>
            <p>{t('sections.changes.content')}</p>
            
            <h2>{t('sections.contact.title')}</h2>
            <p>{t('sections.contact.content')}</p>
            <p>
              <Link href={`/${locale}/contact`} className="text-blue-600 hover:text-blue-800">
                {t('sections.contact.link')}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
