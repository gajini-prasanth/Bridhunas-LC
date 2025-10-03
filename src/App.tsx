
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
      <Hero />
      <Designs />
      <Services />
      <About />
      <Contact />

      {/* Owner section */}
      <div className="flex flex-col items-center mt-12 mb-8">
        <img
          src="/ammu.jpg"
          alt="Owner"
          className="w-32 h-32 rounded-full shadow-lg object-cover"
        />
        <h2 className="mt-4 text-xl font-bold text-purple-700">AMUTHAVALLI (B.Sc)</h2>
        <p className="mt-2 max-w-md text-center text-gray-700">
          {/* About Owner description */}
          Passionate about fashion and design, our owner brings years of experience and creativity to Bridhunas Ladies Corner. Dedicated to customer satisfaction and unique styles.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default App;