// components/Partners.tsx
import React from 'react';

const Partners: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '400px', // Adjust the height based on your preference
      marginBottom: '50px', // Adds space before the footer
    }}>
      <img
        src="/images/partners.jpg"
        alt="Partner Logo"
        style={{
          maxWidth: '90%', // Makes the image responsive
          height: 'auto',
        }}
      />
    </div>
  );
};

export default Partners;

