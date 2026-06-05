import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services'; // Import the original Services component
import PageHero from '@/components/PageHero'; // Import the new component

// TODO: Replace with a relevant background image URL for Services
const servicesHeroImageUrl = 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'; // Example: Teamwork/Planning

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PageHero
          title="Our Services"
          subtitle="Tailored tours and reliable transfers to make your Namibian journey unforgettable."
          backgroundImageUrl={servicesHeroImageUrl}
        />
        {/* Render the original Services component content */}
        {/* Add py-* padding here if needed to space content from hero */}
        <div className="py-16 md:py-24">
            <Services />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage; 