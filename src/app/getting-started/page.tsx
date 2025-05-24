'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function GettingStarted() {
  const { t } = useTranslation();
  
  // Helper function to safely get arrays from translations
  const getTranslatedArray = (key: string, defaultArray: string[] = []) => {
    try {
      const result = t(key, { returnObjects: true });
      return Array.isArray(result) ? result : defaultArray;
    } catch (error) {
      console.error(`Error getting translation array for key: ${key}`, error);
      return defaultArray;
    }
  };
  
  // Helper function to safely get FAQ questions
  const getFAQQuestions = () => {
    try {
      const result = t('gettingStarted.faq.questions', { returnObjects: true });
      return Array.isArray(result) ? result : [];
    } catch (error) {
      console.error('Error getting FAQ questions', error);
      return [];
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('gettingStarted.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t('gettingStarted.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('gettingStarted.process.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('gettingStarted.process.subtitle')}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-8">
            {/* Step 1 */}
            <div className="flex-1 bg-white p-8 rounded-lg shadow-md border border-gray-200 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="mb-6 flex justify-center">
                <Image 
                  src="/images/partners/moneybird.png" 
                  alt="Moneybird Signup" 
                  width={200} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{t('gettingStarted.process.step1.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('gettingStarted.process.step1.description')}
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {getTranslatedArray('gettingStarted.process.step1.items').map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <a 
                  href="https://www.moneybird.nl/aanmelden?referrer=bfd6ac8168" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block transition-colors"
                >
                  {t('gettingStarted.process.step1.button')}
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex-1 bg-white p-8 rounded-lg shadow-md border border-gray-200 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="mb-6 flex justify-center">
                <Image 
                  src="/images/getting-started/setup-meeting.png" 
                  alt="Setup Meeting" 
                  width={200} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{t('gettingStarted.process.step2.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('gettingStarted.process.step2.description')}
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {getTranslatedArray('gettingStarted.process.step2.items').map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block transition-colors"
                >
                  {t('gettingStarted.process.step2.button')}
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex-1 bg-white p-8 rounded-lg shadow-md border border-gray-200 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="mb-6 flex justify-center">
                <Image 
                  src="/images/getting-started/subscription.png" 
                  alt="Subscription" 
                  width={200} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{t('gettingStarted.process.step3.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('gettingStarted.process.step3.description')}
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {getTranslatedArray('gettingStarted.process.step3.items').map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="https://mnbrd.com/s/2wjljeEQnQOe" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block transition-colors"
                  >
                    {t('gettingStarted.process.step3.button1')}
                  </a>
                  <a 
                    href="https://mnbrd.com/s/QJ8yy5ZYRYXR" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium inline-block transition-colors"
                  >
                    {t('gettingStarted.process.step3.button2')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('gettingStarted.expectations.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('gettingStarted.expectations.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Expectation 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('gettingStarted.expectations.item1.title')}</h3>
              <p className="text-gray-600">{t('gettingStarted.expectations.item1.description')}</p>
            </div>

            {/* Expectation 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('gettingStarted.expectations.item2.title')}</h3>
              <p className="text-gray-600">{t('gettingStarted.expectations.item2.description')}</p>
            </div>

            {/* Expectation 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('gettingStarted.expectations.item3.title')}</h3>
              <p className="text-gray-600">{t('gettingStarted.expectations.item3.description')}</p>
            </div>

            {/* Expectation 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('gettingStarted.expectations.item4.title')}</h3>
              <p className="text-gray-600">{t('gettingStarted.expectations.item4.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('gettingStarted.faq.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">
              {t('gettingStarted.faq.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {getFAQQuestions().map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('gettingStarted.cta.title')}</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {t('gettingStarted.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://www.moneybird.nl/aanmelden?referrer=bfd6ac8168" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              {t('gettingStarted.cta.button1')}
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent border border-white text-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              {t('gettingStarted.cta.button2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
