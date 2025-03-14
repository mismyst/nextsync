'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Partners from './components/Partners/Partners';

// For TypeScript - extend Window interface
declare global {
  interface Window {
    mouseMoveTimeout: number;
  }
}

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

// Enhanced AnimatedBackground component with circuit theme
const AnimatedBackground = React.memo(function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState<boolean>(false);
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Reset the "moving" state after mouse stops
      if (window.mouseMoveTimeout) {
        clearTimeout(window.mouseMoveTimeout);
      }
      window.mouseMoveTimeout = window.setTimeout(() => {
        setIsMoving(false);
      }, 500);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (window.mouseMoveTimeout) {
        clearTimeout(window.mouseMoveTimeout);
      }
    };
  }, []);
  
  // Calculate distance from mouse for circuit elements
  const getDistanceStyle = (baseX: number, baseY: number, intensity = 1, maxDistance = 100): React.CSSProperties => {
    if (!isMoving) return {};
    
    const dx = mousePosition.x / window.innerWidth - baseX;
    const dy = mousePosition.y / window.innerHeight - baseY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Create attraction effect for circuit elements
    const factor = Math.min(maxDistance / (distance * 1000 + 1), maxDistance) * intensity;
    const translateX = dx * factor;
    const translateY = dy * factor;
    
    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${isMoving ? 1.05 : 1})`,
      transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
      opacity: isMoving ? 0.8 : 0.5
    };
  };
  
  return (
    <>
      {/* Dark gradient background with circuit theme */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-black via-gray-900 to-slate-900"></div>
      
      {/* Circuit pattern overlay */}
      <div 
        className="fixed inset-0 -z-19 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%2303a9f4' stroke-width='0.5'/%3E%3Cpath d='M30 10v80M50 10v80M70 10v80M10 30h80M10 50h80M10 70h80' stroke='%2303a9f4' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%230d47a1'/%3E%3Ccircle cx='30' cy='10' r='2' fill='%230d47a1'/%3E%3Ccircle cx='50' cy='10' r='2' fill='%230d47a1'/%3E%3Ccircle cx='70' cy='10' r='2' fill='%230d47a1'/%3E%3Ccircle cx='90' cy='10' r='2' fill='%230d47a1'/%3E%3Ccircle cx='10' cy='30' r='2' fill='%230d47a1'/%3E%3Ccircle cx='30' cy='30' r='2' fill='%230d47a1'/%3E%3Ccircle cx='50' cy='30' r='2' fill='%230d47a1'/%3E%3Ccircle cx='70' cy='30' r='2' fill='%230d47a1'/%3E%3Ccircle cx='90' cy='30' r='2' fill='%230d47a1'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%230d47a1'/%3E%3Ccircle cx='30' cy='50' r='2' fill='%230d47a1'/%3E%3Ccircle cx='50' cy='50' r='2' fill='%230d47a1'/%3E%3Ccircle cx='70' cy='50' r='2' fill='%230d47a1'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%230d47a1'/%3E%3Ccircle cx='10' cy='70' r='2' fill='%230d47a1'/%3E%3Ccircle cx='30' cy='70' r='2' fill='%230d47a1'/%3E%3Ccircle cx='50' cy='70' r='2' fill='%230d47a1'/%3E%3Ccircle cx='70' cy='70' r='2' fill='%230d47a1'/%3E%3Ccircle cx='90' cy='70' r='2' fill='%230d47a1'/%3E%3Ccircle cx='10' cy='90' r='2' fill='%230d47a1'/%3E%3Ccircle cx='30' cy='90' r='2' fill='%230d47a1'/%3E%3Ccircle cx='50' cy='90' r='2' fill='%230d47a1'/%3E%3Ccircle cx='70' cy='90' r='2' fill='%230d47a1'/%3E%3Ccircle cx='90' cy='90' r='2' fill='%230d47a1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Circuit flow elements container */}
      <div className="fixed inset-0 -z-18 overflow-hidden">
        {/* Green circuit flow elements */}
        <div 
          className="circuit-flow-1 absolute -left-20 top-0 h-full w-40 opacity-30 animate-flow-1" 
          style={{
            background: isMoving 
              ? 'linear-gradient(90deg, transparent, rgba(0,128,128,0.4), rgba(0,100,100,0.3), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(0,128,128,0.2), rgba(0,100,100,0.1), transparent)',
            filter: `blur(${isMoving ? '8px' : '12px'})`,
            borderRadius: '40% 60% 60% 40% / 70% 30% 70% 30%',
            ...getDistanceStyle(0.1, 0.5, 2)
          }}>
        </div>
        
        <div 
          className="circuit-flow-2 absolute -right-20 top-1/4 h-full w-60 opacity-20 animate-flow-2" 
          style={{
            background: isMoving 
              ? 'linear-gradient(90deg, transparent, rgba(0,0,120,0.4), rgba(0,50,150,0.3), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(0,0,120,0.2), rgba(0,50,150,0.1), transparent)',
            filter: `blur(${isMoving ? '10px' : '15px'})`,
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            ...getDistanceStyle(0.9, 0.25, 1.8)
          }}>
        </div>
        
        <div 
          className="circuit-flow-3 absolute left-1/3 -top-20 h-40 w-2/3 opacity-30 animate-flow-3" 
          style={{
            background: isMoving 
              ? 'linear-gradient(180deg, transparent, rgba(0,100,100,0.4), rgba(0,150,150,0.3), transparent)'
              : 'linear-gradient(180deg, transparent, rgba(0,100,100,0.2), rgba(0,150,150,0.1), transparent)',
            filter: `blur(${isMoving ? '8px' : '12px'})`,
            borderRadius: '40% 60% 30% 70% / 40% 50% 50% 60%',
            ...getDistanceStyle(0.5, 0.1, 1.5)
          }}>
        </div>
        
        {/* Circuit node elements */}
        <div 
          className="circuit-node-1 w-80 h-80 rounded-full absolute top-1/4 left-1/4 animate-blob-1" 
          style={{
            background: isMoving 
              ? 'radial-gradient(circle, rgba(0,150,150,0.4) 0%, rgba(0,100,100,0.2) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(0,150,150,0.2) 0%, rgba(0,100,100,0.1) 50%, transparent 70%)',
            filter: `blur(${isMoving ? '15px' : '20px'})`,
            ...getDistanceStyle(0.25, 0.25, 1.2)
          }}>
        </div>
        
        <div 
          className="circuit-node-2 w-96 h-96 rounded-full absolute bottom-1/4 right-1/3 animate-blob-2" 
          style={{
            background: isMoving 
              ? 'radial-gradient(circle, rgba(0,50,150,0.4) 0%, rgba(0,0,120,0.2) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(0,50,150,0.2) 0%, rgba(0,0,120,0.1) 50%, transparent 70%)',
            filter: `blur(${isMoving ? '18px' : '25px'})`,
            ...getDistanceStyle(0.66, 0.75, 1.5)
          }}>
        </div>
        
        {/* Circuit pulse sparks */}
        <div 
          className="spark-1 w-3 h-3 rounded-full absolute top-1/5 left-1/5 animate-spark-1" 
          style={{
            background: isMoving 
              ? 'radial-gradient(circle, rgba(0,255,255,0.9) 0%, rgba(0,150,150,0.1) 70%)'
              : 'radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(0,150,150,0.1) 70%)',
            boxShadow: isMoving ? '0 0 15px 5px rgba(0,255,255,0.6)' : '0 0 10px 2px rgba(0,255,255,0.3)',
            ...getDistanceStyle(0.2, 0.2, 1.8)
          }}>
        </div>
        
        <div 
          className="spark-2 w-4 h-4 rounded-full absolute top-2/3 right-1/4 animate-spark-2" 
          style={{
            background: isMoving 
              ? 'radial-gradient(circle, rgba(0,150,255,0.9) 0%, rgba(0,100,200,0.1) 70%)'
              : 'radial-gradient(circle, rgba(0,150,255,0.6) 0%, rgba(0,100,200,0.1) 70%)',
            boxShadow: isMoving ? '0 0 15px 5px rgba(0,150,255,0.6)' : '0 0 10px 2px rgba(0,150,255,0.3)',
            ...getDistanceStyle(0.75, 0.66, 2)
          }}>
        </div>
        
        <div 
          className="spark-3 w-2 h-2 rounded-full absolute top-1/3 right-1/6 animate-spark-3" 
          style={{
            background: isMoving 
              ? 'radial-gradient(circle, rgba(0,200,200,0.9) 0%, rgba(0,100,100,0.1) 70%)'
              : 'radial-gradient(circle, rgba(0,200,200,0.6) 0%, rgba(0,100,100,0.1) 70%)',
            boxShadow: isMoving ? '0 0 10px 3px rgba(0,200,200,0.6)' : '0 0 8px 2px rgba(0,200,200,0.3)',
            ...getDistanceStyle(0.83, 0.33, 1.6)
          }}>
        </div>
        
        {/* Add more circuit sparks */}
        {Array.from({ length: 12 }).map((_, i) => {
          const randomX = Math.random();
          const randomY = Math.random();
          const size = Math.random() * 2 + 1;
          
          return (
            <div 
              key={`spark-extra-${i}`}
              className={`spark-extra-${i} rounded-full absolute animate-spark-${i % 3 + 1}`} 
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${randomX * 100}%`,
                top: `${randomY * 100}%`,
                background: isMoving 
                  ? `radial-gradient(circle, rgba(${i % 2 ? 0 : 50},${150 + i * 10},${200 - i * 10},0.9) 0%, rgba(0,100,150,0.1) 70%)`
                  : `radial-gradient(circle, rgba(${i % 2 ? 0 : 50},${150 + i * 10},${200 - i * 10},0.6) 0%, rgba(0,100,150,0.1) 70%)`,
                boxShadow: isMoving ? `0 0 ${7 + i % 5}px ${2 + i % 3}px rgba(0,${150 + i * 10},${200 - i * 10},0.6)` : `0 0 ${5 + i % 3}px ${1 + i % 2}px rgba(0,${150 + i * 10},${200 - i * 10},0.3)`,
                ...getDistanceStyle(randomX, randomY, 1 + Math.random())
              }}>
            </div>
          );
        })}
        
        {/* Circuit lines that move with cursor */}
        <div className="circuit-lines">
          {Array.from({ length: 8 }).map((_, i) => {
            const startX = i % 2 ? 0 : 100;
            const startY = Math.random() * 100;
            const isHorizontal = i % 3 === 0;
            const length = 30 + Math.random() * 40;
            
            return (
              <div 
                key={`line-${i}`}
                className={`circuit-line-${i} absolute opacity-30 animate-line-${i % 4 + 1}`}
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                  width: isHorizontal ? `${length}%` : '1px',
                  height: isHorizontal ? '1px' : `${length}%`,
                  background: isMoving 
                    ? `linear-gradient(${isHorizontal ? '90deg' : '180deg'}, transparent, rgba(0,${150 + i * 10},${200 - i * 10},0.8), transparent)`
                    : `linear-gradient(${isHorizontal ? '90deg' : '180deg'}, transparent, rgba(0,${150 + i * 10},${200 - i * 10},0.5), transparent)`,
                  boxShadow: isMoving ? `0 0 5px rgba(0,${150 + i * 10},${200 - i * 10},0.8)` : `0 0 3px rgba(0,${150 + i * 10},${200 - i * 10},0.5)`,
                  ...getDistanceStyle(startX/100, startY/100, 0.8)
                }}>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Dark glass overlay for content */}
      <div 
        className="fixed inset-0 -z-10 bg-black/20 backdrop-blur-sm"
        style={{
          backdropFilter: `blur(${isMoving ? '2px' : '3px'})`,
          transition: 'backdrop-filter 0.3s ease-out'
        }}
      ></div>
      
      <style jsx global>{`
        @keyframes flow-1 {
          0% { transform: translateX(0) translateY(0) scale(1); }
          25% { transform: translateX(20vw) translateY(3vh) scale(1.1); }
          50% { transform: translateX(35vw) translateY(-2vh) scale(1); }
          75% { transform: translateX(15vw) translateY(-4vh) scale(0.9); }
          100% { transform: translateX(0) translateY(0) scale(1); }
        }
        
        @keyframes flow-2 {
          0% { transform: translateX(0) translateY(0) scale(1); }
          33% { transform: translateX(-20vw) translateY(5vh) scale(1.05); }
          66% { transform: translateX(-35vw) translateY(-3vh) scale(0.95); }
          100% { transform: translateX(0) translateY(0) scale(1); }
        }
        
        @keyframes flow-3 {
          0% { transform: translateX(0) translateY(0) scale(1); }
          30% { transform: translateX(-5vw) translateY(20vh) scale(1.1); }
          60% { transform: translateX(8vw) translateY(35vh) scale(0.9); }
          100% { transform: translateX(0) translateY(0) scale(1); }
        }
        
        @keyframes blob-1 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
          25% { transform: translate(2vw, -1vh) scale(1.03) rotate(5deg); border-radius: 50% 50% 40% 60% / 40% 60% 40% 60%; }
          50% { transform: translate(4vw, 2vh) scale(1) rotate(10deg); border-radius: 30% 70% 70% 30% / 50% 40% 60% 50%; }
          75% { transform: translate(1vw, 3vh) scale(0.97) rotate(5deg); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
        }
        
        @keyframes blob-2 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%; }
          33% { transform: translate(-3vw, 2vh) scale(1.05) rotate(-8deg); border-radius: 40% 60% 50% 50% / 30% 60% 40% 70%; }
          66% { transform: translate(-1vw, -3vh) scale(0.95) rotate(-15deg); border-radius: 70% 30% 40% 60% / 40% 50% 50% 60%; }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%; }
        }
        
        @keyframes spark-1 {
          0% { opacity: 0.4; transform: scale(0.8); }
          20% { opacity: 1; transform: scale(1.8); }
          40% { opacity: 0.6; transform: scale(0.9); }
          60% { opacity: 0.8; transform: scale(1.2); }
          80% { opacity: 0.3; transform: scale(0.6); }
          100% { opacity: 0.4; transform: scale(0.8); }
        }
        
        @keyframes spark-2 {
          0% { opacity: 0.5; transform: scale(1); }
          30% { opacity: 0.9; transform: scale(1.5); }
          60% { opacity: 0.3; transform: scale(0.7); }
          100% { opacity: 0.5; transform: scale(1); }
        }
        
        @keyframes spark-3 {
          0% { opacity: 0.3; transform: scale(0.6); }
          40% { opacity: 1; transform: scale(1.4); }
          80% { opacity: 0.5; transform: scale(0.8); }
          100% { opacity: 0.3; transform: scale(0.6); }
        }
        
        @keyframes line-1 {
          0% { opacity: 0.1; }
          30% { opacity: 0.5; }
          60% { opacity: 0.3; }
          100% { opacity: 0.1; }
        }
        
        @keyframes line-2 {
          0% { opacity: 0.2; }
          25% { opacity: 0.6; }
          50% { opacity: 0.3; }
          75% { opacity: 0.5; }
          100% { opacity: 0.2; }
        }
        
        @keyframes line-3 {
          0% { opacity: 0.1; }
          40% { opacity: 0.4; }
          80% { opacity: 0.2; }
          100% { opacity: 0.1; }
        }
        
        @keyframes line-4 {
          0% { opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { opacity: 0.3; }
        }
        
        .animate-flow-1 {
          animation: flow-1 25s ease-in-out infinite;
        }
        
        .animate-flow-2 {
          animation: flow-2 32s ease-in-out infinite;
        }
        
        .animate-flow-3 {
          animation: flow-3 28s ease-in-out infinite;
        }
        
        .animate-blob-1 {
          animation: blob-1 20s ease-in-out infinite;
        }
        
        .animate-blob-2 {
          animation: blob-2 25s ease-in-out infinite;
        }
        
        .animate-spark-1 {
          animation: spark-1 3s ease-in-out infinite;
        }
        
        .animate-spark-2 {
          animation: spark-2 4s ease-in-out infinite;
        }
        
        .animate-spark-3 {
          animation: spark-3 3.5s ease-in-out infinite;
        }
        
        .animate-line-1 {
          animation: line-1 8s ease-in-out infinite;
        }
        
        .animate-line-2 {
          animation: line-2 10s ease-in-out infinite;
        }
        
        .animate-line-3 {
          animation: line-3 9s ease-in-out infinite;
        }
        
        .animate-line-4 {
          animation: line-4 7s ease-in-out infinite;
        }
      `}</style>
    </>
  );
});
export default function Page() {
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
    <div className="mx-3 sm:mx-6 md:mx-12 lg:mx-16 p-4 sm:p-6 md:p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md shadow-lg border border-green-500/20">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent tracking-tight">Premium Training</h2>
        <a href="#" className="text-green-400 hover:text-green-300 text-base hidden md:flex items-center font-semibold transition-all duration-300 hover:translate-x-1">
          Explore All Courses
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {trainingsData.map((training, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col group">
            <div className={`bg-gradient-to-br from-green-800 to-blue-900 p-6 pt-6 px-6 pb-0 min-h-120 flex flex-col h-full`}>
              {/* Premium badge */}
              <div className="absolute top-5 right-5">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm border border-green-400/40 transition-all duration-300 group-hover:scale-110">
                  <span className="text-white text-xl font-bold drop-shadow-md">PRO</span>
                </div>
              </div>
              
              {/* Content with improved spacing and layout */}
              <div className="pr-24 pb-24">
                <div className="mb-4 inline-block px-4 py-1.5 bg-green-500/10 rounded-full backdrop-blur-sm border border-green-500/20">
                  <span className="text-sm font-bold text-green-300 tracking-wide">CERTIFICATION INCLUDED</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 line-clamp-2 leading-tight">{training.title}</h3>
                
                <div className="text-white/90 text-base space-y-5 mt-8">
                  <p className="text-white font-medium text-lg">Master these in-demand skills:</p>
                  <ul className="grid grid-cols-1 gap-y-4 mt-5">
                    {training.skills.slice(0, 7).map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start text-base group-hover:translate-x-1 transition-transform duration-300">
                        <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="truncate">{skill}</span>
                      </li>
                    ))}
                    {training.skills.length > 7 && (
                      <li className="flex items-center text-sm pl-8">
                        <span className="text-green-300 italic">+{training.skills.length - 7} more skills included...</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              
              {/* Enhanced call-to-action button */}
              <div className="mt-auto -mx-6 -mb-px">
                <a 
                  href="https://forms.gle/DKJsgZNqCmuL2j7W8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-black text-white text-base font-bold uppercase tracking-wider transition-all duration-300 hover:bg-green-900 flex items-center justify-center group-hover:bg-green-800"
                >
                  <span>ENROLL NOW</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Added bonus banner */}
      <div className="mt-10 bg-gradient-to-r from-green-700/90 to-blue-800/90 rounded-xl p-5 sm:p-7 text-white text-center border border-green-500/30">
        <p className="font-bold text-lg">🎁 BONUS: Enroll in any course today and get access to our exclusive mentorship program!</p>
      </div>
    </div>
  </div>
        
        {/* Community Section with Image - FIXED STRUCTURE */}
        <div className="my-0 sm:my-0 md:my-0"> 
          <div className="mx-0 sm:mx-0 md:mx-0 lg:mx-0 p-0 sm:p-0 md:p-0 rounded-2xl bg-white/30 backdrop-blur-md shadow-lg border border-white/30"> 
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image side - INCREASED SIZE */}
              <div className="w-full md:w-1/2 relative">
                <div className="relative h-80 sm:h-96 md:h-120 lg:h-140 w-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/community.jpg"
                    alt="Our Learning Community"
                    fill
                    className="object-cover" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
              
              {/* Content side */}
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">


                  Join Our Learning Community
                </h2>
                <p className="text-base sm:text-lg text-white">Connect with professionals and industry experts</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-white">Networking Events</h3>
                      <p className="text-sm text-white">Connect with professionals and industry experts</p>

                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-white">Mentorship Programs</h3>

                      <p className="text-sm text-white">Learn from industry leaders who guide your career</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Job Opportunities</h3>
                      <p className="text-sm text-white">Access exclusive career opportunities and placements</p>
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
}

