'use client';

// Components;
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.hero.title')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('about.hero.subtitle')}</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.company.title')}</h2>
              <p className="text-lg text-gray-600 mb-4">
                {t('about.company.paragraph1')}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                {t('about.company.paragraph2')}
              </p>
              <p className="text-lg text-gray-600">
                {t('about.company.paragraph3')}
              </p>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/images/hero/hero-main.png" 
                alt={t('about.company.imageAlt')} 
                width={600} 
                height={400} 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('about.team.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('about.team.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 - Cihat Kaya */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                <Image 
                  src="/images/team/cihat-kaya.png" 
                  alt={t('about.team.member1.imageAlt')} 
                  fill
                  className="object-cover object-center object-[center_70%]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">{t('about.team.member1.name')}</h3>
                  <p className="text-white/90">{t('about.team.member1.role')}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {t('about.team.member1.bio')}
                </p>
                <a 
                  href="https://www.linkedin.com/in/cihatkaya/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  {t('about.team.linkedinProfile')}
                </a>
              </div>
            </div>

            {/* Team Member 2 - Gabriel Stan */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                <Image 
                  src="/images/team/gabriel-stan.png" 
                  alt={t('about.team.member2.imageAlt')} 
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">{t('about.team.member2.name')}</h3>
                  <p className="text-white/90">{t('about.team.member2.role')}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {t('about.team.member2.bio')}
                </p>
                <a 
                  href="https://www.linkedin.com/in/gabriel-stan-773682186/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  {t('about.team.linkedinProfile')}
                </a>
              </div>
            </div>

            {/* Team Member 3 - Ana Dogotari */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                <Image 
                  src="/images/team/ana-dogotari.jpeg" 
                  alt={t('about.team.member3.imageAlt')} 
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">{t('about.team.member3.name')}</h3>
                  <p className="text-white/90">{t('about.team.member3.role')}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {t('about.team.member3.bio')}
                </p>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  {t('about.team.linkedinProfile')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('about.partners.title')}</h2>
            <p className="mt-4 text-xl text-gray-600">{t('about.partners.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Partner 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="h-20 flex items-center justify-center mb-4">
                <Image 
                  src="/images/partners/moneybird.png" 
                  alt={t('about.partners.partner1.imageAlt')} 
                  width={200} 
                  height={80} 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{t('about.partners.partner1.name')}</h3>
              <p className="text-gray-600 text-center">
                {t('about.partners.partner1.description')}
              </p>
            </div>

            {/* Partner 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="h-20 flex items-center justify-center mb-4">
                <Image 
                  src="/images/partners/employes.png" 
                  alt={t('about.partners.partner2.imageAlt')} 
                  width={200} 
                  height={80} 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{t('about.partners.partner2.name')}</h3>
              <p className="text-gray-600 text-center">
                {t('about.partners.partner2.description')}
              </p>
            </div>

            {/* Partner 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="h-20 flex items-center justify-center mb-4">
                <Image 
                  src="/images/partners/firm24.png" 
                  alt={t('about.partners.partner3.imageAlt')} 
                  width={200} 
                  height={80} 
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{t('about.partners.partner3.name')}</h3>
              <p className="text-gray-600 text-center">
                {t('about.partners.partner3.description')}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('about.partners.bankingTitle')}</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Bank logos from personal loans image */}
              <div className="h-16 flex items-center justify-center">
                <Image 
                  src="/images/services/personal-loans.png" 
                  alt={t('about.partners.bankingImageAlt')} 
                  width={600} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('about.cta.subtitle')}</p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium inline-block">
            {t('about.cta.buttonText')}
          </Link>
        </div>
      </section>
    </div>
  );
}
