'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Partners from './components/Partners/Partners';

// Define TypeScript interfaces for what you're actually using
interface Training {
  title: string;
  skills: string[];
  originalPrice: number;
  discountedPrice: number;
  bgColor: string;
}

// Define training data
const trainingsData: Training[] = [
  {
    title: "Reyansh college of Technical management",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express.js", "React", "Node.js", "Flutter development"],
    originalPrice: 4500,
    discountedPrice: 2500,
    bgColor: "bg-emerald-800",
  },
  {
    title: "Reyansh college of Technical management",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express.js", "React", "Node.js", "Flutter development"],
    originalPrice: 4500,
    discountedPrice: 2500,
    bgColor: "bg-green-900",
  }
];

// Simplified background component
const SimpleBackground = React.memo(function SimpleBackground() {
  return (
    <>
      {/* Simple gradient background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-r from-emerald-50 via-green-100 to-teal-200"></div>
      
      {/* Simple overlay */}
      <div className="fixed inset-0 -z-10 bg-white/40 backdrop-blur-[1px]"></div>
    </>
  );
});

const Page = function Page() {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <SimpleBackground />

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main className="w-full max-w-none px-0 flex-grow">
          {/* Hero section */}
          <HeroSection />
          
          {/* Partners section */}
          <div className="my-4 sm:my-6 md:my-8">
            <div className="mx-3 sm:mx-6 md:mx-12 lg:mx-16 p-4 sm:p-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg border border-white/30">
              <Partners />
            </div>
          </div>
          
          {/* Training cards section - with Technical and Non-Technical */}
          <div className="my-6 sm:my-8 md:my-12">
            <div className="mx-3 sm:mx-6 md:mx-12 lg:mx-16 p-4 sm:p-6 md:p-8 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg border border-white/30">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">Premium Training</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Technical Card */}
                <div className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="bg-gradient-to-br from-teal-600 to-blue-600 p-5 pb-16 min-h-120">
                    {/* Badge */}
                    <div className="absolute top-5 right-5">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/40">
                        <span className="text-white text-xl font-bold">TECH</span>
                      </div>
                    </div>
                    
                    <div className="pr-20 pb-4">
                      <div className="mb-3 inline-block px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
                        <span className="text-xs font-bold text-teal-100">CERTIFICATION INCLUDED</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-5">Technical Courses</h3>
                      
                      <div className="text-white/90 text-sm space-y-4 mt-4">
                        <ul className="grid grid-cols-1 gap-y-3 mt-3">
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-teal-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>AI (Artificial Intelligence)</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-teal-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>ML (Machine Learning)</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-teal-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Data Science</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-teal-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Cybersecurity</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-teal-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Full Stack Development</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-teal-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Web Development</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-teal-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>UI/UX Design</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-teal-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>VLSI (Very Large Scale Integration)</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-teal-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Embedded Systems</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Call-to-action button */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <button className="w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-teal-900 flex items-center justify-center">
                        <span>EXPLORE TECHNICAL COURSES</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Non-Technical Card */}
                <div className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-5 pb-16 min-h-120">
                    {/* Badge */}
                    <div className="absolute top-5 right-5">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/40">
                        <span className="text-white text-xl font-bold">NON-IT</span>
                      </div>
                    </div>
                    
                    <div className="pr-20 pb-4">
                      <div className="mb-3 inline-block px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
                        <span className="text-xs font-bold text-blue-100">CERTIFICATION INCLUDED</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-5">Non-Technical Courses</h3>
                      
                      <div className="text-white/90 text-sm space-y-4 mt-4">
                        <ul className="grid grid-cols-1 gap-y-3 mt-3">
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-blue-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Finance</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-blue-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>SAP (Systems Applications and Products)</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-blue-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Digital Marketing</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-blue-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Business Development Associate</span>
                          </li>
                          <li className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-blue-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Human Resource</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Call-to-action button */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <button className="w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-purple-900 flex items-center justify-center">
                        <span>EXPLORE NON-TECHNICAL COURSES</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="my-4 sm:my-6 md:my-8">
            <div className="mx-3 sm:mx-6 md:mx-12 lg:mx-16 p-4 sm:p-6 lg:p-8 rounded-2xl bg-white/40 backdrop-blur-lg shadow-lg border border-white/40">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-10 text-slate-800 drop-shadow-sm">What&apos;s your suggestion?</h2>
              {isClient && <ContactForm />}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
