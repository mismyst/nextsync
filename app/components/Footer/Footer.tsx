'use client'
import React from 'react';
import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from next/link

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-12"> {/* Change to a lighter gray (bg-gray-300) */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding Section */}
        <div>
          <h2 className="text-xl font-semibold flex items-center space-x-2">
            <span role="img" aria-label="graduation">🎓</span>
            <span>Nxt Sync</span>
          </h2>
          <p className="mt-3 text-white text-sm leading-relaxed"> {/* Changed text to white */}
            Learn over <span className="text-green-400 font-medium">25+ skills</span> from industry professionals and get ready for your dream career.
          </p>
          <div className="mt-5">
            <p className="font-semibold">Follow Us</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.instagram.com/nxt_sync?igsh=bGhyNm95d2I3emp5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-400 transition"> {/* Changed icon color to green */}
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/106385726/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-400 transition"> {/* Changed icon color to green */}
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="text-white hover:text-green-400 transition"> {/* Changed text to white */}
              About Us
            </a></li>
            <li><a href="#programs" className="text-white hover:text-green-400 transition"> {/* Changed text to white */}
              Specialised Programs
            </a></li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="text-lg font-semibold mb-4">More</h3>
          <ul className="space-y-2">
            <li><a href="#faqs" className="text-white hover:text-green-400 transition"> {/* Changed text to white */}
              FAQs
            </a></li>
            <li><a href="/PrivacyPolicy" className="text-white hover:text-green-400 transition"> {/* Changed text to white */}
              Privacy Policy
            </a></li>
            <li>
              <Link href="/TermsandConditions" className="text-white hover:text-green-400 transition"> {/* Changed text to white */}
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/CancellationRefundPolicy" className="text-white hover:text-green-400 transition"> {/* Changed text to white */}
                Cancellation & Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-white"> {/* Changed text to white */}
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-green-400" size={40} /> {/* Changed icon color to green */}
              <span>1st floor, Divya diamonds building, Kavuri Hills Rd, CBI Colony, Madhapur, Hyderabad, Telangana 500033</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-green-400" /> {/* Changed icon color to green */}
              <span>contact@NxtSync.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhone className="text-green-400" /> {/* Changed icon color to green */}
              <span>+91 6361136916</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-white text-sm mt-10 border-t border-gray-700 pt-6"> {/* Changed text to white */}
        &copy; 2025 Nxt sync. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
