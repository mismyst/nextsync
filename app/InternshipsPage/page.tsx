'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

interface Internship {
  company: string;
  role: string;
  imageSrc: string;
  description: string;
  views?: number;
  deadline?: string;
  applied?: number;
  mode: string;
  companySubtitle?: string;
  bgColor: string;
  category: string; // Added category field
}

const internships: Internship[] = [
  {
    company: 'Infosys',
    role: 'Full Stack Developer',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Infosys_logo.svg/2560px-Infosys_logo.svg.png',
    description: 'Build robust web applications with cutting-edge technologies.',
    views: 471,
    deadline: '8 days left',
    applied: 120,
    mode: 'In Office',
    bgColor: '#76CCB1',
    category: 'Full Stack'
  },
  {
    company: 'Google',
    role: 'Machine Learning',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    description: 'Explore the world of AI and machine learning at Google.',
    views: 1267,
    deadline: '3 days left',
    applied: 300,
    mode: 'Online',
    bgColor: '#FFD466',
    category: 'Machine Learning'
  },
  {
    company: 'Amazon',
    role: 'Data Science',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    description: 'Analyze and interpret data to drive business decisions.',
    views: 348,
    deadline: '11 days left',
    applied: 80,
    mode: 'Hybrid',
    bgColor: '#7AADFF',
    category: 'Data Science'
  },
  {
    company: 'Microsoft',
    role: 'Javascript Developer',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    description: 'Develop interactive web experiences with Javascript.',
    views: 50,
    deadline: '9 months left',
    applied: 50,
    mode: 'In Office',
    bgColor: '#FF7A7A',
    category: 'Frontend'
  },
  {
    company: 'IBM',
    role: 'AI Engineer',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    description: 'Work on AI and automation at IBM.',
    views: 560,
    deadline: '2 months left',
    applied: 150,
    mode: 'Remote',
    bgColor: '#76CCB1',
    category: 'Machine Learning'
  },
  {
    company: 'Tesla',
    role: 'Autonomous Systems Engineer',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
    description: 'Contribute to self-driving technology.',
    views: 678,
    deadline: '5 days left',
    applied: 200,
    mode: 'In Office',
    bgColor: '#FFD466',
    category: 'Machine Learning'
  },
  {
    company: 'Meta',
    role: 'AR/VR Developer',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Meta_Platforms_Inc._logo.svg',
    description: 'Develop AR and VR experiences at Meta.',
    views: 900,
    deadline: '3 weeks left',
    applied: 275,
    mode: 'Hybrid',
    bgColor: '#7AADFF',
    category: 'AR/VR'
  },
  {
    company: 'Netflix',
    role: 'Data Analyst',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    description: 'Analyze user data to improve recommendations.',
    views: 450,
    deadline: '1 month left',
    applied: 180,
    mode: 'Remote',
    bgColor: '#FF7A7A',
    category: 'Data Science'
  },
  // 12 additional cards
  {
    company: 'BCD Travel',
    companySubtitle: 'BCD Travel',
    role: 'Apprentice- Operations',
    imageSrc: '/api/placeholder/80/80', // Replace with actual BCD Travel logo
    description: 'Join operations team and learn travel management solutions.',
    views: 468,
    deadline: '8 days left',
    applied: 95,
    mode: 'In Office',
    bgColor: '#76CCB1',
    category: 'Operations'
  },
  {
    company: 'Ministry of Food Processing Industries',
    companySubtitle: 'Ministry of Food Processing Industries',
    role: 'Internship',
    imageSrc: '/api/placeholder/80/80', // Replace with actual Ministry logo
    description: 'Contribute to food processing initiatives and policy research.',
    views: 1265,
    deadline: '3 days left',
    applied: 215,
    mode: 'In Office',
    bgColor: '#FFD466',
    category: 'Research'
  },
  {
    company: 'Leap',
    companySubtitle: 'Leap',
    role: 'Founder\'s Office Internship',
    imageSrc: '/api/placeholder/80/80', // Replace with actual Leap logo
    description: 'Work directly with founders on strategic initiatives.',
    views: 346,
    deadline: '11 days left',
    applied: 125,
    mode: 'In Office',
    bgColor: '#7AADFF',
    category: 'Business'
  },
  {
    company: 'Zeeply Technologies',
    companySubtitle: 'Zeeply Technologies Private Limited',
    role: 'Operations Internship',
    imageSrc: '/api/placeholder/80/80', // Replace with actual Zeeply logo
    description: 'Drive operational excellence and process improvements.',
    views: 354,
    deadline: '16 days left',
    applied: 120,
    mode: 'In Office',
    bgColor: '#FF7A7A',
    category: 'Operations'
  },
  {
    company: 'Adobe',
    role: 'UX/UI Design Intern',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png',
    description: 'Design intuitive user experiences for creative applications.',
    views: 823,
    deadline: '5 days left',
    applied: 310,
    mode: 'Hybrid',
    bgColor: '#76CCB1',
    category: 'UI/UX'
  },
  {
    company: 'Spotify',
    role: 'Music Data Analyst',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg',
    description: 'Analyze listening patterns and user engagement metrics.',
    views: 732,
    deadline: '12 days left',
    applied: 168,
    mode: 'Remote',
    bgColor: '#FFD466',
    category: 'Data Science'
  },
  {
    company: 'LinkedIn',
    role: 'Frontend Developer',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    description: 'Build professional network features and interfaces.',
    views: 610,
    deadline: '9 days left',
    applied: 245,
    mode: 'In Office',
    bgColor: '#7AADFF',
    category: 'Frontend'
  },
  {
    company: 'Twitter',
    role: 'Social Media Analytics',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg',
    description: 'Study trends and user behavior on social platforms.',
    views: 575,
    deadline: '14 days left',
    applied: 198,
    mode: 'Hybrid',
    bgColor: '#FF7A7A',
    category: 'Data Science'
  },
  {
    company: 'Salesforce',
    role: 'CRM Developer',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    description: 'Customize and extend CRM solutions for enterprises.',
    views: 398,
    deadline: '7 days left',
    applied: 153,
    mode: 'Remote',
    bgColor: '#76CCB1',
    category: 'Full Stack'
  },
  {
    company: 'Airbnb',
    role: 'Product Management',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
    description: 'Define and launch new features for travel platform.',
    views: 687,
    deadline: '10 days left',
    applied: 276,
    mode: 'In Office',
    bgColor: '#FFD466',
    category: 'Product'
  },
  {
    company: 'PayPal',
    role: 'Financial Technology',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
    description: 'Develop payment solutions and security features.',
    views: 524,
    deadline: '6 days left',
    applied: 187,
    mode: 'Hybrid',
    bgColor: '#7AADFF',
    category: 'Fintech'
  },
  {
    company: 'Uber',
    role: 'Transportation Analyst',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg',
    description: 'Optimize routes and analyze transportation patterns.',
    views: 412,
    deadline: '15 days left',
    applied: 142,
    mode: 'Remote',
    bgColor: '#FF7A7A',
    category: 'Data Science'
  }
];

