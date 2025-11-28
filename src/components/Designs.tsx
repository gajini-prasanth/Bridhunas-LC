import { useState } from 'react';
import { Heart, Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { designs as designsData } from './designsData';

const Designs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Designs', icon: '✨' },
    { id: 'sarees', name: 'Sarees', icon: '👗' },
    { id: 'blouses', name: 'Blouses', icon: '👚' },
    { id: 'dresses', name: 'Dresses', icon: '👘' },
    { id: 'suits', name: 'Suits', icon: '🎀' }
  ];

  const designs = designsData.map(design => ({
    ...design,
    title: `Design ${design.id}`,
    category: ['sarees', 'blouses', 'dresses', 'suits'][(design.id - 1) % 4],
    image: design.imageUrl,
    description: `Beautiful custom design #${design.id}`
  }));

  const filteredDesigns = selectedCategory === 'all' 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const openFullScreen = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeFullScreen = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredDesigns.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? filteredDesigns.length - 1 : selectedImageIndex - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeFullScreen();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="designs" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pattern-grid opacity-50"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Our Collection</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Our <span className="gradient-text">Designs</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-orange-500 rounded"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-orange-500 rounded"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of beautiful, custom-tailored designs crafted with precision and style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/30 scale-105'
                  : 'bg-white text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 shadow-md hover:shadow-lg border border-gray-100'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDesigns.map((design, idx) => (
            <div 
              key={design.id} 
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${(idx % 8) * 50}ms` }}
            >
              <div className="relative overflow-hidden cursor-pointer" onClick={() => openFullScreen(filteredDesigns.indexOf(design))}>
                <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(design.id);
                    }}
                    aria-label={favorites.includes(design.id) ? 'Remove from favorites' : 'Add to favorites'}
                    className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg transform hover:scale-110 ${
                      favorites.includes(design.id)
                        ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                        : 'bg-white/90 text-gray-700 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={favorites.includes(design.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openFullScreen(filteredDesigns.indexOf(design));
                    }}
                    aria-label="View full screen"
                    className="p-4 bg-white/90 backdrop-blur-md text-gray-800 rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white transition-all duration-300 shadow-xl transform hover:scale-110"
                  >
                    <Eye className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-800 truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                      {design.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1.5 line-clamp-2">{design.description}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-xs font-semibold shadow-md flex-shrink-0 capitalize">
                    {design.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-screen Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeFullScreen}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={filteredDesigns[selectedImageIndex].image}
                alt={filteredDesigns[selectedImageIndex].title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Close Button */}
              <button
                onClick={closeFullScreen}
                aria-label="Close full screen view"
                className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredDesigns.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-all bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 hover:scale-110"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-all bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 hover:scale-110"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Image Info */}
              <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-between text-white">
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2">
                  <h3 className="text-lg font-semibold">{filteredDesigns[selectedImageIndex].title}</h3>
                  <p className="text-sm text-white/70">{filteredDesigns[selectedImageIndex].description}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 text-sm">
                  {selectedImageIndex + 1} / {filteredDesigns.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Designs;