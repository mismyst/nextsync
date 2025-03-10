import React from 'react';
import { Star } from 'lucide-react';

const CourseCard = ({ date, title, instructor, rating, backgroundClass }) => {
  return (
    <div className={`relative w-64 h-48 rounded-lg overflow-hidden shadow-lg ${backgroundClass}`}>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10"></div>
      
      {/* Rating */}
      <div className="absolute top-2 right-2 flex items-center z-20">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="text-white text-sm ml-1">{rating}</span>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-4 left-4 z-20">
        <p className="text-gray-300 text-xs mb-1">{date}</p>
        <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-300 text-sm">by {instructor}</p>
      </div>
    </div>
  );
};

const CourseCards = () => {
  const courses = [
    {
      date: 'Feb 2025',
      title: 'Ethical Hacking',
      instructor: 'Laura Peterson',
      rating: '4.8',
      backgroundClass: 'bg-[url("/api/placeholder/400/320")] bg-cover bg-center'
    },
    {
      date: 'Jan 2025',
      title: 'Data Structures',
      instructor: 'Alice Cooper',
      rating: '4.8',
      backgroundClass: 'bg-[url("/api/placeholder/400/320")] bg-cover bg-center bg-blue-900'
    },
    {
      date: 'Apr 2024',
      title: 'HTML/CSS',
      instructor: 'Kennedy',
      rating: '4.8',
      backgroundClass: 'bg-[url("/api/placeholder/400/320")] bg-cover bg-center'
    },
    {
      date: 'Mar 2025',
      title: 'Python Basics',
      instructor: 'Jason Lee',
      rating: '4.9',
      backgroundClass: 'bg-[url("/api/placeholder/400/320")] bg-cover bg-center bg-purple-900'
    },
    {
      date: 'Dec 2024',
      title: 'UI/UX Design',
      instructor: 'Sarah Zhang',
      rating: '4.7',
      backgroundClass: 'bg-[url("/api/placeholder/400/320")] bg-cover bg-center bg-pink-900'
    },
    {
      date: 'May 2024',
      title: 'JavaScript Advanced',
      instructor: 'Michael Rivera',
      rating: '4.8',
      backgroundClass: 'bg-[url("/api/placeholder/400/320")] bg-cover bg-center bg-yellow-800'
    }
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCards;