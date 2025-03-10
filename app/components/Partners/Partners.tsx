'use client'
import Image from "next/image";
import { useState } from "react";

export default function Partners() {
  // State for counters
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section className="w-full max-w-7xl mx-auto p-8 bg-white rounded-2xl shadow-sm animate-fadeIn">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left content */}
        <div className="flex-1">
          <div className="mb-6 animate-slideUp" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Meet Our Experts
            </span>
          </div>

          <h2 
            className="text-4xl md:text-6xl font-bold leading-tight mb-8 bg-gradient-to-r from-slate-800 to-slate-600 text-transparent bg-clip-text animate-slideUp"
            style={{ animationDelay: "0.3s" }}
          >
            Industry
            <br />
            Professionals
            <br />
            <span className="relative">
              From{" "}
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-600 to-purple-600 animate-growWidth" />
            </span>
          </h2>

          <p
            className="text-gray-600 text-lg max-w-md mb-8 animate-slideUp"
            style={{ animationDelay: "0.4s" }}
          >
            Learn from world-class industry experts from leading global
            organizations delivering cutting-edge insights.
          </p>

          <button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 animate-slideUp"
            style={{ animationDelay: "0.5s" }}
          >
            Meet Our Experts
          </button>
        </div>

        {/* Right content - Logo grid with CSS animations */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* University of Dubai */}
            <div
              className="bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl p-4 flex items-center justify-center h-24 shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition-all animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="University of Dubai"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            {/* J.P. Morgan */}
            <div
              className="bg-gradient-to-br from-amber-800 to-amber-950 rounded-xl p-4 flex items-center justify-center h-24 shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition-all animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="J.P. Morgan"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Microsoft */}
            <div
              className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-xl p-4 flex items-center justify-center h-24 shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition-all animate-fadeIn"
              style={{ animationDelay: "0.5s" }}
            >
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Microsoft"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Mistral */}
            <div
              className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-4 flex items-center justify-center h-24 shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition-all animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Mistral"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Bosch */}
            <div
              className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-4 flex items-center justify-center h-24 shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition-all animate-fadeIn"
              style={{ animationDelay: "0.7s" }}
            >
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Bosch"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Mississippi State University */}
            <div
              className="bg-gradient-to-br from-rose-700 to-rose-900 rounded-xl p-4 flex items-center justify-center h-24 shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition-all animate-fadeIn"
              style={{ animationDelay: "0.8s" }}
            >
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Mississippi State University"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats section with counter animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div
          className="p-8 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border border-orange-100 hover:shadow-md transition-all hover:translate-y-[-5px] animate-fadeIn"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="mb-2">
            <span className="text-sm font-semibold tracking-wider uppercase text-orange-600">Global</span>
          </div>
          <h3 className="text-2xl font-bold flex items-baseline">
            <span className="text-4xl font-black mr-2 text-orange-600 animate-countUp">
              50K+
            </span>
            <span>Students worldwide</span>
          </h3>
        </div>

        <div
          className="p-8 bg-gradient-to-r from-purple-50 to-transparent rounded-xl border border-purple-100 hover:shadow-md transition-all hover:translate-y-[-5px] animate-fadeIn"
          style={{ animationDelay: "1s" }}
        >
          <div className="mb-2">
            <span className="text-sm font-semibold tracking-wider uppercase text-purple-600">Rated</span>
          </div>
          <h3 className="text-2xl font-bold flex items-baseline">
            <span className="text-4xl font-black mr-2 text-purple-600 animate-countUp">
              4.8
            </span>
            <span>Average course rating</span>
          </h3>
        </div>

        <div
          className="p-8 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border border-blue-100 hover:shadow-md transition-all hover:translate-y-[-5px] animate-fadeIn"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="mb-2">
            <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">Offers</span>
          </div>
          <h3 className="text-2xl font-bold flex items-baseline">
            <span className="text-4xl font-black mr-2 text-blue-600 animate-countUp">
              30%
            </span>
            <span>Discount for new students</span>
          </h3>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes growWidth {
          from { width: 0; }
          to { width: 50%; }
        }
        
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }
        
        .animate-slideUp {
          opacity: 0;
          animation: slideUp 0.5s forwards;
        }
        
        .animate-growWidth {
          width: 0;
          animation: growWidth 0.8s forwards;
          animation-delay: 1s;
        }
        
        .animate-countUp {
          opacity: 0;
          animation: countUp 0.5s forwards;
          animation-delay: 1.2s;
        }
      `}</style>
    </section>
  );
}