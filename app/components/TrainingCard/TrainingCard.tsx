'use client'
import React from 'react';
import { FaStar, FaArrowRight, FaUsers, FaCheckCircle } from 'react-icons/fa';

// Define explicit types for props
interface TrainingCardProps {
  instituteName: string;
  courseTitle: string;
  price: number;
  discountedPrice?: number;
  cardType: 'technical' | 'non-technical';
  skills: string[];
}

const TrainingCard: React.FC<TrainingCardProps> = ({ 
  instituteName, 
  courseTitle, 
  price, 
  discountedPrice,
  cardType = 'technical', // Default value in case prop is missing
  skills = []  // Default value to prevent null errors
}) => {
  // Card background colors based on type
  const cardBackground = cardType === 'technical' 
    ? 'bg-emerald-700 text-white' 
    : 'bg-blue-600 text-white';
  
  // Fixed rating and student count for consistent SSR/hydration
  const rating = "4.8";
  const students = 1250;
  
  // Ensure skills has a value
  const skillsToDisplay = skills.length > 0 ? skills : [];
  
  // Format price with commas for Indian numbering
  const formatIndianPrice = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className={`${cardBackground} p-6`}>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium opacity-90">{instituteName || 'Training Institute'}</p>
            <h3 className="text-xl font-bold mt-1">{courseTitle || 'Course Title'}</h3>
          </div>
          <div className="flex items-center justify-center rounded-full bg-white text-gray-800 h-10 w-10 font-bold">
            {cardType === 'technical' ? 'T' : 'NT'}
          </div>
        </div>
        
        <div className="flex items-center mt-3">
          <FaStar className="text-yellow-300" />
          <span className="ml-1 mr-3">{rating}</span>
          <FaUsers className="text-white opacity-80" />
          <span className="ml-1">{students} students</span>
        </div>
      </div>
      
      <div className="p-6">
        <p className="font-medium text-gray-700 mb-2">Let's get better skills by mastering:</p>
        <div className="mb-4">
          {skillsToDisplay.slice(0, 5).map((skill, index) => (
            <div key={`skill-${index}`} className="flex items-center mb-2">
              <FaCheckCircle className={`${cardType === 'technical' ? 'text-emerald-500' : 'text-blue-500'} mr-2 flex-shrink-0`} />
              <span className="text-gray-700">{skill}</span>
            </div>
          ))}
          {skillsToDisplay.length > 5 && (
            <p className="text-gray-500 mt-1">+{skillsToDisplay.length - 5} more...</p>
          )}
        </div>
        
        <div className="mt-4">
          <p className="uppercase text-sm font-bold text-amber-600">LIMITED TIME OFFER!</p>
          <div className="flex items-end mt-1">
            <p className="text-xl font-bold">
              {discountedPrice ? `INR.${formatIndianPrice(discountedPrice)}/-` : `INR.${formatIndianPrice(price)}/-`}
            </p>
            {discountedPrice && <p className="ml-2 text-gray-500 line-through text-sm">₹{formatIndianPrice(price)}</p>}
          </div>
        </div>
        
        <button 
          className="w-full bg-gray-900 text-white py-3 rounded text-center font-medium mt-4 hover:bg-black transition-colors"
          onClick={(e) => {
            e.preventDefault();
            // Can add analytics tracking here if needed
            console.log(`Enrolled in: ${courseTitle}`);
          }}
        >
          ENROLL NOW
        </button>
      </div>
    </div>
  );
};

export default TrainingCard;
  
