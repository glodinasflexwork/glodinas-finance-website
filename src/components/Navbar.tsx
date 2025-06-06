'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

// Define proper TypeScript interfaces
interface NavLinkProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  // Handle scroll event for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Custom Link component that closes the menu when clicked
  const NavLink = ({ href, className, children }: NavLinkProps) => {
    return (
      <Link href={href} className={className} onClick={handleLinkClick}>
        {children}
      </Link>
    );
  };

  return (
    <nav className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center" onClick={handleLinkClick}>
              {/* Official Glodinas Finance logo */}
              <img 
                src="/images/logo/glodinas-logo.png" 
                alt="Glodinas Finance Logo" 
                className="h-12 w-auto transition-transform hover:scale-105" 
              />
            </Link>
          </div>
          
          {/* Call CTA in top navigation */}
          <div className="hidden md:flex items-center mr-4">
            <a href="tel:+31681348551" className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors px-3 py-2 rounded-md hover:bg-blue-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Speak to an Advisor
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
              {t('navigation.home')}
            </Link>
            <Link href="/about" className="px-3 py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
              {t('navigation.about')}
            </Link>
            <Link href="/services" className="px-3 py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
              {t('navigation.services')}
            </Link>
            <Link href="/blog" className="px-3 py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
              {t('navigation.blog')}
            </Link>
            <Link href="/contact" className="px-3 py-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
              {t('navigation.contact')}
            </Link>
            <Link href="/getting-started" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md">
              {t('navigation.gettingStarted', 'Get Started')}
            </Link>
            <LanguageSwitcher />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-md text-blue-600 hover:text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
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
      <div 
        className={`${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 bg-white shadow-inner border-t border-gray-100">
          {/* Call CTA in mobile menu */}
          <a href="tel:+31681348551" className="flex items-center px-4 py-3 text-blue-600 hover:text-blue-800 font-medium bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Speak to an Advisor
          </a>
          
          <div className="space-y-2">
            <NavLink href="/" className="block px-4 py-3 text-blue-600 hover:text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              {t('navigation.home')}
            </NavLink>
            <NavLink href="/about" className="block px-4 py-3 text-blue-600 hover:text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              {t('navigation.about')}
            </NavLink>
            <NavLink href="/services" className="block px-4 py-3 text-blue-600 hover:text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              {t('navigation.services')}
            </NavLink>
            <NavLink href="/blog" className="block px-4 py-3 text-blue-600 hover:text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              {t('navigation.blog')}
            </NavLink>
            <NavLink href="/contact" className="block px-4 py-3 text-blue-600 hover:text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              {t('navigation.contact')}
            </NavLink>
          </div>
          
          <NavLink href="/getting-started" className="block w-full px-4 py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center shadow-sm">
            {t('navigation.gettingStarted', 'Get Started')}
          </NavLink>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
