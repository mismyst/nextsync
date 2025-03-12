import React from 'react';

const TrainingCard = (props) => {
  const { instituteName, courseTitle, price, backgroundGradient } = props;
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className={backgroundGradient + " p-6 text-white"}>
        <p className="text-sm font-medium opacity-90">{instituteName}</p>
        <h3 className="text-xl font-bold mt-1">{courseTitle}</h3>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600 text-sm">Investment</p>
            <p className="text-2xl font-bold text-gray-800">₹{price.toLocaleString()}</p>
          </div>
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg font-medium">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
