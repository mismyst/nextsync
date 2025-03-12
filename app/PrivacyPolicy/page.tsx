'use client'

import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const PrivacyPolicyPage: React.FC = () => {
  // Use a constant for the last updated date to make future updates easier
  const LAST_UPDATED_DATE = "12-03-2025";
  
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">Privacy Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Last updated on {LAST_UPDATED_DATE}
          </p>
        </div>

        <div className="prose mx-auto text-lg text-gray-700 space-y-6">
          <p>We respect and are committed towards protecting your privacy. Publishing, selling or renting any personal data or information to any third party, without your consent, is against our ethics.</p>
          
          <p>The privacy practices of this statement apply to our services available under the domain and subdomains of the Site. By visiting this Site you agree to be bound by the terms and conditions of this privacy policy. If you do not agree, please do not use or access our site.</p>
          
          <p>This privacy policy does not apply to sites maintained by other companies or organizations to which we link and we are not responsible for any personal information you submit to third parties via our website.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Privacy Guarantee</h2>
          
          <p>We agree that we will not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. From time to time, we may reveal general statistical information about our Site and visitors, such as number of visitors, number and type of goods and services purchased, etc.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h2>
          
          <p>The Personal Information is used for two general purposes: to process your order, and to provide you with the best possible services. Unless otherwise stated explicitly, this policy applies to personal information as disclosed on any of the media.</p>
          
          <ul className="list-disc pl-6">
            <li>We use data collection devices such as "cookies" on certain pages of the Site to help analyze our web page flow, measure promotional effectiveness, and promote trust and safety.</li>
            
            <li>"Cookies" are small files placed on your hard drive that assist us in providing our services. We offer certain features that are only available through the use of a "cookie".</li>
            
            <li>Most cookies are "session cookies," which means that they are automatically deleted from your hard drive at the end of a session. You are always free to decline our cookies if your browser permits.</li>
            
            <li>You acknowledge that you are disclosing Personal Information voluntarily. We identify and use your IP address to help diagnose problems with our server, and to administer our Website.</li>
            
            <li>We have put in place appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cookie Policy</h2>
          
          <p>We operate a strict privacy policy and we are committed to being transparent about how we use cookies on our website. Cookies help you make your online experience more efficient and relevant to your interests.</p>
          
          <ul className="list-disc pl-6">
            <li><strong>Session cookies</strong> - these are temporary cookies that expire when you close your browser.</li>
            
            <li><strong>Persistent cookies</strong> - these have an expiration date and stay until they expire or are manually deleted.</li>
            
            <li><strong>Essential cookies</strong> - these are required for the regular operation of our websites.</li>
            
            <li><strong>Functional cookies</strong> - these remember your preferences to make your website experience better.</li>
            
            <li><strong>Analytics cookies</strong> - these help us understand how visitors use our website.</li>
            
            <li><strong>Advertising cookies</strong> - these enable relevant advertisements on our site and others.</li>
            
            <li>To ensure compliance with our policies, we restrict the use of third-party cookies to trusted partners.</li>
            
            <li>To delete cookies from your browser, please refer to your browser settings.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
