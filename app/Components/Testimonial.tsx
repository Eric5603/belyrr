"use client";
import { ChevronLeft, ChevronRight, Star, Users, Leaf, Package, Heart, Waves } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialComponent() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "Absolutely love my new bikini! The fit is perfect and the colors are so vibrant. Ready for every beach day!",
      author: "Samantha P.",
      location: "Miami, FL",
      image: "/images/testimonial-1.jpg", // Replace with your actual image paths
      rating: 5
    },
    {
      id: 2,
      text: "The quality of the swimwear is amazing. I feel confident and comfortable all day at the pool.",
      author: "Jessica M.",
      location: "San Diego, CA",
      image: "/images/testimonial-2.jpg",
      rating: 5
    },
    {
      id: 3,
      text: "Stylish, comfortable, and eco-friendly! My go-to for every summer trip.",
      author: "Alex R.",
      location: "Honolulu, HI",
      image: "/images/testimonial-3.jpg",
      rating: 4
    }
  ];

  const features = [
    { icon: Leaf, text: "Eco-Friendly Fabrics" },
    { icon: Heart, text: "Loved By Beachgoers" },
    { icon: Package, text: "Gift-Ready Packaging" },
    { icon: Users, text: "100K+ Happy Customers" },
    { icon: Waves, text: "Quick-Dry Technology" },
    { icon: Leaf, text: "Sustainable Materials" },
    { icon: Package, text: "Fast Shipping" },
    { icon: Heart, text: "Summer-Ready Styles" },
    { icon: Leaf, text: "UPF 50+ Protection" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full bg-gradient-to-b from-cyan-50 to-white px-4 py-16 relative overflow-hidden">
      {/* Water wave decorative element */}
      <div className="absolute top-0 left-0 w-full h-20 bg-wave-pattern bg-repeat-x opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-cyan-900 mb-2">Real Swimmers, Real Stories</h2>
          <p className="text-cyan-700 max-w-lg mx-auto">See how our swimwear performs in real beach conditions</p>
        </div>

        {/* Main testimonial section */}
        <div className="bg-white rounded-xl shadow-lg p-0 mb-12 relative overflow-hidden flex flex-col md:flex-row">
          {/* Customer image */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 z-10"></div>
            <img 
              src={testimonials[currentTestimonial].image} 
              alt={testimonials[currentTestimonial].author + " wearing our swimwear"}
              className="w-full h-full object-cover object-center"
            />
            {/* Watermark */}
            <div className="absolute bottom-4 left-4 z-20 text-white text-xs font-light">
              Photo of {testimonials[currentTestimonial].author} wearing our swimwear
            </div>
          </div>
          
          {/* Testimonial content */}
          <div className="w-full md:w-1/2 p-8 md:p-10">
            {/* Star rating */}
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            
            {/* Testimonial text */}
            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light italic">
                "{testimonials[currentTestimonial].text}"
              </p>
            </div>
            
            {/* Author */}
            <div className="border-t border-cyan-100 pt-6">
              <p className="text-cyan-800 font-medium">
                {testimonials[currentTestimonial].author}
              </p>
              <p className="text-cyan-600 text-sm">
                {testimonials[currentTestimonial].location}
              </p>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between items-center mt-10">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white border border-cyan-200 flex items-center justify-center hover:bg-cyan-50 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 text-cyan-700" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-cyan-600' : 'bg-cyan-200'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white border border-cyan-200 flex items-center justify-center hover:bg-cyan-50 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5 text-cyan-700" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Features marquee */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cyan-50 to-transparent z-20"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cyan-50 to-transparent z-20"></div>
          
          <div className="overflow-hidden py-4">
            <div className="flex animate-scroll whitespace-nowrap">
              {[...features, ...features].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 mx-4 px-4 py-2.5 rounded-full bg-white border border-cyan-100 shadow-sm flex-shrink-0"
                >
                  <feature.icon className="w-4 h-4 text-cyan-600" />
                  <span className="text-sm text-cyan-800 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        .bg-wave-pattern {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%2303a9f4'%3E%3C/path%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%2303a9f4'%3E%3C/path%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%2303a9f4'%3E%3C/path%3E%3C/svg%3E");
          background-size: 1200px 100px;
        }
      `}</style>
    </div>
  );
}