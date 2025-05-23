'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('home.hero.title')}</h1>
              <p className="text-xl mb-8">{t('home.hero.subtitle')}</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-center">
                  {t('home.hero.requestConsultation')}
                </Link>
                <Link href="/services" className="bg-transparent border border-white text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium text-center">
                  {t('home.hero.ourServices')}
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image 
                src="/images/hero/hero-main.png" 
                alt="Glodinas Finance professional services" 
                width={600} 
                height={400} 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('home.services.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('home.services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Image 
                  src="/images/services/bookkeeping.png" 
                  alt={t('home.services.bookkeepingZZP.title')} 
                  width={100} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.services.bookkeepingZZP.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.services.bookkeepingZZP.description')}</p>
              <Link href="/services#bookkeeping-zzp" className="text-blue-600 hover:text-blue-800 font-medium">
                {t('home.services.bookkeepingZZP.learnMore')} &rarr;
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Image 
                  src="/images/services/bookkeeping.png" 
                  alt={t('home.services.bookkeepingBV.title')} 
                  width={100} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.services.bookkeepingBV.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.services.bookkeepingBV.description')}</p>
              <Link href="/services#bookkeeping-bv" className="text-blue-600 hover:text-blue-800 font-medium">
                {t('home.services.bookkeepingBV.learnMore')} &rarr;
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Image 
                  src="/images/services/payroll.png" 
                  alt={t('home.services.payroll.title')} 
                  width={100} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.services.payroll.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.services.payroll.description')}</p>
              <Link href="/services#payroll" className="text-blue-600 hover:text-blue-800 font-medium">
                {t('home.services.payroll.learnMore')} &rarr;
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Image 
                  src="/images/services/business-formation.png" 
                  alt={t('home.services.businessFormation.title')} 
                  width={100} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.services.businessFormation.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.services.businessFormation.description')}</p>
              <Link href="/services#business-formation" className="text-blue-600 hover:text-blue-800 font-medium">
                {t('home.services.businessFormation.learnMore')} &rarr;
              </Link>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Image 
                  src="/images/services/personal-loans.png" 
                  alt={t('home.services.personalLoans.title')} 
                  width={100} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.services.personalLoans.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.services.personalLoans.description')}</p>
              <Link href="/services#personal-loans" className="text-blue-600 hover:text-blue-800 font-medium">
                {t('home.services.personalLoans.learnMore')} &rarr;
              </Link>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Image 
                  src="/images/partners/moneybird.png" 
                  alt={t('home.services.taxPreparation.title')} 
                  width={100} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.services.taxPreparation.title')}</h3>
              <p className="text-gray-600 mb-4">{t('home.services.taxPreparation.description')}</p>
              <Link href="/services#tax-preparation" className="text-blue-600 hover:text-blue-800 font-medium">
                {t('home.services.taxPreparation.learnMore')} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('home.whyChooseUs.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('home.whyChooseUs.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.whyChooseUs.expertise.title')}</h3>
              <p className="text-gray-600">{t('home.whyChooseUs.expertise.description')}</p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.whyChooseUs.timeSaving.title')}</h3>
              <p className="text-gray-600">{t('home.whyChooseUs.timeSaving.description')}</p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.whyChooseUs.costEffective.title')}</h3>
              <p className="text-gray-600">{t('home.whyChooseUs.costEffective.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('home.partners.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('home.partners.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Partner logos */}
            <div className="flex justify-center">
              <Image 
                src="/images/partners/moneybird.png" 
                alt="Moneybird - Bookkeeping Software" 
                width={300} 
                height={150} 
                className="h-24 w-auto"
              />
            </div>
            <div className="flex justify-center">
              <Image 
                src="/images/partners/employes.png" 
                alt="Employes - Payroll Services" 
                width={300} 
                height={150} 
                className="h-24 w-auto"
              />
            </div>
            <div className="flex justify-center">
              <Image 
                src="/images/partners/firm24.png" 
                alt="Firm24 - Business Formation Services" 
                width={300} 
                height={150} 
                className="h-24 w-auto"
              />
            </div>
            <div className="flex justify-center">
              <Image 
                src="/images/services/personal-loans.png" 
                alt="Dutch Banks - Personal Loans" 
                width={300} 
                height={150} 
                className="h-24 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('home.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('home.cta.subtitle')}</p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium inline-block">
            {t('home.cta.contactUs')}
          </Link>
        </div>
      </section>
    </div>
  );
}
