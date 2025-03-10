'use client'
import React from 'react';
// Removed unused useState
// import { useState } from 'react';

// Partner logo data
const partnerLogos = [
  { id: 1, name: 'Microsoft', image: '/logos/microsoft.png' },
  { id: 2, name: 'Google', image: '/logos/google.png' },
  { id: 3, name: 'IBM', image: '/logos/ibm.png' },
  { id: 4, name: 'AWS', image: '/logos/aws.png' },
  { id: 5, name: 'Adobe', image: '/logos/adobe.png' },
  { id: 6, name: 'Coursera', image: '/logos/coursera.png' },
];

const Partners = () => {
  // Removed unused state
  // const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">Our Trusted Partners</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
        {partnerLogos.map((logo) => (
          <div 
            key={logo.id} 
            className="w-36 h-24 bg-white/50 rounded-xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative w-full h-full">
              {/* Replace with actual images when available */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-800 font-semibold">{logo.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
