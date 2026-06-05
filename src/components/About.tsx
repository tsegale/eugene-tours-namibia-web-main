import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 -z-10"></div>
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-namibia-sand/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-namibia-terracotta/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('about.title').includes('Eugene') 
                ? t('about.title').split('Eugene').map((part, index) => (
                    index === 0 ? part : (
                      <React.Fragment key={index}>
                        <span className="text-namibia-terracotta">Eugene</span>
                        {part}
                      </React.Fragment>
                    )
                  ))
                : t('about.title')
              }
            </h2>
            <div className="w-24 h-1 bg-namibia-terracotta mb-8"></div>
            <div className="space-y-5 text-gray-700">
              <p className="text-lg">
                {t('about.description1')}
              </p>
              <p className="text-lg">
                {t('about.description2')}
              </p>
              <p className="text-lg">
                {t('about.description3')}
              </p>
            </div>
            
            <div className="mt-10 space-y-6">
              <div className="glass-card p-6 rounded-xl bg-white/70 shadow-lg backdrop-blur-sm border border-white/20 hover:bg-white/90 transition-all duration-300">
                <h3 className="font-bold text-xl text-namibia-terracotta mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-namibia-terracotta/20 flex items-center justify-center text-namibia-terracotta mr-3">✓</span>
                  {t('about.officialRecognition')}
                </h3>
                <p>{t('about.officialRecognitionDesc')}</p>
              </div>
              <div className="glass-card p-6 rounded-xl bg-white/70 shadow-lg backdrop-blur-sm border border-white/20 hover:bg-white/90 transition-all duration-300">
                <h3 className="font-bold text-xl text-namibia-terracotta mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-namibia-terracotta/20 flex items-center justify-center text-namibia-terracotta mr-3">◎</span>
                  {t('about.location')}
                </h3>
                <p>{t('about.locationDesc')}</p>
              </div>
              <div className="glass-card p-6 rounded-xl bg-white/70 shadow-lg backdrop-blur-sm border border-white/20 hover:bg-white/90 transition-all duration-300">
                <h3 className="font-bold text-xl text-namibia-terracotta mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-namibia-terracotta/20 flex items-center justify-center text-namibia-terracotta mr-3">🚐</span>
                  {t('about.vehicleFleet')}
                </h3>
                <p>{t('about.vehicleFleetDesc')}</p>
              </div>
            </div>
          </div>
          
          <div className="relative reveal">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-namibia-sand/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-namibia-terracotta/20 rounded-full blur-xl"></div>
            <Card className="overflow-hidden border-0 shadow-xl rounded-3xl relative z-10 interactive-image">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/cb59c525-8603-4829-bfb1-d03d943c4065.png" 
                  alt="Eugene Tours and Transfers vehicles" 
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold">{t('about.ourFleet')}</h4>
                    <p className="opacity-80">{t('about.fleetDesc')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
