import React from 'react';
import DestinationCard, { DestinationProps } from './DestinationCard';

// Import images from the src/assets folder
import swakopmundLighthouseImg from '../assets/swakopmund-lighthouse.jpg';
import walvisBayLagoonImg from '../assets/swakopmund-lagoon.jpg';
import pinkLakesImg from '../assets/swakopmund-pink-lack.jpg';
import namibDunesImg from '../assets/dune 7.jpg';
// Assuming the moonlandscape image is named moonlandscape.jpg in src/assets/destinations
import moonlandscapeImg from '../assets/moonlack.jpg';
// Assuming the pelican point image is named pelican-point.jpg in src/assets/destinations
import pelicanPointImg from '../assets/swakop-palican-place.jpg';
// Add new destinations images
// You'll need to ensure these image files exist in your assets folder
import windhoekImg from '../assets/windhoek.jpg'; // Add this image to your assets
import etoshaImg from '../assets/etosha.jpg'; // Add this image to your assets
// Add the Sossusvlei image import
import sossusvleiImg from '../assets/Sossulveli.jpg';

const destinations: DestinationProps[] = [
  {
    name: 'Swakopmund Town',
    description: 'Explore the charming coastal town with its unique German colonial architecture, museums, and iconic lighthouse.',
    image: swakopmundLighthouseImg,
  },
  {
    name: 'Walvis Bay Lagoon',
    description: 'Witness thousands of flamingos feeding in the nutrient-rich lagoon, a Ramsar wetland site of international importance.',
    image: walvisBayLagoonImg,
  },
  {
    name: 'Pink Salt Lakes',
    description: 'Discover the surreal beauty of the vibrant pink salt pans near Walvis Bay, a result of algae and unique microorganisms.',
    image: pinkLakesImg,
  },
  {
    name: 'Namib Dunes (Dune 5)',
    description: 'Experience the towering sand dunes of the Namib Desert, including the famous Dune 5, offering breathtaking views and adventure.',
    image: namibDunesImg,
  },
  {
    name: 'Moonlandscape',
    description: 'Journey through the ancient, eroded valleys of the Swakop River, resembling a lunar surface carved over millions of years.',
    image: moonlandscapeImg,
  },
  {
    name: 'Pelican Point & Marine Life',
    description: 'Get up close with seals, dolphins, and diverse birdlife on a marine cruise or kayaking adventure near Pelican Point.',
    image: pelicanPointImg,
  },
  // Add new destinations
  {
    name: 'Windhoek',
    description: 'Discover Namibia\'s capital city with its blend of African and German influences, historic landmarks, and vibrant markets. Enjoy modern amenities alongside cultural heritage sites.',
    image: windhoekImg,
  },
  {
    name: 'Etosha National Park',
    description: 'Experience one of Africa\'s premier wildlife sanctuaries spanning over 22,000 sq km. Home to lions, elephants, rhinos, giraffes and hundreds of other species around the iconic Etosha Pan salt flat.',
    image: etoshaImg,
  },
  // Add Sossusvlei as a new destination
  {
    name: 'Sossusvlei',
    description: 'Visit one of Namibia\'s most iconic landscapes featuring towering red sand dunes, stark dead trees in clay pans, and breathtaking desert scenery. The area includes famous sites like Dead Vlei and Big Daddy dune.',
    image: sossusvleiImg,
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Explore Our Key Destinations
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the diverse and breathtaking landscapes and wildlife hotspots we cover on our tours across Namibia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard 
              key={index}
              name={destination.name}
              description={destination.description}
              image={destination.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations; 