'use client'
import React from 'react';
import { FaStar, FaArrowRight, FaUsers, FaCheckCircle } from 'react-icons/fa';
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
  // Generate random rating between 4.0 and 5.0
  const rating = (4 + Math.random()).toFixed(1);

  // Random number of students between 50 and 500
  const students = Math.floor(Math.random() * 450) + 50;

  // Random features
  const features = [
    "Certificate Included",
    "Industry Expert Trainers",
    "Hands-on Projects",
    "24/7 Support"
  ];

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div className={${backgroundGradient} p-6 text-white}>
        <p className="text-sm font-medium opacity-90">{instituteName}</p>
        <h3 className="text-xl font-bold mt-1">{courseTitle}</h3>

        <div className="flex items-center mt-3">
          <FaStar className="text-yellow-300" />
          <span className="ml-1 mr-3">{rating}</span>
          <FaUsers className="text-white opacity-80" />
          <span className="ml-1">{students} students</span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center mb-2">
              <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-gray-500 text-sm">Course Fee</p>
            <p className="text-xl font-bold text-gray-800">₹{price.toLocaleString()}</p>
          </div>

          <button className="flex items-center justify-center bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TrainingCard;
