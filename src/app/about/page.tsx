// Components;
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Glodinas Finance B.V.</h1>
          <p className="text-xl max-w-3xl mx-auto">Your trusted partner for professional bookkeeping and financial services in the Netherlands.</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Company</h2>
              <p className="text-lg text-gray-600 mb-4">
                Glodinas Finance B.V. is a professional bookkeeping firm based in the Netherlands, dedicated to providing high-quality financial services to entrepreneurs and businesses.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We specialize in comprehensive bookkeeping solutions for ZZP'ers (self-employed professionals) and BVs (private limited companies), offering competitive rates starting at €130 per month (excluding VAT) for ZZP'ers and €150 per month (excluding VAT) for BVs.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to help businesses maintain accurate financial records, comply with Dutch tax regulations, and make informed financial decisions to support their growth and success.
              </p>
            </div>
            <div className="flex justify-center">
              {/* Placeholder for company image */}
              <div className="h-80 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Company Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">Meet the experts behind Glodinas Finance B.V.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                {/* Placeholder for team member photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Team Member Photo</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">John Doe</h3>
                  <p className="text-white/90">Founder & CEO</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  With over 15 years of experience in financial management and bookkeeping, John leads our team with expertise and dedication to client success.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                {/* Placeholder for team member photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Team Member Photo</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">Jane Smith</h3>
                  <p className="text-white/90">Senior Accountant</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Jane specializes in tax preparation and compliance for Dutch businesses, ensuring our clients meet all regulatory requirements.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                {/* Placeholder for team member photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Team Member Photo</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">Michael Johnson</h3>
                  <p className="text-white/90">Financial Advisor</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Michael helps clients navigate personal loan applications and financial planning, with strong relationships with major Dutch banks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Partners</h2>
            <p className="mt-4 text-xl text-gray-600">We collaborate with trusted partners to deliver comprehensive financial solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Partner 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="h-20 flex items-center justify-center mb-4">
                {/* Placeholder for Moneybird logo */}
                <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Moneybird</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Moneybird</h3>
              <p className="text-gray-600 text-center">
                We use Moneybird's intuitive bookkeeping software to streamline financial administration for our clients.
              </p>
            </div>

            {/* Partner 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="h-20 flex items-center justify-center mb-4">
                {/* Placeholder for Employes logo */}
                <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Employes</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Employes</h3>
              <p className="text-gray-600 text-center">
                Our partnership with Employes enables us to provide efficient and accurate payroll services for businesses.
              </p>
            </div>

            {/* Partner 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="h-20 flex items-center justify-center mb-4">
                {/* Placeholder for Firm24 logo */}
                <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Firm24</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Firm24</h3>
              <p className="text-gray-600 text-center">
                Through our collaboration with Firm24, we offer comprehensive business formation services for entrepreneurs.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Banking Partners</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Bank logos */}
              <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">ING</span>
              </div>
              <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">ABN AMRO</span>
              </div>
              <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">RABOBANK</span>
              </div>
              <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">SNS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Contact Glodinas Finance B.V. today to discuss how we can support your business's financial needs.</p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
