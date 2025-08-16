import { ArrowRight, ChevronRight, MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-500 to-blue-600 py-16 px-4 sm:px-6 lg:px-8 rounded-xl overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Dive Into Summer With Our New Collection
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover swimwear designed for comfort, style, and performance. 
            Limited time offer - get 20% off your first purchase!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/shop" 
              className="flex items-center justify-center px-8 py-3 text-lg font-medium text-blue-600 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Shop Now <MoveRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="/collection" 
              className="flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              View Collection <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-6">
            <div className="flex items-center text-sm text-blue-100">
              <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free shipping on orders over $50
            </div>
            <div className="flex items-center text-sm text-blue-100">
              <svg className="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Eco-friendly materials
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}