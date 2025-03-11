'use client'
import React from 'react';

// Partner logo data with direct imports
const Partners = () => {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">Our Trusted Partners</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
        {/* Microsoft */}
        <div className="w-36 h-36 bg-white/50 rounded-xl flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="w-full h-20 mb-2 flex items-center justify-center">
            <img 
              src="/microsoft-logo.png" 
              alt="Microsoft logo" 
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/100x50?text=Microsoft";
              }}
            />
          </div>
          <span className="text-gray-800 font-semibold text-center">Microsoft</span>
        </div>

        {/* Google */}
        <div className="w-36 h-36 bg-white/50 rounded-xl flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="w-full h-20 mb-2 flex items-center justify-center">
            <img 
              src="/vecteezy_google-logo-icon-symbol_28667072.png" 
              alt="Google logo" 
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/100x50?text=Google";
              }}
            />
          </div>
          <span className="text-gray-800 font-semibold text-center">Google</span>
        </div>

        {/* IBM */}
        <div className="w-36 h-36 bg-white/50 rounded-xl flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="w-full h-20 mb-2 flex items-center justify-center">
            <img 
              src="/ibmlogo.png" 
              alt="IBM logo" 
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/100x50?text=IBM";
              }}
            />
          </div>
          <span className="text-gray-800 font-semibold text-center">IBM</span>
        </div>

        {/* AWS */}
        <div className="w-36 h-36 bg-white/50 rounded-xl flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="w-full h-20 mb-2 flex items-center justify-center">
            <img 
              src="/AWS-Logo.png" 
              alt="AWS logo" 
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/100x50?text=AWS";
              }}
            />
          </div>
          <span className="text-gray-800 font-semibold text-center">AWS</span>
        </div>

        {/* Adobe */}
        <div className="w-36 h-36 bg-white/50 rounded-xl flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="w-full h-20 mb-2 flex items-center justify-center">
            <img 
              src="/kisspng-logo-adobe.png" 
              alt="Adobe logo" 
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/100x50?text=Adobe";
              }}
            />
          </div>
          <span className="text-gray-800 font-semibold text-center">Adobe</span>
        </div>

        {/* Coursera */}
        <div className="w-36 h-36 bg-white/50 rounded-xl flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="w-full h-20 mb-2 flex items-center justify-center">
            <img 
              src="/Coursera-Logo.png" 
              alt="Coursera logo" 
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/100x50?text=Coursera";
              }}
            />
          </div>
          <span className="text-gray-800 font-semibold text-center">Coursera</span>
        </div>
      </div>
    </div>
  );
};

export default Partners;
