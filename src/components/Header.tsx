import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setIsMoreDropdownOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Bridhunas
              </span>
              <span className={isScrolled ? 'text-gray-600' : 'text-gray-300'}> Ladies Corner</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'designs', label: 'Designs' },
              { id: 'about', label: 'About' },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-orange-500 hover:bg-orange-50' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="relative">
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-1 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-orange-500 hover:bg-orange-50' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMoreDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl py-2 border border-gray-100 overflow-hidden">
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 transition-all"
                  >
                    Contact
                  </button>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 transform hover:scale-105"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${isScrolled ? 'border-gray-200 bg-white' : 'border-gray-700 bg-gray-800'} rounded-b-2xl overflow-hidden`}>
            <div className="px-4 py-4 space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'designs', label: 'Designs' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all ${
                    isScrolled 
                      ? 'text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600' 
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;