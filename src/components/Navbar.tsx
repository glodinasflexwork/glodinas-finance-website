'use client';

import { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              {/* Placeholder for logo - will be replaced with actual logo */}
              <div className="h-10 w-40 bg-blue-600 text-white flex items-center justify-center font-bold">
                Glodinas Finance
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 text-blue-600 hover:text-blue-800 font-medium">
              {t('navigation.home')}
            </Link>
            <Link href="/about" className="px-3 py-2 text-blue-600 hover:text-blue-800 font-medium">
              {t('navigation.about')}
            </Link>
            <Link href="/services" className="px-3 py-2 text-blue-600 hover:text-blue-800 font-medium">
              {t('navigation.services')}
            </Link>
            <Link href="/blog" className="px-3 py-2 text-blue-600 hover:text-blue-800 font-medium">
              {t('navigation.blog')}
            </Link>
            <Link href="/contact" className="px-3 py-2 text-blue-600 hover:text-blue-800 font-medium">
              {t('navigation.contact')}
            </Link>
            <LanguageSwitcher />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 text-blue-600 hover:text-blue-800 font-medium">
            {t('navigation.home')}
          </Link>
          <Link href="/about" className="block px-3 py-2 text-blue-600 hover:text-blue-800 font-medium">
            {t('navigation.about')}
          </Link>
          <Link href="/services" className="block px-3 py-2 text-blue-600 hover:text-blue-800 font-medium">
            {t('navigation.services')}
          </Link>
          <Link href="/blog" className="block px-3 py-2 text-blue-600 hover:text-blue-800 font-medium">
            {t('navigation.blog')}
          </Link>
          <Link href="/contact" className="block px-3 py-2 text-blue-600 hover:text-blue-800 font-medium">
            {t('navigation.contact')}
          </Link>
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
