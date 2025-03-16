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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {title && (
        <h2 className="text-2xl text-center font-medium text-gray-700 mb-12">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {companies.map((company) => (
          <div key={company.id} className="flex justify-center">
            <a 
              href={company.websiteUrl || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block w-full max-w-[200px]"
            >
              <div className="absolute inset-0 bg-white rounded-lg shadow-md transition-all duration-300 
                group-hover:shadow-xl group-hover:scale-105"></div>
              <div className="relative p-6">
                <img 
                  src={company.logoUrl} 
                  alt={`${company.name} logo`} 
                  className="w-full h-auto object-contain"
                />
              </div>
            </a>
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
      id: "1",
      name: "Trivago",
      logoUrl: "/api/placeholder/150/80",
      websiteUrl: "https://www.trivago.com"
    },
    {
      id: "2",
      name: "Nezasa",
      logoUrl: "/api/placeholder/150/80",
      websiteUrl: "https://www.nezasa.com"
    },
    {
      id: "3",
      name: "Critical Techworks",
      logoUrl: "/api/placeholder/150/80",
      websiteUrl: "https://www.criticaltechworks.com"
    },
    {
      id: "4",
      name: "WeChangers",
      logoUrl: "/api/placeholder/150/80",
      websiteUrl: "https://www.wechangers.org"
    },
    {
      id: "5",
      name: "Itaú Unibanco",
      logoUrl: "/api/placeholder/150/80",
      websiteUrl: "https://www.itau.com"
    },
    {
      id: "6",
      name: "Geofusion",
      logoUrl: "/api/placeholder/150/80",
      websiteUrl: "https://www.geofusion.com"
    },
    {
      id: "7",
      name: "Feitian",
      logoUrl: "/api/placeholder/150/80",
      websiteUrl: "https://www.ftsafe.com"
    }
  ];

  return <CompanyList companies={sampleCompanies} />;
};

export default CompanyList;
export { CompaniesSection, type Company };