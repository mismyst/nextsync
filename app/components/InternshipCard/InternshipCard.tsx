import React, { useState, useEffect } from 'react';

interface InternshipCardProps {
  name?: string;
  providers?: string[];
  duration?: string;
  bgColor?: string;
  category?: string;
  image?: string;
}

// Default internship data with local images
const defaultInternships = [
  {
    name: 'AI Intern Program',
    providers: ['Google', 'Microsoft', 'OpenAI'],
    duration: '3 Months',
    bgColor: 'bg-gradient-to-br from-teal-500 to-green-600',
    category: 'AI',
    image: './images/ai-internship.jpg', // Using absolute path from public folder
  },
  {
    name: 'Data Science Intern',
    providers: ['Coursera', 'Stanford', 'IBM'],
    duration: '2 Months',
    bgColor: 'bg-gradient-to-br from-green-600 to-teal-500',
    category: 'Data Science',
    image: './images/data-science.jpg',
  },
  {
    name: 'Cybersecurity Intern',
    providers: ['Cisco', 'CompTIA', 'EC-Council'],
    duration: '4 Months',
    bgColor: 'bg-gradient-to-br from-teal-600 to-green-700',
    category: 'Security',
    image: './images/cybersecurity.jpg',
  },
  {
    name: 'Web Development Intern',
    providers: ['Meta', 'Mozilla', 'W3C'],
    duration: '2 Months',
    bgColor: 'bg-gradient-to-br from-teal-400 to-green-500',
    category: 'Web Development',
    image: './images/web-dev.jpg',
  },
];

// Helper component for a single card
interface SingleCardProps {
  name: string;
  providers: string[];
  duration: string;
  bgColor: string;
  category: string;
  image: string;
  animateIndex: number;
}

const SingleInternshipCard: React.FC<SingleCardProps> = ({
  name,
  providers,
  duration,
  bgColor,
  category,
  image,
  animateIndex,
}) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      {/* Image section */}
      <div className="relative h-60 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
          loading="lazy"
        />
        <div className={`${bgColor} absolute inset-0 opacity-80 mix-blend-multiply`}></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
          <div>
            <div className="text-xs font-semibold text-white/90 mb-1 backdrop-blur-sm bg-black/30 inline-block px-3 py-1 rounded-full">
              {category}
            </div>
            <h3 className="text-2xl font-semibold text-white mt-2 drop-shadow-md">
              {name}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <p className="text-xs text-teal-500 font-semibold mb-1">DURATION</p>
          <p className="text-sm">{duration}</p>
        </div>

        <div className="relative h-6 overflow-hidden">
          <p className="text-xs text-teal-500 font-semibold absolute top-0 left-0">PARTNERS</p>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start pl-20">
            {providers.map((provider, pIndex) => (
              <span
                key={pIndex}
                className={`text-sm font-medium transition-opacity duration-500 absolute ${
                  pIndex === animateIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {provider}
              </span>
            ))}
          </div>
        </div>

        <a
          href="#"
          className="mt-4 inline-flex items-center text-teal-600 text-sm hover:text-teal-700 transition-colors"
        >
          View Internship
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const InternshipCard: React.FC<InternshipCardProps> = (props) => {
  // Setup states before any conditional returns
  const [animateIndices, setAnimateIndices] = useState<Record<number, number>>({});
  const [singleCardAnimateIndex, setSingleCardAnimateIndex] = useState(0);
  const [displayData] = useState(defaultInternships);
  
  // Check if we should render a single card
  const isSingleCard = props.name && props.providers && props.duration && 
                      props.bgColor && props.category && props.image;

  useEffect(() => {
    if (isSingleCard && props.providers) {
      // Single card animation
      const interval = setInterval(() => {
        setSingleCardAnimateIndex((prev) => (prev + 1) % props.providers!.length);
      }, 2000);
      
      return () => clearInterval(interval);
    } else {
      // Multiple cards animation
      const intervals: Record<number, NodeJS.Timeout> = {};
      
      displayData.forEach((_, index) => {
        intervals[index] = setInterval(() => {
          setAnimateIndices((prev) => ({
            ...prev,
            [index]: (prev[index] === undefined ? 0 : (prev[index] + 1) % displayData[index].providers.length),
          }));
        }, 2000);
      });
      
      return () => {
        Object.values(intervals).forEach((interval) => clearInterval(interval));
      };
    }
  }, [displayData, isSingleCard, props.providers]);

  // Render single card if props provided
  if (isSingleCard) {
    return (
      <SingleInternshipCard 
        name={props.name!}
        providers={props.providers!}
        duration={props.duration!}
        bgColor={props.bgColor!}
        category={props.category!}
        image={props.image!}
        animateIndex={singleCardAnimateIndex}
      />
    );
  }

  // Otherwise, render the default grid of cards
  return (
    <div className="py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Available Internships</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayData.map((internship, index) => (
          <SingleInternshipCard
            key={index}
            name={internship.name}
            providers={internship.providers}
            duration={internship.duration}
            bgColor={internship.bgColor}
            category={internship.category}
            image={internship.image}
            animateIndex={animateIndices[index] || 0}
          />
        ))}
      </div>
    </div>
  );
};

export default InternshipCard;
