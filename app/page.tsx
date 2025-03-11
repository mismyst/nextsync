'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Partners from './components/Partners/Partners';

// Define internship data similar to the course data structure
const internshipsData = [
  {
    name: 'AI Research Internship',
    providers: ['Google AI', 'DeepMind', 'Stanford'],
    duration: '3 Months',
    stipend: true,
    featured: true,
    openings: 5,
    bgColor: 'bg-emerald-500',
    category: 'RESEARCH',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  },
  {
    name: 'Full Stack Development',
    providers: ['Meta', 'Netflix', 'Airbnb'],
    duration: '6 Months',
    stipend: true,
    featured: true,
    openings: 8,
    bgColor: 'bg-blue-500',
    category: 'DEV',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
  {
    name: 'Product Design',
    providers: ['Apple', 'Figma', 'Adobe'],
    duration: '4 Months',
    stipend: true,
    featured: false,
    openings: 3,
    bgColor: 'bg-pink-500',
    category: 'DESIGN',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80',
  },
  {
    name: 'Data Science',
    providers: ['IBM', 'Microsoft', 'Kaggle'],
    duration: '3 Months',
    stipend: true,
    featured: true,
    openings: 6,
    bgColor: 'bg-purple-500',
    category: 'DATA',
    image: 'https://images.unsplash.com/photo-1531279550271-23c2a77a765c?w=800&q=80',
  }
];

// Optimized animated background component
const AnimatedBackground = React.memo(() => (
  <>
    {/* Base gradient background - softer, more pale green colors */}
    <div className="fixed inset-0 -z-20 bg-gradient-to-r from-emerald-50 via-green-100 to-teal-200 bg-[length:400%_400%] animate-gradient"></div>
    
    {/* More subtle floating animated shapes with very low opacity */}
    <div className="fixed top-5 left-[5%] w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div className="fixed top-1/4 right-[5%] w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="fixed bottom-1/3 left-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    <div className="fixed bottom-10 right-1/4 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-6000"></div>
    
    {/* Enhanced glassmorphic noise texture overlay */}
    <div className="fixed inset-0 -z-10 bg-white/40 backdrop-blur-[2px] bg-opacity-20"></div>
    
    {/* More subtle grid pattern for glass effect */}
    <div className="fixed inset-0 -z-10 backdrop-blur-[1px] bg-grid-pattern opacity-20"></div>
  </>
));

const Page = () => {
  const [animateIndex, setAnimateIndex] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Set up provider animation intervals for each internship
    const intervals = {};
    internshipsData.forEach((internship, index) => {
      intervals[index] = setInterval(() => {
        setAnimateIndex(prev => ({
          ...prev,
          [index]: (prev[index] === undefined ? 0 : (prev[index] + 1) % internship.providers.length)
        }));
      }, 2000);
    });

    // Add intersection observer for lazy loading
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-4', 'opacity-0');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('.lazy-section');
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      // Clean up intervals
      Object.values(intervals).forEach(interval => clearInterval(interval));
      
      // Clean up observer
      if (observer) {
        sections.forEach(section => {
          observer.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <AnimatedBackground />

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main className="w-full max-w-none px-0 flex-grow">
          {/* Main sections with improved glassmorphic cards */}
          <HeroSection />
          
          {/* Partners section with refined glassmorphic effect */}
          <div className="my-4 sm:my-6 md:my-8 lazy-section opacity-0 translate-y-4 transition-all duration-500">
            <div className="mx-3 sm:mx-6 md:mx-12 lg:mx-16 p-4 sm:p-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-xl border border-white/30 hover:bg-white/35 transition-all duration-300">
              <Partners />
            </div>
          </div>
          
          {/* Internships section with course-like cards */}
          <div className="my-4 sm:my-6 md:my-8 lazy-section opacity-0 translate-y-4 transition-all duration-500 delay-200">
            <div className="mx-3 sm:mx-6 md:mx-12 lg:mx-16 p-4 sm:p-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-xl border border-white/30 hover:bg-white/35 transition-all duration-300">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent">Hot Internships</h2>
                <p className="text-sm sm:text-base text-gray-600">Launch your career with hands-on experience</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {internshipsData.map((internship, index) => (
                  <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Image section (60% of card) */}
                    <div className="relative h-48 overflow-hidden">
                      {isClient && (
                        <div className="relative w-full h-full">
                          <Image 
                            src={internship.image} 
                            alt={internship.name} 
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                            priority={index < 2}
                          />
                        </div>
                      )}
                      <div className={`absolute inset-0 ${internship.bgColor} opacity-60 mix-blend-multiply`}></div>
                      
                      <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                        <div>
                          <div className="text-xs font-semibold text-white/90 mb-1 backdrop-blur-sm bg-black/20 inline-block px-2 py-1 rounded">
                            {internship.featured ? 'FEATURED' : 'NEW'} · {internship.category}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mt-2 drop-shadow-md">
                            {internship.name}
                          </h3>
                        </div>
                      </div>
                      
                      {internship.openings > 0 && (
                        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-xs font-bold border border-black shadow-md transform -rotate-3 hover:rotate-0 transition-transform">
                          {internship.openings} spots left!
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <div className="mb-3">
                        <p className="text-xs text-gray-500 font-semibold mb-1">DURATION</p>
                        <p className="text-sm">{internship.duration} · {internship.stipend ? 'With stipend' : 'Unpaid'}</p>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-xs text-gray-500 font-semibold mb-1">TYPE</p>
                        <p className="text-sm flex items-center">
                          Remote & On-site options
                          <span className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-300 text-gray-500 text-xs">i</span>
                        </p>
                      </div>
                      
                      <div className="relative h-6 overflow-hidden">
                        <p className="text-xs text-gray-500 font-semibold absolute top-0 left-0">COMPANIES</p>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start pl-20">
                          {internship.providers.map((provider, pIndex) => (
                            <span 
                              key={pIndex} 
                              className={`text-sm font-medium transition-opacity duration-500 absolute ${
                                pIndex === (animateIndex[index] || 0) ? 'opacity-100' : 'opacity-0'
                              }`}
                            >
                              {provider}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <a href="#" className="mt-3 flex items-center text-gray-500 text-sm hover:text-teal-600 group-hover:text-pink-500 transition-colors">
                        Apply Now 
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact form with enhanced refined glassmorphic effect */}
          <div className="my-4 sm:my-6 md:my-8 lazy-section opacity-0 translate-y-4 transition-all duration-500 delay-300">
            <div className="mx-3 sm:mx-6 md:mx-12 lg:mx-16 p-4 sm:p-6 lg:p-8 rounded-2xl bg-white/40 backdrop-blur-lg shadow-xl border border-white/40 hover:bg-white/45 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-10 text-slate-800 drop-shadow-sm">What&apos;s your suggestion?</h2>
              {isClient && <ContactForm />}
            </div>
          </div>
        </main>
        <Footer />
      </div>
      
      {/* Add custom animation keyframes */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        
        .animate-blob {
          animation: blob 12s infinite;
        }
        
        .bg-grid-pattern {
          background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCAyMCA1IE0gNSAwIEwgNSAyMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==');
        }
      `}</style>
    </div>
  );
};

export default Page;
