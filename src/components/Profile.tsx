import React from 'react';
import image from '../assets/mark-profile-picture.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface ProfileProps {
  imageUrl?: string;
  altText?: string;
  quote?: string;
  name?: string;
  title?: string;
}

const Profile: React.FC<ProfileProps> = ({
  imageUrl = "/api/placeholder/400/400",
  altText = "",
  quote = "I have over 11 years of experience as a Product Manager in rapidly growing companies & enterprise. My expertise lies in user-facing B2B products, data-driven development, roadmap planning, stakeholder management, and UX.",
  name = "",
  title = ""
}) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* <div className="w-64 h-64 md:w-60 md:h-60 relative"> */}
        <div className="lg:w-80 lg:h-80 w-60 h-60 relative">
          <div className="w-full h-full rounded-full bg-gray-100 overflow-hidden">
            <img 
              src={image} 
              alt={altText} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="text-5xl text-gray-300 mb-4 max-md hidden md:block">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </div>
         
          <p className="text-gray-800 mb-6">
            {quote}
          </p>
          
          <div className="mt-4">
            <h2 className="text-2xl text-[#54595f] font-black">{name}</h2>
            <p className="text-base text-gray-300">{title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;