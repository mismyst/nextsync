// /components/HeroSection/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-400 via-teal-300 to-green-400 text-white py-40 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-bold leading-tight mb-8">
          Transform Your Future with NextSync
        </h1>
        <p className="text-xl mb-10">
          Unlock new career opportunities with top-notch courses from industry experts.
          Learn at your own pace and take control of your learning journey today.
        </p>
        <button className="bg-black text-white py-4 px-8 rounded-lg text-xl hover:bg-gray-800 transition duration-300 ease-in-out">
          Start Learning
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

