'use client'
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Partners from './components/Partners/Partners';
import VideoBackground from './components/VideoBackground/VideoBackground';
import Image from 'next/image';

// Define TypeScript interfaces
interface Training {
  title: string;
  skills: string[];
  bgColor: string;
}

// Define training data
const trainingsData: Training[] = [
  {
    title: "Technical Management",
    skills: ["Artificial Intelligence", "Machine Learning", "Data Science", "Cybersecurity", "Full Stack", "Web Dev", "UI/UX Design", "VLSI"],
    bgColor: "bg-blue-800",
  },
  {
    title: "Non Technical Management",
    skills: ["Finance", "Student Abroad Program", "Digital Marketing", "Business Development Associate", "Human Resource"],
    bgColor: "bg-blue-900",
  }
];

export default function Home() {
  const [showTrainings, setShowTrainings] = useState<boolean>(false);
  
  // Trigger animation when scrolled to the trainings section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const trainingsSection = document.getElementById('trainings-section');
      
      if (trainingsSection) {
        const trainingsSectionTop = trainingsSection.offsetTop;
        if (scrollPosition > trainingsSectionTop - window.innerHeight / 1.5) {
          setShowTrainings(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <main className="min-h-screen relative">
      {/* Video background with fixed position to cover entire viewport */}
      <div className="fixed inset-0 z-0">
        <VideoBackground />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        
        {/* Trainings Section */}
        <section id="trainings-section" className="py-24 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              <span className="relative inline-block">
                Our Training Programs
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {trainingsData.map((training, index) => (
                <div 
                  key={training.title}
                  className={`${training.bgColor} rounded-lg shadow-xl transform transition-all duration-700 overflow-hidden flex flex-col h-full ${
                    showTrainings 
                      ? 'translate-y-0 opacity-100' 
                      : index % 2 === 0 
                        ? 'translate-y-24 opacity-0' 
                        : '-translate-y-24 opacity-0'
                  }`}
                >
                  <div className="p-6 border-b border-white/20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{training.title}</h3>
                  </div>
                  
                  <div className="p-6 flex-1">
                    <h4 className="text-lg font-semibold text-white/90 mb-4">Key Skills Covered:</h4>
                    <ul className="space-y-3">
                      {training.skills.map((skill) => (
                        <li 
                          key={skill} 
                          className="flex items-start"
                        >
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white mr-3 mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-white">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
               
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              <span className="relative inline-block">
                Why Choose Us
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-slate-700">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M12 18.364l-4.95 4.95M12 5.414l-4.95-4.95M23 12h-1M3.34 7.364l.707-.707M4.343 17.657l-.707.707M4 12H3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Instructors</h3>
                <p className="text-gray-300">Learn from industry professionals with years of experience in their respective fields.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-slate-700">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Hands-on Projects</h3>
                <p className="text-gray-300">Apply your knowledge through real-world projects that enhance your portfolio and practical skills.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-slate-700">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Job Placement</h3>
                <p className="text-gray-300">Access our extensive network of industry partners and receive career guidance and job placement assistance.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partners Section */}
        <Partners />
        
        {/* Contact Section - with transparent background to show video */}
        <section id="contact" className="py-12 relative">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              <span className="relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
              </span>
            </h2>
            
            <div className="flex flex-col gap-6">
              {/* Larger image container without cropping */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800 w-full">
                <div className="w-full h-[400px] md:h-[500px] relative">
                  <Image 
                    src="/images/community.jpg" 
                    alt="Community of developers and learners" 
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="100vw"
                    priority
                    className="transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-1">Join Our Community</h3>
                    <p className="text-blue-300 text-sm">Connect with experts and fellow learners.</p>
                  </div>
                </div>
              </div>
              
              {/* Full-width contact form container */}
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-5 md:p-6 border border-gray-800 shadow-2xl w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
