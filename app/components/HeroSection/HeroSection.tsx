'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState<string>('');

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
      setIsModalOpen(false);
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12 relative">
        <div className="z-10 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Where Curiosity meets Opportunity,
            <span className="block text-teal-600">Learning Evolved</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover transformative learning experiences that bridge knowledge with career growth.
            Explore 500+ courses, connect with 120,000+ learners, and join a community of 40,000+ success stories.
          </p>
          <div className="flex flex-wrap space-x-4 items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300 font-semibold"
            >
              Enroll Now
            </button>
            <div className="text-sm text-gray-500">
              500+ Courses • 120,000+ Learners
            </div>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl -rotate-3"></div>
          <div className="relative z-10 rounded-2xl shadow-2xl transform rotate-3 overflow-hidden h-96 w-full">
            <Image
              src="/images/studying.jpg"
              alt="Learning community"
              width={600}
              height={400}
              className="object-cover h-full w-full"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/600x400?text=Learning+Community";
              }}
            />
          </div>
        </div>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl p-2"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Join Us</h2>
            <p className="text-gray-600 mb-4">
              Subscribe to our weekly newsletter and stay updated with exclusive courses and insights!
            </p>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubscribe();
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email"
              />
              <button
                type="submit"
                className="bg-teal-500 text-white w-full py-3 rounded-lg hover:bg-teal-600 transition duration-300 font-semibold"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-4">
              Already a user? <a href="/login" className="text-teal-600 font-medium">Login</a>
            </p>
          </div>
        </div>
      )}
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        <div className="absolute top-64 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
        <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
      </div>
    </section>
  );
};

export default HeroSection;
