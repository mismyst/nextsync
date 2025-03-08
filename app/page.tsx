// /page.tsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import IntershipsCourses from './components/IntershipsCourses/IntershipsCourses';
import ContactForm from './components/ContactForm/ContactForm';
import Socials from './components/Socials/Socials';
const Page = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      <IntershipsCourses /> 
      <Socials />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Page;

