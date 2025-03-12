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

// Define training data with darker green colors
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
     {/* Training cards section - modern, marketing-focused with taller design */}
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
            
            {/* Enhanced price section with better marketing focus */}
            <div className="absolute bottom-24 left-5">
              <div className="inline-flex items-center px-3 py-1 bg-orange-500/90 rounded-full mb-3">
                <svg className="w-4 h-4 text-yellow-100 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                </svg>
                <span className="text-xs font-bold text-white">50% OFF ENDS SOON!</span>
              </div>
              <div className="flex items-baseline">
                <span className="line-through text-sm text-white/70 mr-3">INR 11,000/-</span>
                <span className="text-2xl font-bold text-white">INR 5,550/-</span>
              </div>
              <p className="text-xs text-teal-100 mt-1">Includes lifetime access & all updates</p>
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
