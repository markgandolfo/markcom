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
  altText = "Product leader with over 10 years of experience driving successful B2B and B2C products in ecommerce environments, previously a full stack engineer. Proven track record of building and scaling digital platforms, leading cross-functional teams, and mentoring product managers. Passionate about creating delightful user experiences and solving complex problems.",
  quote = "Product leader with over 10 years of experience driving successful B2B and B2C products in ecommerce environments, previously a full stack engineer. Proven track record of building and scaling digital platforms, leading cross-functional teams, and mentoring product managers. Passionate about creating delightful user experiences and solving complex problems.",
  name = "MARK GANDOLFO",
  title = "LEAD PRODUCT MANAGER"
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
            <p className="text-base text-gray-400">{title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
