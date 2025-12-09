import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert(`Thank you, ${formData.name}! Your appointment request has been submitted. We'll contact you soon at ${formData.email} or ${formData.phone}.`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:9597880703';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:ammudev0410@gmail.com';
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/EvU82aY5xNmn8yP89', '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "9597880703",
      subtitle: "Click to call us directly",
      action: handlePhoneCall,
      color: "from-orange-400 to-pink-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "ammudev0410@gmail.com",
      subtitle: "Click to send us an email",
      action: handleEmailClick,
      color: "from-pink-400 to-purple-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Bargur, Krishnagiri Dt, Tamil Nadu",
      subtitle: "Click to view on map",
      action: handleLocationClick,
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      value: "Mon - Sat: 10:00 AM - 6:00 PM",
      subtitle: "Sunday: Closed",
      action: undefined,
      color: "from-indigo-400 to-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-orange-500 rounded"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-orange-500 rounded"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to create your perfect outfit? Get in touch with us to schedule a consultation or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              <span className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </span>
              Get in Touch
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className={`group flex items-start space-x-4 p-5 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${info.action ? 'cursor-pointer' : ''}`}
                  onClick={info.action}
                >
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${info.color} text-white rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">{info.title}</h4>
                    <p className="text-gray-700 font-medium">{info.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              <span className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </span>
              Book an Appointment
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="custom-tailoring">Custom Tailoring</option>
                  <option value="alterations">Alterations</option>
                  <option value="bridal-wear">Bridal Wear</option>
                  <option value="party-wear">Party Wear</option>
                  <option value="consultation">Fashion Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 disabled:from-orange-300 disabled:to-pink-300 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/30 transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;