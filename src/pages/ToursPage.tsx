import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import BookingCta from '@/components/BookingCta';

import tour1 from '@/assets/new-hero/WhatsApp Image 2026-06-05 at 10.44.12.jpeg';
import tour2 from '@/assets/new-hero/WhatsApp Image 2026-06-05 at 10.44.13.jpeg';
import tour3 from '@/assets/new-hero/WhatsApp Image 2026-06-05 at 10.44.13 (1).jpeg';
import tour4 from '@/assets/new-hero/WhatsApp Image 2026-06-05 at 10.44.13 (2).jpeg';

const tourImages = [tour1, tour2, tour3, tour4];

const ToursPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PageHero
          title="Our Tours"
          subtitle="Explore Namibia's most breathtaking landscapes and wildlife with Eugene Tours."
          backgroundImageUrl={tour1}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-namibia-darkblue mb-4">
                Tour Gallery
              </h2>
              <div className="flex items-center justify-center mb-4">
                <div className="h-1 w-20 bg-namibia-terracotta"></div>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A glimpse into the unforgettable experiences that await you on our tours across Namibia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tourImages.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-lg group"
                >
                  <img
                    src={img}
                    alt={`Eugene Tours - tour photo ${index + 1}`}
                    className="w-full h-72 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <BookingCta />
      </main>
      <Footer />
    </div>
  );
};

export default ToursPage;
