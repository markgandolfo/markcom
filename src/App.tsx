import React from 'react';
import Header from './components/Header.tsx';
import ProfileSection from './components/Profile.tsx';
import Subheading from './components/Subheading.tsx';
import { PortfolioSection } from './components/PortfolioList.tsx';
import { CompaniesSection } from './components/CompanyList.tsx';
import { ExampleCertificationsSection } from './components/CertificationsSection.tsx';
import ContactSection from './components/ContactSection.tsx';

// import CompanyList from './components/CompanyList.tsx';
// import CertificationsSection, { CertificationData } from './components/CertificationsSection';

import './App.css';

const settings = {
  name: "Mark Gandolfo", 
  title: "Lead Product Manager",
}

const App: React.FC = () => {
  return (
    <>
      <Header 
        name={settings.name.toUpperCase()}
        title={settings.title.toUpperCase()} />
      <main>
        <ProfileSection
          name={settings.name.toUpperCase()}
          title={settings.title.toUpperCase()}
          altText={settings.name} />
        
        <Subheading text="PRODUCTS I'VE WORKED ON" />
        <PortfolioSection />

        <Subheading text="COMPANIES I'VE WORKED AT" />
        <CompaniesSection />

        <Subheading text="MY CERTIFICATIONS" />
        <ExampleCertificationsSection />

        <ContactSection />        
      </main>
    </>
  );
};

export default App;