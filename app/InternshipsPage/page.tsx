'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import VideoBackground from '../components/VideoBackground/VideoBackground';

// Define TypeScript interfaces
interface Internship {
  name: string;
  providers: string[];
  duration: string;
  bgColor: string;
  category: string;
  image: string;
}

// Define type for animation indices
interface AnimateIndices {
  [key: number]: number;
}

const internshipsData: Internship[] = [
  {
    name: 'AI Intern Program',
    providers: ['Google', 'Microsoft', 'OpenAI'],
    duration: '3 Months',
    bgColor: 'bg-gradient-to-br from-teal-500 to-green-600',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  },
  {
    name: 'Data Science Intern',
    providers: ['Coursera', 'Stanford', 'IBM'],
    duration: '2 Months',
    bgColor: 'bg-gradient-to-br from-green-600 to-teal-500',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1531279550271-23c2a77a765c?w=800&q=80',
  },
  {
    name: 'Cybersecurity Intern',
    providers: ['Cisco', 'CompTIA', 'EC-Council'],
    duration: '4 Months',
    bgColor: 'bg-gradient-to-br from-teal-600 to-green-700',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80',
  },
  {
    name: 'Web Development Intern',
    providers: ['Meta', 'Mozilla', 'W3C'],
    duration: '2 Months',
    bgColor: 'bg-gradient-to-br from-teal-400 to-green-500',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  },
];

const itemsPerPage = 8;

const InternshipsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [animateIndex, setAnimateIndex] = useState<AnimateIndices>({});

  useEffect(() => {
    const intervals: { [key: number]: NodeJS.Timeout } = {};
    internshipsData.forEach((internship, index) => {
      intervals[index] = setInterval(() => {
        setAnimateIndex((prev) => ({
          ...prev,
          [index]: (prev[index] === undefined ? 0 : (prev[index] + 1) % internship.providers.length),
        }));
      }, 2000);
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, []);

  const filteredInternships = internshipsData.filter(
    (internship) =>
      internship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredInternships.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedInternships = filteredInternships.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <VideoBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-semibold text-white mb-4">
                  Explore Top Internships
                </h2>
                <p className="text-xl text-cyan-300 leading-relaxed">
                  Accelerate your career by joining top tech companies for hands-on experience!
                </p>
              </div>

              <div className="mt-6 md:mt-0 w-full md:w-auto flex justify-center">
                <div className="relative max-w-md">
                  <input
                    type="text"
                    placeholder="Search for internships..."
                    className="w-full py-2 pl-8 pr-4 rounded-xl bg-white/90 backdrop-blur-sm text-black text-lg shadow-lg border focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                  <span className="absolute top-3 left-3 text-cyan-600">🔍</span>
                </div>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mb-12">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="text-cyan-400 text-lg hover:text-cyan-300 disabled:text-gray-600"
                  >
                    ◀
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`w-10 h-10 flex items-center justify-center text-lg rounded-full transition-colors ${
                        currentPage === i + 1
                          ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold'
                          : 'hover:bg-cyan-900/40 text-cyan-300'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="text-cyan-400 text-lg hover:text-cyan-300 disabled:text-gray-600"
                  >
                    ▶
                  </button>
                </div>
              </div>
            )}

            {/* Internships display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayedInternships.map((internship, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-800"
                >
                  {/* Image section */}
                  <div className="relative h-60 overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={internship.image}
                        alt={internship.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 transform group-hover:scale-110"
                        priority={index < 2} // Prioritize loading the first two images
                      />
                    </div>
                    <div
                      className={`${internship.bgColor} absolute inset-0 opacity-80 mix-blend-multiply`}
                    ></div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                      <div>
                        <div className="text-xs font-semibold text-white/90 mb-1 backdrop-blur-sm bg-black/30 inline-block px-3 py-1 rounded-full">
                          {internship.category}
                        </div>
                        <h3 className="text-3xl font-bold text-white mt-2 drop-shadow-md">
                          {internship.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-sm text-cyan-400 font-semibold mb-1">DURATION</p>
                      <p className="text-base text-white">{internship.duration}</p>
                    </div>

                    <div className="relative h-8 overflow-hidden">
                      <p className="text-sm text-cyan-400 font-semibold absolute top-0 left-0">PARTNERS</p>
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start pl-20">
                        {internship.providers.map((provider, pIndex) => (
                          <span
                            key={pIndex}
                            className={`text-base font-medium text-white transition-opacity duration-500 absolute ${
                              pIndex === (animateIndex[index] || 0) ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            {provider}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#"
                      className="mt-6 inline-flex items-center text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                    >
                      View Internship
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
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
    </div>
  );
};

export default InternshipsPage;
