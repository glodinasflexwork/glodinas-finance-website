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
              {/* Official Glodinas Finance logo */}
              <img 
                src="/images/logo/glodinas-logo.png" 
                alt="Glodinas Finance Logo" 
                className="h-10 w-auto" 
              />
            </Link>
          </div>
          
          {/* Phone number in top navigation */}
          <div className="hidden md:flex items-center mr-4">
            <a href="tel:+31681348551" className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (6) 81 34 85 51
            </a>
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
            <Link href="/getting-started" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">
              {t('navigation.gettingStarted', 'Get Started')}
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
          {/* Phone number in mobile menu */}
          <a href="tel:+31681348551" className="flex items-center px-3 py-2 text-blue-600 hover:text-blue-800 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (6) 81 34 85 51
          </a>
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
          <Link href="/getting-started" className="block px-3 py-2 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">
            {t('navigation.gettingStarted', 'Get Started')}
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
