import React from 'react';

interface HeaderProps {
  name?: string;
  title?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

const Header: React.FC<HeaderProps> = ({ 
  name = "", 
  title = "",
  links = [
    { label: "About Me", href: "#about" },
    { label: "Bookshelf", href: "#bookshelf" }
  ]
}) => {
  return (
    <header className="py-6 px-4 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">{name}</h1>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
        <nav>
          <ul className="flex space-x-8">
            {links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;