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
          <h2 className="text-3xl font-extrabold flex items-center space-x-2">
            <span role="img" aria-label="graduation">🎓</span>
            <span>Nxt Sync</span>
          </h2>
          <p className="mt-4 text-white text-lg leading-relaxed">
            Learn over <span className="text-green-400 font-medium">25+ skills</span> from industry professionals and get ready for your dream career.
          </p>
          <div className="mt-5">
            <p className="font-semibold">Follow Us</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.instagram.com/nxt_sync?igsh=bGhyNm95d2I3emp5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-400 transition"> {/* Changed icon color to green */}
                <FaInstagram size={70} />
              </a>
              <a href="https://www.linkedin.com/company/106385726/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-400 transition"> {/* Changed icon color to green */}
                <FaLinkedin size={70} />
              </a>
            </div>
          </div>
        </div>

       
        {/* More */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">More</h3>
          <ul className="space-y-2">
           
            <li><a href="/PrivacyPolicy" className="text-white text-xl hover:text-green-400 transition"> {/* Changed text to white */}
              Privacy Policy
            </a></li>
            <li>
              <Link href="/TermsandConditions" className="text-white text-xl hover:text-green-400 transition"> {/* Changed text to white */}
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/CancellationRefundPolicy" className="text-white text-xl hover:text-green-400 transition"> {/* Changed text to white */}
                Cancellation & Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-white"> {/* Changed text to white */}
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-green-400" size={50} /> {/* Changed icon color to green */}
              <span className="text-lg">1st floor, Divya diamonds building, Kavuri Hills Rd, CBI Colony, Madhapur, Hyderabad, Telangana 500033</span>

            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-green-400"  /> {/* Changed icon color to green */}
              <span className="text-lg">contact@NxtSync.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhone className="text-green-400" /> {/* Changed icon color to green */}
              <span className="text-lg">+91 6361136916</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-white text-lg mt-12 border-t border-gray-700 pt-6">
        &copy; 2025 Nxt sync. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
