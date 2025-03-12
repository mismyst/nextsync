'use client'
import React from 'react';
import { FaStar, FaArrowRight, FaUsers, FaCheckCircle } from 'react-icons/fa';

interface TrainingCardProps {
  instituteName: string;
  courseTitle: string;
  price: number;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ 
  instituteName, 
  courseTitle, 
  price
}) => {
  const rating = (4 + Math.random()).toFixed(1);
  const students = Math.floor(Math.random() * 450) + 50;

  // Brighter and more playful background gradients
  const gradients = [
    "bg-gradient-to-r from-yellow-400 to-orange-500",
    "bg-gradient-to-r from-pink-500 to-red-500",
    "bg-gradient-to-r from-blue-500 to-cyan-400",
    "bg-gradient-to-r from-lime-500 to-green-500",
  ];
  
  // Pick a random gradient for each card
  const backgroundGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Outer Wrapper with Neon Glow */}
      <div className={`relative ${backgroundGradient} rounded-2xl p-1 transition-all transform hover:-rotate-2 hover:scale-105 shadow-lg shadow-black/40`}>
        {/* Inner Card */}
        <div className="relative z-10 bg-white text-gray-900 rounded-2xl overflow-hidden shadow-xl p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center">
            <p className="text-sm uppercase tracking-wide font-semibold text-gray-600">{instituteName}</p>
            <div className="flex items-center">
              <FaStar className="text-yellow-400" />
              <span className="ml-1 text-gray-700">{rating} ★</span>
            </div>
          </div>

          {/* Course Title */}
          <h3 className="text-2xl font-extrabold mt-2 text-gray-900">{courseTitle}</h3>

          {/* Students & Features Section */}
          <div className="mt-4">
            <div className="flex items-center text-gray-600">
              <FaUsers className="text-blue-500" />
              <span className="ml-2">{students} learners leveling up 🚀</span>
            </div>

            {/* Feature List */}
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" /> 🎓 Get a legit certificate!
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" /> 💡 Learn from the GOAT mentors!
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" /> 🔥 Work on real-deal projects!
              </li>
            </ul>
          </div>

          {/* Pricing & Enroll Button */}
          <div className="flex justify-between items-center mt-6">
            {/* Pricing Tag */}
            <div className="relative">
              <p className="text-sm text-gray-600">💰 Course Fee</p>
              <p className="text-3xl font-bold text-gray-900">₹{price.toLocaleString()}</p>
            </div>

            {/* Enroll Button with Gradient Hover Effect */}
            <button className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-lg shadow-md transform transition-all hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">
              Let's Go! 🚀 <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
