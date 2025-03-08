'use client';
import React from 'react';

const SocialCard = ({ name, description, image, borderColor }) => {
  return (
    <div className={`flex flex-col items-center text-center w-full max-w-xs border-2 ${borderColor} rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow`}>
      <div className="mb-4">
        <img src={image} alt={`${name} Logo`} className="w-16 h-16" />
      </div>
      <h3 className="font-bold text-xl mb-2">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Socials = () => {
  return (
    <section className="py-8 w-full flex flex-col items-center">
      <div className="w-full max-w-7xl px-4">
        <h2 className="font-bold text-3xl text-center mb-8">SOCIALS</h2>
        <div className="flex flex-wrap justify-center md:justify-between gap-6">
          <SocialCard
            name="Instagram"
            description="Stay inspired! Follow us on Instagram."
            image="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            borderColor="border-pink-500"
          />
          <SocialCard
            name="Whatsapp"
            description="Join us on WhatsApp community"
            image="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            borderColor="border-green-500"
          />
          <SocialCard
            name="Discord"
            description="Join our Discord now!"
            image="https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg"
            borderColor="border-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Socials;
