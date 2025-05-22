// Components;
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">Insights and updates on financial matters for Dutch businesses</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/blog/vat-dutch-businesses.png" 
                  alt="Understanding VAT for Dutch Businesses" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">May 15, 2025</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Understanding VAT for Dutch Businesses</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive guide to Value Added Tax (BTW) in the Netherlands, including rates, filing requirements, and common pitfalls to avoid.
                </p>
                <Link href="/blog/understanding-vat-for-dutch-businesses" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More &rarr;
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/blog/business-structure.png" 
                  alt="Choosing the Right Business Structure in the Netherlands" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">April 28, 2025</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Choosing the Right Business Structure in the Netherlands</h3>
                <p className="text-gray-600 mb-4">
                  Explore the differences between ZZP, Eenmanszaak, and BV structures, and learn which option is best suited for your business goals.
                </p>
                <Link href="/blog/choosing-the-right-business-structure" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More &rarr;
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/blog/zzp-planning.png" 
                  alt="Financial Planning for ZZP Professionals" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">April 10, 2025</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Planning for ZZP Professionals</h3>
                <p className="text-gray-600 mb-4">
                  Essential financial planning tips for self-employed professionals in the Netherlands, including tax optimization and retirement planning.
                </p>
                <Link href="/blog/financial-planning-for-zzp-professionals" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More &rarr;
                </Link>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/services/bookkeeping.png" 
                  alt="Top Tax Deductions for Dutch Entrepreneurs" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 22, 2025</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Top Tax Deductions for Dutch Entrepreneurs</h3>
                <p className="text-gray-600 mb-4">
                  Discover the most valuable tax deductions available to entrepreneurs in the Netherlands and how to properly claim them.
                </p>
                <Link href="/blog/top-tax-deductions-dutch-entrepreneurs" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More &rarr;
                </Link>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/partners/moneybird.png" 
                  alt="Maximizing Efficiency with Moneybird" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 5, 2025</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximizing Efficiency with Moneybird</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to leverage Moneybird&apos;s features to streamline your bookkeeping processes and save valuable time.
                </p>
                <Link href="/blog/maximizing-efficiency-with-moneybird" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More &rarr;
                </Link>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-gray-200 relative">
                <Image 
                  src="/images/services/personal-loans.png" 
                  alt="Navigating Personal Loans in the Netherlands" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 18, 2025</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Navigating Personal Loans in the Netherlands</h3>
                <p className="text-gray-600 mb-4">
                  A comparison of personal loan options from major Dutch banks and tips for improving your chances of approval.
                </p>
                <Link href="/blog/navigating-personal-loans-netherlands" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Full Article */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
          
          <article className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding VAT for Dutch Businesses</h3>
            <div className="text-sm text-gray-500 mb-6">May 15, 2025 • 8 min read</div>
            
            <div className="mb-6">
              <Image 
                src="/images/blog/vat-dutch-businesses.png" 
                alt="Understanding VAT for Dutch Businesses" 
                width={800}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
            
            <div className="prose prose-blue max-w-none">
              <p>
                Value Added Tax (VAT), known as BTW (Belasting Toegevoegde Waarde) in the Netherlands, is a consumption tax placed on products and services. As a business owner in the Netherlands, understanding VAT is crucial for proper financial management and compliance with Dutch tax regulations.
              </p>
              
              <h4>VAT Rates in the Netherlands</h4>
              <p>
                The Netherlands currently has three VAT rates:
              </p>
              <ul>
                <li><strong>21% (standard rate):</strong> Applied to most goods and services</li>
                <li><strong>9% (reduced rate):</strong> Applied to essentials like food, books, medicines, and certain services</li>
                <li><strong>0% (zero rate):</strong> Applied to exports and certain international services</li>
              </ul>
              
              <h4>VAT Filing Requirements</h4>
              <p>
                Dutch businesses are typically required to file VAT returns quarterly. However, if your annual VAT liability exceeds €15,000, you may need to file monthly. Conversely, if your annual VAT liability is less than €1,883, you may be eligible for annual filing.
              </p>
              
              <p>
                The deadline for filing and paying VAT is generally the last day of the month following the end of the reporting period. For example, for Q1 (January-March), the deadline would be April 30th.
              </p>
              
              <h4>Common VAT Pitfalls to Avoid</h4>
              <p>
                Many Dutch businesses encounter challenges with VAT compliance. Here are some common pitfalls to avoid:
              </p>
              <ul>
                <li>Failing to register for VAT when required</li>
                <li>Applying incorrect VAT rates to products or services</li>
                <li>Missing filing deadlines</li>
                <li>Inadequate record-keeping for VAT purposes</li>
                <li>Incorrectly claiming VAT on expenses</li>
              </ul>
              
              <p>
                At Glodinas Finance B.V., we help businesses navigate the complexities of Dutch VAT regulations, ensuring compliance while optimizing your tax position.
              </p>
              
              <div className="mt-8">
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                  Contact us for professional VAT assistance &rarr;
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Subscribe to our newsletter for the latest financial insights and updates relevant to Dutch businesses.</p>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
