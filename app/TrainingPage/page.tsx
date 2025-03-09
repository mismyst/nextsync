'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import TrainingCard from '../components/TrainingCard/TrainingCard';
import { FaPhoneAlt, FaComments } from 'react-icons/fa';

const TrainingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(6);
  
  const cardDetails = [
    { instituteName: "SKYLABS Institute", courseTitle: "Advanced Technical Management", price: 12500, backgroundGradient: "bg-gradient-to-br from-blue-600 to-purple-600", category: "technical" },
    { instituteName: "Nayarth College of Technical Management", courseTitle: "Professional Technical Management", price: 2500, backgroundGradient: "bg-gradient-to-br from-green-500 to-teal-600", category: "technical" },
    { instituteName: "Academy of Digital Marketing", courseTitle: "Digital Marketing Fundamentals", price: 1800, backgroundGradient: "bg-gradient-to-br from-red-500 to-orange-500", category: "marketing" },
    { instituteName: "Business Strategy Institute", courseTitle: "Strategic Business Management", price: 3500, backgroundGradient: "bg-gradient-to-br from-indigo-500 to-blue-500", category: "business" },
    { instituteName: "Tech Innovation Lab", courseTitle: "Cloud Architecture Masterclass", price: 4200, backgroundGradient: "bg-gradient-to-br from-purple-500 to-pink-500", category: "technical" },
    { instituteName: "Leadership Academy", courseTitle: "Executive Leadership Program", price: 5000, backgroundGradient: "bg-gradient-to-br from-yellow-400 to-orange-500", category: "leadership" },
    { instituteName: "Data Science Center", courseTitle: "Advanced Data Analytics", price: 3800, backgroundGradient: "bg-gradient-to-br from-cyan-500 to-blue-500", category: "technical" },
    { instituteName: "Global Marketing School", courseTitle: "International Marketing Strategies", price: 2900, backgroundGradient: "bg-gradient-to-br from-green-400 to-emerald-500", category: "marketing" }
  ];
  
  const filteredCards = selectedCategory === "all" ? cardDetails : cardDetails.filter(card => card.category === selectedCategory);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const categories = ["all", ...new Set(cardDetails.map(card => card.category))];
  useEffect(() => { setCurrentPage(1); }, [selectedCategory]);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 md:mb-0 tracking-tight">Training <span className="text-blue-600">Programs</span></h1>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md
                ${selectedCategory === category 
                  ? 'bg-blue-600 text-white scale-105' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <button className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all shadow-lg transform hover:scale-105">
            <FaPhoneAlt /> Contact Experts
          </button>
          <button className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all shadow-lg transform hover:scale-105">
            <FaComments /> Talk to Experts
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCards.map((card, index) => (
            <TrainingCard 
              key={index}
              instituteName={card.instituteName}
              courseTitle={card.courseTitle}
              price={card.price}
              backgroundGradient={card.backgroundGradient}
            />
          ))}
        </div>
        
        {filteredCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No training programs found in this category.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TrainingPage;
