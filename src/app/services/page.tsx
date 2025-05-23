// Components
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export const metadata = {
  title: "Financial Services | Glodinas Finance B.V. | Dutch Bookkeeping Experts",
  description: "Comprehensive financial services for ZZP'ers and BVs in the Netherlands. Bookkeeping, tax preparation, payroll, and business formation services.",
};

export default function Services() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('services.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('services.hero.subtitle')}</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bookkeeping for ZZP'ers */}
          <div id="bookkeeping-zzp" className="mb-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('services.bookkeepingZZP.title')}</h2>
                <p className="text-lg text-gray-600 mb-4">
                  {t('services.bookkeepingZZP.description1')}
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  {t('services.bookkeepingZZP.description2')}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('services.bookkeepingZZP.included')}</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {(t('services.bookkeepingZZP.items', { returnObjects: true }) as Array<string>).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
                    {t('services.bookkeepingZZP.requestQuote')}
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/images/zzp-bookkeeping.png" 
                  alt="ZZP Bookkeeping Services in the Netherlands - Glodinas Finance" 
                  className="h-auto w-full rounded-lg object-cover shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Bookkeeping for BVs */}
          <div id="bookkeeping-bv" className="mb-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <img 
                  src="/images/bv-bookkeeping.png" 
                  alt="BV Bookkeeping Services in the Netherlands with DGA Payroll - Glodinas Finance" 
                  className="h-auto w-full rounded-lg object-cover shadow-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('services.bookkeepingBV.title')}</h2>
                <p className="text-lg text-gray-600 mb-4">
                  {t('services.bookkeepingBV.description1')}
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  {t('services.bookkeepingBV.description2')}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('services.bookkeepingBV.included')}</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {(t('services.bookkeepingBV.items', { returnObjects: true }) as Array<string>).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
                    {t('services.bookkeepingBV.requestQuote')}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Payroll Services */}
          <div id="payroll" className="mb-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('services.payroll.title')}</h2>
                <p className="text-lg text-gray-600 mb-4">
                  {t('services.payroll.description1')}
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  {t('services.payroll.description2')}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('services.payroll.included')}</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {(t('services.payroll.items', { returnObjects: true }) as Array<string>).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
                    {t('services.payroll.requestQuote')}
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/images/payroll-services.png" 
                  alt="Dutch Payroll Services for Businesses - Glodinas Finance" 
                  className="h-auto w-full rounded-lg object-cover shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Business Formation */}
          <div id="business-formation" className="mb-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <img 
                  src="/images/business-formation.png" 
                  alt="Dutch Business Formation Services - KVK Registration - Glodinas Finance" 
                  className="h-auto w-full rounded-lg object-cover shadow-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('services.businessFormation.title')}</h2>
                <p className="text-lg text-gray-600 mb-4">
                  {t('services.businessFormation.description1')}
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  {t('services.businessFormation.description2')}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('services.businessFormation.included')}</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {(t('services.businessFormation.items', { returnObjects: true }) as Array<string>).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
                    {t('services.businessFormation.requestQuote')}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Loan Assistance */}
          <div id="personal-loans" className="mb-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('services.personalLoans.title')}</h2>
                <p className="text-lg text-gray-600 mb-4">
                  {t('services.personalLoans.description1')}
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  {t('services.personalLoans.description2')}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('services.personalLoans.included')}</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {(t('services.personalLoans.items', { returnObjects: true }) as Array<string>).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
                    {t('services.personalLoans.requestConsultation')}
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/images/personal-loan.png" 
                  alt="Personal Loan Assistance with Dutch Banks - Glodinas Finance" 
                  className="h-auto w-full rounded-lg object-cover shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Tax Preparation */}
          <div id="tax-preparation" className="scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <img 
                  src="/images/tax-preparation.png" 
                  alt="Dutch Tax Preparation and Filing Services - Glodinas Finance" 
                  className="h-auto w-full rounded-lg object-cover shadow-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('services.taxPreparation.title')}</h2>
                <p className="text-lg text-gray-600 mb-4">
                  {t('services.taxPreparation.description1')}
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  {t('services.taxPreparation.description2')}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{t('services.taxPreparation.included')}</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  {(t('services.taxPreparation.items', { returnObjects: true }) as Array<string>).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
                    {t('services.taxPreparation.requestQuote')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moneybird Integration */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('services.pricing.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('services.pricing.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* ZZP Bookkeeping Signup */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.pricing.zzpPackage.title')}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-blue-600">{t('services.pricing.zzpPackage.price')}</span>
                <span className="ml-2 text-gray-500">{t('services.pricing.zzpPackage.period')}</span>
              </div>
              <p className="text-gray-600 mb-6">{t('services.bookkeepingZZP.description1')}</p>
              <a 
                href="https://mnbrd.com/s/2wjljeEQnQOe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-blue-600 text-white text-center hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
              >
                {t('services.pricing.zzpPackage.getStarted')}
              </a>
            </div>
            
            {/* Loan Administration Signup */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.personalLoans.title')}</h3>
              <p className="text-gray-600 mb-6">{t('services.personalLoans.description1')}</p>
              <p className="text-gray-600 mb-6">{t('services.personalLoans.description2')}</p>
              <a 
                href="https://mnbrd.com/s/QJ8yy5ZYRYXR" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-blue-600 text-white text-center hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
              >
                {t('services.pricing.customPackage.contactUs')}
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('services.pricing.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('services.pricing.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ZZP Package */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.pricing.zzpPackage.title')}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-blue-600">{t('services.pricing.zzpPackage.price')}</span>
                <span className="ml-2 text-gray-500">{t('services.pricing.zzpPackage.period')}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {(t('services.pricing.zzpPackage.features', { returnObjects: true }) as Array<string>).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/getting-started" className="block w-full bg-blue-600 text-white text-center hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors">
                {t('services.pricing.zzpPackage.getStarted')}
              </Link>
            </div>
            
            {/* BV Package */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-blue-500 hover:shadow-lg transition-all relative">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg font-medium">
                {t('services.pricing.bvPackage.popular')}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.pricing.bvPackage.title')}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-blue-600">{t('services.pricing.bvPackage.price')}</span>
                <span className="ml-2 text-gray-500">{t('services.pricing.bvPackage.period')}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {(t('services.pricing.bvPackage.features', { returnObjects: true }) as Array<string>).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/getting-started" className="block w-full bg-blue-600 text-white text-center hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors">
                {t('services.pricing.bvPackage.getStarted')}
              </Link>
            </div>
            
            {/* Custom Package */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.pricing.customPackage.title')}</h3>
              <p className="text-gray-600 mb-6">{t('services.pricing.customPackage.description')}</p>
              <ul className="space-y-3 mb-8">
                {(t('services.pricing.customPackage.features', { returnObjects: true }) as Array<string>).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full bg-blue-600 text-white text-center hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors">
                {t('services.pricing.customPackage.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('services.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('services.cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium">
              {t('services.cta.contactUs')}
            </Link>
            <Link href="/getting-started" className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 rounded-md font-medium">
              {t('services.cta.getStarted')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
