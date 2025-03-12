'use client'

import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const PrivacyPolicyPage: React.FC = () => {
  // Simple constant for easy updates
  const LAST_UPDATED_DATE = "12-03-2025";
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            <span className="text-green-600">Privacy Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Last updated on {LAST_UPDATED_DATE}
          </p>
        </div>

        <div className="prose mx-auto text-lg text-gray-700 space-y-6 max-w-3xl">
          <p>We respect and are committed towards protecting your privacy. Publishing, selling or renting any personal data or information to any third party, without your consent, is against our ethics.</p>
          
          <p>The privacy practices of this statement apply to our services available under the domain and subdomains of the Site. By visiting this Site you agree to be bound by the terms and conditions of this privacy policy.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Privacy Guarantee</h2>
          
          <p>We agree that we will not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. From time to time, we may reveal general statistical information about our Site and visitors, such as number of visitors, number and type of goods and services purchased, etc.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Information We Collect</h2>
          
          <p>The Personal Information is used for two general purposes: to process your order, and to provide you with the best possible services. We use data collection devices such as "cookies" on certain pages of the Site to help analyze our web page flow.</p>
          
          <p>"Cookies" are small files placed on your hard drive that assist us in providing our services. Cookies can help us provide information that is targeted to your interests. You are always free to decline our cookies if your browser permits.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Cookie Policy</h2>
          
          <p>We operate a strict privacy policy and we are committed to being transparent about how we use cookies on our website.</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Types of Cookies</h3>
          
          <ul className="list-disc pl-6">
            <li><strong>Session cookies</strong> - temporary cookies that expire when you close your browser</li>
            <li><strong>Persistent cookies</strong> - cookies with an expiration date that stay until they expire</li>
          </ul>
          
          <p>Cookies are grouped into these categories:</p>
          
          <ul className="list-disc pl-6">
            <li><strong>Essential</strong> - required for website operation</li>
            <li><strong>Functional</strong> - remember your preferences</li>
            <li><strong>Analytics</strong> - used for performance measurement</li>
            <li><strong>Advertising</strong> - enable relevant advertisements</li>
          </ul>
          
          <p>To delete cookies from your browser, please refer to your browser settings. You may also change other settings related to Privacy and Security under the same section.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
