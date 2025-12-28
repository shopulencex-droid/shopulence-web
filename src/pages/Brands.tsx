import { useState } from 'react';
import { ArrowRight, Sparkles, Wrench, Heart, Home, Dog, Leaf } from 'lucide-react';

const Brands = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cleaning', 'DIY & Tools', 'Pet Care', 'Health', 'Household'];

  const brands = [
    {
      name: 'Elbow Grease',
      category: 'Cleaning',
      tagline: 'Powerful degreasing solutions',
      description: 'Industry-leading cleaning products trusted by professionals',
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Sparkles,
      products: '45+ Products'
    },
    {
      name: 'Duzzit',
      category: 'Cleaning',
      tagline: 'Complete home cleaning range',
      description: 'Comprehensive cleaning solutions for every surface',
      image: 'https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Sparkles,
      products: '60+ Products'
    },
    {
      name: 'Pro-Kleen',
      category: 'Cleaning',
      tagline: 'Professional grade cleaning',
      description: 'Commercial-strength products for demanding applications',
      image: 'https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Sparkles,
      products: '35+ Products'
    },
    {
      name: 'DIY Pro',
      category: 'DIY & Tools',
      tagline: 'Tools for every trade',
      description: 'Quality tools and materials for professionals',
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Wrench,
      products: '80+ Products'
    },
    {
      name: 'FixIt Master',
      category: 'DIY & Tools',
      tagline: 'Professional repair solutions',
      description: 'Everything you need for home and commercial repairs',
      image: 'https://images.pexels.com/photos/5691641/pexels-photo-5691641.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Wrench,
      products: '50+ Products'
    },
    {
      name: 'PetCare Plus',
      category: 'Pet Care',
      tagline: 'Complete pet wellness',
      description: 'Premium products for happy, healthy pets',
      image: 'https://images.pexels.com/photos/4498220/pexels-photo-4498220.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Dog,
      products: '75+ Products'
    },
    {
      name: 'VitaHealth',
      category: 'Health',
      tagline: 'Family health essentials',
      description: 'Trusted health and wellness products',
      image: 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Heart,
      products: '40+ Products'
    },
    {
      name: 'HomeEssentials',
      category: 'Household',
      tagline: 'Everyday household needs',
      description: 'Quality products for modern living',
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Home,
      products: '90+ Products'
    },
    {
      name: 'EcoClean',
      category: 'Cleaning',
      tagline: 'Sustainable cleaning solutions',
      description: 'Environmentally friendly products that work',
      image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Leaf,
      products: '30+ Products'
    }
  ];

  const filteredBrands = selectedCategory === 'All'
    ? brands
    : brands.filter(brand => brand.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section className="relative h-80 bg-gradient-to-r from-[#002D62] to-[#003d82] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Brands</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              A diverse portfolio of trusted brands serving every market segment
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-200 sticky top-[140px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-[#002D62] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#002D62]">
                    {brand.products}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <brand.icon size={32} className="text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-[#002D62]">{brand.name}</h3>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {brand.category}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-600 mb-3">{brand.tagline}</p>
                  <p className="text-gray-600 mb-6">{brand.description}</p>
                  <button className="group/btn w-full bg-[#002D62] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#003d82] transition flex items-center justify-center">
                    View Range
                    <ArrowRight
                      size={18}
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No brands found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#002D62] to-[#003d82] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Interested in Stocking Our Brands?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get in touch with our trade team to discuss partnership opportunities and pricing
            </p>
            <button className="bg-white text-[#002D62] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition">
              Contact Trade Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
