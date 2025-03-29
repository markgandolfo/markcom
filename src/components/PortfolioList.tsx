import React from 'react';
import PortfolioItem from './PortfolioItem';
// Import the JSON data
import portfolioData from '../data/portfolioItems.json';

interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  linkUrl?: string;
  company?: string;
}

interface PortfolioListProps {
  projects?: PortfolioProject[];
  title?: string;
  onItemClick?: (id: string) => void;
}

const PortfolioList: React.FC<PortfolioListProps> = ({
  // If no projects are passed as props, use the data from the JSON file
  projects = portfolioData.portfolioItems as PortfolioProject[],
  onItemClick
}) => {
  const handleItemClick = (id: string) => {
    if (onItemClick) {
      onItemClick(id);
    } else {
      console.log(`Clicked item with ID: ${id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <div key={project.id} className="h-full">
            <div 
              onClick={() => handleItemClick(project.id)}
              className="cursor-pointer"
            >
              <PortfolioItem
                title={project.title}
                description={project.description.replace(/<\/?[^>]+(>|$)/g, "")} 
                imageUrl={`images/portfolio/${project.imageUrl}`}
                imageAlt={project.imageAlt}
                linkUrl={project.linkUrl}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// For demonstration - this component uses the JSON data directly
const PortfolioSection: React.FC = () => {
  return <PortfolioList />;
};

export default PortfolioList;
export { PortfolioSection, type PortfolioProject };