import React, { useState, useEffect } from 'react';

// Scroll to top button component
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if scrolled down more than 500px
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []); // Empty dependency array ensures this effect runs only once on mount and cleanup on unmount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Enables smooth scrolling
    });
  };

  return (
    <button
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-namibia-terracotta shadow-lg text-white z-50 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-namibia-orange focus:outline-none focus:ring-2 focus:ring-namibia-orange focus:ring-offset-2 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none' // Hide visually and prevent interaction when not visible
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      // No need for style display:none, opacity handles visibility
    >
      {/* Simple Arrow Up Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop; 