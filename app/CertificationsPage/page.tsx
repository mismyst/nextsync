'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ArrowUpRight } from 'lucide-react';

const certificationsData = [ {
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

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <section className="py-10 px-4">
        <h2 className="text-4xl font-bold text-teal-600 mb-2">Certifications</h2>
        <p className="text-lg text-teal-600 mb-4">Unlock your potential and earn your certification!</p>

        <div className="mb-6 flex items-center bg-gray-100 p-3 rounded-lg max-w-lg">
          <span className="mr-2">🔍</span>
          <input
            type="text"
            placeholder='Search for "Artificial Intelligence"'
            className="flex-grow bg-transparent text-black outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Moved pagination ABOVE the grid */}
        <div className="flex justify-end items-center mb-4 gap-2 mr-2 text-sm">
          <span className="text-gray-500">{totalPages} pages</span>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-2 py-1 border rounded-full text-teal-600 hover:bg-green-100"
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <span className="px-3 py-1 border rounded-full bg-teal-600 text-white">{currentPage}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-2 py-1 border rounded-full text-teal-600 hover:bg-green-100"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedCertifications.map((cert, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 text-white bg-gradient-to-r ${cert.color} shadow-lg flex flex-col justify-between`}
            >
              <div className="flex justify-between items-start mb-4">
                <button className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
                  <ArrowUpRight size={18} />
                </button>
                <img
                  src={cert.image}
                  alt={cert.company}
                  className="w-20 h-12 object-contain rounded-md bg-white p-1"
                />
              </div>
              <div>
                <p className="inline-block px-3 py-1 border border-white text-sm rounded-full mb-2">{cert.level}</p>
                <h3 className="text-xl font-bold">
                  {cert.company} <span className="font-normal">- {cert.title}</span>
                </h3>
                <p className="text-sm mt-1">
                  {cert.type} · {cert.duration} · {cert.salary}
                </p>
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
