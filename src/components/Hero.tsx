import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookAppointment = () => {
    // Scroll to contact section for booking
    scrollToSection('contact');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/7148623/pexels-photo-7148623.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Tailoring workshop background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Bridhunas Ladies Corner
          </h1>
          
          {/* Orange accent line */}
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Unveiling tailor-made fashion for every aspiration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('designs')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
            >
              Explore Designs
            </button>
            <button 
              onClick={handleBookAppointment}
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button onClick={() => scrollToSection('designs')} className="animate-bounce hover:text-orange-400 transition-colors">
          <ArrowDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;