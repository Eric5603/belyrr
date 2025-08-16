import React from 'react';
import { ArrowRight } from 'lucide-react';

const LuxuryHeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-neutral-900">
      {/* Split Screen Layout */}
      <div className="flex h-full">
        
        {/* Left Content Panel */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-xl">
            {/* Small intro text */}
            <div className="mb-8">
              <span className="text-sm tracking-widest uppercase text-neutral-400 font-light">
                Summer 2024
              </span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-extralight text-white leading-[0.9] mb-8">
              Aqua
              <span className="block font-light italic text-neutral-300">
                Luxe
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-neutral-300 font-light leading-relaxed mb-12 max-w-md">
              Redefining elegance in swimwear with Italian craftsmanship and contemporary design.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 hover:bg-neutral-100 transition-all duration-300">
                <span className="text-sm tracking-wider uppercase font-medium">
                  Explore Collection
                </span>
                <ArrowRight 
                  size={16} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </button>
              
              <button className="text-sm tracking-wider uppercase font-medium text-white border-b border-white pb-1 hover:border-neutral-300 transition-colors self-start">
                Watch Film
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Image Panel */}
        <div className="hidden lg:block w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            alt="Luxury swimwear model"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-900/20"></div>
        </div>
        
        {/* Mobile Background */}
        <div className="lg:hidden absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            alt="Luxury swimwear model"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="absolute bottom-8 left-8 lg:left-16 xl:left-24 flex items-center gap-8 z-20">
        <div className="flex gap-2">
          <div className="w-8 h-px bg-white"></div>
          <div className="w-2 h-px bg-neutral-600"></div>
          <div className="w-2 h-px bg-neutral-600"></div>
        </div>
        <span className="text-xs text-neutral-400 tracking-widest">01 / 03</span>
      </div>
      
      {/* Side Navigation */}
      <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col gap-4 items-center">
          <button className="w-2 h-2 bg-white rounded-full"></button>
          <button className="w-2 h-2 bg-neutral-600 rounded-full hover:bg-white transition-colors"></button>
          <button className="w-2 h-2 bg-neutral-600 rounded-full hover:bg-white transition-colors"></button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 lg:right-16 xl:right-24 z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-neutral-400 tracking-widest rotate-90 origin-center">
            SCROLL
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryHeroSection;