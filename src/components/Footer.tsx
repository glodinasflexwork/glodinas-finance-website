'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.companyInfo')}</h3>
            <p className="mb-2">Schiphol Boulevard 127</p>
            <p className="mb-2">Schiphol 1118 BG</p>
            <p className="mb-2">Netherlands</p>
            <p className="mb-2">cihatkaya@glodinas.nl</p>
            <p className="mb-2">(6) 81 34 85 51</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300">{t('navigation.home')}</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300">{t('navigation.about')}</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-300">{t('navigation.services')}</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-300">{t('navigation.blog')}</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300">{t('navigation.contact')}</Link>
              </li>
              <li>
                <Link href="/getting-started" className="hover:text-blue-300">{t('navigation.gettingStarted', 'Get Started')}</Link>
              </li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.ourServices')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#bookkeeping-zzp" className="hover:text-blue-300">{t('footer.bookkeepingZZP')}</Link>
              </li>
              <li>
                <Link href="/services#bookkeeping-bv" className="hover:text-blue-300">{t('footer.bookkeepingBV')}</Link>
              </li>
              <li>
                <Link href="/services#payroll" className="hover:text-blue-300">{t('footer.payrollServices')}</Link>
              </li>
              <li>
                <Link href="/services#business-formation" className="hover:text-blue-300">{t('footer.businessFormation')}</Link>
              </li>
              <li>
                <Link href="/services#personal-loans" className="hover:text-blue-300">{t('footer.personalLoans')}</Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-300">{t('footer.privacyPolicy')}</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-blue-300">{t('footer.termsOfService')}</Link>
              </li>
            </ul>
            
            {/* Get Started CTA in footer */}
            <div className="mt-6 pt-4 border-t border-blue-700">
              <Link href="/getting-started" className="inline-block px-4 py-2 bg-white text-blue-800 rounded-md hover:bg-blue-100 transition-colors font-medium">
                {t('navigation.gettingStarted', 'Get Started')}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Glodinas Finance B.V. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
