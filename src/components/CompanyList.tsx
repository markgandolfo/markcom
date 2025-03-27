import React from 'react';

interface Company {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
}

interface CompanyListProps {
  companies: Company[];
  title?: string;
}

const CompanyList: React.FC<CompanyListProps> = ({ 
  companies,
  title 
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {title && (
        <h2 className="text-2xl text-center font-medium text-gray-700 mb-12">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {companies.map((company) => (
          <div key={company.id} className="flex justify-center">
            <div className="block w-full min-h-[200px] max-w-[200px] bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="p-6 flex items-center justify-center h-full min-h-[80px]">
                <img 
                  src={company.logoUrl} 
                  alt={`${company.name} logo`} 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage component with sample data
const CompaniesSection: React.FC = () => {
  const sampleCompanies: Company[] = [
    {
      id: "ReeceTech",
      name: "Reece Tech",
      logoUrl: "/images/companyLogos/reecetech.webp",
    },
    {
      id: "Qantas",
      name: "Qantas",
      logoUrl: "/images/companyLogos/qantas.avif",
    },
    {
      id: "Hooroo",
      name: "Hooroo",
      logoUrl: "/images/companyLogos/hooroo.webp",
    },
    {
      id: "apn",
      name: "APN News & Media",
      logoUrl: "/images/companyLogos/APN-News-Media.jpg",
    },
  ];

  return <CompanyList companies={sampleCompanies} />;
};

export default CompanyList;
export { CompaniesSection, type Company };