import React from 'react';

const communities = [
  {
    name: 'Unity force fires',
    followers: '95066 Followers',
    description: 'Whether you’re a casual gamer or an esports pro, this is your ultimate hub for all things gaming!',
    image: 'https://via.placeholder.com/50',
  },
  {
    name: 'Star trek indepter',
    followers: '9566 Followers',
    description: 'Discuss your favorite episodes, theories, and characters, and connect with fellow explorers of the final frontier.',
    image: 'https://via.placeholder.com/50',
  },
  {
    name: 'Pink',
    followers: '4296 Followers',
    description: 'A supportive community for girls in coding! Connect, learn, and grow with like-minded women in tech.',
    image: 'https://via.placeholder.com/50',
  },
  {
    name: 'Clash of codes',
    followers: '22296 Followers',
    description: 'Whether you’re a beginner or a pro, join us to level up your coding game and clash with the best!',
    image: 'https://via.placeholder.com/50',
  },
];

const CommunityPage = () => {
  return (
    <section className="bg-white py-8 px-4">
      <h2 className="text-4xl font-bold text-green-600 mb-2">Community</h2>
      <p className="text-lg text-gray-600 mb-6">Unlock your potential and earn your certification!</p>
      
      <div className="mb-6 flex items-center bg-gray-100 p-3 rounded-lg max-w-lg">
        <span className="mr-2">🔍</span>
        <input type="text" placeholder="Search for 'Artificial Intelligence'" className="flex-grow bg-transparent text-black outline-none" />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {communities.map((community, index) => (
          <div key={index} className="border-2 border-green-400 rounded-lg p-4 shadow-md">
            <div className="flex items-center mb-3">
              <img src={community.image} alt={community.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h3 className="text-lg font-bold text-black">{community.name}</h3>
                <p className="text-sm text-black">{community.followers}</p>
              </div>
            </div>
            <p className="text-sm text-black mb-4">{community.description}</p>
            <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">+ FOLLOW</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityPage;
