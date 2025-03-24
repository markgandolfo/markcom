import React from 'react';

interface HeaderLink {
  label: string;
  href: string;
  onClick?: () => void;
}

interface HeaderProps {
  name?: string;
  title?: string;
  links?: HeaderLink[];
}

const Header: React.FC<HeaderProps> = ({ 
  name = "", 
  title = "",
  links = [
    { label: "About Me", href: "/" },
    { label: "Bookshelf", href: "#bookshelf" }
  ]
}) => {
  return (
    <header className="py-6 px-4 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <a href="/"><h1 className="text-xl font-semibold text-gray-800">{name}</h1></a>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
        <nav>
          <ul className="flex space-x-8">
            {links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                  onClick={(e) => {
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
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