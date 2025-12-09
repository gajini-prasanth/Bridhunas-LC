
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Designs from './components/Designs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        <Hero />
        <Designs />
        <Services />
        <About />
        <Contact />

        {/* Owner section */}
        <div className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-40"></div>
          
          <div className="flex flex-col items-center relative z-10">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 p-1 shadow-2xl shadow-orange-500/30">
                <img
                  src="/ammu.jpg"
                  alt="Owner"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-dashed border-orange-200 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
            <h2 className="mt-8 text-2xl font-bold">
              <span className="gradient-text">AMUTHAVALLI</span>
              <span className="text-gray-600"> (B.Sc)</span>
            </h2>
            <p className="text-orange-500 font-semibold mt-1">Founder & Lead Designer</p>
            <p className="mt-4 max-w-lg text-center text-gray-600 leading-relaxed px-4">
              Passionate about fashion and design, our owner brings years of experience and creativity to Bridhunas Ladies Corner. Dedicated to customer satisfaction and unique styles.
            </p>
            {/* Trust badges */}
            <div className="flex gap-3 mt-6">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 rounded-full text-sm font-medium">
                ✨ 5+ Years Experience
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 rounded-full text-sm font-medium">
                ⭐ Fashion Expert
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;