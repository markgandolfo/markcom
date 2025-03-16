import React from 'react';
import PortfolioItem from './PortfolioItem';

interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  linkUrl?: string;
}

interface PortfolioListProps {
  projects: PortfolioProject[];
}

const PortfolioList: React.FC<PortfolioListProps> = ({ projects }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <div key={project.id} className="h-full">
            <PortfolioItem
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              linkUrl={project.linkUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage component with sample data
const PortfolioSection: React.FC = () => {
  const sampleProjects: PortfolioProject[] = [
    {
      id: "1",
      title: "Building the future of hyper-personalized travel packages at Nezasa",
      description: "Nezasa was established in 2012 in Zurich by a group of avid travelers with strong IT skills. Their innovative idea was to simplify travel by developing technology that would remove...",
      imageUrl: "/api/placeholder/600/400",
      linkUrl: "#nezasa"
    },
    {
      id: "2",
      title: "BMW: Changing the Way the World Moves",
      description: "Born in September 2018, Critical TechWorks is a company formed due to a partnership between BMW Group and CriticalGroup. CTW focuses exclusively on supporting BMW in developing software for its...",
      imageUrl: "/api/placeholder/600/400",
      linkUrl: "#bmw"
    },
    {
      id: "3",
      title: "Changing the world with WeChangers",
      description: "The product WeChangers is a start from Porto with a bold vision. \"An interdependent and sustainable world with no poverty, no inequality, and no injustice, where our economic system prioritizes...\"",
      imageUrl: "/api/placeholder/600/400",
      linkUrl: "#wechangers"
    },
    {
      id: "4",
      title: "Trivago's best 20 hotels on every single search",
      description: "The product trivago is a widely known global hotel metasearch. Trivago's hotel search allows users to compare hotel prices in just a few clicks from more than 300 booking sites...",
      imageUrl: "/api/placeholder/600/400",
      linkUrl: "#trivago"
    },
    {
      id: "5",
      title: "Helping hoteliers to thrive with trivago Business Studio",
      description: "The product When I joined trivago back in 2016, the B2B team was a relatively small team helping hoteliers to perform better at trivago hotel search. The product was called...",
      imageUrl: "/api/placeholder/600/400",
      linkUrl: "#trivago-business"
    },
    {
      id: "6",
      title: "Supporting the strategy of global giants in Brazil with geomarketing",
      description: "The product Born in 1996 in São Paulo, Geofusion is a pioneer and the leader in the geographic intelligence market in Brazil, with clients like McDonald's, Heineken, Danone, Mastercard, and...",
      imageUrl: "/api/placeholder/600/400",
      linkUrl: "#geofusion"
    }
  ];

  return <PortfolioList projects={sampleProjects} />;
};

export default PortfolioList;
export { PortfolioSection, type PortfolioProject };