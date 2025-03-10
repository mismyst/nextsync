'use client';
import React, { useState } from 'react';
import { MessageCircle, Send, Sparkles, ThumbsUp, Zap } from 'lucide-react';
import Image from 'next/image';

const SuggestionCard = ({ icon: Icon, title, isSelected, onClick }) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-xl p-4 cursor-pointer ${
        isSelected 
          ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/20 scale-105' 
          : 'bg-white hover:bg-green-50 text-gray-700 hover:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isSelected ? 'bg-white text-emerald-600' : 'bg-emerald-100 text-emerald-600'
        }`}>
          <Icon size={20} />
        </div>
        <span className="font-medium">{title}</span>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [suggestionType, setSuggestionType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setSuggestionType('');
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  const suggestionTypes = [
    { id: 'course', title: 'Course Suggestion', icon: Sparkles },
    { id: 'feature', title: 'Feature Request', icon: Zap },
    { id: 'feedback', title: 'General Feedback', icon: ThumbsUp },
    { id: 'question', title: 'Question', icon: MessageCircle }
  ];
  
  return (
    <section id="contact-form-section" className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-emerald-50"></div>
      
      {/* Shapes */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-green-200/20 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us improve by sharing your ideas, feedback, or questions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 bg-white/70 backdrop-blur-sm p-6 md:p-10 rounded-3xl shadow-xl border border-green-100">
          {/* Left column - Form */}
          <div>
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <ThumbsUp size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
                <p className="text-gray-600">
                  Your suggestion has been submitted successfully. We appreciate your feedback and will review it soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What type of suggestion do you have?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {suggestionTypes.map((type) => (
                      <SuggestionCard
                        key={type.id}
                        icon={type.icon}
                        title={type.title}
                        isSelected={suggestionType === type.id}
                        onClick={() => setSuggestionType(type.id)}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-4 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200 transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200 transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Suggestion
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-4 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200 transition-all"
                    placeholder="Share your thoughts..."
                    rows={5}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-green-400 text-white cursor-not-allowed'
                      : 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:shadow-lg hover:shadow-green-500/30'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Suggestion
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Right column - Illustrations and info */}
          <div className="relative hidden md:block">
            {/* Decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-300/20 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-300/20 rounded-full"></div>
            </div>
            
            {/* Illustration */}
            <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-48 h-48 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full flex items-center justify-center mb-8 relative">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src="/api/placeholder/200/200"
                    alt="Suggestion illustration"
                    fill
                    sizes="128px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <MessageCircle size={20} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">We Value Your Input</h3>
              <p className="text-gray-600 mb-6">
                Your suggestions help us create better learning experiences. We review each submission carefully.
              </p>
              
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-emerald-600 font-bold text-3xl mb-1">98%</div>
                  <div className="text-gray-500 text-sm">Implementation Rate</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-green-600 font-bold text-3xl mb-1">24h</div>
                  <div className="text-gray-500 text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Extra details - feature highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Sparkles,
              title: "New Features",
              description: "We're constantly adding new features based on your feedback.",
              color: "from-emerald-500 to-green-500"
            },
            {
              icon: ThumbsUp,
              title: "Community Driven",
              description: "Our platform evolves with the needs of our learning community.",
              color: "from-green-500 to-teal-500"
            },
            {
              icon: Zap,
              title: "Quick Response",
              description: "We respond to all suggestions within 24 hours.",
              color: "from-teal-500 to-emerald-500"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-4`}>
                <feature.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
