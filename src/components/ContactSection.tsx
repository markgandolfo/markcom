import React from 'react';
import LeftAlignedHeader from './LeftAlignedHeader';
import { Linkedin, Github, FileText } from 'lucide-react';

interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

interface ContactSectionProps {
  title?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  mediumUrl?: string;
  customLinks?: SocialLink[];
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Get in touch",
  linkedinUrl = "https://linkedin.com/in/yourprofile",
  githubUrl = "https://github.com/yourusername",
  mediumUrl = "https://medium.com/@yourusername",
  customLinks = []
}) => {
  // Default social links
  const defaultLinks: SocialLink[] = [
    {
      id: "linkedin",
      name: "LinkedIn",
      url: linkedinUrl,
      icon: <Linkedin size={20} />,
      ariaLabel: "Visit my LinkedIn profile"
    },
    {
      id: "github",
      name: "GitHub",
      url: githubUrl,
      icon: <Github size={20} />,
      ariaLabel: "Visit my GitHub profile"
    },
    {
      id: "medium",
      name: "Medium",
      url: mediumUrl,
      icon: <FileText size={20} />,
      ariaLabel: "Read my articles on Medium"
    }
  ];

  // Combine default links with any custom links
  const allLinks = [...defaultLinks, ...customLinks];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <LeftAlignedHeader text={title} />
        
        <div className="flex flex-wrap gap-4 mt-4">
          {allLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;