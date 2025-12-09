import { ArrowDown, Sparkles } from 'lucide-react';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 animate-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="glass-effect rounded-3xl shadow-2xl p-8 md:p-16 transform hover:scale-[1.02] transition-all duration-500 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse-glow">
            <Sparkles className="w-4 h-4" />
            <span>Premium Fashion Tailoring</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Bridhunas</span>
            <br />
            <span className="text-gray-800">Ladies Corner</span>
          </h1>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-orange-500 rounded"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-orange-500 rounded"></div>
          </div>
          
          <p className="text-lg md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Unveiling tailor-made fashion for every aspiration.
            <span className="block mt-2 text-base text-gray-500">Where elegance meets craftsmanship</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('designs')}
              className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Designs
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={handleBookAppointment}
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={() => scrollToSection('designs')} 
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2 group-hover:border-white transition-colors">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;