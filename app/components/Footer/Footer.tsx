'use client'
import React from 'react';
import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from next/link

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding Section */}
        <div>
          <h2 className="text-xl font-semibold flex items-center space-x-2">
            <span role="img" aria-label="graduation">🎓</span>
            <span>Nxt Sync</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Learn over <span className="text-yellow-400 font-medium">25+ skills</span> from industry professionals and get ready for your dream career.
          </p>
          <div className="mt-5">
            <p className="font-semibold">Follow Us</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="#programs" className="text-gray-400 hover:text-yellow-400 transition">Specialised Programs</a></li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="text-lg font-semibold mb-4">More</h3>
          <ul className="space-y-2">
            <li><a href="#faqs" className="text-gray-400 hover:text-yellow-400 transition">FAQs</a></li>
            <li><a href="#privacy" className="text-gray-400 hover:text-yellow-400 transition">Privacy Policy</a></li>
            <li>
              <Link href="/TermsandConditions" className="text-gray-400 hover:text-yellow-400 transition">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/CancellationRefundPolicy" className="text-gray-400 hover:text-yellow-400 transition">Cancellation & Refund Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>1234 Street, City, Country</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-yellow-400" />
              <span>contact@NxtSync.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhone className="text-yellow-400" />
              <span>+123 456 7890</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        &copy; 2025 Nxt sync. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
