'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const t = useTranslations('footer');
  const nav = useTranslations('navigation');
  const params = useParams();
  const locale = params.locale as string;
  const pathname = usePathname();
  
  // Get the year for copyright
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Glodinas Finance</h3>
            <p className="text-gray-300 mb-4">{t('address')}</p>
            <p className="text-gray-300">info@glodinas-finance.com</p>
            <p className="text-gray-300">+31 20 123 4567</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('links.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-300 hover:text-white transition duration-300">
                  {nav('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-300 hover:text-white transition duration-300">
                  {nav('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-300 hover:text-white transition duration-300">
                  {nav('services')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-white transition duration-300">
                  {nav('contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">{nav('services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/services#bookkeeping-zzp`} className="text-gray-300 hover:text-white transition duration-300">
                  {t('services.bookkeepingZZP')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#bookkeeping-bv`} className="text-gray-300 hover:text-white transition duration-300">
                  {t('services.bookkeepingBV')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#tax-preparation`} className="text-gray-300 hover:text-white transition duration-300">
                  {t('services.taxPreparation')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#business-formation`} className="text-gray-300 hover:text-white transition duration-300">
                  {t('services.businessFormation')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('links.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/privacy-policy`} className="text-gray-300 hover:text-white transition duration-300">
                  {t('links.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms-of-service`} className="text-gray-300 hover:text-white transition duration-300">
                  {t('links.termsOfService')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('copyright').replace('2025', currentYear.toString())}
          </p>
          
          {/* Language Switcher - Removed to avoid duplication with header dropdown */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
