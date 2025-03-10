'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const coursesData = [
  {
    name: 'Machine Learning Magic',
    providers: ['Google', 'IBM', 'Stanford'],
    duration: '2 Months',
    project: true,
    featured: true,
    discount: 10,
    bgColor: 'bg-amber-400',
    category: 'CS',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  },
  {
    name: 'Data Science Wizardry',
    providers: ['Microsoft', 'Coursera', 'MIT'],
    duration: '2 Months',
    project: true,
    featured: false,
    discount: 15,
    bgColor: 'bg-purple-500',
    category: 'CS',
    image: 'https://images.unsplash.com/photo-1531279550271-23c2a77a765c?w=800&q=80',
  },
  {
    name: 'AI Adventures',
    providers: ['OpenAI', 'DeepMind', 'NVIDIA'],
    duration: '3 Months',
    project: true,
    featured: true,
    discount: 10,
    bgColor: 'bg-green-500',
    category: 'CS',
    image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800&q=80',
  },
  {
    name: 'Cloud Crafting',
    providers: ['AWS', 'Google Cloud', 'Azure'],
    duration: '2 Months',
    project: true,
    featured: false,
    discount: 15,
    bgColor: 'bg-blue-500',
    category: 'IT',
    image: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800&q=80',
  },
  {
    name: 'Cyber Ninja Training',
    providers: ['Cisco', 'CompTIA', 'EC-Council'],
    duration: '3 Months',
    project: true,
    featured: true,
    discount: 10,
    bgColor: 'bg-pink-500',
    category: 'SECURITY',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
  },
  {
    name: 'Web Dev Wonderland',
    providers: ['Meta', 'Mozilla', 'W3C'],
    duration: '2 Months',
    project: true,
    featured: false,
    discount: 20,
    bgColor: 'bg-indigo-500',
    category: 'WEB',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
  {
    name: 'Game Dev Galaxy',
    providers: ['Unity', 'Epic Games', 'Blizzard'],
    duration: '3 Months',
    project: true,
    featured: true,
    discount: 15,
    bgColor: 'bg-yellow-500',
    category: 'GAME',
    image: 'https://images.unsplash.com/photo-1531279550271-23c2a77a765c?w=800&q=80',
  },
  {
    name: 'Blockchain Bonanza',
    providers: ['Ethereum', 'Coinbase', 'Ripple'],
    duration: '2 Months',
    project: true,
    featured: false,
    discount: 10,
    bgColor: 'bg-cyan-500',
    category: 'CRYPTO',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
  },
  {
    name: 'UX/UI Universe',
    providers: ['Adobe', 'Figma', 'Sketch'],
    duration: '2 Months',
    project: true,
    featured: true,
    discount: 15,
    bgColor: 'bg-rose-500',
    category: 'DESIGN',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80',
  },
  {
    name: 'Digital Marketing Mojo',
    providers: ['Google', 'Facebook', 'HubSpot'],
    duration: '2 Months',
    project: true,
    featured: false,
    discount: 10,
    bgColor: 'bg-orange-500',
    category: 'MARKETING',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    name: 'Python Party',
    providers: ['Python Foundation', 'Anaconda', 'JetBrains'],
    duration: '2 Months',
    project: true,
    featured: true,
    discount: 20,
    bgColor: 'bg-blue-400',
    category: 'CODE',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
  },
  {
    name: 'Mobile App Mastery',
    providers: ['Apple', 'Google', 'Flutter'],
    duration: '3 Months',
    project: true,
    featured: false,
    discount: 15,
    bgColor: 'bg-violet-500',
    category: 'MOBILE',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  },
  {
    name: 'DevOps Domination',
    providers: ['GitLab', 'Docker', 'Jenkins'],
    duration: '2 Months',
    project: true,
    featured: true,
    discount: 10,
    bgColor: 'bg-green-400',
    category: 'OPS',
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&q=80',
  },
  {
    name: 'Quantum Computing Quest',
    providers: ['IBM', 'D-Wave', 'Microsoft Q'],
    duration: '4 Months',
    project: true,
    featured: false,
    discount: 15,
    bgColor: 'bg-purple-600',
    category: 'QUANTUM',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
  },
  {
    name: 'Robotics Rampage',
    providers: ['Boston Dynamics', 'ABB', 'KUKA'],
    duration: '3 Months',
    project: true,
    featured: true,
    discount: 10,
    bgColor: 'bg-pink-600',
    category: 'ROBOTICS',
    image: 'https://images.unsplash.com/photo-1558137623-ce933996c730?w=800&q=80',
  }
];

