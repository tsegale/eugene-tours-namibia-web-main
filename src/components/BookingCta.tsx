import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from 'react-router-dom';

const BookingCta = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverButton, setHoverButton] = useState<number | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.booking-cta-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight * 0.8);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the contact section when Contact Us is clicked
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="booking-cta" className="py-20 booking-cta-section relative overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb')",
        }}
      ></div>
      
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-namibia-sand/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Explore Namibia?</h2>
          <p className="text-xl text-white/90 mb-10">
            Book your tour or transfer with us and experience the beauty of Namibia with professional guides and comfortable transportation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <RouterLink to="/booking">
              <Button 
                className={`bg-namibia-terracotta hover:bg-namibia-orange text-xl px-10 py-7 relative overflow-hidden btn-animate ${
                  hoverButton === 0 ? 'shadow-lg shadow-namibia-terracotta/30' : ''
                }`}
                onMouseEnter={() => setHoverButton(0)}
                onMouseLeave={() => setHoverButton(null)}
              >
                <span className="relative z-10 flex items-center">
                  Book a Tour
                  <svg 
                    className={`ml-2 w-5 h-5 transition-transform duration-300 ${hoverButton === 0 ? 'translate-x-1' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Button>
            </RouterLink>
            <Button 
              className={`bg-white hover:bg-gray-100 text-namibia-darkblue text-xl px-10 py-7 relative overflow-hidden btn-animate ${
                hoverButton === 1 ? 'shadow-lg shadow-white/30' : ''
              }`}
              onMouseEnter={() => setHoverButton(1)}
              onMouseLeave={() => setHoverButton(null)}
              onClick={scrollToContact}
            >
              <span className="relative z-10 flex items-center">
                Contact Us
                <svg 
                  className={`ml-2 w-5 h-5 transition-transform duration-300 ${hoverButton === 1 ? 'translate-x-1' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCta;
