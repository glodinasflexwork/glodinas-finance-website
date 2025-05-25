'use client';

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About Us | Glodinas Finance</title>
        <meta name="description" content="Learn about Glodinas Finance and our team of financial experts serving businesses in the Netherlands." />
        <meta property="og:title" content="About Us | Glodinas Finance" />
        <meta property="og:description" content="Learn about Glodinas Finance and our team of financial experts serving businesses in the Netherlands." />
        <meta property="og:url" content="https://glodinas-finance.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://glodinas-finance.com/images/about-og-image.jpg" />
        <link rel="canonical" href="https://glodinas-finance.com/about" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Glodinas Finance</h1>
            <p className="text-xl mb-8">Your trusted partner for financial services in the Netherlands</p>
          </div>
        </div>
      </section>
      
      {/* Company Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Company</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-700 mb-4">Glodinas Finance was founded with a clear mission: to provide accessible, high-quality financial services to businesses and entrepreneurs in the Netherlands.</p>
                <p className="text-gray-700 mb-4">With years of experience in Dutch financial regulations and business practices, our team offers expert guidance tailored to your specific needs.</p>
                <p className="text-gray-700">We believe in building long-term relationships with our clients, becoming a trusted partner in their financial journey rather than just a service provider.</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/office.jpg" 
                  alt="Glodinas Finance office"
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
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet the dedicated professionals who make Glodinas Finance the trusted choice for businesses across the Netherlands.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/images/team/cihat-kaya.jpg" 
                alt="Cihat Kaya - Founder & CEO"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Cihat Kaya</h3>
                <p className="text-blue-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600 mb-4">With over 15 years of experience in financial services, Cihat leads our team with expertise in Dutch tax law and business accounting.</p>
                <a 
                  href="https://linkedin.com/in/cihat-kaya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  LinkedIn Profile
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
                alt="Gabriel Stan - Financial Advisor"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Gabriel Stan</h3>
                <p className="text-blue-600 mb-4">Financial Advisor</p>
                <p className="text-gray-600 mb-4">Gabriel specializes in business formation and growth strategies, helping entrepreneurs navigate the complexities of starting and scaling their ventures.</p>
                <a 
                  href="https://linkedin.com/in/gabriel-stan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  LinkedIn Profile
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
                alt="Ana Dogotari - Bookkeeping Specialist"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Ana Dogotari</h3>
                <p className="text-blue-600 mb-4">Bookkeeping Specialist</p>
                <p className="text-gray-600 mb-4">Ana brings precision and efficiency to our bookkeeping services, ensuring clients' financial records are accurate, compliant, and optimized.</p>
                <a 
                  href="https://linkedin.com/in/ana-dogotari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  LinkedIn Profile
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
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact our team today to discuss how we can help your business thrive financially.</p>
          <Link 
            href="/contact"
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
