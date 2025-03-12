'use client';
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, FileDown, X } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SupportCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText?: string;
  bgColor: string;
  onClick: () => void;
}

const SupportCard: React.FC<SupportCardProps> = ({ icon: Icon, title, description, ctaText, bgColor, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col transition-transform hover:transform hover:-translate-y-1 hover:shadow-xl">
      <div className="uppercase text-sm font-semibold text-gray-600 mb-4">{title}</div>
      
      <h3 className="text-2xl font-bold mb-6">{description}</h3>
      
      <div className="mt-auto">
        {ctaText && (
          <div 
            className={${bgColor} rounded-lg flex items-center justify-center p-4 cursor-pointer hover:opacity-90 transition-all}
            onClick={onClick}
          >
            <Icon size={24} className="mr-2" />
            <span className="font-medium">{ctaText}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Modal component for the demo form
const DemoFormModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo form submitted');
    // Add your form submission logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-90vh overflow-y-auto animate-fadeIn">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold">Request Your Free Demo</h3>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <form className="p-6 space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
              placeholder="Your phone number"
              required
            />
          </div>
          
          <div>
            <label htmlFor="course" className="block text-gray-700 font-medium mb-2">
              Course Interested In
            </label>
            <select
              id="course"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
              required
            >
              <option value="">Select a course</option>
              <option value="course1">Academic Course 1</option>
              <option value="course2">Academic Course 2</option>
              <option value="course3">Academic Course 3</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  
  const handleOpenDemoModal = (): void => {
    setIsDemoModalOpen(true);
  };
  
  const handleCloseDemoModal = (): void => {
    setIsDemoModalOpen(false);
  };
  
  const handleCall = (): void => {
    console.log('Call requested');
    // Add your call logic here
  };
  
  const handleMail = (): void => {
    console.log('Mail requested');
    // Add your mail logic here
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-green-50 to-purple-100 min-h-screen">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left content */}
            <div className="p-8 md:p-12">
              <div className="uppercase text-sm font-semibold text-gray-600 mb-2">SUPPORT</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">NxtSync Academic Support</h1>
              <p className="text-gray-600 text-lg">
                Get better help from our best support team of NxtSync
              </p>
            </div>
            
            {/* Right image */}
            <div className="relative overflow-hidden bg-green-100 rounded-l-full">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-yellow-200 rounded-full opacity-40"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="absolute w-40 h-40 bg-green-200 rounded-full flex items-center justify-center">
                  <MessageCircle size={40} className="text-green-800" />
                </div>
                {/* <img
                  src="/api/placeholder/400/300"
                  alt="Support Representative"
                  className="relative z-10 h-full object-cover"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Three Support Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Demo Card */}
          <SupportCard
            title="DEMO"
            description="Request a free demo"
            ctaText="Request Demo"
            icon={FileDown}
            bgColor="bg-green-400 text-white"
            onClick={handleOpenDemoModal}
          />
          
          {/* Call Card */}
          <SupportCard
            title="CALL US"
            description="Have doubt? Call Us"
            ctaText="Call Now"
            icon={Phone}
            bgColor="bg-blue-400 text-white"
            onClick={handleCall}
          />
          
          {/* Query Card */}
          <SupportCard
            title="QUERY"
            description="Have query? Mail Us"
            ctaText="Send Mail"
            icon={Mail}
            bgColor="bg-blue-500 text-white"
            onClick={handleMail}
          />
        </div>
      </div>
      
      {/* Additional content section to ensure the background color extends */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Why Choose NxtSync Support?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 h-5 w-5 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">24/7 Expert Support</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 h-5 w-5 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Personalized Learning Paths</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 h-5 w-5 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Interactive Learning Materials</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Our Academic Excellence</h3>
            <p className="text-gray-700 mb-4">
              NxtSync provides industry-leading academic support services designed to help students achieve their academic goals.
            </p>
            <p className="text-gray-700">
              Our team of expert educators and support staff are dedicated to providing personalized assistance tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Demo Form Modal */}
      <DemoFormModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </section>
  );
};

export default ContactForm;
