'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Navigation links data
  const navLinks = [
    { href: "./CertificationsPage", label: "Certificates" },
    { href: "./InternshipsPage", label: "Internships" },
    { href: "./TrainingPage", label: "Training" },
    { href: "./Courses", label: "Courses" }
  ];

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

            {/* Center: Navigation Links in a container box with individual boxes inside - only for larger screens */}
            <div className="hidden md:block bg-gray-50 rounded-xl px-3 py-2">
              <div className="flex space-x-3">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index} 
                    href={link.href} 
                    className="px-4 py-2 bg-white border border-gray-100 rounded-lg hover:bg-teal-50 hover:border-teal-500 hover:text-teal-500 transition duration-300 font-medium text-black text-center shadow-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Menu + Button */}
            <div className="flex items-center space-x-4">
              {/* JOIN US Button - Hide on mobile */}
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="hidden sm:block border border-teal-500 text-black px-4 py-2 rounded-lg hover:bg-teal-100 transition duration-300 font-medium"
              >
                JOIN US
              </button>

              {/* Hamburger menu button - Only on mobile */}
              <button 
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {!mobileMenuOpen ? (
                  // Hamburger icon
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                ) : (
                  // Close icon
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu - Conditional rendering */}
          {mobileMenuOpen && (
            <div className="md:hidden px-6 pt-2 pb-4 bg-white rounded-b-3xl">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index} 
                    href={link.href} 
                    className="px-4 py-2 bg-gray-50 rounded-lg hover:bg-teal-50 hover:text-teal-500 transition duration-300 font-medium text-black"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* JOIN US Button for mobile view */}
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }} 
                  className="sm:hidden mt-2 border border-teal-500 text-black px-4 py-2 rounded-lg hover:bg-teal-100 transition duration-300 font-medium text-center"
                >
                  JOIN US
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Space holder to prevent content from hiding behind the fixed navbar */}
      <div className="h-24"></div>

      {/* Pop-up Modal for Email Subscription */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white/80 backdrop-filter backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full m-4 text-center relative border border-white/20">
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
