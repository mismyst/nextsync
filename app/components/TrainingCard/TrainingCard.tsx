'use client'
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import icons to reduce initial bundle size
const IconComponents = dynamic(() => import('./IconComponents'), {
  ssr: false,
  loading: () => <span className="animate-pulse">⚪</span>
});

// Define explicit types for props with sensible defaults
export interface TrainingCardProps {
  instituteName: string;
  courseTitle: string;
  price: number;
  discountedPrice?: number;
  cardType: 'technical' | 'non-technical';
  skills: string[];
  id?: string;
}

// Main component optimized for Vercel deployment
const TrainingCard: React.FC<TrainingCardProps> = ({ 
  instituteName = "Training Institute", 
  courseTitle = "Course Title", 
  price = 0, 
  discountedPrice,
  cardType = 'technical',
  skills = [],
  id = `card-${Math.random().toString(36).substring(2, 9)}`
}) => {
  // Client-side state initialization to avoid hydration mismatch
  const [isClient, setIsClient] = useState(false);
  
  // Run only on client side to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Card background colors based on type - using Tailwind classes that are guaranteed to exist
  const cardBackground = cardType === 'technical' 
    ? 'bg-emerald-700 text-white' 
    : 'bg-blue-600 text-white';
  
  // Properly format price with Indian numbering system
  const formatIndianPrice = (num: number): string => {
    return num.toLocaleString('en-IN');
  };

  // List of skills to display (capped at 6 for performance)
  const displaySkills = skills.slice(0, 6);
  const remainingSkills = skills.length > 6 ? skills.length - 6 : 0;

  // UI placeholders for when icons haven't loaded yet
  const StarPlaceholder = () => <span className="text-yellow-300">★</span>;
  const UserPlaceholder = () => <span className="text-white opacity-80">👥</span>;
  const CheckPlaceholder = () => <span className={`${cardType === 'technical' ? 'text-emerald-500' : 'text-blue-500'} mr-2`}>✓</span>;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300" id={id}>
      <div className={`${cardBackground} p-6`}>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium opacity-90">{instituteName}</p>
            <h3 className="text-xl font-bold mt-1">{courseTitle}</h3>
          </div>
          <div className="flex items-center justify-center rounded-full bg-white text-gray-800 h-10 w-10 font-bold">
            {cardType === 'technical' ? 'T' : 'NT'}
          </div>
        </div>
        
        <div className="flex items-center mt-3">
          {isClient && IconComponents ? (
            <>
              <IconComponents.Star className="text-yellow-300" />
              <span className="ml-1 mr-3">4.8</span>
              <IconComponents.Users className="text-white opacity-80" />
              <span className="ml-1">1,250 students</span>
            </>
          ) : (
            <>
              <StarPlaceholder />
              <span className="ml-1 mr-3">4.8</span>
              <UserPlaceholder />
              <span className="ml-1">1,250 students</span>
            </>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <p className="font-medium text-gray-700 mb-2">Let's get better skills by mastering:</p>
        <div className="mb-4">
          {displaySkills.map((skill, index) => (
            <div key={`${id}-skill-${index}`} className="flex items-center mb-2">
              {isClient && IconComponents ? (
                <IconComponents.CheckCircle className={`${cardType === 'technical' ? 'text-emerald-500' : 'text-blue-500'} mr-2 flex-shrink-0`} />
              ) : (
                <CheckPlaceholder />
              )}
              <span className="text-gray-700">{skill}</span>
            </div>
          ))}
          {remainingSkills > 0 && (
            <p className="text-gray-500 mt-1">+{remainingSkills} more...</p>
          )}
        </div>
        
        <div className="mt-4" aria-live="polite">
          <p className="uppercase text-sm font-bold text-amber-600">LIMITED TIME OFFER!</p>
          <div className="flex items-end mt-1">
            <p className="text-xl font-bold" data-testid="current-price">
              {discountedPrice ? `INR.${formatIndianPrice(discountedPrice)}/-` : `INR.${formatIndianPrice(price)}/-`}
            </p>
            {discountedPrice && <p className="ml-2 text-gray-500 line-through text-sm" data-testid="original-price">₹{formatIndianPrice(price)}</p>}
          </div>
        </div>
        
        <button 
          className="w-full bg-gray-900 text-white py-3 rounded text-center font-medium mt-4 hover:bg-black transition-colors"
          onClick={(e) => {
            e.preventDefault();
            // Send event to analytics or handle enrollment
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'enroll_click', {
                course_name: courseTitle,
                course_type: cardType
              });
            }
          }}
          data-testid="enroll-button"
        >
          ENROLL NOW
        </button>
      </div>
    </div>
  );
};

export default TrainingCard;

// Create a separate file named IconComponents.tsx with this content:
// -----------------------------------------------------------------
/*
import { FaStar, FaUsers, FaCheckCircle } from 'react-icons/fa';

const IconComponents = {
  Star: FaStar,
  Users: FaUsers,
  CheckCircle: FaCheckCircle
};

export default IconComponents;
*/
  
