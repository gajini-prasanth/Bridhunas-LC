import { useState } from 'react';
import { Heart, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { designs as designsData } from './designsData';

const Designs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Designs' },
    { id: 'sarees', name: 'Sarees' },
    { id: 'blouses', name: 'Blouses' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'suits', name: 'Suits' }
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
    <section id="designs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Designs
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of beautiful, custom-tailored designs crafted with precision and style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-orange-100 hover:text-orange-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDesigns.map(design => (
            <div key={design.id} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 border border-gray-100">
              <div className="relative overflow-hidden cursor-pointer" onClick={() => openFullScreen(filteredDesigns.indexOf(design))}>
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(design.id);
                    }}
                    aria-label={favorites.includes(design.id) ? 'Remove from favorites' : 'Add to favorites'}
                    className={`p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg transform hover:scale-110 ${
                      favorites.includes(design.id)
                        ? 'bg-red-500 text-white shadow-red-300'
                        : 'bg-white/90 text-gray-700 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={favorites.includes(design.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openFullScreen(filteredDesigns.indexOf(design));
                      }}
                      aria-label="View full screen"
                      className="p-3 bg-white text-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-200"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    {/* Removed ShoppingCart button */}
                  </div>
                </div>
              </div>
                            <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-800 truncate group-hover:text-pink-600 transition-colors duration-300">
                      {design.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1.5 line-clamp-2">{design.description}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-xs font-semibold shadow-md flex-shrink-0">
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
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeFullScreen}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={filteredDesigns[selectedImageIndex].image}
                alt={filteredDesigns[selectedImageIndex].title}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close Button */}
              <button
                onClick={closeFullScreen}
                aria-label="Close full screen view"
                className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors bg-black bg-opacity-50 rounded-full p-2"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              {filteredDesigns.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors bg-black bg-opacity-50 rounded-full p-2"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors bg-black bg-opacity-50 rounded-full p-2"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold">{filteredDesigns[selectedImageIndex].title}</h3>
                <p className="text-sm text-gray-300">{filteredDesigns[selectedImageIndex].description}</p>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 text-white text-sm bg-black bg-opacity-50 rounded-lg px-3 py-2">
                {selectedImageIndex + 1} / {filteredDesigns.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Designs;