const InternshipsPage: React.FC = () => {
  const itemsPerPage = 8; // 2x4 grid
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>(internships);
  const [totalPages, setTotalPages] = useState(Math.ceil(internships.length / itemsPerPage));

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(internships.map(item => item.category)))];

  // Filter internships based on selected category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredInternships(internships);
      setTotalPages(Math.ceil(internships.length / itemsPerPage));
    } else {
      const filtered = internships.filter(internship => internship.category === selectedCategory);
      setFilteredInternships(filtered);
      setTotalPages(Math.ceil(filtered.length / itemsPerPage));
    }
    setCurrentPage(1); // Reset to first page when filter changes
  }, [selectedCategory]);

  // Get current internships for pagination
  const getCurrentInternships = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredInternships.slice(startIndex, endIndex);
  };

  // Handle page change
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <Head>
        <title>Internships - EdTech Company</title>
        <meta name="description" content="Find and apply for internships in tech, data science, and more" />
      </Head>

      <header className="py-8 px-4 text-center bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800">Recommended Internships</h1>
        
        <p className="text-gray-600 mt-2">Looking for the best of the best? Here're the top-rated internships by the learners' community.</p>
      </header>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-gray-700 font-medium">Filter by:</span>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-4">
        {/* Pagination info at the top right */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            {selectedCategory === 'All' ? 'All Internships' : `${selectedCategory} Internships`}
          </h2>
          <div className="flex items-center space-x-6">
            <span className="text-gray-600">{totalPages} pages</span>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => goToPage(currentPage - 1)} 
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'
                } border border-gray-200`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentPage === pageNumber
                        ? 'bg-green-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    } ${currentPage === pageNumber ? '' : 'border border-gray-200'}`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              
              <button 
                onClick={() => goToPage(currentPage + 1)} 
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === totalPages ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'
                } border border-gray-200`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Previous button */}
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Next button */}
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCurrentInternships().map((internship, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Colored header with pattern */}
              <div className="relative h-28" style={{ backgroundColor: internship.bgColor }}>
                {/* Dotted pattern overlay - simplified representation */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{ 
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '10px 10px' 
                  }}></div>
                </div>
                
                {/* Mode badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 text-xs font-medium bg-white rounded text-gray-700">{internship.mode}</span>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-xs font-medium bg-white bg-opacity-90 rounded text-gray-700">{internship.category}</span>
                </div>
                
                {/* Company logo positioned on the dividing line */}
                <div className="absolute -bottom-6 right-4">
                  <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center p-1 shadow-md">
                    <Image 
                      src={internship.imageSrc} 
                      alt={internship.company} 
                      width={40} 
                      height={40} 
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <div className="p-4 pt-8">
                <h3 className="text-lg font-semibold text-gray-800">{internship.role}</h3>
                <p className="text-gray-600 text-sm mt-1">{internship.companySubtitle || internship.company}</p>
                
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>{internship.views} Views</span>
                  </div>
                  
                  <div className="flex items-center ml-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{internship.deadline}</span>
                  </div>
                  
                  {internship.applied && (
                    <div className="flex items-center ml-4">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{internship.applied} Applied</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-2 flex justify-end">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <span 
              key={index} 
              className={`w-3 h-3 rounded-full ${currentPage === index + 1 ? 'bg-green-500' : 'bg-gray-300'}`}
              onClick={() => goToPage(index + 1)}
              style={{ cursor: 'pointer' }}
            ></span>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InternshipsPage;