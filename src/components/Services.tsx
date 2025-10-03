import React from 'react';
import { Scissors, Users, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Custom Tailoring",
      description: "Perfectly fitted garments crafted to your exact measurements and style preferences."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fashion Consulting",
      description: "Expert advice on style, fabric selection, and design to bring your vision to life."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Alterations",
      description: "Fast and precise alterations to ensure your clothes fit perfectly every time."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Using only the finest materials and techniques for exceptional durability and style."
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of tailoring services designed to meet all your fashion needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50 hover:bg-white group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;