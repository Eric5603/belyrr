"use client"
import React, { useState } from 'react';
import { MapPin, Search, User, ShoppingCart, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function BrightlandHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
type DropdownType = 'shop' | 'gifts' | 'explore' | 'mobile-shop' | 'mobile-gifts' | 'mobile-explore' | null;

  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);

interface BrightlandHeaderState {
    isMobileMenuOpen: boolean;
    activeDropdown: DropdownType;
}

const handleDropdownToggle = (dropdown: DropdownType): void => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
};

interface HandleMouseEnterProps {
    dropdown: DropdownType;
}

const handleMouseEnter = (dropdown: HandleMouseEnterProps['dropdown']): void => {
    setActiveDropdown(dropdown);
};

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="w-full relative">
      {/* Dropdown overlay */}
      {activeDropdown && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={handleMouseLeave} />
      )}
      {/* Top promotional bar */}
      <div className="bg-yellow-400 text-black text-xs py-2.5 px-4 flex items-center justify-center font-sans">
        <span className="font-normal text-center">Get free shipping on orders $85+</span>
        <button className="ml-2 underline font-normal hover:no-underline hidden sm:inline">
          Shop Now
        </button>
      </div>
      
      {/* Main navigation */}
      <header className="bg-white border-b border-gray-200 font-sans relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-900 hover:text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </button>

            {/* Left navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {/* Shop Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('shop')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-gray-900 hover:text-gray-600 font-normal text-sm">
                  Shop
                  <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                
                {activeDropdown === 'shop' && (
                  <div className="fixed left-1/2 top-24 transform -translate-x-1/2 bg-white dark:bg-neutral-900 shadow-lg rounded-lg border border-gray-200 p-6 w-[800px] z-50">
                    <div className="flex justify-between items-start">
                      {/* Left side - Categories */}
                      <div className="w-1/3">
                        <div className="flex items-center mb-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-sm">★</span>
                            ))}
                          </div>
                          <span className="ml-2 text-xs text-gray-600">Loved by 600,000+ Customers</span>
                        </div>
                        <blockquote className="mb-6">
                          <p className="text-gray-900 font-normal text-sm leading-relaxed mb-4">
                            "Brightland's olive oils make great gifts for cooks and anyone else who loves to entertain."
                          </p>
                        </blockquote>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-normal flex items-center hover:bg-blue-700">
                          Shop Best-Selling Gifts
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                        <div className="mt-6">
                          <p className="text-xs text-gray-500 mb-2">As Seen In:</p>
                          <div className="flex space-x-4">
                            <span className="text-xs font-bold">FOOD&WINE</span>
                            <span className="text-xs font-bold">VOGUE</span>
                            <span className="text-xs font-bold">bon appétit</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right side - Product showcases */}
                      <div className="w-2/3 flex space-x-4">
                        <div className="flex-1">
                          <img 
                            src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop" 
                            alt="The Duo" 
                            className="w-full h-40 object-cover rounded-lg mb-3"
                          />
                          <h3 className="font-normal text-sm text-gray-900 mb-1">The Duo</h3>
                          <button className="text-gray-400 hover:text-gray-600">
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex-1">
                          <img 
                            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=200&fit=crop" 
                            alt="The Essential Capsule" 
                            className="w-full h-40 object-cover rounded-lg mb-3"
                          />
                          <h3 className="font-normal text-sm text-gray-900 mb-1">The Essential Capsule</h3>
                          <button className="text-gray-400 hover:text-gray-600">
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex-1">
                          <img 
                            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop" 
                            alt="Shop All Gifts" 
                            className="w-full h-40 object-cover rounded-lg mb-3"
                          />
                          <h3 className="font-normal text-sm text-gray-900 mb-1">Shop All Gifts</h3>
                          <button className="text-gray-400 hover:text-gray-600">
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 mt-6 pt-4">
                      <p className="text-center text-xs text-gray-600">
                        Thoughtful, California-made gifts, crafted with care and shipped within 48 hours.{' '}
                        <button className="underline hover:no-underline">Shop Now</button>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Gifts Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('gifts')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-gray-900 hover:text-gray-600 font-normal text-sm">
                  Gifts
                  <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                
                {activeDropdown === 'gifts' && (
                  <div className="fixed left-1/2 top-24 transform -translate-x-1/2 bg-white dark:bg-neutral-900 shadow-lg rounded-lg border border-gray-200 p-6 w-[700px] z-50">
                    <div className="flex justify-between">
                      {/* Left sidebar */}
                      <div className="w-1/4 pr-6">
                        <h3 className="font-normal text-sm text-gray-900 mb-4">Best Sellers</h3>
                        <ul className="space-y-3">
                          <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Olive Oil</a></li>
                          <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Vinegar</a></li>
                          <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Honey</a></li>
                          <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Kitchen</a></li>
                          <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 font-medium">Shop All</a></li>
                        </ul>
                        <div className="mt-8">
                          <p className="text-xs text-gray-500 mb-2">Looking for the perfect gift?</p>
                          <button className="text-xs text-gray-900 underline hover:no-underline">
                            Visit The Gift Shop
                          </button>
                        </div>
                      </div>
                      
                      {/* Right side - Product showcases */}
                      <div className="w-3/4 flex space-x-4">
                        <div className="flex-1">
                          <img 
                            src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=180&fit=crop" 
                            alt="The Artist Capsule" 
                            className="w-full h-36 object-cover rounded-lg mb-3"
                          />
                          <h3 className="font-normal text-sm text-gray-900 mb-1">The Artist Capsule</h3>
                          <button className="text-gray-400 hover:text-gray-600">
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex-1">
                          <img 
                            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=180&fit=crop" 
                            alt="The Everyday Set" 
                            className="w-full h-36 object-cover rounded-lg mb-3"
                          />
                          <h3 className="font-normal text-sm text-gray-900 mb-1">The Everyday Set</h3>
                          <button className="text-gray-400 hover:text-gray-600">
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex-1">
                          <img 
                            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=180&fit=crop" 
                            alt="All Best Sellers" 
                            className="w-full h-36 object-cover rounded-lg mb-3"
                          />
                          <h3 className="font-normal text-sm text-gray-900 mb-1">All Best Sellers</h3>
                          <button className="text-gray-400 hover:text-gray-600">
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Explore Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('explore')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center text-gray-900 hover:text-gray-600 font-normal text-sm">
                  Explore
                  <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                
                {activeDropdown === 'explore' && (
                  <div className="fixed left-1/2 top-24 transform -translate-x-1/2 bg-white dark:bg-neutral-900 shadow-lg rounded-lg border border-gray-200 overflow-hidden w-[900px] z-50">
                    <div className="flex h-80">
                      {/* Recipes section */}
                      <div className="w-1/3 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=320&fit=crop" 
                          alt="Recipes" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4">
                          <button className="bg-white px-3 py-1 rounded-full text-sm font-normal flex items-center hover:bg-gray-50">
                            Recipes
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Field Notes Blog section */}
                      <div className="w-1/3 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=320&fit=crop" 
                          alt="Field Notes Blog" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4">
                          <button className="bg-white px-3 py-1 rounded-full text-sm font-normal flex items-center hover:bg-gray-50">
                            Field Notes Blog
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* About Brightland section */}
                      <div className="w-1/3 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=320&fit=crop" 
                          alt="About Brightland" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4">
                          <button className="bg-white px-3 py-1 rounded-full text-sm font-normal flex items-center hover:bg-gray-50">
                            About Brightland
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
            
            {/* Center logo */}
            <div className="flex-1 md:flex-none flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              <a href="#" className="text-lg sm:text-xl font-normal tracking-[0.2em] sm:tracking-[0.25em] text-gray-900 font-serif">
                BRIGHTLAND
              </a>
            </div>
            
            {/* Right navigation - Icons always visible */}
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-5">
              {/* Desktop only text links */}
              <a href="#" className="hidden lg:flex items-center text-gray-900 hover:text-gray-600 text-xs font-normal">
                <MapPin className="h-4 w-4 mr-1" />
                Find in Store
              </a>
              <a href="#" className="hidden lg:block text-gray-900 hover:text-gray-600 text-xs font-normal">
                Our Story
              </a>
              
              {/* Icons - always visible */}
              <button className="text-gray-900 hover:text-gray-600">
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Search</span>
              </button>
              <button className="text-gray-900 hover:text-gray-600">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Account</span>
              </button>
              <button className="text-gray-900 hover:text-gray-600 relative">
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="absolute -top-1.5 -right-1.5 bg-gray-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-normal">
                  0
                </span>
                <span className="sr-only">Cart</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {/* Main navigation links */}
              <button 
                className="w-full flex justify-between items-center py-3 text-gray-900 hover:text-gray-600 font-normal text-base border-b border-gray-100"
                onClick={() => handleDropdownToggle('mobile-shop')}
              >
                Shop
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'mobile-shop' && (
                <div className="pl-4 pb-2 space-y-2">
                  <a href="#" className="block py-2 text-sm text-gray-600">The Duo</a>
                  <a href="#" className="block py-2 text-sm text-gray-600">The Essential Capsule</a>
                  <a href="#" className="block py-2 text-sm text-gray-600">Shop All Gifts</a>
                </div>
              )}
              
              <button 
                className="w-full flex justify-between items-center py-3 text-gray-900 hover:text-gray-600 font-normal text-base border-b border-gray-100"
                onClick={() => handleDropdownToggle('mobile-gifts')}
              >
                Gifts
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'mobile-gifts' && (
                <div className="pl-4 pb-2 space-y-2">
                  <a href="#" className="block py-2 text-sm text-gray-600">Olive Oil</a>
                  <a href="#" className="block py-2 text-sm text-gray-600">Vinegar</a>
                  <a href="#" className="block py-2 text-sm text-gray-600">Honey</a>
                  <a href="#" className="block py-2 text-sm text-gray-600">Kitchen</a>
                </div>
              )}
              
              <button 
                className="w-full flex justify-between items-center py-3 text-gray-900 hover:text-gray-600 font-normal text-base border-b border-gray-100"
                onClick={() => handleDropdownToggle('mobile-explore')}
              >
                Explore
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'mobile-explore' && (
                <div className="pl-4 pb-2 space-y-2">
                  <a href="#" className="block py-2 text-sm text-gray-600">Recipes</a>
                  <a href="#" className="block py-2 text-sm text-gray-600">Field Notes Blog</a>
                  <a href="#" className="block py-2 text-sm text-gray-600">About Brightland</a>
                </div>
              )}
              
              {/* Additional links shown in mobile */}
              <a href="#" className="flex items-center py-3 text-gray-900 hover:text-gray-600 text-sm font-normal border-b border-gray-100">
                <MapPin className="h-4 w-4 mr-2" />
                Find in Store
              </a>
              <a href="#" className="block py-3 text-gray-900 hover:text-gray-600 text-sm font-normal">
                Our Story
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </div>
  );
}