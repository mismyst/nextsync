'use client'

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import TrainingCard from '../components/TrainingCard/TrainingCard';
import { FaPhoneAlt, FaComments, FaTimes, FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

interface TrainingCardData {
  instituteName: string;
  courseTitle: string;
  price: number;
  backgroundGradient: string;
  category: string;
  duration?: string;
  startDate?: string;
}

const TrainingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(6);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<TrainingCardData | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: ''
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
  
  const cardDetails: TrainingCardData[] = [
    { instituteName: "SKYLABS Institute", courseTitle: "Advanced Technical Management", price: 12500, backgroundGradient: "bg-gradient-to-br from-blue-600 to-purple-600", category: "technical", duration: "12 weeks", startDate: "April 15, 2025" },
    { instituteName: "Nayarth College of Technical Management", courseTitle: "Professional Technical Management", price: 2500, backgroundGradient: "bg-gradient-to-br from-green-500 to-teal-600", category: "technical", duration: "8 weeks", startDate: "May 1, 2025" },
    { instituteName: "Academy of Digital Marketing", courseTitle: "Digital Marketing Fundamentals", price: 1800, backgroundGradient: "bg-gradient-to-br from-red-500 to-orange-500", category: "marketing", duration: "6 weeks", startDate: "April 20, 2025" },
    { instituteName: "Business Strategy Institute", courseTitle: "Strategic Business Management", price: 3500, backgroundGradient: "bg-gradient-to-br from-indigo-500 to-blue-500", category: "business", duration: "10 weeks", startDate: "May 10, 2025" },
    { instituteName: "Tech Innovation Lab", courseTitle: "Cloud Architecture Masterclass", price: 4200, backgroundGradient: "bg-gradient-to-br from-purple-500 to-pink-500", category: "technical", duration: "8 weeks", startDate: "April 25, 2025" },
    { instituteName: "Leadership Academy", courseTitle: "Executive Leadership Program", price: 5000, backgroundGradient: "bg-gradient-to-br from-yellow-400 to-orange-500", category: "leadership", duration: "16 weeks", startDate: "June 1, 2025" },
    { instituteName: "Data Science Center", courseTitle: "Advanced Data Analytics", price: 3800, backgroundGradient: "bg-gradient-to-br from-cyan-500 to-blue-500", category: "technical", duration: "12 weeks", startDate: "May 5, 2025" },
    { instituteName: "Global Marketing School", courseTitle: "International Marketing Strategies", price: 2900, backgroundGradient: "bg-gradient-to-br from-green-400 to-emerald-500", category: "marketing", duration: "8 weeks", startDate: "April 30, 2025" }
  ];
  
  const filteredCards = selectedCategory === "all" 
    ? cardDetails 
    : cardDetails.filter(card => card.category === selectedCategory);
    
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  
  const categories = ["all", ...Array.from(new Set(cardDetails.map(card => card.category)))];
  
  // Reset to first page when category changes
  useEffect(() => { 
    setCurrentPage(1); 
  }, [selectedCategory]);
  
  // Handle opening the modal
  const openModal = (course: TrainingCardData) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    // Reset form data when closing modal
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interest: ''
    });
  };

  // Close modal when clicking outside of it
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsFormSubmitting(false);
      closeModal();
      
      // You could show a success message here
      alert('Registration successful! We will contact you soon.');
    }, 1000);
  };
  
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">Training Programs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advance your career with our industry-leading training programs designed by experts to help you excel in today's competitive market.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md
                ${selectedCategory === category 
                  ? 'bg-green-600 text-white scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105'}`}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <button 
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Contact Experts"
          >
            <FaPhoneAlt /> Contact Experts
          </button>
          <button 
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Talk to Experts"
          >
            <FaComments /> Talk to Experts
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCards.map((card, index) => (
            <div 
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => openModal(card)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${card.courseTitle}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openModal(card);
                }
              }}
            >
              <TrainingCard 
                instituteName={card.instituteName}
                courseTitle={card.courseTitle}
                price={card.price}
                backgroundGradient={card.backgroundGradient}
              />
            </div>
          ))}
        </div>
        
        {filteredCards.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <p className="text-2xl text-gray-600">No training programs found in this category.</p>
            <p className="text-lg text-gray-500 mt-2">Please try another category or contact us for custom training.</p>
          </div>
        )}
        
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2" role="navigation" aria-label="Pagination">
              {pageNumbers.map(number => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentPage === number
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  aria-current={currentPage === number ? 'page' : undefined}
                  aria-label={`Page ${number}`}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Registration Modal */}
      {isModalOpen && selectedCourse && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-85 backdrop-blur-md transition-opacity duration-300"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="bg-gray-900 text-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto" 
            onClick={e => e.stopPropagation()}
          >
            <div className={`${selectedCourse.backgroundGradient} p-6 rounded-t-2xl relative`}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-all"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <h2 id="modal-title" className="text-white text-2xl font-bold">{selectedCourse.courseTitle}</h2>
              <p className="text-white text-lg opacity-90 mt-1">{selectedCourse.instituteName}</p>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-8">
                <div className="flex items-center mb-4 md:mb-0">
                  <FaCalendarAlt className="text-green-400 mr-2" />
                  <span>Starts: {selectedCourse.startDate}</span>
                </div>
                <div className="flex items-center mb-4 md:mb-0">
                  <FaClock className="text-green-400 mr-2" />
                  <span>Duration: {selectedCourse.duration}</span>
                </div>
                <div className="flex items-center font-bold text-lg">
                  <span>₹{selectedCourse.price.toLocaleString()}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-green-400">Registration Information</h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fullName" className="block text-gray-300 mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-white placeholder-gray-400" 
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-white placeholder-gray-400" 
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-white placeholder-gray-400" 
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-gray-300 mb-2">Why are you interested in this course?</label>
                  <textarea 
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-white placeholder-gray-400" 
                    rows={3}
                    placeholder="Tell us why you're interested and what you hope to learn"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:brightness-110 flex justify-center items-center"
                  disabled={isFormSubmitting}
                >
                  {isFormSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Register Now'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default TrainingPage;
