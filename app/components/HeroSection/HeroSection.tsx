'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState<string>('');

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/circuit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Section Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12 relative z-10">
        <div className="text-left animate__animated animate__fadeInLeft">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6 leading-tight animate__animated animate__bounceIn">
            Where Curiosity meets Opportunity,
            <span className="block text-teal-600 animate__animated animate__zoomIn">Learning Evolved</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-shadow animate__animated animate__fadeInUp animate__delay-1s">
            Discover transformative learning experiences that bridge knowledge with career growth.
            Explore 500+ courses, connect with 120,000+ learners, and join a community of 40,000+ success stories.
          </p>
          <div className="flex space-x-6 items-center animate__animated animate__zoomIn animate__delay-2s">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition duration-300 font-semibold transform hover:scale-105 animate__animated animate__pulse animate__infinite"
            >
              Enroll Now
            </button>
            <div className="text-sm text-gray-500">
              500+ Courses • 120,000+ Learners
            </div>
          </div>
        </div>
        <div className="hidden md:block relative animate__animated animate__fadeInRight animate__delay-1s">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl -rotate-3 animate__animated animate__zoomIn"></div>
          <Image
            src="/images/studying.jpg"
            alt="Learning community"
            width={600}
            height={400}
            className="relative z-10 rounded-2xl shadow-2xl transform rotate-3"
          />
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate__animated animate__fadeIn">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 animate__animated animate__bounceIn animate__delay-1s">Join Us</h2>
            <p className="text-gray-600 mb-4 animate__animated animate__fadeInUp">
              Subscribe to our weekly newsletter and stay updated with exclusive courses and insights!
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-teal-500 text-white w-full py-3 rounded-lg hover:bg-teal-600 transition duration-300 font-semibold"
              onClick={() => alert(`Subscribed with: ${email}`)}
            >
              Subscribe
            </button>
            <p className="text-gray-500 text-sm mt-4">
              Already an user? <a href="#" className="text-teal-600 font-medium">Login</a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
