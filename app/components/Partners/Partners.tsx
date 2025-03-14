'use client'
import React from 'react';
import Image from 'next/image';

// Partner logo data
const partnerLogos = [
  { id: 1, name: 'Microsoft', image: '/images/microsoft-logo.png' },
  { id: 2, name: 'Google', image: '/images/vecteezy_google-logo-icon-symbol_28667072.png' },
  { id: 3, name: 'IBM', image: '/images/ibmlogo.png' },
  { id: 4, name: 'AWS', image: '/images/AWS-Logo.png' },
  { id: 5, name: 'Adobe', image: '/images/Adobe-logo.png' },
  { id: 6, name: 'Coursera', image: '/images/Coursera-Logo.png' },
];

const Partners = () => {
  return (
    <div className="py-8">
      {/* Updated heading with white text and blue underline styling */}
      <h3 className="text-3xl font-bold text-center mb-10 text-white relative">
        Our Trusted Partners
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-blue-500 mt-1"></span>
      </h3>
      
      {/* This container has the "partners-container" class which should be styled in global.css */}
      <div className="partners-container overflow-hidden">
        {/* This div has the "partners-slider" class which is animated in global.css */}
        <div className="partners-slider">
          {/* Triple the logos to ensure no gaps in the animation */}
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="partner-logo w-36 h-36 mx-3 bg-white/50 rounded-xl flex flex-col items-center justify-center p-4 shadow-sm"
            >
              <div className="relative w-full h-20 mb-2">
                <Image
                  src={logo.image}
                  alt={`${logo.name} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <span className="text-gray-800 font-semibold text-center">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add this CSS snippet in your global.css file or as a style tag if needed */}
      <style jsx>{`
        /* These styles should be added to your global.css file for permanent use */
        .partners-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        
        .partners-slider {
          display: flex;
          width: fit-content;
          animation: slide 20s linear infinite; /* Ensure 'infinite' is set for continuous animation */
          gap: 0; /* Ensure there's no gap between logos */
        }
        
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move exactly by the width of one set of logos */
            transform: translateX(calc(-50% - 6px)); /* Adjusted to remove any potential gap */
          }
        }
        
        .partner-logo {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};

export default Partners;
