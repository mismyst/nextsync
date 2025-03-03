// /components/Footer/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm mb-4">© 2025 NextSync. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#about" className="hover:text-yellow-400">About Us</a>
          <a href="#privacy" className="hover:text-yellow-400">Privacy Policy</a>
          <a href="#terms" className="hover:text-yellow-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


