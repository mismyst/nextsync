'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Floating Navbar */}
      <div className="fixed top-0 left-0 right-0 z-40 px-4 pt-4">
        <nav className={`max-w-6xl mx-auto bg-white rounded-3xl shadow-lg transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-4'
        }`}>
          <div className="px-6 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logowhite.jpg" 
                alt="Company Logo" 
                width={150} 
                height={50} 
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Center: Navigation Links */}
            <ul className="hidden md:flex space-x-10 text-black font-medium">
              <li><Link href="./CertificationsPage" className="hover:text-teal-500">Certificates</Link></li>
              <li><Link href="./InternshipsPage" className="hover:text-teal-500">Internships</Link></li>
              <li><Link href="./TrainingPage" className="hover:text-teal-500">Training</Link></li>
              <li><Link href="./Courses" className="hover:text-teal-500">Courses</Link></li>
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
      </div>

      {/* Space holder to prevent content from hiding behind the fixed navbar */}
      <div className="h-24"></div>

      {/* Pop-up Modal for Email Subscription */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white/80 backdrop-filter backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full text-center relative border border-white/20">
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
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-black bg-white/70"
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
              Already a user? <Link href="/login" className="text-teal-600 font-medium">Login</Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
