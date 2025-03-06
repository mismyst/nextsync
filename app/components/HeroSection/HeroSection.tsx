import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12">
        <div className="z-10 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Where Curiosity meets Opportunity, 
            <span className="block text-teal-600">Learning Evolved</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover transformative learning experiences that bridge knowledge with career growth. 
            Explore 500+ courses, connect with 120,000+ learners, and join a community of 40,000+ success stories.
          </p>
          <div className="flex space-x-4 items-center">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300 font-semibold">
              Enroll Now
            </button>
            <div className="text-sm text-gray-500">
              500+ Courses • 120,000+ Learners
            </div>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl -rotate-3"></div>
          <img 
            src="/api/placeholder/600/400" 
            alt="Learning community" 
            className="relative z-10 rounded-2xl shadow-2xl transform rotate-3"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;