'use client';

import Link from 'next/link';
import { FooterTranslationProvider, useFooterTranslations } from './FooterTranslationProvider';

// Separate component that uses the isolated translation context
const FooterContent = () => {
  const { t } = useFooterTranslations();
  
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.companyInfo', 'Company Info')}</h3>
            <p className="mb-2">Schiphol Boulevard 127</p>
            <p className="mb-2">Schiphol 1118 BG</p>
            <p className="mb-2">Netherlands</p>
            <p className="mb-2">cihatkaya@glodinas.nl</p>
            <p className="mb-2">(6) 81 34 85 51</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks', 'Quick Links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300">{t('navigation.home', 'Home')}</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300">{t('navigation.about', 'About Us')}</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-300">{t('navigation.services', 'Services')}</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-300">{t('navigation.blog', 'Blog')}</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300">{t('navigation.contact', 'Contact')}</Link>
              </li>
              <li>
                <Link href="/getting-started" className="hover:text-blue-300">{t('navigation.gettingStarted', 'Getting Started')}</Link>
              </li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.ourServices', 'Our Services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#bookkeeping-zzp" className="hover:text-blue-300">{t('footer.bookkeepingZZP', 'Bookkeeping for ZZP')}</Link>
              </li>
              <li>
                <Link href="/services#bookkeeping-bv" className="hover:text-blue-300">{t('footer.bookkeepingBV', 'Bookkeeping for BV')}</Link>
              </li>
              <li>
                <Link href="/services#payroll" className="hover:text-blue-300">{t('footer.payrollServices', 'Payroll Services')}</Link>
              </li>
              <li>
                <Link href="/services#business-formation" className="hover:text-blue-300">{t('footer.businessFormation', 'Business Formation')}</Link>
              </li>
              <li>
                <Link href="/services#personal-loans" className="hover:text-blue-300">{t('footer.personalLoans', 'Personal Loans')}</Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal', 'Legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-300">{t('footer.privacyPolicy', 'Privacy Policy')}</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-blue-300">{t('footer.termsOfService', 'Terms of Service')}</Link>
              </li>
            </ul>
            
            {/* Get Started CTA in footer */}
            <div className="mt-6 pt-4 border-t border-blue-700">
              <Link href="/getting-started" className="inline-block px-4 py-2 bg-white text-blue-800 rounded-md hover:bg-blue-100 transition-colors font-medium">
                {t('navigation.gettingStarted', 'Getting Started')}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Glodinas Finance B.V. {t('footer.copyright', 'All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
};

// Main component that wraps the content with the provider
const Footer = () => {
  return (
    <FooterTranslationProvider>
      <FooterContent />
    </FooterTranslationProvider>
  );
};

export default Footer;
