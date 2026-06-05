import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GalleryHorizontal, X } from 'lucide-react';

// Import existing images (assuming these are still needed)
import swakopmundLighthouseImg from '@/assets/swakopmund-lighthouse.jpg';
import walvisBayLagoonImg from '@/assets/swakopmund-lagoon.jpg';
import pinkLakesImg from '@/assets/swakopmund-pink-lack.jpg'; // Fixed path: removed extra 's', added '/'
import namibDunesImg from '@/assets/swakopmund-dunes.jpg';
import moonlandscapeImg from '@/assets/moonlack.jpg'; // Fixed path: removed space in 'assets'
import pelicanPointImg from '@/assets/swakop-palican-place.jpg'; // Corrected path if needed

// Import the new images from the 'more' folder
import moreImg1 from '@/assets/more/WhatsApp Image 2025-04-30 at 14.56.52 (1).jpeg';
import moreImg2 from '@/assets/more/WhatsApp Image 2025-04-30 at 14.56.52.jpeg';
import moreImg3 from '@/assets/more/WhatsApp Image 2025-04-30 at 14.56.53 (1).jpeg';
import moreImg4 from '@/assets/more/WhatsApp Image 2025-04-30 at 14.56.53 (2).jpeg';
import moreImg5 from '@/assets/more/WhatsApp Image 2025-04-30 at 14.56.53.jpeg';
import moreImg6 from '@/assets/more/WhatsApp Image 2025-04-30 at 14.56.54 (1).jpeg'; // Note: Order adjusted to match user list
import moreImg7 from '@/assets/more/WhatsApp Image 2025-04-30 at 14.56.54.jpeg';
import moreImg8 from '@/assets/more/WhatsApp Image 2025-04-30 at 14.56.56.jpeg'; // Note: Order adjusted to match user list

// Tour images from uploads
const tourImages = [
  "/lovable-uploads/8d653738-1b62-43cd-9e75-4c42c5278896.png", // flamingos
  "/lovable-uploads/952baac5-ea9c-4b2d-80b3-718d3884e968.png", // pelicans
  "/lovable-uploads/c21d3221-fcec-4f91-94f0-78f226c50956.png", // more flamingos
  "/lovable-uploads/1caf1258-c897-446d-8fec-61ded6f0b3be.png", // Himba woman
  "/lovable-uploads/854793a6-0ccd-4a79-be05-f70ad95956ce.png", // pink salt lakes
  "/lovable-uploads/8c5703bb-97ea-4152-be5d-ebf6388d2f48.png", // sand dunes
  "/lovable-uploads/cb59c525-8603-4829-bfb1-d03d943c4065.png", // transfer vans
  "/lovable-uploads/9ba4717d-dc2f-4574-831c-a8a13b93172c.png", // desert tour
  "/lovable-uploads/7acc5c64-c96b-4f94-a831-91f5c286bf53.png", // group tour
  "/lovable-uploads/dcfeef40-0d58-45f9-9a58-ff8a8d2bcb13.png", // desert landscape
  "/lovable-uploads/4ff08d0d-584b-40f7-be43-b5ea41bd3d06.png", // swakopmund sign
  "/lovable-uploads/6c3e7f54-938b-4680-8b85-166d2889e2a5.png", // café
  "/lovable-uploads/e1732fbb-48a5-4e76-acaf-3e6bad91694a.png", // lighthouse museum
  "/lovable-uploads/81e85706-0ff3-4907-bcf1-4c1be989b436.png", // oasis café
  "/lovable-uploads/06b781c2-7cf2-40a0-b649-8d6eb77df679.png", // moonscape
  "/lovable-uploads/cb0bc8f9-646f-49c8-9a23-c7a41e3c760b.png", // beers & refreshments
  "/lovable-uploads/e970f309-5561-4b6f-994c-295da0d491bc.png", // take-aways & snacks
];

// Tour destination labels
const tourLabels = [
  "Walvisbay Lagoon (Flamingos)",
  "Pelicans at the Lagoon",
  "Flamingo Colony",
  "Himba Cultural Experience",
  "Pink Salt Lakes",
  "Dune 5 Climbing Experience",
  "Our Transport Fleet",
  "Desert Tour Group",
  "Guided Viewpoint Tour",
  "Moonscape Landscape",
  "Swakopmund Town Welcome",
  "Goanikontes Oasis",
  "Swakopmund Lighthouse & Museum",
  "Desert Rest Stop",
  "Namib Desert Formations",
  "Beers & Refreshments Stop",
  "Take-aways & Snacks",
];

// Combine all images into one array for the gallery grid
const images = [
  // Imported images
  { src: swakopmundLighthouseImg, alt: "Swakopmund Lighthouse" },
  { src: walvisBayLagoonImg, alt: "Walvis Bay Lagoon Flamingos" },
  { src: pinkLakesImg, alt: "Swakopmund Pink Salt Lakes" },
  { src: namibDunesImg, alt: "Namib Desert Dunes near Swakopmund" },
  { src: moonlandscapeImg, alt: "Moonlandscape near Swakopmund" },
  { src: pelicanPointImg, alt: "Pelican Point Peninsula" },
  { src: moreImg1, alt: "Tour group photo 1" },
  { src: moreImg2, alt: "Tour group photo 2" },
  { src: moreImg3, alt: "Tour group photo 3" },
  { src: moreImg4, alt: "Tour group photo 4" },
  { src: moreImg5, alt: "Tour group photo 5" },
  { src: moreImg6, alt: "Tour group photo 6" },
  { src: moreImg7, alt: "Tour group photo 7" },
  { src: moreImg8, alt: "Tour group photo 8" },

  // Add images from tourImages array
  ...tourImages.map((src, index) => ({
    src: src,
    alt: tourLabels[index] || `Tour Image ${index + 1}`
  }))
];

// Helper function to chunk the array
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  // If the last chunk is too small, distribute its items to previous chunks
  if (result.length > 1 && result[result.length - 1].length < size / 2) {
      const lastChunk = result.pop() || [];
      lastChunk.forEach((item, index) => {
          result[index % result.length].push(item);
      });
  }
  // Ensure we always have 3 rows, even if few images
  while (result.length < 3 && result.length > 0) {
      result.push([]); // Add empty rows if needed
  }
   // If only one row was created initially, split it
   if (result.length === 1 && result[0].length > 3) {
       const originalRow = result[0];
       const chunkSize = Math.ceil(originalRow.length / 3);
       return [
           originalRow.slice(0, chunkSize),
           originalRow.slice(chunkSize, 2 * chunkSize),
           originalRow.slice(2 * chunkSize)
       ];
   }
  return result;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string>("");

  const openModal = (src: string, label: string) => {
    setSelectedImage(src);
    setSelectedLabel(label);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedLabel("");
    document.body.style.overflow = '';
  };

  // Divide images into three rows
  const numRows = 3;
  const chunkSize = Math.ceil(images.length / numRows);
  const imageRows = chunkArray(images, chunkSize);
  const row1 = imageRows[0] || [];
  const row2 = imageRows[1] || [];
  const row3 = imageRows[2] || [];

  // Function to render a single row
  const renderScrollingRow = (rowData: typeof images, direction: 'left' | 'right', keyPrefix: string) => {
    // Duplicate images for infinite scroll effect
    const duplicatedImages = [...rowData, ...rowData];
    // Ensure enough images to fill the row, duplicate more if needed
    while (duplicatedImages.length < 10 && rowData.length > 0) {
         duplicatedImages.push(...rowData);
    }

    if (duplicatedImages.length === 0) return null; // Don't render empty rows

    return (
      <div className="scrolling-wrapper py-4"> {/* Added padding */}
        <div className={`scrolling-row ${direction === 'left' ? 'scroll-left' : 'scroll-right'}`}>
          {duplicatedImages.map((image, index) => (
            <img
              key={`${keyPrefix}-${index}`} // Unique key for each image instance
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="gallery-image-item" // Use the new CSS class
              onClick={() => openModal(image.src, image.alt)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="gallery" className="bg-white py-16 md:py-24 overflow-hidden"> {/* Changed background, added overflow */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GalleryHorizontal className="mx-auto h-12 w-12 text-namibia-terracotta mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Moments from Our Tours
          </h2>
          <p className="text-gray-600 mt-2">Hover over the rows to pause, click an image to enlarge.</p>
        </div>
      </div> {/* Close container for header */}

      {/* Render the scrolling rows - container removed, rows take full width */}
      <div className="w-full space-y-4 md:space-y-8"> {/* Add vertical space between rows */}
        {renderScrollingRow(row1, 'left', 'row1')}
        {renderScrollingRow(row2, 'right', 'row2')}
        {renderScrollingRow(row3, 'left', 'row3')}
      </div>

      <div className="container mx-auto px-4"> {/* Re-open container for footer text */}
        <div className="text-center mt-12">
          <p className="text-gray-600 italic">More breathtaking images of our tours are available upon request</p>
        </div>
      </div>

      {selectedImage && (
         <div
           className="fixed inset-0 bg-black/90 z-[100] flex flex-col items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
           onClick={closeModal}
         >
           <button
             className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition-colors z-[101]"
             onClick={closeModal}
             aria-label="Close"
           >
             <X className="h-8 w-8" />
           </button>
           <div className="max-w-4xl w-full animate-scale-in relative z-[101]">
             <img
               src={selectedImage}
               alt={selectedLabel || "Gallery Image"}
               className="w-full h-auto max-h-[80vh] object-contain rounded-md shadow-lg"
               onClick={(e) => e.stopPropagation()}
             />
             {selectedLabel && (
               <div className="text-center mt-3">
                 <h3 className="text-white text-lg md:text-xl font-medium bg-black/50 px-3 py-1 rounded inline-block">{selectedLabel}</h3>
               </div>
             )}
           </div>
         </div>
       )}
    </section>
  );
};

export default Gallery;
