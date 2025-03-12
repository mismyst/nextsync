'use client'

import React from 'react';
// Using optional chaining for component imports to prevent build failures
// if components aren't found
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), { 
  ssr: true,
  loading: () => <div className="h-16 bg-gray-100"></div>
});

const Footer = dynamic(() => import('../components/Footer/Footer'), {
  ssr: true,
  loading: () => <div className="h-16 bg-gray-100"></div>
});

import dynamic from 'next/dynamic';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">
            <span className="text-green-600">Privacy Policy</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Last updated on 12-03-2025
          </p>
        </div>

        <div className="prose max-w-none md:max-w-3xl mx-auto text-base sm:text-lg text-gray-700 space-y-4 sm:space-y-6">
          <p>We respect and are committed towards protecting your privacy. Publishing, selling or renting any personal data or information to any third party, without your consent, is against our ethics.</p>
          
          <p>The privacy practices of this statement apply to our services available under the domain and subdomains of the Site. By visiting this Site you agree to be bound by the terms and conditions of this privacy policy. If you do not agree, please do not use or access our site.</p>
          
          <p>This privacy policy does not apply to sites maintained by other companies or organizations to which we link and we are not responsible for any personal information you submit to third parties via our website. Please ensure that you read the privacy policy of such other companies or organizations before submitting your details.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Privacy Guarantee</h2>
          <p>We agree that we will not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. From time to time, we may reveal general statistical information about our Site and visitors, such as number of visitors, number and type of goods and services purchased, etc. Only those of our employees who need access to your information in order to perform their duties, are allowed such access.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Information We Collect</h2>
          <p>The Personal Information is used for two general purposes: to process your order, and to provide you with the best possible services. Unless otherwise stated explicitly, this policy applies to personal information as disclosed on any of the media.</p>
          
          <p>In furtherance of the confidentiality with which we treat Personal Information, we have put in place appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online. We use data collection devices such as "cookies" on certain pages of the Site to help and analyze our web page flow.</p>
          
          <p>"Cookies" are small files placed on your hard drive that assist us in providing our services. We offer certain features that are only available through the use of a "cookie". Cookies can also help us provide information that is targeted to your interests.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Cookie Policy</h2>
          <p>We operate a strict privacy policy and we are committed to being transparent about how we use cookies on our website.</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Cookie Types</h3>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Session cookies</strong> - These expire when you close your browser</li>
            <li><strong>Persistent cookies</strong> - These stay until they expire or you delete them</li>
          </ul>
          
          <p className="mt-4">Cookies are grouped into these categories:</p>
          
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Essential</strong> - Required for website operation</li>
            <li><strong>Functional</strong> - Remember your preferences</li>
            <li><strong>Analytics</strong> - Help us understand site usage</li>
            <li><strong>Advertising</strong> - Enable relevant advertisements</li>
          </ul>
          
          <p className="mt-4">To ensure compliance with our policies, we restrict the use of third-party cookies to trusted partners. To delete cookies from your browser, please refer to your browser settings.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
