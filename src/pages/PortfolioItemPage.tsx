import React, { useEffect, useState } from 'react';
import portfolioData from '../data/portfolioItems.json';
import BackToHome from '../components/BackToHome';
import './PortfolioItemPage.css';

// Define the missing interface
interface PortfolioItemData {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
  description: string;
  company?: string;
  content?: string;
  // Add any other properties that might be in your portfolio items
}

interface PortfolioItemPageProps {
  id: string;
  onBackClick?: () => void;
}

const PortfolioItemPage: React.FC<PortfolioItemPageProps> = ({ 
  id,
  onBackClick = () => window.history.back()
}) => {
  const [item, setItem] = useState<PortfolioItemData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Find the portfolio item with the matching ID
    const portfolioItem = portfolioData.portfolioItems.find(
      (item) => item.id === id
    );

    if (portfolioItem) {
      setItem(portfolioItem as PortfolioItemData);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2.5"></div>
          <div className="h-4 bg-gray-200 rounded mb-2.5"></div>
          <div className="h-4 bg-gray-200 rounded mb-2.5"></div>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-medium text-gray-800 mb-4">Portfolio Item Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the portfolio item you're looking for.
        </p>
        <BackToHome onClick={onBackClick} />
      </div>
    );
  }

  // Construct the correct image path
  const imageUrl = `/images/portfolio/${item.imageUrl}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <img 
          src={imageUrl} 
          alt={item.imageAlt || item.title} 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {item.title}
      </h1>
      
      {item.company && (
        <div className="text-xl text-gray-600 mb-6">
          {item.company}
        </div>
      )}
      
      <div 
        className="prose prose-lg max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
      
      {/* If there's additional content, render it */}
      {item.content && (
        <div 
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      )}
      
      <div className="border-t pt-8 mt-12">
        <BackToHome onClick={onBackClick} />
      </div>
    </div>
  );
};

export default PortfolioItemPage;