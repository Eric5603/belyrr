import { ArrowRight } from 'lucide-react';

const LuxurySwimwearCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Signature",
      subtitle: "Iconic pieces",
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      alt: "Signature swimwear collection"
    },
    {
      id: 2,
      title: "Minimalist",
      subtitle: "Clean lines",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      alt: "Minimalist black swimsuit"
    },
    {
      id: 3,
      title: "Bold",
      subtitle: "Statement pieces",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      alt: "Bold colorful bikinis"
    },
    {
      id: 4,
      title: "Resort",
      subtitle: "Vacation ready",
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      alt: "Resort wear collection"
    },
    {
      id: 5,
      title: "Accessories",
      subtitle: "Complete the look",
      image: "https://images.unsplash.com/photo-1595479881537-5a8d43b052ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      alt: "Luxury beach accessories"
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Header Section */}
      <div className="px-6 lg:px-12 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
            <div>
              <h1 className="text-7xl lg:text-8xl font-extralight text-neutral-900 mb-4">
                Summer
              </h1>
              <p className="text-xl text-neutral-600 max-w-md">
                Explore our curated selection of luxury swimwear designed for the modern woman.
              </p>
            </div>
            <button className="mt-8 lg:mt-0 flex items-center gap-2 text-neutral-900 border-b-2 border-neutral-900 pb-1 hover:border-neutral-600 transition-colors">
              <span className="text-sm tracking-wider uppercase font-medium">Shop All</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Dynamic Asymmetric Grid */}
          <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[80vh]">
            
            {/* Large hero item - spans 7 columns, 4 rows */}
            <div className="col-span-12 lg:col-span-7 row-span-4 group cursor-pointer relative overflow-hidden">
              <img
                src={collections[0].image}
                alt={collections[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-4xl font-light mb-2">{collections[0].title}</h2>
                <p className="text-lg opacity-90 mb-4">{collections[0].subtitle}</p>
                <button className="bg-white text-black px-6 py-2 text-sm font-medium hover:bg-neutral-100 transition-colors">
                  Explore
                </button>
              </div>
            </div>

            {/* Tall right column - spans 5 columns, 4 rows */}
            <div className="col-span-12 lg:col-span-5 row-span-4 group cursor-pointer relative overflow-hidden">
              <img
                src={collections[1].image}
                alt={collections[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-light mb-1">{collections[1].title}</h3>
                <p className="text-sm opacity-90">{collections[1].subtitle}</p>
              </div>
            </div>

            {/* Bottom row - three equal items */}
            <div className="col-span-12 lg:col-span-4 row-span-2 group cursor-pointer relative overflow-hidden">
              <img
                src={collections[2].image}
                alt={collections[2].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-light mb-1">{collections[2].title}</h3>
                <p className="text-sm opacity-90">{collections[2].subtitle}</p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 row-span-2 group cursor-pointer relative overflow-hidden">
              <img
                src={collections[3].image}
                alt={collections[3].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-light mb-1">{collections[3].title}</h3>
                <p className="text-sm opacity-90">{collections[3].subtitle}</p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 row-span-2 group cursor-pointer relative overflow-hidden">
              <img
                src={collections[4].image}
                alt={collections[4].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-light mb-1">{collections[4].title}</h3>
                <p className="text-sm opacity-90">{collections[4].subtitle}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-6 lg:px-12 py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-light text-neutral-900 mb-6">
            Crafted for Excellence
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
            Each piece is meticulously designed using premium fabrics and sustainable practices, 
            ensuring both luxury and responsibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-neutral-900 text-white px-8 py-4 hover:bg-neutral-800 transition-colors">
              Book Consultation
            </button>
            <button className="border border-neutral-300 px-8 py-4 hover:border-neutral-900 transition-colors">
              Size Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxurySwimwearCollections;