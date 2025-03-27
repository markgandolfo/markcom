import React from 'react';

interface SubheadingProps {
  text: string;
  className?: string;
}

const Subheading: React.FC<SubheadingProps> = ({ 
  text, 
  className = "" 
}) => {
  return (
    <div className={`w-full py-16 ${className}`}>
      <h2 className="text-2xl md:text-3xl text-center font-medium text-gray-700 uppercase">
        {text}
      </h2>
    </div>
  );
};

export default Subheading;