'use client';

import React from 'react';
// Remove the unused FaArrowRight import
import { FaStar } from 'react-icons/fa';

interface TrainingCardProps {
  instituteName: string;
  courseTitle: string;
  price: number;
  backgroundGradient: string;
}

const TrainingCard: React.FC<TrainingCardProps> = ({
  instituteName,
  courseTitle,
  price,
  backgroundGradient
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
      <div className={`${backgroundGradient} p-6 text-white`}>
        <p className="text-white text-sm font-medium opacity-75">{instituteName}</p>
        <h3 className="text-xl font-bold mt-1">{courseTitle}</h3>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-300" />
          <FaStar className="text-yellow-300" />
          <FaStar className="text-yellow-300" />
          <FaStar className="text-yellow-300" />
          <FaStar className="text-yellow-300" />
          <span className="ml-2 text-sm">5.0</span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="mb-4">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Best Seller</span>
          </div>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li>• Industry-recognized certification</li>
            <li>• Expert instructors</li>
            <li>• Hands-on projects included</li>
          </ul>
        </div>
        
        <div className="mt-auto">
          <div className="border-t pt-4 flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-xs">Price</p>
              <p className="text-2xl font-bold text-green-600">₹{price.toLocaleString()}</p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
