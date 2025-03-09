import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-6 py-16">
      <div className="flex flex-col md:flex-row gap-4 max-w-7xl w-full items-start md:items-center">
        {/* Image Section - Larger size */}
        <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <img 
            src="/images/community.jpg" 
            alt="Aesthetic Image" 
            className="w-full rounded-lg shadow-xl object-contain max-h-[700px]" 
          />
        </div>
        
        {/* Form Section - Positioned closer to image */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg space-y-5 border-4 border-gray-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email ID</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-1">Remarks</label>
              <textarea
                placeholder="Write your message here..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 h-24"
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-orange-500 text-white font-bold px-8 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;