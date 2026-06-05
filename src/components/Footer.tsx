import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import the REGULAR logo image instead
import siteLogo from '@/assets/logo.png'; // Use the alias '@' for src
import ntbLogo from '@/assets/Namibia-Tourism-Board-Logo.jpg'; // Add this import
import LanguageSwitcher from './LanguageSwitcher';

// Simple Facebook SVG Icon Component
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer className="bg-namibia-darkblue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src={siteLogo}
                alt="Eugene Tours & Transfers Logo"
                className="h-16 bg-white p-1 rounded"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Your premier choice for unforgettable tours and reliable transfers in Swakopmund and Walvis Bay, Namibia.
            </p>
            {/* Namibia Tourism Board Logo */}
            <div className="mt-6">
              <img
                src={ntbLogo}
                alt="Namibia Tourism Board Logo"
                className="h-14 w-auto object-contain bg-white p-1 rounded"
              />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-namibia-sand">Quick Links</h4>
            <ul className="space-y-2 mb-6">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">{t('navbar.home')}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">{t('navbar.services')}</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white transition-colors">{t('navbar.destinations')}</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">{t('navbar.gallery')}</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-white transition-colors">{t('navbar.bookNow')}</Link></li>
            </ul>
            <LanguageSwitcher variant="footer" />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-namibia-sand">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-namibia-sand" />
                <span>Park View, Hage Geingob St, Walvis Bay</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-namibia-sand" />
                <div>
                    <a href="tel:+264817055147" className="hover:text-white transition-colors block">+264 81 705 5147</a>
                    <a href="tel:+264814655655" className="hover:text-white transition-colors block">+264 81 465 5655</a>
                </div>
              </li>
               <li className="flex items-center text-green-400">
                 <MessageCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                 <span className="text-sm">WhatsApp: +264 81 705 5147</span>
               </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-namibia-sand" />
                 <div>
                    <a href="mailto:eugene@eugenetours.net" className="hover:text-white transition-colors break-all block">eugene@eugenetours.net</a>
                    <a href="mailto:vdmshuttle@gmail.com" className="hover:text-white transition-colors break-all block">vdmshuttle@gmail.com</a>
                 </div>
              </li>
            </ul>
        </div>
        
          <div>
            <h4 className="text-lg font-semibold mb-4 text-namibia-sand">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1ARJE44GAJ/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          &copy; {currentYear} Eugene Tours & Transfers. All Rights Reserved.
          <br />
          <span>
            Website designed by{" "}
            <a
              href="https://spybitech.com.na/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              spybitech.com.na
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
