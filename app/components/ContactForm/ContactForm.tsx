import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-screen bg-white p-10">
      <div className="flex-1 flex justify-center">
        <img src="/your-image-path.jpg" alt="Aesthetic Image" className="max-w-xs md:max-w-md rounded-lg shadow-lg" />
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[400px] space-y-6 border-4 border-gray-300">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email ID</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-1">Remarks</label>
            <textarea
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 h-24"
            ></textarea>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

