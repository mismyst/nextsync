'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ArrowUpRight } from 'lucide-react';

interface Certification {
  title: string;
  company: string;
  level: string;
  duration: string;
  type: string;
  salary: string;
  color: string;
  image: string;
}

const certificationsData: Certification[] = [ {
  title: 'Full Stack Developer',
  company: 'Infosys',
  level: 'Beginner',
  duration: '3 months',
  type: 'Full time',
  salary: 'INR 30k – 40k/ month',
  color: 'from-violet-700 to-purple-900',
  image: 'https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png'
},
{
  title: 'Machine Learning',
  company: 'Google',
  level: 'Intermediate',
  duration: '3 months',
  type: 'Full time',
  salary: 'INR 30k – 40k/ month',
  color: 'from-orange-500 to-orange-700',
  image: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
},
{
  title: 'Data Science',
  company: 'Amazon',
  level: 'Advanced',
  duration: '3 months',
  type: 'Full time',
  salary: 'INR 30k – 40k/ month',
  color: 'from-gray-700 to-black',
  image: 'https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png'
},
{
  title: 'Javascript Developer',
  company: 'Microsoft',
  level: 'Advanced',
  duration: '3 months',
  type: 'Full time',
  salary: 'INR 30k – 40k/ month',
  color: 'from-indigo-900 to-purple-900',
  image: 'https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png'
},
{
  title: 'UI/UX Design',
  company: 'Adobe',
  level: 'Beginner',
  duration: '3 months',
  type: 'Full time',
  salary: 'INR 25k – 35k/ month',
  color: 'from-pink-500 to-pink-700',
  image: 'https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png'
},
{
  title: 'Cybersecurity',
  company: 'Cisco',
  level: 'Intermediate',
  duration: '3 months',
  type: 'Full time',
  salary: 'INR 35k – 45k/ month',
  color: 'from-cyan-700 to-blue-800',
  image: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
},
{
  title: 'Cloud Engineering',
  company: 'IBM',
  level: 'Advanced',
  duration: '3 months',
  type: 'Full time',
  salary: 'INR 40k – 50k/ month',
  color: 'from-blue-700 to-blue-900',
  image: 'https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png'
},
{
  title: 'DevOps Engineering',
  company: 'Red Hat',
  level: 'Intermediate',
  duration: '3 months',
  type: 'Full time',
  salary: 'INR 35k – 45k/ month',
  color: 'from-red-600 to-red-800',
  image: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
},
{
  title: 'Business Analysis',
  company: 'TCS',
  level: 'Beginner',
  duration: '3 months',
  type: 'Full time',
  salary: 'INR 25k – 35k/ month',
  color: 'from-yellow-500 to-yellow-700',
  image: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
},
{
  title: 'Digital Marketing',
  company: 'Zoho',
  level: 'Beginner',
  duration: '3 months',
  type: 'Full time',
  salary: 'INR 20k – 30k/ month',
  color: 'from-green-600 to-green-800',
  image: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
},
// Add more dummy items to test pagination
{
  title: 'Blockchain Developer',
  company: 'Polygon',
  level: 'Advanced',
  duration: '3 months',
  type: 'Full time',
  salary: 'INR 40k – 60k/ month',
  color: 'from-purple-700 to-purple-900',
  image: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
},
{
  title: 'AI Engineer',
  company: 'NVIDIA',
  level: 'Intermediate',
  duration: '3 months',
  type: 'Full time',
  salary: 'INR 50k – 70k/ month',
  color: 'from-green-700 to-green-900',
  image: 'https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png'
}];

const CertificationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredCertifications = certificationsData.filter((cert) =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCertifications.length / itemsPerPage);
  const paginatedCertifications = filteredCertifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Fixed type error by adding explicit type for newPage parameter
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-50 via-teal-100 to-teal-300 min-h-screen">
      <Navbar />

      <section className="py-14 px-8 md:px-16">
        <h2 className="text-5xl font-extrabold text-teal-800 mb-6 text-center">Certifications</h2>
        <p className="text-xl text-teal-600 mb-12 text-center max-w-3xl mx-auto">Gain a competitive edge with industry-leading certifications in tech and business. Explore and unlock your next big opportunity!</p>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder='Search for "AI, Cloud, etc."'
              className="w-full py-4 px-6 text-xl text-black bg-white rounded-xl border-2 border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-200 transition-all duration-300 shadow-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-teal-500 opacity-60 group-hover:opacity-100 transition duration-200">
              <ArrowUpRight size={28} />
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-full shadow-xl hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-110 disabled:bg-teal-300"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="text-lg text-teal-700 font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-full shadow-xl hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-110 disabled:bg-teal-300"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {paginatedCertifications.map((cert, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transform transition-all duration-300 shadow-xl bg-gradient-to-r ${cert.color} group hover:scale-105 hover:shadow-2xl`}
            >
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-all duration-500"></div>

              <div className="p-8 relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center mb-8">
                  <button className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <ArrowUpRight size={24} />
                  </button>
                  <div className="w-28 h-16 relative rounded-md bg-white p-4">
                    <Image
                      src={cert.image}
                      alt={cert.company}
                      fill
                      sizes="112px"
                      style={{
                        objectFit: 'contain'
                      }}
                      priority={index < 4} // Load the first few images with priority
                    />
                  </div>
                </div>

                <div>
                  <p className="inline-block px-5 py-2 bg-white text-teal-600 text-sm rounded-full mb-5">{cert.level}</p>
                  <h3 className="text-2xl font-extrabold text-white mb-4">{cert.company}</h3>
                  <h4 className="text-xl text-teal-100 mb-4">{cert.title}</h4>
                  <p className="text-sm text-teal-200">{cert.type} · {cert.duration} · {cert.salary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationsPage;
