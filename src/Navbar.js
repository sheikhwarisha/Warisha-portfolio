// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['home', 'about', 'skills', 'projects', 'contact'];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-pink-500 text-2xl font-bold">Warisha</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-pink-100 font-medium text-lg">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="relative group transition duration-300"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden text-pink-200 text-2xl" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-pink-100 py-6 px-6 space-y-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={closeMenu}
              className="block text-lg font-medium transition transform hover:translate-x-1 hover:text-pink-400"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
