'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const t = useTranslations('privacy');
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

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-500 mb-8">{t('lastUpdated')}</p>
            
            <h2>{t('sections.introduction.title')}</h2>
            <p>{t('sections.introduction.content')}</p>
            
            <h2>{t('sections.information.title')}</h2>
            <p>{t('sections.information.content')}</p>
            <ul>
              {t.rich('sections.information.items', {
                li: (chunks) => <li>{chunks}</li>
              })}
            </ul>
            
            <h2>{t('sections.usage.title')}</h2>
            <p>{t('sections.usage.content')}</p>
            <ul>
              {t.rich('sections.usage.items', {
                li: (chunks) => <li>{chunks}</li>
              })}
            </ul>
            
            <h2>{t('sections.cookies.title')}</h2>
            <p>{t('sections.cookies.content1')}</p>
            <p>{t('sections.cookies.content2')}</p>
            
            <h2>{t('sections.thirdParty.title')}</h2>
            <p>{t('sections.thirdParty.content')}</p>
            
            <h2>{t('sections.security.title')}</h2>
            <p>{t('sections.security.content')}</p>
            
            <h2>{t('sections.dataRetention.title')}</h2>
            <p>{t('sections.dataRetention.content')}</p>
            
            <h2>{t('sections.rights.title')}</h2>
            <p>{t('sections.rights.content')}</p>
            <ul>
              {t.rich('sections.rights.items', {
                li: (chunks) => <li>{chunks}</li>
              })}
            </ul>
            
            <h2>{t('sections.children.title')}</h2>
            <p>{t('sections.children.content')}</p>
            
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
