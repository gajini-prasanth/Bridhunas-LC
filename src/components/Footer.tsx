import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+91 9597880703</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>ammudev0410@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Bargur,krishnagiri dt,tamilnadu</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">
              Business Hours
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-400" />
                <div>
                  <div>Monday - Saturday: 10:00 AM - 6:00 PM</div>
                  <div className="text-gray-300">Sunday: Leave</div>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">
              About Bridhunas
            </h3>
            <p className="text-gray-300 leading-relaxed">
              With years of experience in fashion and tailoring, we specialize in creating 
              beautiful, custom-fitted garments that reflect your personal style and 
              celebrate your unique beauty.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Bridhunas Ladies Corner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;