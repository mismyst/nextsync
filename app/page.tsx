'use client'
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Partners from './components/Partners/Partners';
import VideoBackground from './components/VideoBackground/VideoBackground';

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
    bgColor: "bg-emerald-800",
  },
  {
    title: "Non Technical Management",
    skills: ["Finance", "Student Abroad Program", "Digital Marketing", "Business Development Associate", "Human Resource"],
    bgColor: "bg-green-900",
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
    <main className="min-h-screen relative overflow-hidden">
      {/* Video background */}
      <VideoBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        
        {/* Trainings Section */}
        <section id="trainings-section" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              <span className="relative inline-block">
                Our Training Programs
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-cyan-500"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingsData.map((training, index) => (
                <div 
                  key={training.title}
                  className={`${training.bgColor} rounded-lg p-8 shadow-xl transform transition-all duration-700 ${
                    showTrainings 
                      ? 'translate-y-0 opacity-100' 
                      : index % 2 === 0 
                        ? 'translate-y-24 opacity-0' 
                        : '-translate-y-24 opacity-0'
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{training.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {training.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="inline-block bg-white/10 rounded-full px-4 py-2 text-sm text-white backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
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
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-cyan-500"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-slate-700">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M12 18.364l-4.95 4.95M12 5.414l-4.95-4.95M23 12h-1M3.34 7.364l.707-.707M4.343 17.657l-.707.707M4 12H3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Instructors</h3>
                <p className="text-gray-300">Learn from industry professionals with years of experience in their respective fields.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-slate-700">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Hands-on Projects</h3>
                <p className="text-gray-300">Apply your knowledge through real-world projects that enhance your portfolio and practical skills.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-slate-700">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
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
        
        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              <span className="relative inline-block">
                Get In Touch
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-cyan-500"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg shadow-lg backdrop-blur-sm border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Address</h4>
                      <p className="text-gray-300">123 Training Center, Tech Hub, Innovation City</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">info@trainingcenter.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
