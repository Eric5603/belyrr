import { ArrowRight } from 'lucide-react';

const Featured = () => {
  const collections = [
    {
      id: 1,
      title: "Summer Essentials",
      subtitle: "Must-have swimwear for the season",
      image: "/public/swimwear1.jpg",
      alt: "Model in vibrant bikini on the beach"
    },
    {
      id: 2,
      title: "Best Sellers",
      subtitle: "Top picks loved by our customers",
      image: "/public/swimwear2.jpg",
      alt: "Trendy one-piece swimsuit by the pool"
    },
    {
      id: 3,
      title: "Mix & Match Sets",
      subtitle: "Create your own style",
      image: "/public/swimwear3.jpg",
      alt: "Colorful swimwear sets on sand"
    },
    {
      id: 4,
      title: "Shop All",
      subtitle: "Explore our full swimwear collection",
      image: "/public/swimwear4.jpg",
      alt: "Assorted swimwear displayed together"
    },
    {
      id: 5,
      title: "Accessories",
      subtitle: "Beach bags, hats & more",
      image: "/public/accessories.jpg",
      alt: "Beach accessories with swimwear"
    }
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-light text-gray-900">Featured Collections</h2>
        <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-full text-sm font-medium text-gray-900 transition-colors duration-200">
          Shop All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {collections.map((collection, index) => (
          <div
            key={collection.id}
            className={`group cursor-pointer ${
              index === 0 || index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 aspect-[4/5] mb-4">
              <img
                src={collection.image}
                alt={collection.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300" />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                {collection.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {collection.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;