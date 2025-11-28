import { Scissors, Users, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Custom Tailoring",
      description: "Perfectly fitted garments crafted to your exact measurements and style preferences.",
      color: "from-orange-400 to-pink-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fashion Consulting",
      description: "Expert advice on style, fabric selection, and design to bring your vision to life.",
      color: "from-pink-400 to-purple-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Alterations",
      description: "Fast and precise alterations to ensure your clothes fit perfectly every time.",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Using only the finest materials and techniques for exceptional durability and style.",
      color: "from-indigo-400 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-orange-500 rounded"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-orange-500 rounded"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of tailoring services designed to meet all your fashion needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-105`}></div>
              
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              {/* Decorative element */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;