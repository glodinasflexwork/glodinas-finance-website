// Use a different approach for dynamic blog posts
// Instead of using dynamic routes with [slug], we'll create static routes for each blog post

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// Create a simple blog post component that doesn't rely on dynamic routes
export default function BlogPostList() {
  const t = useTranslations('blog');
  const common = useTranslations('common');
  const blogPosts = useTranslations('blogPosts');
  const params = useTranslations('params');
  
  // Get the current locale from the params
  const locale = params('locale');
  
  // Define the blog posts
  const posts = [
    {
      slug: 'understanding-vat',
      title: blogPosts('understanding-vat.title'),
      date: blogPosts('understanding-vat.date'),
      excerpt: blogPosts('understanding-vat.intro'),
      image: blogPosts('understanding-vat.image'),
      imageAlt: blogPosts('understanding-vat.imageAlt')
    },
    {
      slug: 'business-structure',
      title: blogPosts('business-structure.title'),
      date: blogPosts('business-structure.date'),
      excerpt: blogPosts('business-structure.intro'),
      image: blogPosts('business-structure.image'),
      imageAlt: blogPosts('business-structure.imageAlt')
    },
    {
      slug: 'zzp-planning',
      title: blogPosts('zzp-planning.title'),
      date: blogPosts('zzp-planning.date'),
      excerpt: blogPosts('zzp-planning.intro'),
      image: blogPosts('zzp-planning.image'),
      imageAlt: blogPosts('zzp-planning.imageAlt')
    },
    {
      slug: 'tax-deductions',
      title: blogPosts('tax-deductions.title'),
      date: blogPosts('tax-deductions.date'),
      excerpt: blogPosts('tax-deductions.intro'),
      image: blogPosts('tax-deductions.image'),
      imageAlt: blogPosts('tax-deductions.imageAlt')
    },
    {
      slug: 'moneybird-efficiency',
      title: blogPosts('moneybird-efficiency.title'),
      date: blogPosts('moneybird-efficiency.date'),
      excerpt: blogPosts('moneybird-efficiency.intro'),
      image: blogPosts('moneybird-efficiency.image'),
      imageAlt: blogPosts('moneybird-efficiency.imageAlt')
    },
    {
      slug: 'personal-loans',
      title: blogPosts('personal-loans.title'),
      date: blogPosts('personal-loans.date'),
      excerpt: blogPosts('personal-loans.intro'),
      image: blogPosts('personal-loans.image'),
      imageAlt: blogPosts('personal-loans.imageAlt')
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative h-48">
                  <Image 
                    src={post.image || '/images/blog-placeholder.jpg'}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/${locale}/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {t('readMore')} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('newsletter.title')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{t('newsletter.subtitle')}</p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300">
                {t('newsletter.button')}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">{t('newsletter.privacy')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
