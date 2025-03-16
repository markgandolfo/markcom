import React from 'react';

interface CertificationProps {
  title: string;
  description: string;
  logoUrl: string;
  logoAlt?: string;
  issuer?: string;
}

const Certification: React.FC<CertificationProps> = ({
  title,
  description,
  logoUrl,
  logoAlt = "Certification provider logo",
  issuer = ""
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6 h-16">
        <img 
          src={logoUrl} 
          alt={logoAlt}
          className="h-full object-contain object-left"
        />
      </div>
      
      <h3 className="text-xl font-medium text-gray-700 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 text-base">
        {description}
      </p>
    </div>
  );
};

export default Certification;