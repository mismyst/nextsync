'use client';
import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  // Google Form link
  const gformLink = "https://forms.gle/DKJsgZNqCmuL2j7W8";

  return (
    <section className="relative overflow-hidden">
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate__animated animate__bounceIn drop-shadow-lg">
            Where Curiosity meets Opportunity,
            <span className="block text-green-400 animate__animated animate__zoomIn">Learning Evolved</span>
          </h1>
          <p className="text-lg text-white mb-8 text-shadow animate__animated animate__fadeInUp animate__delay-1s drop-shadow-md">
            Discover transformative learning experiences that bridge knowledge with career growth.
            Explore 500+ courses, connect with 120,000+ learners, and join a community of 40,000+ success stories.
          </p>
          <div className="flex space-x-6 items-center animate__animated animate__zoomIn animate__delay-2s">
            <a
              href={gformLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition duration-300 font-semibold transform hover:scale-105 animate__animated animate__pulse animate__infinite shadow-lg inline-flex items-center"
            >
              Enroll Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <div className="text-sm text-gray-100">
              500+ Courses • 120,000+ Learners
            </div>
          </div>
        </div>
        <div className="hidden md:block relative animate__animated animate__fadeInRight animate__delay-1s">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-blue-900/40 rounded-2xl -rotate-3 animate__animated animate__zoomIn backdrop-blur-sm border border-green-500/20"></div>
          <Image
            src="/images/imagge.jpg"
            alt="Learning community"
            width={600}
            height={400}
            className="relative z-10 rounded-2xl shadow-2xl transform rotate-3"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
