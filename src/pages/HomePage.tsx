import React from 'react';
import ProfileSection from '../components/Profile.tsx';
import PortfolioList from '../components/PortfolioList.tsx';
import Subheading from '../components/Subheading.tsx';
import { CompaniesSection } from '../components/CompanyList.tsx';
import ContactSection from '../components/ContactSection.tsx';

interface HomePageProps {
  onPortfolioItemClick: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPortfolioItemClick }) => {
  return (
    <>
      <ProfileSection />
      <PortfolioList onItemClick={onPortfolioItemClick} />
      <Subheading text="COMPANIES"/>
      <CompaniesSection />
      <ContactSection />
    </>
  );
};

export default HomePage;