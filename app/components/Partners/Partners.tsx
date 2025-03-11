'use client'
import React from 'react';
import image from 'Partners';

const Partners = () => {
  // Partner logo data with proper Next.js image imports
  const partnerLogos = [
    { id: 1, name: 'Microsoft' },
    { id: 2, name: 'Google' },
    { id: 3, name: 'IBM' },
    { id: 4, name: 'AWS' },
    { id: 5, name: 'Adobe' },
    { id: 6, name: 'Coursera' },
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">Our Trusted Partners</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
        {partnerLogos.map((logo) => (
          <div 
            key={logo.id} 
            className="w-36 h-36 bg-white/50 rounded-xl flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="w-full h-20 mb-2 flex items-center justify-center">
              {/* Just display the logo name for now */}
              <div className="flex items-center justify-center w-full h-full">
                <div className="text-2xl font-bold text-gray-400">{logo.name[0]}</div>
              </div>
            </div>
            <span className="text-gray-800 font-semibold text-center">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
