import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import new assets images
import etoshaImg from '@/assets/etosha.jpg';
import fbImg from '@/assets/FB_IMG_1745398679796.jpg';
import moonlandscapeImg from '@/assets/moonlack.jpg';
import sossusvleiImg from '@/assets/Sossulveli.jpg';
import windhoekImg from '@/assets/windhoek.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();
  
  // Array of background images to cycle through
  const backgroundImages = [
    etoshaImg, // Etosha National Park
    moonlandscapeImg, // Moon landscape
    sossusvleiImg, // Sossusvlei dunes
    windhoekImg, // Windhoek city
  ];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Image carousel effect
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section min-h-[100vh] flex items-center justify-center text-white relative overflow-hidden">
      {/* Background images carousel with fade transition */}
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-2000"
          style={{ 
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0
          }}
        />
      ))}
      
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>
      
      {/* Modern animated background elements with glassmorphism */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-namibia-terracotta/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-namibia-sand/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 left-1/4 w-[28rem] h-[28rem] bg-namibia-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-30">
        <div className="max-w-4xl mx-auto">
                    
          <h1 
            className={`text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
          >
            {t('hero.title').split('Namibia').map((part, index) => (
              index === 1 ? (
                <span key={index} className="text-namibia-sand">Namibia</span>
              ) : (
                <span key={index}>{part}</span>
              )
            ))}
          </h1>
          
          <p 
            className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
          >
            {t('hero.subtitle')}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <RouterLink to="/booking">
              <Button className="bg-namibia-terracotta hover:bg-namibia-orange text-white px-10 py-7 text-lg rounded-full shadow-lg shadow-namibia-terracotta/30 hover:shadow-xl hover:shadow-namibia-terracotta/40 transition-all duration-300 btn-animate group">
                {t('hero.bookTour')}
                <span className="ml-2 transition-all group-hover:translate-x-1">→</span>
              </Button>
            </RouterLink>
            <Button 
              className="bg-white hover:bg-gray-100 text-namibia-darkblue px-10 py-7 text-lg rounded-full shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 btn-animate"
              onClick={scrollToContact}
            >
              {t('hero.contactUs')}
            </Button>
          </div>
          
          <div className={`absolute bottom-10 left-0 right-0 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={scrollToServices} 
              className="animate-bounce p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
