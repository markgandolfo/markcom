import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import ProfileSection from './components/Profile.tsx';
import Subheading from './components/Subheading.tsx';
import PortfolioList from './components/PortfolioList';
import CompanyList from './components/CompanyList.tsx';
import BookShelfPage from './pages/BookShelfPage.tsx';
import { CompaniesSection } from './components/CompanyList.tsx';
import PortfolioItemDetail from './components/PortfolioItemDetail.tsx';
import ContactSection from './components/ContactSection.tsx';

import './App.css';

const settings = {
  name: "Mark Gandolfo", 
  title: "Lead Product Manager",
}

type AppView = 'home' | 'portfolio-detail' | 'bookshelf';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(null);

  // Check URL on initial load
  useEffect(() => {
    // Get the path from the URL
    const path = window.location.pathname;
    
    if (path === '/bookshelf') {
      setCurrentView('bookshelf');
    } else if (path.startsWith('/portfolio/')) {
      const portfolioId = path.split('/')[2];
      if (portfolioId) {
        setSelectedPortfolioId(portfolioId);
        setCurrentView('portfolio-detail');
      }
    }
    
    // Listen for back/forward browser navigation
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Handle browser back/forward navigation
  const handlePopState = (event: PopStateEvent) => {
    const path = window.location.pathname;
    if (path === '/' || path === '') {
      setCurrentView('home');
      setSelectedPortfolioId(null);
    } else if (path === '/bookshelf') {
      setCurrentView('bookshelf');
    } else if (path.startsWith('/portfolio/')) {
      const portfolioId = path.split('/')[2];
      if (portfolioId) {
        setSelectedPortfolioId(portfolioId);
        setCurrentView('portfolio-detail');
      }
    }
  };

  // Handle portfolio item click
  const handlePortfolioClick = (id: string) => {
    setSelectedPortfolioId(id);
    setCurrentView('portfolio-detail');
    
    // Update URL without page reload
    const newUrl = `/portfolio/${id}`;
    window.history.pushState({ portfolioId: id }, '', newUrl);
    
    // Scroll to top
    window.scrollTo(0, 0);
  };

  // Handle back button click
  const handleBackClick = () => {
    setCurrentView('home');
    setSelectedPortfolioId(null);
    
    // Update URL to home
    window.history.pushState({}, '', '/');
  };

  // Handle nav item clicks
  const handleNavClick = (route: string) => {
    if (route === 'about') {
      setCurrentView('home');
      window.history.pushState({}, '', '/');
      // Optionally scroll to ProfileSection
      window.scrollTo(0, 0);
    } else if (route === 'bookshelf') {
      setCurrentView('bookshelf');
      window.history.pushState({}, '', '/bookshelf');
      window.scrollTo(0, 0);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <ProfileSection />
            <PortfolioList onItemClick={handlePortfolioClick} />
            <Subheading text="COMPANIES"/>
            <CompaniesSection />
            <ContactSection />
          </>
        );
      case 'portfolio-detail':
        return selectedPortfolioId ? (
          <PortfolioItemDetail 
            id={selectedPortfolioId} 
            onBackClick={handleBackClick}
          />
        ) : null;
      case 'bookshelf':
        return <BookShelfPage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        name={settings.name.toUpperCase()}
        title={settings.title.toUpperCase()}
        links={[
          { label: "About Me", href: "#", onClick: () => handleNavClick('about') },
          { label: "Bookshelf", href: "#", onClick: () => handleNavClick('bookshelf') }
        ]}
      />

      <main>
        {renderContent()}
      </main>   
      
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mark Gandolfo. All rights reserved.
      </footer>
    </div>
  );
};

export default App;