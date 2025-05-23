// Components;
import Link from 'next/link';

export const metadata = {
  title: "Financial Services | Glodinas Finance B.V. | Dutch Bookkeeping Experts",
  description: "Comprehensive financial services for ZZP'ers and BVs in the Netherlands. Bookkeeping, tax preparation, payroll, and business formation services.",
};

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">Comprehensive financial solutions for entrepreneurs and businesses in the Netherlands</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bookkeeping for ZZP'ers */}
          <div id="bookkeeping-zzp" className="mb-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Bookkeeping for ZZP'ers</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Our comprehensive bookkeeping service for self-employed professionals (ZZP'ers) starts at just €130 per month (excluding VAT).
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We handle all aspects of your financial administration using Moneybird, allowing you to focus on your core business activities.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What's included:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Monthly bookkeeping and financial administration</li>
                  <li>VAT (BTW) return preparation and filing</li>
                  <li>Annual financial statements</li>
                  <li>Income tax return preparation</li>
                  <li>Ongoing financial advice and support</li>
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
                    Request a Quote
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Bookkeeping for BVs</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Our bookkeeping service for private limited companies (BVs) starts at €250 per month (excluding VAT), including pay-rolling for DGA.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We provide comprehensive financial administration services tailored to the specific needs of Dutch BVs.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What's included:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Monthly bookkeeping and financial administration</li>
                  <li>VAT (BTW) return preparation and filing</li>
                  <li>Annual financial statements</li>
                  <li>Corporate income tax return preparation</li>
                  <li>Director's salary administration (DGA payroll)</li>
                  <li>Dividend planning and administration</li>
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Payroll Services */}
          <div id="payroll" className="mb-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Payroll Services</h2>
                <p className="text-lg text-gray-600 mb-4">
                  We offer efficient payroll services through our partnership with Employes, ensuring accurate and timely salary administration for your employees.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Our payroll services help you comply with Dutch employment regulations and tax requirements.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What's included:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Monthly salary calculations</li>
                  <li>Payslip generation and distribution</li>
                  <li>Tax and social security contributions</li>
                  <li>Annual statements and reporting</li>
                  <li>Leave and absence administration</li>
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
                    Request a Quote
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Formation</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Through our partnership with Firm24, we offer comprehensive business formation services for entrepreneurs looking to establish their business in the Netherlands.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We guide you through the entire process, from choosing the right business structure to registering with the Dutch Chamber of Commerce (KVK).
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What's included:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Business structure consultation (ZZP, Eenmanszaak, BV)</li>
                  <li>Company name verification</li>
                  <li>Registration with the Dutch Chamber of Commerce (KVK)</li>
                  <li>VAT registration</li>
                  <li>Notarial services for BV formation</li>
                  <li>Initial financial setup and administration</li>
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Loan Assistance */}
          <div id="personal-loans" className="mb-16 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Loan Assistance</h2>
                <p className="text-lg text-gray-600 mb-4">
                  We provide assistance with personal loan applications at major Dutch banks, including ING, ABN AMRO, RABOBANK, and SNS.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Our team helps you navigate the loan application process, ensuring you have the best chance of approval with favorable terms.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What's included:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Loan options assessment based on your financial situation</li>
                  <li>Application preparation and documentation</li>
                  <li>Liaison with banking partners</li>
                  <li>Interest rate and term negotiation</li>
                  <li>Ongoing support throughout the approval process</li>
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
                    Request a Consultation
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Preparation</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Our tax preparation services ensure that your business and personal tax filings are accurate, compliant, and optimized to minimize your tax burden.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We stay up-to-date with the latest Dutch tax regulations to provide you with expert advice and support.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What's included:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Income tax return preparation for individuals</li>
                  <li>Corporate tax return preparation for businesses</li>
                  <li>VAT (BTW) return preparation and filing</li>
                  <li>Tax planning and optimization strategies</li>
                  <li>Representation in tax matters with the Dutch Tax Authority</li>
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium inline-block">
                    Request a Quote
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
            <h2 className="text-3xl font-bold text-gray-900">Get Started with Moneybird</h2>
            <p className="mt-4 text-xl text-gray-600">Sign up directly for our bookkeeping services through Moneybird</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* ZZP Bookkeeping Signup */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ZZP Bookkeeping</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-blue-600">€130</span>
                <span className="ml-2 text-gray-500">/month ex VAT</span>
              </div>
              <p className="text-gray-600 mb-6">Complete bookkeeping service for self-employed professionals (ZZP'ers)</p>
              <a 
                href="https://mnbrd.com/s/2wjljeEQnQOe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-blue-600 text-white text-center hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Sign Up Now
              </a>
            </div>
            
            {/* Loan Administration Signup */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Loan Administration</h3>
              <p className="text-gray-600 mb-6">Streamline your loan application process with our specialized administration service</p>
              <p className="text-gray-600 mb-6">We help you navigate the loan application process with major Dutch banks, ensuring you have the best chance of approval with favorable terms.</p>
              <a 
                href="https://mnbrd.com/s/QJ8yy5ZYRYXR" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-blue-600 text-white text-center hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Pricing Overview</h2>
            <p className="mt-4 text-xl text-gray-600">Transparent pricing for our core services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ZZP Package */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ZZP Package</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-blue-600">€130</span>
                <span className="ml-2 text-gray-500">/month ex VAT</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Monthly bookkeeping</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>VAT returns</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Annual financial statements</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Income tax return</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Financial advice</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full bg-blue-600 text-white text-center hover:bg-blue-700 px-6 py-3 rounded-md font-medium">
                Get Started
              </Link>
            </div>

            {/* BV Package */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-blue-200 transform scale-105 z-10">
              <div className="bg-blue-600 text-white text-center py-2 px-4 rounded-full text-sm font-bold uppercase absolute -top-3 left-1/2 transform -translate-x-1/2">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">BV Package</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-extrabold text-blue-600">€250</span>
                <span className="ml-2 text-gray-500">/month ex VAT</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Monthly bookkeeping</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>VAT returns</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Annual financial statements</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Corporate tax return</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>DGA payroll administration</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dividend planning</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full bg-blue-600 text-white text-center hover:bg-blue-700 px-6 py-3 rounded-md font-medium">
                Get Started
              </Link>
            </div>

            {/* Custom Package */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Package</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-gray-900">Custom</span>
              </div>
              <p className="text-gray-600 mb-8">
                Tailored financial services package designed specifically for your business needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customized service selection</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible pricing options</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full bg-gray-800 text-white text-center hover:bg-gray-700 px-6 py-3 rounded-md font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
