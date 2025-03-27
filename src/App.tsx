import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import HomePage from './pages/HomePage';
import BookShelfPage from './pages/BookShelfPage.tsx';
import PortfolioItemPage from './pages/PortfolioItemPage.tsx';
import Footer from './components/Footer';

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
        return <HomePage onPortfolioItemClick={handlePortfolioClick} />;
      case 'portfolio-detail':
        return selectedPortfolioId ? (
          <PortfolioItemPage
            id={selectedPortfolioId} 
            onBackClick={handleBackClick}
          />
        ) : null;
      case 'bookshelf':
        return <BookShelfPage />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header 
        name={settings.name.toUpperCase()}
        title={settings.title.toUpperCase()}
        links={[
          { label: "About Me", href: "#", onClick: () => handleNavClick('about') },
          { label: "Bookshelf", href: "#", onClick: () => handleNavClick('bookshelf') }
        ]}
      />

      <main className="flex-1">
        {renderContent()}
      </main>   
      
      <Footer 
        linkedinUrl="https://linkedin.com/in/markgandolfo" 
        githubUrl="https://github.com/markgandolfo" 
        mediumUrl="https://medium.com/@markgandolfo" 
      />
    </div>
  );
};

export default App;