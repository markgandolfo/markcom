import React from 'react';

interface BackToHomeProps {
  onClick?: () => void;
  className?: string;
  text?: string;
}

const BackToHome: React.FC<BackToHomeProps> = ({
  onClick = () => window.history.pushState({}, '', '/'),
  className = '',
  text = 'Back to Home'
}) => {
  return (
    <button 
      onClick={onClick}
      className={`inline-flex items-center px-4 py-2 text-blue-600 rounded-md transition-all duration-300 cursor-pointer hover:shadow-md ${className}`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 mr-2" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path 
          fillRule="evenodd" 
          d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
          clipRule="evenodd" 
        />
      </svg>
      {text}
    </button>
  );
};

export default BackToHome;