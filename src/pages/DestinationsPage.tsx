import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Destinations from '@/components/Destinations'; // Import the original Destinations component
import PageHero from '@/components/PageHero'; // Import the new component
import { Facebook, Instagram, Share2 } from 'lucide-react'; // Import icons

// Import the post image
import eugenePost from '@/assets/eugene-post.jpg';

// TODO: Replace with a relevant background image URL for Destinations
const destinationsHeroImageUrl = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'; // Example: Landscape

const DestinationsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
         <PageHero
          title="Explore Our Destinations"
          subtitle="Discover the breathtaking beauty and unique attractions around Swakopmund and Walvis Bay."
          backgroundImageUrl={destinationsHeroImageUrl}
        />
        
        {/* New Posts Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-namibia-darkblue mb-4">Latest Updates</h2>
              <div className="flex items-center justify-center">
                <div className="h-1 w-20 bg-namibia-terracotta mr-2"></div>
                <Facebook className="text-blue-600 h-6 w-6 mx-2" />
                <div className="h-1 w-20 bg-namibia-terracotta ml-2"></div>
              </div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Check out our latest announcement about shuttle services between Windhoek, Walvis Bay, and Swakopmund
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src={eugenePost} 
                  alt="Eugene Shuttle Services - Daily Passengers Transport between Windhoek, Walvis Bay and Swakopmund" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Daily Passenger Transport Services</h3>
                  <p className="text-gray-700 mb-4">
                    We're excited to announce our scheduled shuttle services connecting Windhoek, Walvis Bay, and Swakopmund. 
                    Perfect for tourists and locals needing reliable transportation between these key Namibian destinations.
                  </p>
                  <div className="flex justify-between items-center border-t pt-4 mt-4">
                    <div className="text-sm text-gray-600">
                      Contact us to book your seat: +264 81 705 5147
                    </div>
                    <div className="flex space-x-3">
                      <button className="text-gray-500 hover:text-blue-600 transition-colors">
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Render the original Destinations component */}
        <div className="py-16 md:py-24">
            <Destinations />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DestinationsPage; 