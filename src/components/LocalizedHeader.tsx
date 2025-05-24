'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const nav = useTranslations('navigation');
  const params = useParams();
  const locale = params.locale as string;
  const pathname = usePathname();
  
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Language dropdown state
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  
  // Check if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Effect to check screen size
  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close language dropdown when opening mobile menu
    if (!mobileMenuOpen) {
      setLangDropdownOpen(false);
    }
  };
  
  // Toggle language dropdown
  const toggleLangDropdown = () => {
    setLangDropdownOpen(!langDropdownOpen);
  };
  
  // Get localized path for navigation
  const getLocalizedPath = (path: string) => {
    if (path === '/') {
      return `/${locale}`;
    }
    return `/${locale}${path}`;
  };
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href={getLocalizedPath('/')} className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Glodinas Finance Logo" 
              width={180} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href={getLocalizedPath('/')}
              className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                pathname === `/${locale}` ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {nav.home}
            </Link>
            <Link 
              href={getLocalizedPath('/about')}
              className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                pathname.includes('/about') ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {nav.about}
            </Link>
            <Link 
              href={getLocalizedPath('/services')}
              className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                pathname.includes('/services') ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {nav.services}
            </Link>
            <Link 
              href={getLocalizedPath('/getting-started')}
              className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                pathname.includes('/getting-started') ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {nav.gettingStarted}
            </Link>
            <Link 
              href={getLocalizedPath('/contact')}
              className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                pathname.includes('/contact') ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {nav.contact}
            </Link>
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={toggleLangDropdown}
                className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300"
              >
                {locale === 'nl' && <span className="mr-1">🇳🇱</span>}
                {locale === 'en' && <span className="mr-1">🇬🇧</span>}
                {locale === 'ro' && <span className="mr-1">🇷🇴</span>}
                {locale === 'tr' && <span className="mr-1">🇹🇷</span>}
                {locale === 'ru' && <span className="mr-1">🇷🇺</span>}
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              
              {/* Language Dropdown */}
              {langDropdownOpen && (
                <div className={`absolute ${isMobile ? 'left-0' : 'right-0'} mt-2 w-40 bg-white rounded-md shadow-lg z-20`}>
                  <div className="py-1">
                    <Link 
                      href={pathname.replace(`/${locale}`, '/nl')} 
                      locale="nl"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      <span className="mr-2">🇳🇱</span> Nederlands
                    </Link>
                    <Link 
                      href={pathname.replace(`/${locale}`, '/en')} 
                      locale="en"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      <span className="mr-2">🇬🇧</span> English
                    </Link>
                    <Link 
                      href={pathname.replace(`/${locale}`, '/ro')} 
                      locale="ro"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      <span className="mr-2">🇷🇴</span> Română
                    </Link>
                    <Link 
                      href={pathname.replace(`/${locale}`, '/tr')} 
                      locale="tr"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      <span className="mr-2">🇹🇷</span> Türkçe
                    </Link>
                    <Link 
                      href={pathname.replace(`/${locale}`, '/ru')} 
                      locale="ru"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      <span className="mr-2">🇷🇺</span> Русский
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            {/* Language Switcher for Mobile */}
            <div className="relative mr-4">
              <button 
                onClick={toggleLangDropdown}
                className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300"
              >
                {locale === 'nl' && <span className="mr-1">🇳🇱</span>}
                {locale === 'en' && <span className="mr-1">🇬🇧</span>}
                {locale === 'ro' && <span className="mr-1">🇷🇴</span>}
                {locale === 'tr' && <span className="mr-1">🇹🇷</span>}
                {locale === 'ru' && <span className="mr-1">🇷🇺</span>}
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              
              {/* Language Dropdown for Mobile */}
              {langDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg z-20">
                  <div className="py-1">
                    <Link 
                      href={pathname.replace(`/${locale}`, '/nl')} 
                      locale="nl"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      <span className="mr-2">🇳🇱</span> Nederlands
                    </Link>
                    <Link 
                      href={pathname.replace(`/${locale}`, '/en')} 
                      locale="en"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      <span className="mr-2">🇬🇧</span> English
                    </Link>
                    <Link 
                      href={pathname.replace(`/${locale}`, '/ro')} 
                      locale="ro"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      <span className="mr-2">🇷🇴</span> Română
                    </Link>
                    <Link 
                      href={pathname.replace(`/${locale}`, '/tr')} 
                      locale="tr"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      <span className="mr-2">🇹🇷</span> Türkçe
                    </Link>
                    <Link 
                      href={pathname.replace(`/${locale}`, '/ru')} 
                      locale="ru"
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      <span className="mr-2">🇷🇺</span> Русский
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href={getLocalizedPath('/')}
                className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                  pathname === `/${locale}` ? 'font-semibold text-blue-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.home}
              </Link>
              <Link 
                href={getLocalizedPath('/about')}
                className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                  pathname.includes('/about') ? 'font-semibold text-blue-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.about}
              </Link>
              <Link 
                href={getLocalizedPath('/services')}
                className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                  pathname.includes('/services') ? 'font-semibold text-blue-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.services}
              </Link>
              <Link 
                href={getLocalizedPath('/getting-started')}
                className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                  pathname.includes('/getting-started') ? 'font-semibold text-blue-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.gettingStarted}
              </Link>
              <Link 
                href={getLocalizedPath('/contact')}
                className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                  pathname.includes('/contact') ? 'font-semibold text-blue-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.contact}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
