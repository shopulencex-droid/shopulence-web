import { useState, useEffect } from 'react';

const Brands = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = 'Shopulence | Brands';
  }, []);

  const categories = [
    'All',
    'Household Cleaning',
    'Kitchen & Cooking',
    'Home Fragrance',
    'Personal Care',
    'First Aid',
    'Pet Treats & Toys',
    'D.I.Y.',
    'Gardening & Pest',
    'Car Care',
    'Hair & Grooming',
    'Haberdashery',
    'Stationery & Craft',
    'Shoe Care'
  ];

  const brands = [
    // Household Cleaning
    { name: 'Elbow Grease', category: 'Household Cleaning', logo: '/assets/brand1.png' },
    { name: 'Duzzit', category: 'Household Cleaning', logo: '/assets/brand1.png' },
    { name: 'Swirl', category: 'Household Cleaning', logo: '/assets/brand1.png' },
    { name: 'Oven Brite', category: 'Household Cleaning', logo: '/assets/brand1.png' },
    { name: 'Globe Mill Textiles', category: 'Household Cleaning', logo: '/assets/brand1.png' },
    { name: 'Compu-Clean', category: 'Household Cleaning', logo: '/assets/brand1.png' },
    { name: 'Lime Away', category: 'Household Cleaning', logo: '/assets/brand1.png' },
    { name: 'Bin Brite', category: 'Household Cleaning', logo: '/assets/brand1.png' },
    { name: 'Go Green', category: 'Household Cleaning', logo: '/assets/brand1.png' },
    { name: 'Squij', category: 'Household Cleaning', logo: '/assets/brand1.png' },
    { name: 'Pan Aroma Household', category: 'Household Cleaning', logo: '/assets/brand1.png' },
    
    // Kitchen & Cooking
    { name: 'Seal-A-Pack', category: 'Kitchen & Cooking', logo: '/assets/brand1.png' },
    { name: 'Home Maid', category: 'Kitchen & Cooking', logo: '/assets/brand1.png' },
    { name: 'Queen Of Cakes', category: 'Kitchen & Cooking', logo: '/assets/brand1.png' },
    { name: 'Simply Eggs', category: 'Kitchen & Cooking', logo: '/assets/brand1.png' },
    
    // Home Fragrance
    { name: 'Pan Aroma', category: 'Home Fragrance', logo: '/assets/brand1.png' },
    { name: 'Waxworks', category: 'Home Fragrance', logo: '/assets/brand1.png' },
    
    // Personal Care
    { name: 'Nuage', category: 'Personal Care', logo: '/assets/brand1.png' },
    { name: 'Elysium Spa', category: 'Personal Care', logo: '/assets/brand1.png' },
    { name: 'Cotton Tree', category: 'Personal Care', logo: '/assets/brand1.png' },
    { name: 'Dentiplus', category: 'Personal Care', logo: '/assets/brand1.png' },
    { name: 'Escenti', category: 'Personal Care', logo: '/assets/brand1.png' },
    { name: 'Swift', category: 'Personal Care', logo: '/assets/brand1.png' },
    { name: 'Sand Away', category: 'Personal Care', logo: '/assets/brand1.png' },
    { name: 'Fun Time', category: 'Personal Care', logo: '/assets/brand1.png' },
    { name: 'PestShield Personal Care', category: 'Personal Care', logo: '/assets/brand1.png' },
    
    // First Aid
    { name: 'Masterplast', category: 'First Aid', logo: '/assets/brand1.png' },
    { name: 'Hygienics', category: 'First Aid', logo: '/assets/brand1.png' },
    { name: 'Easy Read', category: 'First Aid', logo: '/assets/brand1.png' },
    
    // Pet Treats & Toys
    { name: 'Munch & Crunch', category: 'Pet Treats & Toys', logo: '/assets/brand1.png' },
    { name: 'Pride & Groom', category: 'Pet Treats & Toys', logo: '/assets/brand1.png' },
    { name: 'Feed Me!', category: 'Pet Treats & Toys', logo: '/assets/brand1.png' },
    
    // D.I.Y.
    { name: '151 Core Group', category: 'D.I.Y.', logo: '/assets/brand1.png' },
    { name: '151 Coatings', category: 'D.I.Y.', logo: '/assets/brand1.png' },
    { name: '151 Adhesives', category: 'D.I.Y.', logo: '/assets/brand1.png' },
    { name: 'Techno Mats', category: 'D.I.Y.', logo: '/assets/brand1.png' },
    { name: 'Love Your Wood', category: 'D.I.Y.', logo: '/assets/brand1.png' },
    { name: '151 Decorators Tools', category: 'D.I.Y.', logo: '/assets/brand1.png' },
    { name: 'Gorilla Filler', category: 'D.I.Y.', logo: '/assets/brand1.png' },
    { name: '151 Professional', category: 'D.I.Y.', logo: '/assets/brand1.png' },
    
    // Gardening & Pest
    { name: 'Chatsworth', category: 'Gardening & Pest', logo: '/assets/brand1.png' },
    { name: 'PestShield', category: 'Gardening & Pest', logo: '/assets/brand1.png' },
    { name: 'Eazifeed', category: 'Gardening & Pest', logo: '/assets/brand1.png' },
    
    // Car Care
    { name: 'Car Pride', category: 'Car Care', logo: '/assets/brand1.png' },
    { name: 'Chupa Chups', category: 'Car Care', logo: '/assets/brand1.png' },
    
    // Hair & Grooming
    { name: 'Rolls Razor', category: 'Hair & Grooming', logo: '/assets/brand1.png' },
    { name: 'Head Funk', category: 'Hair & Grooming', logo: '/assets/brand1.png' },
    { name: 'Enrico Shonalli', category: 'Hair & Grooming', logo: '/assets/brand1.png' },
    { name: 'Jolly Good Grooming', category: 'Hair & Grooming', logo: '/assets/brand1.png' },
    { name: 'Nuage Hair', category: 'Hair & Grooming', logo: '/assets/brand1.png' },
    { name: 'Escenti Kids', category: 'Hair & Grooming', logo: '/assets/brand1.png' },
    { name: 'Fruit Fusion', category: 'Hair & Grooming', logo: '/assets/brand1.png' },
    
    // Haberdashery
    { name: 'Sewing Box', category: 'Haberdashery', logo: '/assets/brand1.png' },
    
    // Stationery & Craft
    { name: 'Chiltern Wove', category: 'Stationery & Craft', logo: '/assets/brand1.png' },
    { name: '151 Artist', category: 'Stationery & Craft', logo: '/assets/brand1.png' },
    
    // Shoe Care
    { name: 'Jump', category: 'Shoe Care', logo: '/assets/brand1.png' },
    { name: 'Out & About', category: 'Shoe Care', logo: '/assets/brand1.png' },
    { name: 'Urban Kicks', category: 'Shoe Care', logo: '/assets/brand1.png' }
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center min-h-[280px]"
              >
                <div className="text-sm font-semibold text-gray-500 mb-4 text-center w-full">
                  {brand.name}®
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-32 object-contain"
                  />
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
