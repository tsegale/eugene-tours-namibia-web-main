
import React, { useEffect, useState } from 'react';
import { Car, Plane, Bus, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { t } = useTranslation();

  const serviceData = [
    {
      title: t('services.airportTransfers.title'),
      description: t('services.airportTransfers.description'),
      icon: <Plane className="h-12 w-12 text-namibia-terracotta" />
    },
    {
      title: t('services.cruiseExcursions.title'),
      description: t('services.cruiseExcursions.description'),
      icon: <Bus className="h-12 w-12 text-namibia-terracotta" />
    },
    {
      title: t('services.namibiaTours.title'),
      description: t('services.namibiaTours.description'),
      icon: <Car className="h-12 w-12 text-namibia-terracotta" />
    },
    {
      title: t('services.privateTransfers.title'),
      description: t('services.privateTransfers.description'),
      icon: <Users className="h-12 w-12 text-namibia-terracotta" />
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        setScrolled(rect.top <= window.innerHeight * 0.8);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Modern background with soft gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-gray-50 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-namibia-sand/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-namibia-terracotta/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-24 transition-all duration-700 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-5">
            {t('services.title').includes('Services') 
              ? t('services.title').split('Services').map((part, index) => (
                  index === 0 ? part : (
                    <React.Fragment key={index}>
                      <span className="text-namibia-terracotta">Services</span>
                      {part}
                    </React.Fragment>
                  )
                ))
              : t('services.title')
            }
          </h2>
          <div className="w-24 h-1 bg-namibia-terracotta mx-auto"></div>
          <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <Card 
              key={index} 
              className={`service-card transition-all duration-700 rounded-xl overflow-hidden ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} 
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="flex flex-col items-center pt-10 pb-6">
                <div className={`p-5 rounded-2xl bg-white shadow-md transition-all duration-300 ${hoveredCard === index ? 'scale-110 bg-namibia-sand/10' : ''}`}>
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center pb-10">
                <CardTitle className="text-2xl mb-4 font-heading">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
