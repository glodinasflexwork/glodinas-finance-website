'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Blog | Glodinas Finance</title>
        <meta name="description" content="Insights, tips, and updates on Dutch financial matters" />
        <meta property="og:title" content="Blog | Glodinas Finance" />
        <meta property="og:description" content="Insights, tips, and updates on Dutch financial matters" />
        <meta property="og:url" content="https://glodinas-finance.com/blog" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://glodinas-finance.com/blog" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl mb-8">Insights, tips, and updates on Dutch financial matters</p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <Link href="/blog/understanding-vat">
                <div className="relative h-48">
                  <Image 
                    src="/images/blog/vat-guide.jpg" 
                    alt="Dutch VAT tax form and calculator" 
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">May 15, 2025</p>
                <h2 className="text-xl font-semibold mb-2">
                  <Link href="/blog/understanding-vat" className="text-gray-900 hover:text-blue-600">
                    Understanding VAT for Dutch Businesses
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">A comprehensive guide to Value Added Tax (BTW) regulations and requirements for businesses operating in the Netherlands.</p>
                <Link href="/blog/understanding-vat" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <Link href="/blog/business-structure">
                <div className="relative h-48">
                  <Image 
                    src="/images/blog/business-structure.jpg" 
                    alt="Dutch business registration documents" 
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">April 28, 2025</p>
                <h2 className="text-xl font-semibold mb-2">
                  <Link href="/blog/business-structure" className="text-gray-900 hover:text-blue-600">
                    Choosing the Right Business Structure in the Netherlands
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">Compare the benefits and considerations of different legal entities for your business in the Netherlands, from ZZP to BV.</p>
                <Link href="/blog/business-structure" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
            
            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <Link href="/blog/zzp-planning">
                <div className="relative h-48">
                  <Image 
                    src="/images/blog/zzp-planning.jpg" 
                    alt="Self-employed professional working on finances" 
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">April 10, 2025</p>
                <h2 className="text-xl font-semibold mb-2">
                  <Link href="/blog/zzp-planning" className="text-gray-900 hover:text-blue-600">
                    Financial Planning for ZZP Professionals
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">Essential financial planning strategies and tips specifically tailored for self-employed professionals in the Netherlands.</p>
                <Link href="/blog/zzp-planning" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
            
            {/* Blog Post 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <Link href="/blog/tax-deductions">
                <div className="relative h-48">
                  <Image 
                    src="/images/blog/tax-deductions.jpg" 
                    alt="Tax forms and calculator" 
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">March 22, 2025</p>
                <h2 className="text-xl font-semibold mb-2">
                  <Link href="/blog/tax-deductions" className="text-gray-900 hover:text-blue-600">
                    Top Tax Deductions for Dutch Entrepreneurs
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">Maximize your tax savings with these often-overlooked deductions available to entrepreneurs and business owners in the Netherlands.</p>
                <Link href="/blog/tax-deductions" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
            
            {/* Blog Post 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <Link href="/blog/moneybird-efficiency">
                <div className="relative h-48">
                  <Image 
                    src="/images/blog/moneybird.jpg" 
                    alt="Moneybird software interface" 
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">March 5, 2025</p>
                <h2 className="text-xl font-semibold mb-2">
                  <Link href="/blog/moneybird-efficiency" className="text-gray-900 hover:text-blue-600">
                    Maximizing Efficiency with Moneybird
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">Tips and best practices for using Moneybird to streamline your bookkeeping and financial administration as a Dutch entrepreneur.</p>
                <Link href="/blog/moneybird-efficiency" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
            
            {/* Blog Post 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <Link href="/blog/personal-loans">
                <div className="relative h-48">
                  <Image 
                    src="/images/blog/personal-loans.jpg" 
                    alt="Dutch banking documents and calculator" 
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">February 18, 2025</p>
                <h2 className="text-xl font-semibold mb-2">
                  <Link href="/blog/personal-loans" className="text-gray-900 hover:text-blue-600">
                    Navigating Personal Loans in the Netherlands
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">A guide to understanding personal loan options, requirements, and application processes in the Dutch banking system.</p>
                <Link href="/blog/personal-loans" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-600 mb-8">Stay updated with the latest financial insights and tips for Dutch businesses</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md border border-gray-300 flex-grow max-w-md"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
