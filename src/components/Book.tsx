import React from 'react';

interface BookProps {
  imageUrl: string;
  title: string;
  url?: string;
}

const Book: React.FC<BookProps> = ({
  imageUrl,
  title,
  url
}) => {
  return (
    <div className="flex flex-col items-center">
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block mb-2 transition-transform duration-300 hover:scale-105"
      >
        <img 
          src={imageUrl} 
          alt={`${title}`} 
          className="w-full h-auto max-w-[180px] shadow-md"
        />
      </a>
    </div>
  );
};

export default Book;