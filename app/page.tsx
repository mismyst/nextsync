'use client'
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';

import ContactForm from './components/ContactForm/ContactForm';

import Partners from './components/Partners/Partners';
import InternshipCard from './components/InternshipCard/InternshipCard';

const Page = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Base gradient background - softer, more pale green colors */}
      <div className="fixed inset-0 -z-20 animate-[gradient_20s_ease_infinite] bg-gradient-to-r from-emerald-50 via-green-100 to-teal-200 bg-[length:400%_400%]"></div>
      
      {/* More subtle floating animated shapes with very low opacity */}
      <div className="fixed top-5 left-10 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="fixed top-1/4 right-10 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="fixed bottom-1/3 left-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="fixed bottom-10 right-1/4 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-6000"></div>
      
      {/* Enhanced glassmorphic noise texture overlay */}
      <div className="fixed inset-0 -z-10 bg-white/40 backdrop-blur-[2px] bg-opacity-20"></div>
      
      {/* More subtle grid pattern for glass effect */}
      <div className="fixed inset-0 -z-10 backdrop-blur-[1px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCAyMCA1IE0gNSAwIEwgNSAyMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-20"></div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main className="w-full max-w-none px-0 flex-grow">
          {/* Main sections with improved glassmorphic cards */}
          <HeroSection />
          
          {/* Partners section with refined glassmorphic effect */}
          <div className="my-8">
            <div className="mx-4 sm:mx-8 md:mx-16 p-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-xl border border-white/30 hover:bg-white/35 transition-all duration-300">
              <Partners />
            </div>
          </div>
          
          {/* Internships section with refined glassmorphic effect */}
          <div className="my-8">
            <div className="mx-4 sm:mx-8 md:mx-16 p-6 rounded-2xl bg-white/30 backdrop-blur-md shadow-xl border border-white/30 hover:bg-white/35 transition-all duration-300">
             <InternshipCard/>
            </div>
          </div>
          
          {/* Socials section with refined glassmorphic effect */}

          
          {/* Contact form with enhanced refined glassmorphic effect */}
          <div className="my-8 mx-4 sm:mx-8 md:mx-16 p-8 rounded-2xl bg-white/40 backdrop-blur-lg shadow-xl border border-white/40 hover:bg-white/45 transition-all duration-300">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-slate-800 drop-shadow-sm">What's your suggestion?</h2>
            <ContactForm />
          </div>
        </main>
        <Footer />
      </div>
      
      {/* Add custom animation keyframes */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
          animation: blob 10s infinite;
        }
      `}</style>
    </div>
  );
};

export default Page;
