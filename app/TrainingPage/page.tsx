
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import React from 'react';
import TrainingCard from '../components/TrainingCard/TrainingCard';

const TrainingPage: React.FC = () => {
  <Navbar />
  const cardDetails = [
    {
      instituteName: "SKYLABS Institute",
      courseTitle: "Advanced Technical Management",
      price: 12500,
      backgroundGradient: "bg-gradient-to-br from-blue-600 to-purple-600"
    },
    {
      instituteName: "Nayarth College of Technical Management",
      courseTitle: "Professional Technical Management",
      price: 2500,
      backgroundGradient: "bg-gradient-to-br from-green-500 to-teal-600"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Training</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardDetails.map((card, index) => (
            <TrainingCard 
              key={index}
              instituteName={card.instituteName}
              courseTitle={card.courseTitle}
              price={card.price}
              backgroundGradient={card.backgroundGradient}
            />
          ))}
        </div>
        
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Contact Our Experts
          </button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
            Talk to Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;