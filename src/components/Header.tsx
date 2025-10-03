import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react'; // Removed ShoppingCart import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setIsMoreDropdownOpen(false);
    }
  };

  return (
    <header className="bg-gray-800 text-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-orange-400">
              Bridhunas Ladies Corner
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-orange-400 transition-colors duration-200 border-b-2 border-orange-400 pb-1">
              Home
            </button>
            <button onClick={() => scrollToSection('designs')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
              Designs
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
              About
            </button>
            <div className="relative">
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center space-x-1"
              >
                <span>More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isMoreDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                  <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                    Services
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                    Contact
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button only (shopping cart removed) */}
          <div className="flex items-center space-x-4">
            {/* Removed Shopping Cart button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-white bg-gray-700 rounded-md">
                Home
              </button>
              <button onClick={() => scrollToSection('designs')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
                Designs
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;