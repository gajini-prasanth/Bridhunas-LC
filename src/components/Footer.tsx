import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">+91 9597880703</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">ammudev0410@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Bargur, Krishnagiri Dt, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Business Hours
              </span>
            </h3>
            <div className="flex items-start space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-gray-300">Monday - Saturday</div>
                <div className="text-white font-semibold">10:00 AM - 6:00 PM</div>
                <div className="text-gray-400 text-sm mt-2">Sunday: Closed</div>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                About Bridhunas
              </span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              With years of experience in fashion and tailoring, we specialize in creating 
              beautiful, custom-fitted garments that reflect your personal style and 
              celebrate your unique beauty.
            </p>
            {/* Social/Trust badges */}
            <div className="mt-4 flex gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                ✨ 5+ Years
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                ⭐ 300+ Customers
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 <span className="text-white font-semibold">Bridhunas Ladies Corner</span>. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center gap-1 text-sm">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> for fashion lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;