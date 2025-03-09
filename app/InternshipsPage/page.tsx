import React from 'react';
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
  workMode: string;
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
    workMode: 'In Office'
  },
  {
    company: 'Google',
    role: 'Machine Learning',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    description: 'Explore the world of AI and machine learning at Google.',
    views: 1267,
    deadline: '3 days left',
    applied: 350,
    workMode: 'Remote'
  },
  {
    company: 'Amazon',
    role: 'Data Science',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    description: 'Analyze and interpret data to drive business decisions.',
    views: 348,
    deadline: '11 days left',
    applied: 80,
    workMode: 'Hybrid'
  },
  {
    company: 'Microsoft',
    role: 'JavaScript Developer',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    description: 'Develop interactive web experiences with JavaScript.',
    views: 50,
    deadline: '9 months left',
    applied: 50,
    workMode: 'In Office'
  }
];

const InternshipsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <Head>
        <title>Internships - EdTech Company</title>
        <meta name="description" content="Find and apply for internships in tech, data science, and more" />
      </Head>

      <header className="py-8 px-4 text-center bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800">Internships</h1>
        <p className="text-gray-600 mt-2">A vital step towards real career growth.</p>
        
        <div className="max-w-2xl mx-auto mt-6">
          <input 
            type="text" 
            placeholder="Search for internships..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {internships.map((internship, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between">
              <div className="p-4 pb-2 bg-[#76CCB1] relative">
                <span className="px-2 py-1 text-xs font-medium bg-white rounded absolute top-2 left-2">{internship.workMode}</span>
                <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-[-50%] bg-white rounded-full p-1 shadow-md">
                  <Image 
                    src={internship.imageSrc} 
                    alt={internship.company} 
                    width={50} 
                    height={50} 
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{internship.role}</h3>
                <p className="text-gray-600 mt-1">{internship.company}</p>
                <p className="text-gray-500 text-sm mt-2">{internship.description}</p>
                
                <div className="flex items-center mt-5 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>{internship.views} Views</span>
                  </div>
                  <div className="flex items-center ml-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{internship.deadline}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 flex justify-end">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InternshipsPage;
