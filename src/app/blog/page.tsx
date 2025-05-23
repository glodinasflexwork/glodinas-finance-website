'use client';

// Components;
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Blog() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('blog.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('blog.hero.subtitle')}</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/blog/vat-dutch-businesses.png" 
                  alt={t('blog.posts.vat.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{t('blog.posts.vat.date')}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blog.posts.vat.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('blog.posts.vat.excerpt')}
                </p>
                <Link href="/blog/understanding-vat-for-dutch-businesses" className="text-blue-600 hover:text-blue-800 font-medium">
                  {t('blog.readMore')} &rarr;
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/blog/business-structure.png" 
                  alt={t('blog.posts.businessStructure.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{t('blog.posts.businessStructure.date')}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blog.posts.businessStructure.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('blog.posts.businessStructure.excerpt')}
                </p>
                <Link href="/blog/choosing-the-right-business-structure" className="text-blue-600 hover:text-blue-800 font-medium">
                  {t('blog.readMore')} &rarr;
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/blog/zzp-planning.png" 
                  alt={t('blog.posts.zzpPlanning.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{t('blog.posts.zzpPlanning.date')}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blog.posts.zzpPlanning.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('blog.posts.zzpPlanning.excerpt')}
                </p>
                <Link href="/blog/financial-planning-for-zzp-professionals" className="text-blue-600 hover:text-blue-800 font-medium">
                  {t('blog.readMore')} &rarr;
                </Link>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/services/bookkeeping.png" 
                  alt={t('blog.posts.taxDeductions.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{t('blog.posts.taxDeductions.date')}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blog.posts.taxDeductions.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('blog.posts.taxDeductions.excerpt')}
                </p>
                <Link href="/blog/top-tax-deductions-dutch-entrepreneurs" className="text-blue-600 hover:text-blue-800 font-medium">
                  {t('blog.readMore')} &rarr;
                </Link>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/partners/moneybird.png" 
                  alt={t('blog.posts.moneybird.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{t('blog.posts.moneybird.date')}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blog.posts.moneybird.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('blog.posts.moneybird.excerpt')}
                </p>
                <Link href="/blog/maximizing-efficiency-with-moneybird" className="text-blue-600 hover:text-blue-800 font-medium">
                  {t('blog.readMore')} &rarr;
                </Link>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/services/personal-loans.png" 
                  alt={t('blog.posts.personalLoans.imageAlt')}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{t('blog.posts.personalLoans.date')}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('blog.posts.personalLoans.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('blog.posts.personalLoans.excerpt')}
                </p>
                <Link href="/blog/navigating-personal-loans-netherlands" className="text-blue-600 hover:text-blue-800 font-medium">
                  {t('blog.readMore')} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Full Article */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('blog.featuredArticle.heading')}</h2>
          
          <article className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('blog.featuredArticle.title')}</h3>
            <div className="text-sm text-gray-500 mb-6">{t('blog.featuredArticle.meta')}</div>
            
            <div className="mb-6">
              <Image 
                src="/images/blog/vat-dutch-businesses.png" 
                alt={t('blog.featuredArticle.imageAlt')}
                width={800}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
            
            <div className="prose prose-blue max-w-none">
              <p>
                {t('blog.featuredArticle.intro')}
              </p>
              
              <h4>{t('blog.featuredArticle.section1.title')}</h4>
              <p>
                {t('blog.featuredArticle.section1.content')}
              </p>
              <ul>
                {(() => {
                  const items = t('blog.featuredArticle.section1.items', { returnObjects: true });
                  return Array.isArray(items) 
                    ? items.map((item, index) => (
                        <li key={index}><strong>{item.rate}</strong> {item.description}</li>
                      ))
                    : <li>Loading...</li>
                })()}
              </ul>
              
              <h4>{t('blog.featuredArticle.section2.title')}</h4>
              <p>
                {t('blog.featuredArticle.section2.content1')}
              </p>
              
              <p>
                {t('blog.featuredArticle.section2.content2')}
              </p>
              
              <h4>{t('blog.featuredArticle.section3.title')}</h4>
              <p>
                {t('blog.featuredArticle.section3.content')}
              </p>
              <ul>
                {(() => {
                  const items = t('blog.featuredArticle.section3.items', { returnObjects: true });
                  return Array.isArray(items) 
                    ? items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    : <li>Loading...</li>
                })()}
              </ul>
              
              <p>
                {t('blog.featuredArticle.conclusion')}
              </p>
              
              <div className="mt-8">
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                  {t('blog.featuredArticle.cta')} &rarr;
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('blog.newsletter.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('blog.newsletter.subtitle')}</p>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium"
              >
                {t('blog.newsletter.button')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
