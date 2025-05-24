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
            <h3 className="text-xl font-bold mb-4">{nav.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-300 hover:text-white transition duration-300">
                  {nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-300 hover:text-white transition duration-300">
                  {nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-300 hover:text-white transition duration-300">
                  {nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-white transition duration-300">
                  {nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">{nav.services}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/services#bookkeeping-zzp`} className="text-gray-300 hover:text-white transition duration-300">
                  {nav.bookkeepingZZP}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#bookkeeping-bv`} className="text-gray-300 hover:text-white transition duration-300">
                  {nav.bookkeepingBV}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#tax-preparation`} className="text-gray-300 hover:text-white transition duration-300">
                  {nav.taxPreparation}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#business-formation`} className="text-gray-300 hover:text-white transition duration-300">
                  {nav.businessFormation}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">{nav.legal}</h3>
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
          
          {/* Language Switcher */}
          <div className="flex space-x-4">
            <Link 
              href={pathname.replace(`/${locale}`, '/nl')} 
              locale="nl"
              className={`flex items-center ${locale === 'nl' ? 'text-white' : 'text-gray-400 hover:text-white'} transition duration-300`}
            >
              <span className="mr-1">🇳🇱</span> NL
            </Link>
            <Link 
              href={pathname.replace(`/${locale}`, '/en')} 
              locale="en"
              className={`flex items-center ${locale === 'en' ? 'text-white' : 'text-gray-400 hover:text-white'} transition duration-300`}
            >
              <span className="mr-1">🇬🇧</span> EN
            </Link>
            <Link 
              href={pathname.replace(`/${locale}`, '/ro')} 
              locale="ro"
              className={`flex items-center ${locale === 'ro' ? 'text-white' : 'text-gray-400 hover:text-white'} transition duration-300`}
            >
              <span className="mr-1">🇷🇴</span> RO
            </Link>
            <Link 
              href={pathname.replace(`/${locale}`, '/tr')} 
              locale="tr"
              className={`flex items-center ${locale === 'tr' ? 'text-white' : 'text-gray-400 hover:text-white'} transition duration-300`}
            >
              <span className="mr-1">🇹🇷</span> TR
            </Link>
            <Link 
              href={pathname.replace(`/${locale}`, '/ru')} 
              locale="ru"
              className={`flex items-center ${locale === 'ru' ? 'text-white' : 'text-gray-400 hover:text-white'} transition duration-300`}
            >
              <span className="mr-1">🇷🇺</span> RU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
