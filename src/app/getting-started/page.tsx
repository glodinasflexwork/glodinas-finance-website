'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GettingStarted() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Getting Started with Glodinas Finance</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Follow our simple three-step process to get your bookkeeping set up and running smoothly.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Onboarding Process</h2>
            <p className="mt-4 text-xl text-gray-600">
              We've designed a streamlined process to get you up and running quickly
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Sign Up for Moneybird</h3>
              <p className="text-gray-600 mb-6">
                Start by signing up for Moneybird using our referral link. This cloud-based bookkeeping software will be the foundation of your financial administration.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Create your Moneybird account</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Add Glodinas Finance as your bookkeeper</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete your basic company information</span>
                </li>
              </ul>
              <div className="text-center">
                <a 
                  href="https://www.moneybird.nl/aanmelden?referrer=bfd6ac8168" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block transition-colors"
                >
                  Sign Up for Moneybird
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Schedule a Setup Meeting</h3>
              <p className="text-gray-600 mb-6">
                Book a setup meeting with our team to configure your administration. We offer both in-person and remote TeamViewer sessions for your convenience.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pay the one-time setup fee (€150 ex VAT)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Choose between in-person or TeamViewer session</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We'll set up bank connections, client database, and invoice structure</span>
                </li>
              </ul>
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block transition-colors"
                >
                  Schedule Setup Meeting
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Select Your Subscription</h3>
              <p className="text-gray-600 mb-6">
                Choose the subscription plan that fits your business needs. We offer tailored packages for both ZZP'ers and BVs.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ZZP Bookkeeping: €130/month (ex VAT)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>BV Bookkeeping: €150/month (ex VAT)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automatic billing for hassle-free service</span>
                </li>
              </ul>
              <div className="text-center">
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="https://mnbrd.com/s/2wjljeEQnQOe" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block transition-colors"
                  >
                    ZZP/BV Subscription
                  </a>
                  <a 
                    href="https://mnbrd.com/s/QJ8yy5ZYRYXR" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium inline-block transition-colors"
                  >
                    Loan Administration
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
            <h2 className="text-3xl font-bold text-gray-900">What to Expect</h2>
            <p className="mt-4 text-xl text-gray-600">
              Here's what happens after you complete our onboarding process
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Immediate Setup</h3>
              <p className="text-gray-600">Your bookkeeping system will be fully configured and ready to use within 24-48 hours after your setup meeting.</p>
            </div>

            {/* Expectation 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">You'll receive continuous support from our team to ensure your bookkeeping runs smoothly and efficiently.</p>
            </div>

            {/* Expectation 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Monthly Updates</h3>
              <p className="text-gray-600">Receive regular updates on your financial status, ensuring you always have a clear picture of your business finances.</p>
            </div>

            {/* Expectation 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tax Compliance</h3>
              <p className="text-gray-600">We ensure your business remains compliant with all Dutch tax regulations and filing requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600">
              Common questions about our onboarding process
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How long does the setup process take?</h3>
              <p className="text-gray-600">
                The entire onboarding process typically takes 2-3 business days from initial signup to complete setup. The setup meeting itself usually lasts about 1-2 hours.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do I need to prepare anything for the setup meeting?</h3>
              <p className="text-gray-600">
                Yes, please have your bank account login details, business registration information, and any existing client/invoice data ready for the setup meeting. This will help us configure your system efficiently.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I change my subscription plan later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your subscription plan as your business needs change. Simply contact us, and we'll help you make the transition smoothly.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What if I need help after the initial setup?</h3>
              <p className="text-gray-600">
                Our support team is available to assist you with any questions or issues that may arise. You can reach us via email, phone, or through the contact form on our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to streamline your bookkeeping?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start your journey with Glodinas Finance today and experience hassle-free financial management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://www.moneybird.nl/aanmelden?referrer=bfd6ac8168" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium inline-block"
            >
              Sign Up for Moneybird
            </a>
            <Link 
              href="/contact" 
              className="bg-transparent border border-white text-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
