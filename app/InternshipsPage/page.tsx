import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


// pages/internships.tsx

import Head from 'next/head';
import Image from 'next/image';

interface Internship {
  company: string;
  role: string;
  imageSrc: string; // Path to the image
  description: string; // Short description
}

const internships: Internship[] = [
  {
    company: 'Infosys',
    role: 'Full Stack Developer',
    imageSrc: '/images/infosys.jpg', // Replace with your image path
    description: 'Build robust web applications with cutting-edge technologies.',
  },
  {
    company: 'Google',
    role: 'Machine Learning',
    imageSrc: '/images/google.jpg', // Replace with your image path
    description: 'Explore the world of AI and machine learning at Google.',
  },
  {
    company: 'Amazon',
    role: 'Data Science',
    imageSrc: '/images/amazon.jpg', // Replace with your image path
    description: 'Analyze and interpret data to drive business decisions.',
  },
  {
    company: 'Microsoft',
    role: 'Javascript dev.',
    imageSrc: '/images/microsoft.jpg', // Replace with your image path
    description: 'Develop interactive web experiences with Javascript.',
  },
  // ... (Repeat the above pattern for all internships)
  {
    company: 'Infosys',
    role: 'Full Stack Developer',
    imageSrc: '/images/infosys.jpg', // Replace with your image path
    description: 'Build robust web applications with cutting-edge technologies.',
  },
  {
    company: 'Google',
    role: 'Machine Learning',
    imageSrc: '/images/google.jpg', // Replace with your image path
    description: 'Explore the world of AI and machine learning at Google.',
  },
  {
    company: 'Amazon',
    role: 'Data Science',
    imageSrc: '/images/amazon.jpg', // Replace with your image path
    description: 'Analyze and interpret data to drive business decisions.',
  },
  {
    company: 'Microsoft',
    role: 'Javascript dev.',
    imageSrc: '/images/microsoft.jpg', // Replace with your image path
    description: 'Develop interactive web experiences with Javascript.',
  },
  {
    company: 'Infosys',
    role: 'Full Stack Developer',
    imageSrc: '/images/infosys.jpg', // Replace with your image path
    description: 'Build robust web applications with cutting-edge technologies.',
  },
  {
    company: 'Google',
    role: 'Machine Learning',
    imageSrc: '/images/google.jpg', // Replace with your image path
    description: 'Explore the world of AI and machine learning at Google.',
  },
  {
    company: 'Amazon',
    role: 'Data Science',
    imageSrc: '/images/amazon.jpg', // Replace with your image path
    description: 'Analyze and interpret data to drive business decisions.',
  },
  {
    company: 'Microsoft',
    role: 'Javascript dev.',
    imageSrc: '/images/microsoft.jpg', // Replace with your image path
    description: 'Develop interactive web experiences with Javascript.',
  },
  {
    company: 'Amazon',
    role: 'Data Science',
    imageSrc: '/images/amazon.jpg', // Replace with your image path
    description: 'Analyze and interpret data to drive business decisions.',
  },
  {
    company: 'Microsoft',
    role: 'Javascript dev.',
    imageSrc: '/images/microsoft.jpg', // Replace with your image path
    description: 'Develop interactive web experiences with Javascript.',
  },
];

const InternshipsPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Internships - EdTech Company</title>
      </Head>

      <header>
        <h1>Internships</h1>
        <p>A vital step towards real career growth.</p>
        {/* Add search bar or filter components here */}
      </header>

      <main>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {internships.map((internship, index) => (
            <div key={index} style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
              <Image src={internship.imageSrc} alt={`${internship.company} - ${internship.role}`} width={200} height={120} />
              <h3>{internship.company} - {internship.role}</h3>
              <p>{internship.description}</p>
              {/* Add a link or button to apply */}
            </div>
          ))}
        </div>
      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default InternshipsPage;
