import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery'; // Import the original Gallery component
import PageHero from '@/components/PageHero'; // Import the new component

// TODO: Replace with a relevant background image URL for Gallery
const galleryHeroImageUrl = 'https://images.unsplash.com/photo-1531884070720-875c7622d4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'; // Example: Camera/Photos

const GalleryPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
         <PageHero
          title="Photo Gallery"
          subtitle="A glimpse into the stunning landscapes and memorable moments from our tours."
          backgroundImageUrl={galleryHeroImageUrl}
        />
        {/* Render the original Gallery component */}
        <div className="py-16 md:py-24">
            <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage; 