import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link as RouterLink, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import the logo image
import siteLogo from '@/assets/logo.png'; // Use the alias '@' for src
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = `font-medium transition-all duration-300 border-b-2 pb-1`;
    const activeClasses = `border-namibia-terracotta ${scrolled ? 'text-namibia-terracotta' : 'text-namibia-sand'}`;
    const inactiveClasses = `border-transparent ${scrolled ? 'text-gray-700 hover:text-namibia-terracotta' : 'text-white/90 hover:text-white'}`;
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = `block py-2 px-4 rounded-md transition-colors`;
    const activeClasses = `bg-namibia-terracotta/10 text-namibia-terracotta`;
    const inactiveClasses = `hover:bg-gray-100`;
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const handleHashLinkClick = (e: React.MouseEvent, targetId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      navigate('/', { state: { targetHash: `#${targetId}` } });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md py-3' : 'bg-transparent py-6'
      } md:bg-transparent md:shadow-none ${
        scrolled ? 'md:bg-white/95 md:shadow-md md:py-3' : 'md:py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <RouterLink to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={siteLogo} alt="Eugene Tours & Transfers Logo" className="h-12 md:h-16 transition-all duration-300" />
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={getNavLinkClass}>{t('navbar.home')}</NavLink>
            <NavLink to="/services" className={getNavLinkClass}>{t('navbar.services')}</NavLink>
            <NavLink to="/destinations" className={getNavLinkClass}>{t('navbar.destinations')}</NavLink>
            <NavLink to="/gallery" className={getNavLinkClass}>{t('navbar.gallery')}</NavLink>
            <NavLink
              to="/#about"
              onClick={(e) => handleHashLinkClick(e, 'about')}
              className={getNavLinkClass}
            >
              {t('navbar.about')}
            </NavLink>
            <NavLink
              to="/#contact"
              onClick={(e) => handleHashLinkClick(e, 'contact')}
              className={getNavLinkClass}
            >
              {t('navbar.contact')}
            </NavLink>
            <LanguageSwitcher />
            <RouterLink
              to="/booking"
              className={`inline-block px-5 py-2 rounded-md font-semibold text-white bg-namibia-terracotta hover:bg-namibia-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-namibia-orange focus:ring-offset-2 ${
                scrolled ? '' : 'shadow-lg shadow-namibia-terracotta/30'
              }`}
            >
              {t('navbar.bookNow')}
            </RouterLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`focus:outline-none text-gray-700`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 bg-white shadow-lg mt-2 rounded-md' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 px-2">
            <NavLink to="/" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.home')}</NavLink>
            <NavLink to="/services" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.services')}</NavLink>
            <NavLink to="/destinations" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.destinations')}</NavLink>
            <NavLink to="/gallery" className={getMobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>{t('navbar.gallery')}</NavLink>
            <NavLink
              to="/#about"
              className={getMobileNavLinkClass}
              onClick={(e) => handleHashLinkClick(e, 'about')}
            >
              {t('navbar.about')}
            </NavLink>
            <NavLink
              to="/#contact"
              className={getMobileNavLinkClass}
              onClick={(e) => handleHashLinkClick(e, 'contact')}
            >
              {t('navbar.contact')}
            </NavLink>
            <div className="px-2 py-2">
              <LanguageSwitcher variant="footer" />
            </div>
            <div className="pt-2 px-2">
              <RouterLink
                to="/booking"
                className="block w-full px-4 py-3 text-center rounded-md font-semibold text-white bg-namibia-terracotta hover:bg-namibia-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-namibia-orange focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navbar.bookNow')}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
