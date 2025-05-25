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
            <div className="text-blue-600 font-bold text-xl">Glodinas Finance</div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href={getLocalizedPath('/')}
              className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                pathname === `/${locale}` ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {nav('home')}
            </Link>
            <Link 
              href={getLocalizedPath('/about')}
              className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                pathname.includes('/about') ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {nav('about')}
            </Link>
            <Link 
              href={getLocalizedPath('/services')}
              className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                pathname.includes('/services') ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {nav('services')}
            </Link>
            <Link 
              href={getLocalizedPath('/blog')}
              className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                pathname.includes('/blog') ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {nav('blog')}
            </Link>
            <Link 
              href={getLocalizedPath('/contact')}
              className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                pathname.includes('/contact') ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {nav('contact')}
            </Link>
            
            <Link 
              href={getLocalizedPath('/getting-started')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
            >
              {nav('gettingStarted')}
            </Link>
          </nav>
          
          {/* Language Switcher - Flag Style from Getting Started */}
          <div className="flex items-center space-x-2">
            <Link 
              href={pathname.replace(`/${locale}`, '/en')} 
              locale="en"
              className={`${locale === 'en' ? 'opacity-100 scale-110' : 'opacity-70 hover:opacity-100'} transition-all duration-300`}
            >
              <span className="text-2xl">🇬🇧</span>
            </Link>
            <Link 
              href={pathname.replace(`/${locale}`, '/nl')} 
              locale="nl"
              className={`${locale === 'nl' ? 'opacity-100 scale-110' : 'opacity-70 hover:opacity-100'} transition-all duration-300`}
            >
              <span className="text-2xl">🇳🇱</span>
            </Link>
            <Link 
              href={pathname.replace(`/${locale}`, '/ro')} 
              locale="ro"
              className={`${locale === 'ro' ? 'opacity-100 scale-110' : 'opacity-70 hover:opacity-100'} transition-all duration-300`}
            >
              <span className="text-2xl">🇷🇴</span>
            </Link>
            <Link 
              href={pathname.replace(`/${locale}`, '/tr')} 
              locale="tr"
              className={`${locale === 'tr' ? 'opacity-100 scale-110' : 'opacity-70 hover:opacity-100'} transition-all duration-300`}
            >
              <span className="text-2xl">🇹🇷</span>
            </Link>
            <Link 
              href={pathname.replace(`/${locale}`, '/ru')} 
              locale="ru"
              className={`${locale === 'ru' ? 'opacity-100 scale-110' : 'opacity-70 hover:opacity-100'} transition-all duration-300`}
            >
              <span className="text-2xl">🇷🇺</span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition duration-300 ml-4 md:hidden"
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
                {nav('home')}
              </Link>
              <Link 
                href={getLocalizedPath('/about')}
                className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                  pathname.includes('/about') ? 'font-semibold text-blue-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav('about')}
              </Link>
              <Link 
                href={getLocalizedPath('/services')}
                className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                  pathname.includes('/services') ? 'font-semibold text-blue-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav('services')}
              </Link>
              <Link 
                href={getLocalizedPath('/blog')}
                className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                  pathname.includes('/blog') ? 'font-semibold text-blue-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav('blog')}
              </Link>
              <Link 
                href={getLocalizedPath('/contact')}
                className={`text-gray-700 hover:text-blue-600 transition duration-300 ${
                  pathname.includes('/contact') ? 'font-semibold text-blue-600' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav('contact')}
              </Link>
              <Link 
                href={getLocalizedPath('/getting-started')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav('gettingStarted')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
