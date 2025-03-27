import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} Mark Gandolfo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;