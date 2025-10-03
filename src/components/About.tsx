import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "300+", label: "Happy Customers" },
    { icon: <Award className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Clock className="w-8 h-8" />, number: "400+", label: "Designs Created" },
    { icon: <Star className="w-8 h-8" />, number: "4.0", label: "Average Rating" }
  ];

  const handleContactUs = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Bridhunas Ladies Corner
            </h2>
            <div className="w-20 h-1 bg-orange-500 mb-6"></div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 5+ years of experience in the fashion industry, Bridhunas Ladies Corner 
              has been creating beautiful, custom-tailored garments that celebrate the unique 
              style and personality of every woman.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our modern design 
              techniques to deliver exceptional quality and perfect fit. From elegant sarees 
              to contemporary dresses, we specialize in creating garments that make you 
              look and feel your absolute best.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Expertise</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Custom tailoring and alterations
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Bridal and special occasion wear
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Traditional and contemporary designs
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Fashion consulting and styling
                </li>
              </ul>
            </div>

            <button
              onClick={handleContactUs}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7148623/pexels-photo-7148623.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Tailoring workshop"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;