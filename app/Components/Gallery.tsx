import React from 'react';
import { Instagram } from 'lucide-react';

const SaltyBikiniClub = () => {
  // Sample image data - in a real app, these would come from your CMS or API
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1544918322-f06a7de2dc04?w=400&h=400&fit=crop",
      alt: "Woman in polka dot bikini by pool"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      alt: "Bikini hanging on line"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      alt: "Woman in patterned bikini poolside"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
      alt: "Colorful bikinis laid out"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop",
      alt: "Woman in black bikini on rocks"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      alt: "Woman on beach with palm trees"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1594736797933-d0b71cd8d8c6?w=400&h=400&fit=crop",
      alt: "Red bikini with accessories"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      alt: "Woman with bicycle in nature"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <div className="inline-block p-3 bg-white rounded-full shadow-lg mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">🏖️</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-2 tracking-wide">
          The Salty Bikini Club
        </h1>
        
        <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
          <span>Follow us</span>
          <Instagram className="w-4 h-4" />
          <span className="text-orange-400">@saltybikiniclub</span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`
                relative overflow-hidden bg-gray-200 cursor-pointer
                transition-all duration-300 hover:scale-105 hover:shadow-xl
                ${index === 0 || index === 3 ? 'aspect-square' : 'aspect-square'}
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaltyBikiniClub;