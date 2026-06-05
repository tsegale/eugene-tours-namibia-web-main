import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string; // Make subtitle optional
  backgroundImageUrl: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImageUrl }) => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-32 md:py-48 flex items-center justify-center page-hero" // Added class for potential specific styling
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('${backgroundImageUrl}')`,
      }}
    >
      {/* Optional: Add subtle overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight hero-title-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto hero-subtitle-fade-in">
            {subtitle}
          </p>
        )}
      </div>
      {/* Optional: Add subtle pattern or texture overlay */}
      {/* <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-5"></div> */}
    </section>
  );
};

export default PageHero; 