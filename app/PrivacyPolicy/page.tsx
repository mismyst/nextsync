'use client'

import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">Privacy Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Last updated on 12-03-2025
          </p>
        </div>

        <div className="prose mx-auto text-lg text-gray-700 space-y-6">
          <p>We respect and are committed towards protecting your privacy. Publishing, selling or renting any personal data or information to any third party, without your consent, is against our ethics.</p>
          
          <p>The privacy practices of this statement apply to our services available under the domain and subdomains of the Site. By visiting this Site you agree to be bound by the terms and conditions of this privacy policy. If you do not agree, please do not use or access our site.</p>
          
          <p>This privacy policy does not apply to sites maintained by other companies or organizations to which we link and we are not responsible for any personal information you submit to third parties via our website. Please ensure that you read the privacy policy of such other companies or organizations before submitting your details.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Privacy Guarantee</h2>
          <p>We agree that we will not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. From time to time, we may reveal general statistical information about our Site and visitors, such as number of visitors, number and type of goods and services purchased, etc. Only those of our employees who need access to your information in order to perform their duties, are allowed such access. Any employee who violates our privacy and/or security policies is subjected to disciplinary action, including possible termination and civil and/or criminal prosecution.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h2>
          <p>The Personal Information is used for two general purposes: to process your order, and to provide you with the best possible services. Unless otherwise stated explicitly, this policy applies to personal information as disclosed on any of the media.</p>
          
          <p>In furtherance of the confidentiality with which we treat Personal Information, we have put in place appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online. We use data collection devices such as "cookies" on certain pages of the Site to help and analyze our web page flow, measure promotional effectiveness, and promote trust and safety.</p>
          
          <p>"Cookies" are small files placed on your hard drive that assist us in providing our services. We offer certain features that are only available through the use of a "cookie". Cookies can also help us provide information that is targeted to your interests. Most cookies are "session cookies," which means that they are automatically deleted from your hard drive at the end of a session. You are always free to decline our cookies if your browser permits. Additionally, you may encounter "cookies" or other similar devices on certain pages of the Site that are placed by third parties. For example, if you view a web page created by a user, there may be a "cookie" placed within that web page. We do not control the use of cookies by third parties.</p>
          
          <p>You acknowledge that you are disclosing Personal Information voluntarily. We identify and use your IP address to help diagnose problems with our server, and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cookie Policy</h2>
          <p>We operate a strict privacy policy and we are committed to being transparent about how we use cookies on our website.</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Why are cookies important?</h3>
          <p>Cookies help you make your online experience more efficient and relevant to your interests. For instance, they are used to remember your preferences on sites you visit often, to remember your user ID and the contents of your shopping baskets, and to help you navigate between pages efficiently.</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">What is a Cookie?</h3>
          <p>A cookie is a small file, or files on your computer, phone, or other device with a browser to save snippets of text for reference by the website you are visiting. All cookies have expiration dates in them that determine how long they stay in your browser:</p>
          
          <ul className="list-disc pl-6 mt-4">
            <li><strong>Session cookies</strong> - these are temporary cookies that expire (and are automatically erased) whenever you close your browser.</li>
            <li><strong>Persistent cookies</strong> - these usually have an expiration date and so stay in your browser until they expire, or until you manually delete them. For example we use persistent cookies to better understand usage patterns so that we can improve the site for our customers.</li>
          </ul>
          
          <p>Cookies are grouped into the following categories:</p>
          
          <ul className="list-disc pl-6 mt-4">
            <li><strong>Essential</strong> - these are cookies that are required for the regular operation of our websites.</li>
            <li><strong>Functional</strong> - these remember your preferences, and are intended to make your experience on our websites better for you.</li>
            <li><strong>Analytics</strong> – these cookies are used for performance measurement to understand things including how many people visit our websites, how they navigate our sites, and what content is popular. This allows us to improve your experience with us.</li>
            <li><strong>Advertising</strong> - these cookies enable us and our advertising partners to serve you with relevant advertisements that we think will interest you. You might see these advertisements on our sites on other sites you visit. These cookies record your visit to our website and the content you interact with.</li>
          </ul>
          
          <p>To ensure compliance with our policies, we restrict the use of third-party cookies to trusted partners. We also use third party information from third party sources to enable us deliver advertising. These sources are validated by Third party, and not by us.</p>
          
          <p>To delete cookies from your browser, please refer to the Settings on your browser for further details. The steps may vary depending on the browser you use.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
