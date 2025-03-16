import React from 'react';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  linkUrl?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  imageUrl,
  imageAlt = "Portfolio project image",
  linkUrl = "#"
}) => {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow mb-4">
          {description}
        </p>
        <div>
          <a 
            href={linkUrl} 
            className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Read More »
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;