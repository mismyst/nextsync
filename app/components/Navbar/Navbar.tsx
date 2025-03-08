'use client';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Left: Menu Icon */}
          <button className="p-2 border border-teal-500 rounded-lg hover:bg-teal-100">
            <Menu size={24} className="text-black" />
          </button>

          {/* Center: Navigation Links */}
          <ul className="flex space-x-10 text-black font-medium">
            <li><a href="#" className="hover:text-teal-500">Certificates</a></li>
            <li><a href="#" className="hover:text-teal-500">Internships</a></li>
            <li><a href="#" className="hover:text-teal-500">Training</a></li>
            <li><a href="#" className="hover:text-teal-500">Community</a></li>
          </ul>

          {/* Right: "JOIN US" Button */}
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="border border-teal-500 text-black px-4 py-2 rounded-lg hover:bg-teal-100 transition duration-300 font-medium"
          >
            JOIN US
          </button>
        </div>
      </nav>

      {/* Pop-up Modal for Email Subscription */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full text-center relative">
            {/* Close Button */}
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold text-black mb-4">Join Us</h2>
            <p className="text-black mb-4">
              Subscribe to our weekly newsletter and stay updated with exclusive courses and insights!
            </p>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              className="bg-teal-500 text-white w-full py-3 rounded-lg hover:bg-teal-600 transition duration-300 font-semibold"
              onClick={() => alert(`Subscribed with: ${email}`)}
            >
              Subscribe
            </button>
            <p className="text-black text-sm mt-4">
              Already a user? <a href="#" className="text-teal-600 font-medium">Login</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
