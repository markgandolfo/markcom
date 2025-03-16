import React from 'react';
import Certification from './Certification';
import Subheading from './Subheading';

interface CertificationData {
  id: string;
  title: string;
  description: string;
  logoUrl: string;
  logoAlt?: string;
  issuer?: string;
}

interface CertificationsSectionProps {
  certifications: CertificationData[];
  title?: string;
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
  title = "Education & Certifications"
}) => {
  return (
    <section className="py-12 px-4">
      {title && <Subheading text={title} />}
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {certifications.map((cert) => (
            <div key={cert.id} className="h-full">
              <Certification 
                title={cert.title}
                description={cert.description}
                logoUrl={cert.logoUrl}
                logoAlt={cert.logoAlt}
                issuer={cert.issuer}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example component with sample data matching the screenshot
const ExampleCertificationsSection: React.FC = () => {
  const sampleCertifications: CertificationData[] = [
    {
      id: "1",
      title: "Advanced Product Management: Vision, Strategy & Metrics",
      description: "I have acquired advanced skills and techniques used by successful product managers in their daily work. The lectures covered topics such as implementing vision and strategy, understanding how to use data, and were designed for founders, CEOs, and product managers. Real-world examples were used to demonstrate how to execute each approach effectively, as well as what not to do.",
      logoUrl: "/api/placeholder/120/60",
      logoAlt: "Udemy logo",
      issuer: "Udemy"
    },
    {
      id: "2",
      title: "AI Product Management",
      description: "I have gained expertise in managing the design and development of machine learning products. I now have a firm grasp of how machine learning operates and when and where it can be used to solve problems. Additionally, I have learned to apply the data science process and best practices to lead machine learning projects, as well as to develop human-centered AI products that uphold privacy and ethical standards.",
      logoUrl: "/api/placeholder/120/60",
      logoAlt: "Duke University logo",
      issuer: "Duke University"
    }
  ];

  return <CertificationsSection certifications={sampleCertifications} />;
};

export default CertificationsSection;
export { ExampleCertificationsSection, type CertificationData };