'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Partners from './components/Partners/Partners';

// Define TypeScript interfaces
interface Internship {
  name: string;
  providers: string[];
  duration: string;
  stipend: boolean;
  featured: boolean;
  openings: number;
  bgColor: string;
  category: string;
  image: string;
}

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
    bgColor: "bg-cyan-500",
  },
  {
    title: "Reyansh college of Technical management",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express.js", "React", "Node.js", "Flutter development"],
    originalPrice: 4500,
    discountedPrice: 2500,
    bgColor: "bg-cyan-500",
  }
];

// Define internship data similar to the course data structure
const internshipsData: Internship[] = [
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
  const [currentProvider, setCurrentProvider] = useState<{[key: number]: number}>({});
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
          
          {/* Internships section */}
          <div className="my-4 sm:my-6 md:my-8">
            <div className="mx-3 sm:mx-6 md:mx-12 lg:mx-16 p-4 sm:p-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg border border-white/30">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent">Hot Internships</h2>
                <p className="text-sm sm:text-base text-gray-600">Launch your career with hands-on experience</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {internshipsData.map((internship, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                    {/* Image section */}
                    <div className="relative h-48 overflow-hidden">
                      {isClient && (
                        <div className="relative w-full h-full">
                          <Image 
                            src={internship.image} 
                            alt={internship.name} 
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover"
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
                          <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight mt-2 drop-shadow-md tracking-tight">
                            {internship.name}
                          </h3>
                        </div>
                      </div>
                      
                      {internship.openings > 0 && (
                        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-xs font-bold border border-black shadow-md">
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
                      
                      <div className="h-6 mb-3">
                        <p className="text-xs text-gray-500 font-semibold mb-1">COMPANIES</p>
                        <p className="text-sm">{internship.providers.join(', ')}</p>
                      </div>
                      
                      <a href="#" className="mt-2 flex items-center text-gray-500 text-sm hover:text-teal-600">
                        Apply Now 
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Training cards section */}
          <div className="my-4 sm:my-6 md:my-8">
            <div className="mx-3 sm:mx-6 md:mx-12 lg:mx-16 p-4 sm:p-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg border border-white/30">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent">Training</h2>
                <a href="#" className="text-teal-500 hover:text-teal-600 text-sm hidden md:block">View all</a>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {trainingsData.map((training, index) => (
                  <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
                    <div className={`${training.bgColor} p-5 pb-16`}>
                      <h3 className="text-lg font-bold text-white mb-2">{training.title}</h3>
                      
                      <div className="text-white/90 text-sm space-y-1">
                        <p>Let&apos;s get better skills by mastering:</p>
                        <ul className="grid grid-cols-2 gap-x-2 gap-y-1 mt-2">
                          {training.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="flex items-center text-xs">
                              <span className="w-1 h-1 bg-white rounded-full mr-1.5"></span>
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Circular element */}
                      <div className="absolute top-6 right-6">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">R</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Price section */}
                      <div className="absolute bottom-16 left-5">
                        <p className="text-xs font-bold text-orange-300 mb-1">LIMITED TIME OFFER!</p>
                        <div className="flex items-baseline">
                          <span className="line-through text-xs text-white/70 mr-2">₹{training.originalPrice}/-</span>
                          <span className="text-xl font-bold text-white">INR.{training.discountedPrice}/-</span>
                        </div>
                      </div>
                      
                      {/* Enroll button */}
                      <div className="absolute bottom-0 left-0 right-0">
                        <button className="w-full py-2 bg-black text-white text-sm font-bold uppercase tracking-wider">
                          ENROLL NOW
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
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
