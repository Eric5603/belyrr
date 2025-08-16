import { Star, Waves, Heart, Leaf, Truck, Gift } from 'lucide-react';

export default function TestimonialBanner() {
  const features = [
    { icon: Leaf, text: "Eco-Conscious Fabrics" },
    { icon: Heart, text: "10K+ 5-Star Reviews" },
    { icon: Truck, text: "Free Worldwide Shipping" },
    { icon: Gift, text: "Luxury Unboxing Experience" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-blue-50 py-20 px-6 overflow-hidden">
      {/* Ocean wave decorative element */}
      <div className="absolute top-0 left-0 w-full h-20 opacity-10">
        <Waves className="w-full h-full text-blue-200" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Testimonial Card (Floating & Elegant) */}
        <div className="bg-white rounded-xl shadow-lg p-10 mb-16 text-center border border-slate-100 transform hover:-translate-y-1 transition-all duration-300">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 mx-1 text-amber-400 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-slate-800 text-2xl md:text-3xl font-light mb-6 leading-relaxed">
            “I’ve never felt more confident in swimwear. The fit is perfection, and the fabric feels like a second skin.”
          </blockquote>
          
          <div className="text-slate-600 font-medium mb-8">— Emma S., Maldives</div>
          
          {/* Press Features (Minimal & Chic) */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-4">As Seen In</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {["VOGUE", "ELLE", "BAZAAR", "OCEAN STYLE"].map((brand) => (
                <span 
                  key={brand}
                  className="text-sm font-medium text-slate-700 hover:text-blue-500 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid (Clean & Structured) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
            >
              <div className="bg-blue-50/50 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5 text-blue-500" />
              </div>
              <span className="text-sm md:text-base text-slate-700 font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}