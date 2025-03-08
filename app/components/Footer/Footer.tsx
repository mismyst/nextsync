// /components/Footer/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-lg">🎓</span>
            <p className="text-sm">
              Learn over 25+ skills from industry professionals and get ready for your dream career
            </p>
          </div>
          <p className="mt-4 font-semibold">Follow Us On</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#programs" className="hover:text-yellow-400">Specialised programs</a></li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="font-bold text-lg">More</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#faqs" className="hover:text-yellow-400">FAQs</a></li>
            <li><a href="#privacy" className="hover:text-yellow-400">Privacy policies</a></li>
            <li><a href="#terms" className="hover:text-yellow-400">Terms and conditions</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg">Contact Us</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center space-x-2">📍<span>Location</span></li>
            <li className="flex items-center space-x-2">✉️<span>Email</span></li>
            <li className="flex items-center space-x-2">📞<span>Phone</span></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm mt-6">Copyright © 2025</p>
    </footer>
  );
};

export default Footer;



