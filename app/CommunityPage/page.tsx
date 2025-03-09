'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const communityData = [
  {
    name: 'Unity Force Fires',
    followers: '95,066 Followers',
    description: "Whether you're a casual gamer or an esports pro, this is your ultimate hub for all things gaming!",
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg',
  },
  {
    name: 'Star Trek Indepter',
    followers: '9,566 Followers',
    description: 'Discuss your favorite episodes, theories, and characters, and connect with fellow explorers of the final frontier.',
    image: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png',
  },
  {
    name: 'Pink',
    followers: '4,296 Followers',
    description: 'A supportive community for girls in coding! Connect, learn, and grow with like-minded women in tech.',
    image: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png',
  },
  {
    name: 'Clash of Codes',
    followers: '22,296 Followers',
    description: 'Whether you’re a beginner or a pro, join us to level up your coding game and clash with the best!',
    image: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png',
  },
  {
    name: 'AI Innovators',
    followers: '12,890 Followers',
    description: 'Join AI enthusiasts, researchers, and developers in exploring the future of artificial intelligence.',
    image: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png',
  },
  {
    name: 'Cyber Security Hub',
    followers: '18,400 Followers',
    description: 'Stay ahead of cyber threats, learn ethical hacking, and discuss security strategies with experts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Cyber_security_shield.png',
  },
  {
    name: 'OpenAI Research',
    followers: '50,000 Followers',
    description: 'Explore cutting-edge AI models, advancements, and discussions with the OpenAI community.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/OpenAI_Logo.svg',
  },
  {
    name: 'React Developers',
    followers: '34,750 Followers',
    description: 'Connect with React developers, discuss projects, and get the latest updates on React features.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Python Programmers',
    followers: '42,100 Followers',
    description: 'Join Python enthusiasts, share projects, and learn from the best in the Python ecosystem.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    name: 'Google Developers',
    followers: '80,000 Followers',
    description: 'Engage with Google technologies, learn from experts, and stay updated with the latest innovations.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_logo.png',
  },
  {
    name: 'Microsoft Azure',
    followers: '60,500 Followers',
    description: 'Dive into cloud computing, AI, and DevOps with Microsoft Azure professionals and learners.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
  },
  {
    name: 'Blockchain Innovators',
    followers: '30,700 Followers',
    description: 'Explore blockchain technology, discuss decentralized finance, and build smart contracts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Bitcoin_logo.svg',
  },
  {
    name: 'Apple Developers',
    followers: '55,600 Followers',
    description: 'Collaborate on iOS development, Swift programming, and the latest Apple innovations.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  },
  {
    name: 'Amazon Web Services (AWS)',
    followers: '75,000 Followers',
    description: 'Learn AWS cloud services, certifications, and best practices from industry experts.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  },
  {
    name: 'Meta AI Research',
    followers: '48,200 Followers',
    description: 'Join discussions on Meta’s AI research, machine learning, and neural networks.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Meta-Logo.png',
  }
];

const itemsPerPage = 6;

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCommunities = communityData.filter((community) =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCommunities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCommunities = filteredCommunities.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <section className="bg-white py-8 px-4">
        <h2 className="text-4xl font-bold text-teal-600 mb-2">Community</h2>
        <p className="text-lg text-gray-600 mb-6">Unlock your potential and earn your certification!</p>

        <div className="mb-6 flex items-center bg-gray-100 p-3 rounded-lg max-w-lg">
          <span className="mr-2">🔍</span>
          <input 
            type="text" 
            placeholder="Search for 'Artificial Intelligence'" 
            className="flex-grow bg-transparent text-black outline-none" 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {totalPages > 1 && (
          <div className="flex justify-end mb-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="border border-teal-600 px-3 py-1 rounded-full hover:bg-teal-200 disabled:opacity-50"
              >
                ◀
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 rounded-full border text-sm ${
                    currentPage === i + 1
                      ? 'bg-teal-600 text-white font-bold'
                      : 'border-teal-600 hover:bg-teal-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border border-teal-600 px-3 py-1 rounded-full hover:bg-teal-200 disabled:opacity-50"
              >
                ▶
              </button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCommunities.map((community, index) => (
            <div key={index} className="border-2 border-teal-600 rounded-lg p-4 shadow-md">
              <div className="flex items-center mb-3">
                <img src={community.image} alt={community.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
                <div>
                  <h3 className="text-lg font-bold text-black">{community.name}</h3>
                  <p className="text-sm text-black">{community.followers}</p>
                </div>
              </div>
              <p className="text-sm text-black mb-4">{community.description}</p>
              <button className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition">+ FOLLOW</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CommunityPage;
