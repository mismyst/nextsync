import React from "react";

const TrainingCard: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-b from-[#0E4E49] via-[#117077] to-[#248C97] rounded-2xl p-10 text-white relative">
      <h2 className="text-4xl font-bold">SKYLAR's Institute</h2>
      <p className="mt-4 text-lg">Let's go from zero to mastery in 50 days. Master :</p>
      <ul className="mt-4 list-disc list-inside space-y-2 text-lg">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>MongoDB</li>
        <li>Postman API</li>
        <li>Flutter development</li>
        <li>React Native, and many more..</li>
      </ul>
      <div className="mt-10 text-xl font-bold text-orange-400">LIMITED TIME OFFER !</div>
      <p className="mt-2 text-gray-300 line-through text-2xl">INR. 24500 /-</p>
      <p className="mt-2 text-4xl font-extrabold">INR. 12500 /-</p>
      <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-xl font-bold hover:bg-gray-800 transition duration-300 ease-in-out">
        ENROLL NOW
      </button>
    </div>
  );
};

export default TrainingCard;