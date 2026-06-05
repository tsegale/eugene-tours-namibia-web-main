import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, CreditCard, Euro } from 'lucide-react';
import { Card as UICard, CardContent } from '@/components/ui/card';

const TourDetails = () => {
  const { t } = useTranslation();

  return (
    <section id="tour-details" className="py-24 bg-gradient-to-b from-namibia-sand/10 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Tour Details Card */}
          <UICard className="shadow-xl rounded-3xl overflow-hidden border-0">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-namibia-darkblue">
                  {t('tourDetails.title')}
                </h2>
                <div className="w-24 h-1 bg-namibia-terracotta mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 mb-8">
                  {t('tourDetails.subtitle')}
                </p>
              </div>

              {/* Tour Description */}
              <div className="bg-namibia-terracotta/5 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-namibia-terracotta mb-4 flex items-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  {t('tourDetails.description')}
                </h3>
              </div>

              {/* Booking Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h4 className="text-xl font-bold text-namibia-darkblue mb-4 flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-namibia-terracotta" />
                    Booking Information
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t('tourDetails.booking')}
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h4 className="text-xl font-bold text-namibia-darkblue mb-4 flex items-center">
                    <Euro className="h-5 w-5 mr-2 text-namibia-terracotta" />
                    Pricing
                  </h4>
                  <p className="text-2xl font-bold text-namibia-terracotta">
                    {t('tourDetails.price')}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    {t('tourDetails.payment')}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  'Walvisbay Lagoon (pelicans and flamingos)',
                  'Pink Salt Lakes',
                  'Dune 5 with refreshments included',
                  'Swakopmund town (2-3 hours)',
                  'Moon Landscape',
                  'Goani Gontes Oasis',
                  'Welwitchia Plants',
                  'Dune 7 (admission extra)'
                ].map((feature, index) => (
                  <div key={index} className="bg-gradient-to-r from-namibia-sand/20 to-namibia-terracotta/10 rounded-lg p-4 text-center">
                    <div className="w-3 h-3 bg-namibia-terracotta rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-r from-namibia-darkblue to-namibia-terracotta text-white rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Phone className="h-8 w-8 mx-auto mb-3 text-namibia-sand" />
                    <h5 className="font-bold mb-2">Phone</h5>
                    <p className="text-sm text-gray-200">+264817055147</p>
                  </div>
                  <div>
                    <Mail className="h-8 w-8 mx-auto mb-3 text-namibia-sand" />
                    <h5 className="font-bold mb-2">Email</h5>
                    <p className="text-sm text-gray-200">eugene@eugenetours.net</p>
                  </div>
                  <div>
                    <CreditCard className="h-8 w-8 mx-auto mb-3 text-namibia-sand" />
                    <h5 className="font-bold mb-2">Payment</h5>
                    <p className="text-sm text-gray-200">Cash or Card</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </UICard>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;

