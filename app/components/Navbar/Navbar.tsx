// /components/Navbar/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-2xl">NextSync</div>
        <ul className="flex space-x-8">
          <li>
            <a href="#home" className="hover:text-yellow-400">Home</a>
          </li>
          <li>
            <a href="#courses" className="hover:text-yellow-400">Courses</a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
