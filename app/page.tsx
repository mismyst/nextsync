'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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

// Dynamic animated background component
const AnimatedBackground = React.memo(function AnimatedBackground() {
  return (
    <>
      {/* Gradient background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-r from-emerald-50 via-green-100 to-teal-200"></div>
      
      {/* Animated circles */}
      <div className="fixed inset-0 -z-19 overflow-hidden">
        <div className="circle-1 w-64 h-64 rounded-full bg-teal-300/20 absolute -top-10 -left-10 animate-float"></div>
        <div className="circle-2 w-96 h-96 rounded-full bg-green-300/20 absolute top-1/4 right-1/4 animate-float-slow"></div>
        <div className="circle-3 w-48 h-48 rounded-full bg-blue-300/20 absolute bottom-1/4 left-1/3 animate-float-reverse"></div>
        <div className="circle-4 w-72 h-72 rounded-full bg-emerald-300/20 absolute -bottom-20 -right-20 animate-pulse-slow"></div>
      </div>
      
      {/* Blur overlay */}
      <div className="fixed inset-0 -z-10 bg-white/40 backdrop-blur-[1px]"></div>
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(15px, -15px) rotate(5deg); }
          66% { transform: translate(-10px, 20px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes float-slow {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-20px, 10px) rotate(-3deg); }
          66% { transform: translate(15px, -15px) rotate(3deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes float-reverse {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, 15px) rotate(3deg); }
          66% { transform: translate(-15px, -10px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
          100% { opacity: 0.5; transform: scale(1); }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 18s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 10s infinite;
        }
      `}</style>
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
      <AnimatedBackground />

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
                  <div key={index} className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
                    <div className={`bg-gradient-to-br from-teal-600 to-blue-600 p-5 pt-5 px-5 pb-0 min-h-120 flex flex-col h-full`}>
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
                      <div className="mt-auto -mx-5 -mb-px">
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
          
          {/* Community Section with Image */}
          <div className="my-6 sm:my-8 md:my-12">
            <div className="mx-3 sm:mx-6 md:mx-12 lg:mx-16 p-4 sm:p-6 md:p-8 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg border border-white/30">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image side */}
                <div className="w-full md:w-1/2 relative">
                  <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
                    <Image 
                      src="/images/community.jpg" 
                      alt="Our Learning Community" 
                      fill
                      className="object-contain" 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
                
                {/* Content side */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent mb-4">
                    Join Our Learning Community
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Connect with like-minded professionals, participate in workshops, 
                    and accelerate your career growth through peer learning and networking opportunities.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-teal-100 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Networking Events</h3>
                        <p className="text-sm text-gray-600">Connect with professionals and industry experts</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-teal-100 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Mentorship Programs</h3>
                        <p className="text-sm text-gray-600">Learn from industry leaders who guide your career</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-teal-100 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Job Opportunities</h3>
                        <p className="text-sm text-gray-600">Access exclusive career opportunities and placements</p>
                      </div>
                    </div>
                  </div>
                  <button className="mt-8 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md">
                    Join Community
                  </button>
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
