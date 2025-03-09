import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-paleGreen text-white font-bold text-lg px-6 py-3">
      <span>Beyond books—experience the difference with us.</span>
      <div className="flex space-x-1">
        <div className="w-2 h-4 bg-white"></div>
        <div className="w-2 h-5 bg-white"></div>
        <div className="w-2 h-6 bg-white"></div>
        <div className="w-2 h-7 bg-white"></div>
      </div>
    </div>
  );
};

export default Banner;