const itemsPerPage = 8;

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [animateIndex, setAnimateIndex] = useState({});

  useEffect(() => {
    // Set up provider animation intervals for each course
    const intervals = {};
    coursesData.forEach((course, index) => {
      intervals[index] = setInterval(() => {
        setAnimateIndex(prev => ({
          ...prev,
          [index]: (prev[index] === undefined ? 0 : (prev[index] + 1) % course.providers.length)
        }));
      }, 2000);
    });

    return () => {
      // Clean up intervals
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  const filteredCourses = coursesData.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <Navbar />
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent mb-2">Discover Courses</h2>
              <p className="text-lg text-gray-600">Level up your skills with our interactive programs!</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center bg-white p-3 rounded-full shadow-md w-full md:w-auto">
              <span className="mr-2 text-pink-500">🔍</span>
              <input 
                type="text" 
                placeholder="Find your next adventure..." 
                className="flex-grow bg-transparent text-black outline-none" 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          
          {/* Moving companies banner */}
          <div className="relative overflow-hidden bg-gray-50 py-3 px-4 rounded-lg mb-8 shadow-inner">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            <div className="text-xs uppercase tracking-wider text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-50 px-2 rounded-full shadow-sm">
              Featured Partners
            </div>
            
            <div className="marquee flex space-x-12 whitespace-nowrap ml-32">
              {['Google', 'Microsoft', 'IBM', 'Amazon Web Services', 'Meta', 'Apple', 'Oracle', 'Salesforce', 
                'Unity', 'Nvidia', 'Adobe', 'Cisco', 'Linux Foundation', 'Coursera', 'Udemy'].map((company, index) => (
                <span key={index} className="text-gray-800 font-medium inline-flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                  {company}
                </span>
              ))}
            </div>

            <style jsx>{`
              .marquee {
                animation: marquee 25s linear infinite;
              }
              
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
              }
            `}</style>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-end mb-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="text-pink-500 hover:text-pink-700 disabled:text-gray-300 transition-colors"
                >
                  ◀
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      currentPage === i + 1
                        ? 'bg-gradient-to-r from-teal-500 to-pink-500 text-white font-bold'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="text-pink-500 hover:text-pink-700 disabled:text-gray-300 transition-colors"
                >
                  ▶
                </button>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedCourses.map((course, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image section (60% of card) */}
                <div className="relative h-60 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image 
                      src={course.image} 
                      alt={course.name} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      priority={index < 4} // Prioritize loading the first 4 images
                    />
                  </div>
                  <div className={`absolute inset-0 ${course.bgColor} opacity-60 mix-blend-multiply`}></div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <div>
                      <div className="text-xs font-semibold text-white/90 mb-1 backdrop-blur-sm bg-black/20 inline-block px-2 py-1 rounded">
                        TRENDING · {course.category}
                      </div>
                      <h3 className="text-2xl font-bold text-white leading-tight mt-2 drop-shadow-md">
                        {course.name}
                      </h3>
                    </div>
                  </div>
                  
                  {course.discount > 0 && (
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded text-xs font-bold border border-black shadow-md transform -rotate-3 hover:rotate-0 transition-transform">
                      {course.discount}% OFF
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 font-semibold mb-1">DURATION</p>
                    <p className="text-sm">{course.duration} · Project included</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 font-semibold mb-1">PROGRAM</p>
                    <p className="text-sm flex items-center">
                      Live and Interactive
                      <span className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-300 text-gray-500 text-xs">i</span>
                    </p>
                  </div>
                  
                  <div className="relative h-6 overflow-hidden">
                    <p className="text-xs text-gray-500 font-semibold absolute top-0 left-0">PARTNERS</p>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start pl-20">
                      {course.providers.map((provider, pIndex) => (
                        <span 
                          key={pIndex} 
                          className={`text-sm font-medium transition-opacity duration-500 absolute ${
                            pIndex === (animateIndex[index] || 0) ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          {provider}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a href="#" className="mt-4 flex items-center text-gray-500 text-sm hover:text-teal-600 group-hover:text-pink-500 transition-colors">
                    View Program 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
