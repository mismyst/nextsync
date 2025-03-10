import React from 'react';

const InternshipCard = ({ internship }) => {
  // Get background color based on company
  const getBgColor = () => {
    const colorMap = {
      'Infosys': '#5727c0', // purple
      'Google': '#ff6b00', // orange
      'Amazon': '#ff3a3a', // red
      'Microsoft': '#24105f', // dark purple
      'IBM': '#9b4600', // brown
      'Tesla': '#5727c0', // purple
      'Meta': '#ff6b00', // orange
      'Netflix': '#ff3a3a', // red
      'BCD Travel': '#24105f', // dark purple
      'Ministry of Food Processing Industries': '#9b4600', // brown
      'Leap': '#5727c0', // purple
      'Zeeply Technologies': '#ff6b00', // orange
      'Adobe': '#ff3a3a', // red
      'Spotify': '#24105f', // dark purple
      'LinkedIn': '#9b4600', // brown
      'Twitter': '#5727c0', // purple
      'Salesforce': '#ff6b00', // orange
      'Airbnb': '#ff3a3a', // red
      'PayPal': '#24105f', // dark purple
      'Uber': '#9b4600' // brown
    };
    
    return colorMap[internship.company] || '#5727c0'; // Default to purple
  };

  // Category badge text
  const getCategoryText = () => {
    return internship.category === 'Full Stack' ? 'ENTRY-LEVEL' : 
           internship.category === 'Machine Learning' ? 'INTERMEDIATE' : 
           internship.category === 'Data Science' ? 'ADVANCED' : 
           internship.category === 'Frontend' ? 'ADVANCED' : 'ENTRY-LEVEL';
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-md" style={{ backgroundColor: getBgColor() }}>
      {/* Main section with large image */}
      <div className="relative">
        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2 py-1 text-xs font-medium bg-white rounded text-gray-700">
            {getCategoryText()}
          </span>
        </div>
        
        {/* Save button */}
        <div className="absolute top-4 right-4 z-10">
          <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </div>
        </div>
        
        {/* Large background image filling the entire top space */}
        <div className="w-full h-44">
          <img 
            src="/api/placeholder/400/300" 
            alt="Workspace" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 text-white">
        <h3 className="text-lg font-bold">{internship.company} - {internship.role}</h3>
        <div className="flex items-center mt-1 text-sm opacity-90">
          <span>Full time</span>
          <span className="mx-2">•</span>
          <span>{internship.deadline?.replace(' left', '')}</span>
          <span className="mx-2">•</span>
          <span>{internship.mode.replace('In Office', 'On-site')}</span>
        </div>
      </div>
    </div>
  );
};

const InternshipCards = () => {
  // Using internships data from the provided code
  const internships = [
    {
      company: 'Infosys',
      role: 'Full Stack Developer',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Infosys_logo.svg/2560px-Infosys_logo.svg.png',
      description: 'Build robust web applications with cutting-edge technologies.',
      views: 471,
      deadline: '8 days left',
      applied: 120,
      mode: 'In Office',
      bgColor: '#76CCB1',
      category: 'Full Stack'
    },
    {
      company: 'Google',
      role: 'Machine Learning',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      description: 'Explore the world of AI and machine learning at Google.',
      views: 1267,
      deadline: '3 days left',
      applied: 300,
      mode: 'Online',
      bgColor: '#FFD466',
      category: 'Machine Learning'
    },
    {
      company: 'Amazon',
      role: 'Data Science',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      description: 'Analyze and interpret data to drive business decisions.',
      views: 348,
      deadline: '11 days left',
      applied: 80,
      mode: 'Hybrid',
      bgColor: '#7AADFF',
      category: 'Data Science'
    },
    {
      company: 'Microsoft',
      role: 'Javascript Developer',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      description: 'Develop interactive web experiences with Javascript.',
      views: 50,
      deadline: '9 months left',
      applied: 50,
      mode: 'In Office',
      bgColor: '#FF7A7A',
      category: 'Frontend'
    }
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {internships.map((internship, index) => (
          <InternshipCard key={index} internship={internship} />
        ))}
      </div>
    </div>
  );
};

export default InternshipCards;