import { Award, Users, Clock, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "300+", label: "Happy Customers", color: "from-orange-400 to-pink-500" },
    { icon: <Award className="w-8 h-8" />, number: "5+", label: "Years Experience", color: "from-pink-400 to-purple-500" },
    { icon: <Clock className="w-8 h-8" />, number: "400+", label: "Designs Created", color: "from-purple-400 to-indigo-500" },
    { icon: <Star className="w-8 h-8" />, number: "4.0", label: "Average Rating", color: "from-indigo-400 to-blue-500" }
  ];

  const expertise = [
    "Custom tailoring and alterations",
    "Bridal and special occasion wear",
    "Traditional and contemporary designs",
    "Fashion consulting and styling"
  ];

  const handleContactUs = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="gradient-text">Bridhunas</span> Ladies Corner
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 5+ years of experience in the fashion industry, Bridhunas Ladies Corner 
              has been creating beautiful, custom-tailored garments that celebrate the unique 
              style and personality of every woman.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our modern design 
              techniques to deliver exceptional quality and perfect fit. From elegant sarees 
              to contemporary dresses, we specialize in creating garments that make you 
              look and feel your absolute best.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </span>
                Our Expertise
              </h3>
              <ul className="space-y-3">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600 group">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-orange-600 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleContactUs}
              className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 flex items-center gap-2"
            >
              Get in Touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7148623/pexels-photo-7148623.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Tailoring workshop"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
            
            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-orange-200 rounded-full"></div>
            <div className="absolute -bottom-4 right-1/4 w-16 h-16 border-4 border-pink-200 rounded-full"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} text-white rounded-2xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2 gradient-text">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;