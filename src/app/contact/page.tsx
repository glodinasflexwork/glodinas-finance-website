// Components;
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">Get in touch with Glodinas Finance B.V. for professional bookkeeping and financial services</p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to answer your questions and provide the financial support your business needs. Reach out to us using the contact information below or fill out the form.
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
                    <h3 className="text-lg font-medium">Address</h3>
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
                    <h3 className="text-lg font-medium">Email</h3>
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
                    <h3 className="text-lg font-medium">Phone</h3>
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
                    <h3 className="text-lg font-medium">Business Hours</h3>
                    <p className="mt-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
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
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Consultation</h2>
              <form>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="bookkeeping-zzp">Bookkeeping for ZZP'ers</option>
                      <option value="bookkeeping-bv">Bookkeeping for BVs</option>
                      <option value="payroll">Payroll Services</option>
                      <option value="business-formation">Business Formation</option>
                      <option value="personal-loans">Personal Loan Assistance</option>
                      <option value="tax-preparation">Tax Preparation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      I agree to the <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800">privacy policy</Link> and consent to being contacted regarding my inquiry.
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium"
                    >
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600">Find answers to common questions about our services</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your bookkeeping rates?</h3>
              <p className="text-gray-600">
                Our bookkeeping services start at €130 per month (excluding VAT) for ZZP'ers and €150 per month (excluding VAT) for BVs. The exact rate depends on the complexity and volume of your financial administration.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often will we communicate about my finances?</h3>
              <p className="text-gray-600">
                We provide monthly updates on your financial status, including profit and loss statements and cash flow reports. Additionally, we're available for questions and consultations throughout the month as needed.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you help with business registration?</h3>
              <p className="text-gray-600">
                Yes, through our partnership with Firm24, we offer comprehensive business formation services, including registration with the Dutch Chamber of Commerce (KVK), VAT registration, and setting up the appropriate legal structure for your business.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer services in languages other than Dutch?</h3>
              <p className="text-gray-600">
                Yes, we provide our services in multiple languages including Dutch, English, Romanian, Turkish, and Russian to accommodate our diverse client base.
              </p>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I switch my bookkeeping to Glodinas Finance?</h3>
              <p className="text-gray-600">
                Switching is simple. We'll handle the transition process, including gathering your financial history, setting up your accounts in our systems, and ensuring a smooth handover from your previous bookkeeper or accountant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
