import React from 'react';

interface LeftAlignedHeaderProps {
  text: string;
  className?: string;
}

const LeftAlignedHeader: React.FC<LeftAlignedHeaderProps> = ({
  text,
  className = ""
}) => {
  return (
    <div className={`w-full py-6 ${className}`}>
      <h2 className="text-3xl font-medium text-gray-700">
        {text}
      </h2>
    </div>
  );
};

export default LeftAlignedHeader;