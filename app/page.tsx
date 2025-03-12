'use client'
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Partners from './components/Partners/Partners';

// Define TypeScript interfaces
interface Training {
  title: string;
  skills: string[];
  bgColor: string;
}

// Define training data
const trainingsData: Training[] = [
  {
    title: "Technical management",
    skills: ["Artificial Intelligience ", "Machine Learning", "data science", "cybersecurity ", "full stack ", "web dev", "ui/UX design ", "VLSI"],
    bgColor: "bg-emerald-800",
  },
  {
    title: "Non Technical management",
    skills: ["finance", "Student Abroad Program ", "digital marketing ", "business development associate", "Human Resource"],
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
          
          {/* Training cards section */}
          <div className="my-6 sm:my-8 md:my-12">
            <div className="mx-3 sm:mx-6 md:mx-12 lg:mx-16 p-4 sm:p-6 md:p-8 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg border border-white/30">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">Premium Training</h2>
                <a href="#" className="text-teal-600 hover:text-teal-700 text-sm hidden md:block font-semibold">Explore All Courses →</a>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {trainingsData.map((training, index) => (
                  <div key={index} className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <div className={`bg-gradient-to-br from-teal-600 to-blue-600 p-5 pb-24 min-h-120`}>
                      {/* Premium badge */}
                      <div className="absolute top-5 right-5">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/40">
                          <span className="text-white text-xl font-bold">PRO</span>
                        </div>
                      </div>
                      
                      {/* Content with improved spacing and layout */}
                      <div className="pr-20 pb-20">
                        <div className="mb-3 inline-block px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">
                          <span className="text-xs font-bold text-teal-100">CERTIFICATION INCLUDED</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-5 line-clamp-2">{training.title}</h3>
                        
                        <div className="text-white/90 text-sm space-y-4 mt-6">
                          <p className="text-white font-medium">Master these in-demand skills:</p>
                          <ul className="grid grid-cols-1 gap-y-3 mt-4">
                            {training.skills.slice(0, 7).map((skill, skillIndex) => (
                              <li key={skillIndex} className="flex items-start text-sm">
                                <svg className="w-4 h-4 text-teal-300 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="truncate">{skill}</span>
                              </li>
                            ))}
                            {training.skills.length > 7 && (
                              <li className="flex items-center text-xs pl-6">
                                <span className="text-teal-200 italic">+{training.skills.length - 7} more skills included...</span>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Enhanced call-to-action button */}
                      <div className="absolute bottom-0 left-0 right-0">
                        <button className="w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-teal-900 flex items-center justify-center">
                          <span>ENROLL NOW</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Added bonus banner */}
              <div className="mt-8 bg-gradient-to-r from-teal-600/90 to-blue-600/90 rounded-xl p-4 sm:p-6 text-white text-center">
                <p className="font-bold">🎁 BONUS: Enroll in any course today and get access to our exclusive mentorship program!</p>
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
