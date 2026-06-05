import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import TourDetails from '@/components/TourDetails';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import BookingCta from '@/components/BookingCta';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Import social media feedback images
import fbFeedback1 from '@/assets/fb-feedback-1.jpg';
import fbFeedback2 from '@/assets/fb-feedback-2.jpg';
import fbFeedback3 from '@/assets/fb-feedback-3.jpg';
import fbFeedback from '@/assets/fb-feedback.jpg';

const SocialFeedback = () => {
  const { t } = useTranslation();
  
  return (
    <section id="social-feedback" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-namibia-darkblue mb-4">{t('socialFeedback.title')}</h2>
          <div className="flex items-center justify-center">
            <div className="h-1 w-20 bg-namibia-terracotta mr-2"></div>
            <Facebook className="text-blue-600 h-6 w-6" />
            <div className="h-1 w-20 bg-namibia-terracotta ml-2"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{t('socialFeedback.subtitle')}</p>
        </div>

      {/* Horizontal scrolling container */}
      <div className="relative">
        <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {/* Testimonial 1 */}
          <div className="flex-none w-80 md:w-96 mr-4 snap-start">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-64 overflow-hidden">
                <img src={fbFeedback1} alt="Facebook feedback" className="w-full h-full object-contain bg-gray-100" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Heiki Reiki</h3>
                <p className="text-gray-600 italic mb-2">
                  "Der Ausflug war wirklich toll und Guide und Reiseleiter haben dich viel Mühe gegeben. Danke, man kann den Ausflug nur weiter empfehlen."
                </p>
                <p className="text-gray-700">
                  "The excursion was really great and the guide and tour leader put in a lot of effort. Thank you, I can only recommend this tour further."
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex-none w-80 md:w-96 mr-4 snap-start">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-64 overflow-hidden">
                <img src={fbFeedback2} alt="Facebook feedback" className="w-full h-full object-contain bg-gray-100" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Wilfried Gerntrup</h3>
                <p className="text-gray-600 italic mb-2">
                  "Mit Eugene war ich auch unterwegs. War ein super Tag. Eines der Highlights war für mich der Besuch der Oase."
                </p>
                <p className="text-gray-700">
                  "I was also traveling with Eugene. It was a great day. One of the highlights for me was visiting the oasis."
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex-none w-80 md:w-96 mr-4 snap-start">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-64 overflow-hidden">
                <img src={fbFeedback3} alt="Facebook feedback" className="w-full h-full object-contain bg-gray-100" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Marion Graßhoff</h3>
                <p className="text-gray-600 italic mb-2">
                  "Es war gestern eine ganz tolle Tour mit netten Menschen. Wir haben viel gesehen und können Eugene nur empfehlen, vielen Dank für die schönen Erlebnisse 👍😋🙋🏽‍♂️"
                </p>
                <p className="text-gray-700">
                  "Yesterday was a great tour with nice people. We saw a lot and can only recommend Eugene, many thanks for the beautiful experiences 👍😋🙋🏽‍♂️"
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="flex-none w-80 md:w-96 snap-start">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-64 overflow-hidden">
                <img src={fbFeedback} alt="Facebook feedback" className="w-full h-full object-contain bg-gray-100" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Elke Paukner</h3>
                <p className="text-gray-600 italic mb-2">
                  "30.01.2025 wunderschöne Wüste Namibias. Swakobmund, Salzseen, Oase, blühende Welwitchia... sehr empfehlenswerter Auflug mit Eugene."
                </p>
                <p className="text-gray-700">
                  "30.01.2025 beautiful Namibian desert. Swakopmund, salt lakes, oasis, flowering Welwitchia... highly recommended excursion with Eugene."
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 5 - Additional Elke Paukner Feedback */}
          <div className="flex-none w-80 md:w-96 snap-start">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-64 overflow-hidden">
                <img src={fbFeedback1} alt="Facebook feedback detailed" className="w-full h-full object-contain bg-gray-100" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Elke Paukner (Detailed)</h3>
                <p className="text-gray-600 italic mb-2">
                  "Walvis Bay: Flamingos - da hatten wir noch keine Sonne. Trotzdem toll!"
                </p>
                <p className="text-gray-700">
                  "Walvis Bay: Flamingos - we didn't have sun yet. Still great!"
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 6 - Facebook feedback */}
          <div className="flex-none w-80 md:w-96 snap-start">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="h-64 overflow-hidden">
                <img src={fbFeedback} alt="Facebook feedback main" className="w-full h-full object-contain bg-gray-100" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">General Feedback</h3>
                <p className="text-gray-600 italic mb-2">
                  "See our Facebook page for more real guest experiences and reviews!"
                </p>
                <p className="text-gray-700">
                  "Sehen Sie unsere Facebook-Seite für mehr echte Gästeerlebnisse und Bewertungen!"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 text-center text-gray-400 text-sm">
          <span>{t('socialFeedback.scrollHint')}</span>
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="https://www.facebook.com/share/1ARJE44GAJ/?mibextid=qi2Omg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 bg-white rounded-md font-medium hover:bg-blue-50 transition-colors"
        >
          <Facebook className="mr-2 h-5 w-5" />
          {t('socialFeedback.seeMoreReviews')}
        </a>
      </div>
      </div>
    </section>
  );
};

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.targetHash) {
      const targetElement = document.querySelector(location.state.targetHash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          navigate(location.pathname, { replace: true, state: {} });
        }, 100);
      } else {
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location.state, navigate, location.pathname]);

  useEffect(() => {
    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal');
      
      elements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          // Optional: Hide elements when they leave the viewport
          // element.classList.remove('active');
        }
      });
    };
    
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        // Cast element to HTMLElement to access style property
        const htmlElement = element as HTMLElement;
        // Convert speed to number to fix type error
        const speed = parseFloat(htmlElement.getAttribute('data-speed') || '0.2');
        const yPos = -(window.scrollY * speed);
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };

    const handleScroll = () => {
      revealElements();
      if (document.querySelectorAll('.parallax').length > 0) handleParallax();
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <section id="home" className="relative">
          <Hero />
        </section>
        <About />
        <Services />
        <TourDetails />
        <Testimonials />
        <SocialFeedback />
        <BookingCta />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
