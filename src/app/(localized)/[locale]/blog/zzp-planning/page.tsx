'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ZzpPlanningPost() {
  const t = useTranslations('blogPosts');
  const common = useTranslations('common');
  const params = useParams();
  const locale = params.locale as string;
  
  // Helper function to safely check if a translation exists
  const hasTranslation = (key: string) => {
    try {
      const value = t(key);
      return value && value !== '';
    } catch (e) {
      return false;
    }
  };
  
  // Access specific blog post translations directly with keys
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('zzp-planning.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('zzp-planning.date')}</p>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-blue max-w-none">
            <div className="mb-8">
              <Image 
                src={t('zzp-planning.image') || '/images/blog-placeholder.jpg'}
                alt={t('zzp-planning.imageAlt')}
                width={800}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
            
            <div className="text-sm text-gray-500 mb-6">{t('zzp-planning.meta')}</div>
            
            <p className="lead text-lg">{t('zzp-planning.intro')}</p>
            
            {/* Content sections */}
            <div className="mb-8">
              <h2>{t('zzp-planning.sections.section1.title')}</h2>
              <p>{t('zzp-planning.sections.section1.content')}</p>
              {hasTranslation('zzp-planning.sections.section1.items') && (
                <ul dangerouslySetInnerHTML={{ __html: t('zzp-planning.sections.section1.items') }} />
              )}
            </div>
            
            <div className="mb-8">
              <h2>{t('zzp-planning.sections.section2.title')}</h2>
              <p>{t('zzp-planning.sections.section2.content1')}</p>
              <p>{t('zzp-planning.sections.section2.content2')}</p>
            </div>
            
            <div className="mb-8">
              <h2>{t('zzp-planning.sections.section3.title')}</h2>
              <p>{t('zzp-planning.sections.section3.content')}</p>
              {hasTranslation('zzp-planning.sections.section3.items') && (
                <ul dangerouslySetInnerHTML={{ __html: t('zzp-planning.sections.section3.items') }} />
              )}
            </div>
            
            <div className="mb-8">
              <h2>{t('zzp-planning.sections.section4.title')}</h2>
              <p>{t('zzp-planning.sections.section4.content')}</p>
            </div>
            
            <p>{t('zzp-planning.conclusion')}</p>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{common('needHelp')}</h3>
              <p>{t('zzp-planning.cta')}</p>
              <div className="mt-4">
                <Link href={`/${locale}/contact`} className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300">
                  {common('contactUs')}
                </Link>
              </div>
            </div>
          </article>
          
          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link href={`/${locale}/blog`} className="text-blue-600 hover:text-blue-800 font-medium">
              &larr; {common('backToBlog')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{common('relatedPosts')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related posts */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('tax-deductions.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('tax-deductions.intro').substring(0, 100)}...
                </p>
                <Link href={`/${locale}/blog/tax-deductions`} className="text-blue-600 hover:text-blue-800 font-medium">
                  {common('readMore')} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
