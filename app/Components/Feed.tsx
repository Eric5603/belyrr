"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Instagram } from 'lucide-react';


const FreshFeedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const feedItems = [
    {
      id: 1,
      type: 'image',
      src: '/swimwear1.jpg',
      alt: 'Ocean blue swimsuit on beach',
      description: 'New Summer Collection',
      location: 'Maldives'
    },
    {
      id: 2,
      type: 'video',
      src: '/swimwear2.jpg',
      alt: 'Model walking in sunset with swimwear',
      description: 'Sunset Beach Walk',
      overlay: 'Discover our sustainable fabrics',
      location: 'Bali'
    },
    {
      id: 3,
      type: 'video',
      src: '/swimwear3.jpg',
      alt: 'Tropical swimwear collection',
      description: 'Tropical Paradise',
      overlay: 'Limited edition prints',
      location: 'Seychelles'
    },
    {
      id: 4,
      type: 'video',
      src: '/swimwear4.jpg',
      alt: 'Poolside luxury swimwear',
      description: 'Poolside Elegance',
      overlay: 'Shop the look',
      location: 'Santorini'
    },
    {
      id: 5,
      type: 'image',
      src: '/swimwear5.jpg',
      alt: 'Ocean view with swimwear',
      description: 'Ocean Breeze Collection',
      overlay: 'Now available',
      location: 'Maui'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % feedItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + feedItems.length) % feedItems.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % feedItems.length;
      items.push(feedItems[index]);
    }
    return items;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-blue-900 mb-3">Dive Into Summer</h2>
        <p className="text-blue-800 font-medium flex items-center justify-center gap-2">
          <Instagram className="w-5 h-5" />
          Follow <span className="font-bold">@luxeswim</span> for more
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows - More elegant */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all border border-blue-100 -ml-6"
          aria-label="Previous images"
        >
          <ChevronLeft className="w-6 h-6 text-blue-900" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all border border-blue-100 -mr-6"
          aria-label="Next images"
        >
          <ChevronRight className="w-6 h-6 text-blue-900" />
        </button>

        {/* Carousel Items - More sophisticated grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getVisibleItems().map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative aspect-[2/3] rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-teal-50 group cursor-pointer transition-transform hover:scale-[1.02]"
            >
              {/* Image Placeholder - Would be replaced with actual images */}
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-teal-100 flex flex-col items-center justify-end p-6">
                <div className="text-center p-4 w-full">
                  <p className="text-blue-900 font-serif text-lg font-medium mb-1">{item.description}</p>
                  <p className="text-blue-700 text-sm">{item.location}</p>
                </div>
              </div>

              {/* Video Play Button Overlay - More elegant */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all hover:scale-110 border border-white/30">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              )}

              {/* Text Overlay - More sophisticated */}
              {item.overlay && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-5">
                  <p className="text-white font-medium">{item.overlay}</p>
                  <p className="text-blue-100 text-sm mt-1">{item.location}</p>
                </div>
              )}

              {/* Hover Effect - Water-like ripple */}
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator - More elegant */}
      <div className="flex justify-center mt-8 space-x-3">
        {feedItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-blue-900 w-6' : 'bg-blue-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Call to Action - More luxurious */}
      <div className="text-center mt-12">
        <button className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-full font-medium transition-all flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
          <Instagram className="w-5 h-5" />
          Follow @luxeswim
        </button>
      </div>
    </div>
  );
};

export default FreshFeedCarousel;