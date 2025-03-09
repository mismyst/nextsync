// page.tsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import IntershipsCourses from './components/IntershipsCourses/IntershipsCourses';
import ContactForm from './components/ContactForm/ContactForm';
import Socials from './components/Socials/Socials';
import Banner from './components/Banner/Banner';
import Partners from './components/Partners/Partners';  // Import the Partners component

const Page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Partners />
      <IntershipsCourses />
      <Banner />
      <Socials />
      <ContactForm />

        {/* Include the Partners component before Footer */}
      
      <Footer />
    </div>
  );
};

export default Page;


