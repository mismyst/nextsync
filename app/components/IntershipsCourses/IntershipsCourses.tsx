'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';

// Card Carousel Component with Improved Animation
const CardCarousel = ({ title, cards, viewAllLink }: {
  title: string;
  cards: React.ReactNode[];
  viewAllLink: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Refactor Auto-scroll behavior to be manual or use swipe gestures
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, cards.length - 1)); // Fixed 1 card per slide
  };

  return (
    <div className="w-full mb-16 py-10 px-4 md:px-8 overflow-hidden">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          {/* Change the animation, or perhaps use a different icon */}
          <Sparkles className="text-teal-500 mr-3 animate-pulse" size={28} />
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">{title}</h2>
        </div>
        <a href={viewAllLink} className="text-blue-500 hover:underline flex items-center gap-1 group text-lg font-bold">
          View all
          <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>

      {/* Cards Section */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * (320 + 16)}px)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-80 mr-4 flex-shrink-0 transform transition-all duration-500 hover:scale-110">
                {card}
              </div>
            ))}
          </div>
        </div>

        {/* Change navigation to icons or new buttons */}
        <div className="absolute right-0 -bottom-16 flex gap-3">
          <button 
            onClick={handlePrev} 
            className={`rounded-full p-3 transition-all duration-300 ${
              currentIndex === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-green-500 text-white hover:shadow-lg'
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={handleNext} 
            className={`rounded-full p-3 transition-all duration-300 ${
              currentIndex === cards.length - 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-600 to-green-500 text-white hover:shadow-lg'
            }`}
            disabled={currentIndex === cards.length - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};


// Internship Card Component with Real Images
interface InternshipCardProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  salary: string;
  imageSrc: string;
  logoColor: 'purple' | 'orange' | 'gray' | 'blue' | 'green' | 'red' | 'yellow';
}

const InternshipCard = ({ 
  company, 
  role, 
  duration, 
  location, 
  salary, 
  imageSrc,
  logoColor 
}: InternshipCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const gradients = {
    purple: 'from-purple-600 to-indigo-600',
    orange: 'from-orange-500 to-amber-500',
    gray: 'from-gray-700 to-slate-800',
    blue: 'from-blue-600 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    red: 'from-red-600 to-rose-500',
    yellow: 'from-yellow-500 to-amber-500'
  };

  const textColors = {
    purple: 'text-purple-600',
    orange: 'text-orange-500',
    gray: 'text-gray-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-500'
  };

  return (
    <div 
      className="rounded-lg overflow-hidden bg-white shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
      onClick={() => console.log(`Selected ${company} internship`)}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={company}
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-${logoColor}-500 to-transparent opacity-50`}></div>
      </div>
      
      <div className="p-6">
        <div className="font-bold text-lg text-gray-900 mb-2">{company}</div>
        <div className="text-sm text-gray-600 mb-4">{role}</div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div>{duration}</div>
          <div>{location}</div>
        </div>
        {salary && <div className="font-medium text-sm text-gray-800">{salary}/month</div>}
      </div>
    </div>
  );
};

// Course Card Component with Real Images
interface CourseCardProps {
  title: string;
  provider: string;
  imageSrc: string;
  logoColor: 'teal' | 'blue' | 'purple' | 'darkblue' | 'red' | 'green' | 'orange' | 'yellow';
}

const CourseCard = ({ 
  title, 
  provider, 
  imageSrc, 
  logoColor 
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const gradients = {
    teal: 'from-teal-500 to-emerald-500',
    blue: 'from-blue-600 to-indigo-600',
    purple: 'from-purple-600 to-violet-600',
    darkblue: 'from-blue-800 to-indigo-800',
    red: 'from-red-500 to-rose-500',
    green: 'from-green-500 to-teal-500',
    orange: 'from-orange-500 to-amber-500',
    yellow: 'from-yellow-500 to-amber-400'
  };
  
  const textColors = {
    teal: 'text-teal-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    darkblue: 'text-blue-800',
    red: 'text-red-600',
    green: 'text-green-600',
    orange: 'text-orange-500',
    yellow: 'text-yellow-600'
  };
  
  return (
    <div 
      className="rounded-lg overflow-hidden bg-white shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
      onClick={() => console.log(`Selected ${title} course`)}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-${logoColor}-500 to-transparent opacity-50`}></div>
      </div>
      
      <div className="p-6">
        <div className="font-bold text-lg text-gray-900 mb-2">{title}</div>
        <div className="text-sm text-gray-600 mb-4">{provider}</div>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="text-gray-600">Learn more</span>
          <ArrowUpRight size={16} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

// Main IntershipsCourses Component
const IntershipsCourses = () => {
  // Internship data with image sources
  const internships = [
    {
      company: 'Infosys',
      role: 'Full Stack Developer',
      duration: 'Full time • 7 months',
      location: 'USA',
      salary: '42k',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'purple' as const
    },
    {
      company: 'Google',
      role: 'Machine Learning',
      duration: 'Full time • 1 month',
      location: 'USA',
      salary: '40k',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'orange' as const
    },
    {
      company: 'Amazon',
      role: 'Data Analyst',
      duration: 'Full time • 3 months',
      location: 'Remote',
      salary: '',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'gray' as const
    },
    {
      company: 'Microsoft',
      role: 'Frontend Developer',
      duration: 'Part time • 4 months',
      location: 'USA',
      salary: '35k',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'blue' as const
    },
    {
      company: 'Spotify',
      role: 'UX Designer',
      duration: 'Full time • 3 months',
      location: 'Remote',
      salary: '38k',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'green' as const
    },
    {
      company: 'Netflix',
      role: 'Backend Engineer',
      duration: 'Full time • 6 months',
      location: 'USA',
      salary: '45k',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'red' as const
    },
    {
      company: 'Adobe',
      role: 'UI Designer',
      duration: 'Full time • 5 months',
      location: 'Remote',
      salary: '37k',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'yellow' as const
    }
  ];

  // Course data with image sources
  const courses = [
    {
      title: 'NVIDIA Deep Learning',
      provider: 'DeepLearning Institute',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'teal' as const
    },
    {
      title: 'Digital Marketing',
      provider: 'Marketing Mastery',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'blue' as const
    },
    {
      title: 'Introduction to ML',
      provider: 'AI Academy',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'purple' as const
    },
    {
      title: 'Java coding camp 21',
      provider: 'Koding K',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'darkblue' as const
    },
    {
      title: 'React Masterclass',
      provider: 'Frontend Experts',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'red' as const
    },
    {
      title: 'Python for Data Science',
      provider: 'Data Analytics Pro',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'green' as const
    },
    {
      title: 'UX/UI Design Principles',
      provider: 'Design School',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'orange' as const
    },
    {
      title: 'Blockchain Fundamentals',
      provider: 'Crypto Academy',
      imageSrc: '/api/placeholder/400/320',
      logoColor: 'yellow' as const
    }
  ];

  // Create card arrays
  const internshipCards = internships.map((internship, index) => (
    <InternshipCard key={index} {...internship} />
  ));

  const courseCards = courses.map((course, index) => (
    <CourseCard key={index} {...course} />
  ));

  return (
    <section className="py-10 w-full bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <CardCarousel title="Internships" cards={internshipCards} viewAllLink="/internships" />
        <CardCarousel title="Courses" cards={courseCards} viewAllLink="/courses" />
      </div>
    </section>
  );
};

export default IntershipsCourses;