'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, ArrowUpRight } from 'lucide-react';

// Card Carousel Component
const CardCarousel = ({ title, cards, viewAllLink }: {
  title: string;
  cards: React.ReactNode[];
  viewAllLink: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, cards.length - 3));
  };

  return (
    <div className="w-full mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-light">{title}</h2>
        <a href={viewAllLink} className="text-emerald-500 hover:underline flex items-center gap-1 group">
          View all
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
      
      <div className="relative">
        <div className="flex overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out" 
            style={{ transform: `translateX(-${currentIndex * 320}px)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-72 mr-4 flex-shrink-0">
                {card}
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute right-0 -bottom-10 flex gap-2">
          <button 
            onClick={handlePrev} 
            className={`rounded-full p-2 transition-all duration-300 ${
              currentIndex === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-md hover:shadow-lg'
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext} 
            className={`rounded-full p-2 transition-all duration-300 ${
              currentIndex >= cards.length - 3 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-md hover:shadow-lg'
            }`}
            disabled={currentIndex >= cards.length - 3}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Internship Card Component
interface InternshipCardProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  salary: string;
  logoColor: 'purple' | 'orange' | 'gray' | 'blue' | 'green' | 'red' | 'yellow';
}

const InternshipCard = ({ 
  company, 
  role, 
  duration, 
  location, 
  salary, 
  logoColor 
}: InternshipCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const logoColors = {
    purple: 'bg-purple-700',
    orange: 'bg-orange-500',
    gray: 'bg-gray-600',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-500'
  };

  const borderColors = {
    purple: 'border-purple-700',
    orange: 'border-orange-500',
    gray: 'border-gray-600',
    blue: 'border-blue-600',
    green: 'border-green-600',
    red: 'border-red-600',
    yellow: 'border-yellow-500'
  };

  const textColors = {
    purple: 'text-purple-700',
    orange: 'text-orange-500',
    gray: 'text-gray-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    red: 'text-red-600',
    yellow: 'text-yellow-500'
  };

  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-md h-full bg-white border-2 border-transparent cursor-pointer transition-all duration-300 flex flex-col ${isHovered ? `${borderColors[logoColor]} shadow-xl translate-y-[-5px]` : 'hover:shadow-lg'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => console.log(`Selected ${company} internship`)}
    >
      <div className={`relative p-5 flex-1 ${isHovered ? 'bg-white' : logoColors[logoColor]}`}>
        <div className={`absolute top-0 left-0 w-full h-full ${logoColors[logoColor]} transition-all duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
        
        <div className="relative z-10 h-full flex flex-col">
          <div className={`rounded-full ${isHovered ? logoColors[logoColor] : 'bg-white'} w-10 h-10 flex items-center justify-center transition-all duration-300`}>
            <ExternalLink size={16} className={isHovered ? 'text-white' : 'text-black'} />
          </div>
          
          <div className={`text-xs mt-4 mb-1 font-semibold tracking-wider transition-colors duration-300 ${isHovered ? `${textColors[logoColor]}` : 'text-white'}`}>
            INTERNSHIP
          </div>
          
          <div className={`font-bold text-lg transition-colors duration-300 ${isHovered ? 'text-gray-800' : 'text-white'}`}>
            {company} - {role}
          </div>
          
          <div className={`text-sm mt-2 transition-colors duration-300 ${isHovered ? 'text-gray-600' : 'text-white/90'}`}>
            {duration} • {location} {salary && `• ${salary}/month`}
          </div>
          
          <div className={`mt-auto pt-4 inline-flex items-center gap-1 font-medium text-sm transition-all duration-300 ${isHovered ? `${textColors[logoColor]} opacity-100` : 'opacity-0'}`}>
            Apply now
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Course Card Component
interface CourseCardProps {
  title: string;
  provider: string;
  image: string;
  logoColor: 'teal' | 'blue' | 'purple' | 'darkblue' | 'red' | 'green' | 'orange' | 'yellow';
}

const CourseCard = ({ 
  title, 
  provider, 
  image, 
  logoColor 
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const bgColors = {
    teal: 'bg-teal-800',
    blue: 'bg-blue-800',
    purple: 'bg-purple-900',
    darkblue: 'bg-blue-900',
    red: 'bg-red-800',
    green: 'bg-green-800',
    orange: 'bg-orange-800',
    yellow: 'bg-yellow-700'
  };
  
  const textColors = {
    teal: 'text-teal-800',
    blue: 'text-blue-800',
    purple: 'text-purple-900',
    darkblue: 'text-blue-900',
    red: 'text-red-800',
    green: 'text-green-800',
    orange: 'text-orange-800',
    yellow: 'text-yellow-700'
  };
  
  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-md h-full transition-all duration-300 ${isHovered ? 'shadow-xl translate-y-[-5px]' : 'hover:shadow-lg'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => console.log(`Selected ${title} course`)}
    >
      <div className="relative h-full flex flex-col">
        {/* Background image with color overlay */}
        <div className={`h-36 relative ${bgColors[logoColor]} overflow-hidden flex-shrink-0`}>
          <img 
            src={image} 
            alt={title} 
            className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'opacity-25 scale-110' : 'opacity-50'}`} 
          />
        </div>
        
        {/* Card info section that slides up on hover */}
        <div 
          className={`bg-white p-4 shadow-md transition-all duration-300 flex-grow flex flex-col`}
        >
          <div className="font-bold text-gray-800">{title}</div>
          <div className="text-sm text-gray-500">by {provider}</div>
          
          {/* "View course" button that appears on hover */}
          <div 
            className={`mt-auto pt-2 inline-flex items-center gap-1 font-medium text-sm ${textColors[logoColor]} transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            View course <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main IntershipsCourses Component
const IntershipsCourses = () => {
  // Internship data
  const internships = [
    {
      company: 'Infosys',
      role: 'Full Stack Developer',
      duration: 'Full time • 7 months',
      location: 'USA',
      salary: '42k',
      logoColor: 'purple' as const
    },
    {
      company: 'Google',
      role: 'Machine Learning',
      duration: 'Full time • 1 month',
      location: 'USA',
      salary: '40k',
      logoColor: 'orange' as const
    },
    {
      company: 'Amazon',
      role: 'Data Analyst',
      duration: 'Full time • 3 months',
      location: 'Remote',
      salary: '',
      logoColor: 'gray' as const
    },
    {
      company: 'Microsoft',
      role: 'Frontend Developer',
      duration: 'Part time • 4 months',
      location: 'USA',
      salary: '35k',
      logoColor: 'blue' as const
    },
    {
      company: 'Spotify',
      role: 'UX Designer',
      duration: 'Full time • 3 months',
      location: 'Remote',
      salary: '38k',
      logoColor: 'green' as const
    },
    {
      company: 'Netflix',
      role: 'Backend Engineer',
      duration: 'Full time • 6 months',
      location: 'USA',
      salary: '45k',
      logoColor: 'red' as const
    },
    {
      company: 'Adobe',
      role: 'UI Designer',
      duration: 'Full time • 5 months',
      location: 'Remote',
      salary: '37k',
      logoColor: 'yellow' as const
    }
  ];

  // Course data
  const courses = [
    {
      title: 'NVIDIA',
      provider: 'DeepLearning Institute',
      image: '/api/placeholder/300/200',
      logoColor: 'teal' as const
    },
    {
      title: 'Digital Marketing',
      provider: 'Marketing Mastery',
      image: '/api/placeholder/300/200',
      logoColor: 'blue' as const
    },
    {
      title: 'Introduction to ML',
      provider: 'AI Academy',
      image: '/api/placeholder/300/200',
      logoColor: 'purple' as const
    },
    {
      title: 'Java coding camp 21',
      provider: 'Koding K',
      image: '/api/placeholder/300/200',
      logoColor: 'darkblue' as const
    },
    {
      title: 'React Masterclass',
      provider: 'Frontend Experts',
      image: '/api/placeholder/300/200',
      logoColor: 'red' as const
    },
    {
      title: 'Python for Data Science',
      provider: 'Data Analytics Pro',
      image: '/api/placeholder/300/200',
      logoColor: 'green' as const
    },
    {
      title: 'UX/UI Design Principles',
      provider: 'Design School',
      image: '/api/placeholder/300/200',
      logoColor: 'orange' as const
    },
    {
      title: 'Blockchain Fundamentals',
      provider: 'Crypto Academy',
      image: '/api/placeholder/300/200',
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
    <section className="p-6 max-w-6xl mx-auto">
      <CardCarousel title="Internships" cards={internshipCards} viewAllLink="InternshipsPage" />
      <CardCarousel title="Courses" cards={courseCards} viewAllLink="CertificationsPage" />
    </section>
  );
};

export default IntershipsCourses;