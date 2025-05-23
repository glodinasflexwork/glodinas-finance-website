'use client';

// Components
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('contact.hero.subtitle')}</p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('contact.getInTouch.title')}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('contact.getInTouch.description')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-700">
                    <h3 className="text-lg font-medium">{t('contact.getInTouch.address')}</h3>
                    <address className="mt-1 not-italic">
                      Schiphol Boulevard 127<br />
                      Schiphol 1118 BG<br />
                      Netherlands
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-700">
                    <h3 className="text-lg font-medium">{t('contact.getInTouch.email')}</h3>
                    <p className="mt-1">
                      <a href="mailto:info@glodinas-finance.nl" className="text-blue-600 hover:text-blue-800">
                        info@glodinas-finance.nl
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-700">
                    <h3 className="text-lg font-medium">{t('contact.getInTouch.phone')}</h3>
                    <p className="mt-1">
                      <a href="tel:+31201234567" className="text-blue-600 hover:text-blue-800">
                        +31 20 123 4567
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-gray-700">
                    <h3 className="text-lg font-medium">{t('contact.getInTouch.businessHours')}</h3>
                    <p className="mt-1">{t('contact.getInTouch.weekdays')}</p>
                    <p>{t('contact.getInTouch.weekend')}</p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="mt-10 h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="h-full w-full">
                  {/* Placeholder for Google Maps - will be replaced with actual embed */}
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Google Maps Location</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.form.title')}</h2>
              
              {/* Import ContactForm component */}
              <div className="contact-form-container">
                {/* @ts-ignore */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('contact.faq.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('contact.faq.subtitle')}</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {(t('contact.faq.questions', { returnObjects: true }) as Array<{question: string, answer: string}>).map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
