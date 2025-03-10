import React, { useState, useEffect } from 'react';

interface InternshipCardProps {
  name?: string;
  providers?: string[];
  duration?: string;
  bgColor?: string;
  category?: string;
  image?: string;
}

// Default internship data
const defaultInternships = [
  {
    name: 'AI Intern Program',
    providers: ['Google', 'Microsoft', 'OpenAI'],
    duration: '3 Months',
    bgColor: 'bg-gradient-to-br from-teal-500 to-green-600',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  },
  {
    name: 'Data Science Intern',
    providers: ['Coursera', 'Stanford', 'IBM'],
    duration: '2 Months',
    bgColor: 'bg-gradient-to-br from-green-600 to-teal-500',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1531279550271-23c2a77a765c?w=800&q=80',
  },
  {
    name: 'Cybersecurity Intern',
    providers: ['Cisco', 'CompTIA', 'EC-Council'],
    duration: '4 Months',
    bgColor: 'bg-gradient-to-br from-teal-600 to-green-700',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
  },
  {
    name: 'Web Development Intern',
    providers: ['Meta', 'Mozilla', 'W3C'],
    duration: '2 Months',
    bgColor: 'bg-gradient-to-br from-teal-400 to-green-500',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
];

const InternshipCard: React.FC<InternshipCardProps> = (props) => {
  // If individual props are provided, use them. Otherwise, use the default data for display
  const [displayData, setDisplayData] = useState<Array<{
    name: string;
    providers: string[];
    duration: string;
    bgColor: string;
    category: string;
    image: string;
  }>>(defaultInternships);

  // Track the animated index for each card
  const [animateIndices, setAnimateIndices] = useState<Record<number, number>>({});

  useEffect(() => {
    const intervals: Record<number, NodeJS.Timeout> = {};
    
    // Create interval for each card to animate provider names
    displayData.forEach((_, index) => {
      intervals[index] = setInterval(() => {
        setAnimateIndices((prev) => ({
          ...prev,
          [index]: (prev[index] === undefined ? 0 : (prev[index] + 1) % displayData[index].providers.length),
        }));
      }, 2000);
    });

    // Clear intervals on unmount
    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [displayData]);

  // If individual props are provided, render a single card
  if (props.name && props.providers && props.duration && props.bgColor && props.category && props.image) {
    const { name, providers, duration, bgColor, category, image } = props;
    const [animateIndex, setAnimateIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setAnimateIndex((prev) => (prev + 1) % providers.length);
      }, 2000);

      return () => clearInterval(interval);
    }, [providers]);

    return (
      <SingleInternshipCard 
        name={name}
        providers={providers}
        duration={duration}
        bgColor={bgColor}
        category={category}
        image={image}
        animateIndex={animateIndex}
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
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
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

export default InternshipCard;