import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Brands = () => {
  useEffect(() => {
    document.title = 'Shopulence | Brands';
  }, []);

  const categories = [
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
    'Shoe Care',
    'Books'
  ];

  const brands = [
    // Household Cleaning
    { name: 'Elbow Grease', category: 'Household Cleaning', logo: '/assets/leftovers/35.png' },
    { name: 'Duzzit', category: 'Household Cleaning', logo: '/assets/leftovers/36.png' },
    { name: 'Swirl', category: 'Household Cleaning', logo: '/assets/leftovers/37.png' },
    { name: 'Oven Brite', category: 'Household Cleaning', logo: '/assets/leftovers/38.png' },
    { name: 'Globe Mill Textiles', category: 'Household Cleaning', logo: '/assets/leftovers/39.png' },
    { name: 'Compu-Clean', category: 'Household Cleaning', logo: '/assets/leftovers/40.png' },
    { name: 'Lime Away', category: 'Household Cleaning', logo: '/assets/leftovers/41.png' },
    { name: 'Bin Brite', category: 'Household Cleaning', logo: '/assets/leftovers/42.png' },
    { name: 'Go Green', category: 'Household Cleaning', logo: '/assets/leftovers/43.png' },
    { name: 'Squij', category: 'Household Cleaning', logo: '/assets/leftovers/44.png' },
    { name: 'Pan Aroma Household', category: 'Household Cleaning', logo: '/assets/leftovers/45.png' },
    
    // Kitchen & Cooking
    { name: 'Seal-A-Pack', category: 'Kitchen & Cooking', logo: '/assets/leftovers/46.png' },
    { name: 'Home Maid', category: 'Kitchen & Cooking', logo: '/assets/leftovers/48.png' },
    { name: 'Queen Of Cakes', category: 'Kitchen & Cooking', logo: '/assets/leftovers/47.png' },
    { name: 'Simply Eggs', category: 'Kitchen & Cooking', logo: '/assets/leftovers/49.png' },
    
    // Home Fragrance
    { name: 'Pan Aroma', category: 'Home Fragrance', logo: '/assets/leftovers/45.png' },
    { name: 'Waxworks', category: 'Home Fragrance', logo: '/assets/leftovers/50.png' },
    
    // Personal Care
    { name: 'Nuage', category: 'Personal Care', logo: '/assets/leftovers/51.png' },
    { name: 'Elysium Spa', category: 'Personal Care', logo: '/assets/leftovers/52.png' },
    { name: 'Cotton Tree', category: 'Personal Care', logo: '/assets/leftovers/53.png' },
    { name: 'Dentiplus', category: 'Personal Care', logo: '/assets/leftovers/54.png' },
    { name: 'Escenti', category: 'Personal Care', logo: '/assets/leftovers/55.png' },
    { name: 'Swift', category: 'Personal Care', logo: '/assets/leftovers/56.png' },
    { name: 'Sand Away', category: 'Personal Care', logo: '/assets/leftovers/57.png' },
    { name: 'Fun Time', category: 'Personal Care', logo: '/assets/leftovers/58.png' },
    { name: 'PestShield Personal Care', category: 'Personal Care', logo: '/assets/leftovers/59.png' },
    
    // First Aid
    { name: 'Masterplast', category: 'First Aid', logo: '/assets/leftovers/60.png' },
    { name: 'Hygienics', category: 'First Aid', logo: '/assets/leftovers/61.png' },
    { name: 'Easy Read', category: 'First Aid', logo: '/assets/leftovers/62.png' },
    
    // Pet Treats & Toys
    { name: 'Munch & Crunch', category: 'Pet Treats & Toys', logo: '/assets/leftovers/64.png' },
    { name: 'Pride & Groom', category: 'Pet Treats & Toys', logo: '/assets/leftovers/63.png' },
    { name: 'Feed Me!', category: 'Pet Treats & Toys', logo: '/assets/leftovers/65.png' },
    
    
    
    // Gardening & Pest
    { name: 'Chatsworth', category: 'Gardening & Pest', logo: '/assets/leftovers/66.png' },
    { name: 'PestShield', category: 'Gardening & Pest', logo: '/assets/leftovers/59.png' },
    { name: 'Eazifeed', category: 'Gardening & Pest', logo: '/assets/leftovers/67.png' },
    
    // Car Care
    { name: 'Car Pride', category: 'Car Care', logo: '/assets/leftovers/81.png' },
    { name: 'Chupa Chups', category: 'Car Care', logo: '/assets/leftovers/82.png' },
    
    // Hair & Grooming
    { name: 'Rolls Razor', category: 'Hair & Grooming', logo: '/assets/leftovers/68.png' },
    { name: 'Head Funk', category: 'Hair & Grooming', logo: '/assets/leftovers/69.png' },
    { name: 'Enrico Shonalli', category: 'Hair & Grooming', logo: '/assets/leftovers/70.png' },
    { name: 'Jolly Good Grooming', category: 'Hair & Grooming', logo: '/assets/leftovers/71.png' },
    { name: 'Nuage Hair', category: 'Hair & Grooming', logo: '/assets/leftovers/73.png' },
    { name: 'Escenti Kids', category: 'Hair & Grooming', logo: '/assets/leftovers/72.png' },
    { name: 'Fruit Fusion', category: 'Hair & Grooming', logo: '/assets/leftovers/75.png' },
    
    // Haberdashery
    { name: 'Sewing Box', category: 'Haberdashery', logo: '/assets/leftovers/74.png' },
    
    // Stationery & Craft
    { name: 'Chiltern Wove', category: 'Stationery & Craft', logo: '/assets/leftovers/76.png' },
    
    // Shoe Care
    { name: 'Jump', category: 'Shoe Care', logo: '/assets/leftovers/77.png' },
    { name: 'Out & About', category: 'Shoe Care', logo: '/assets/leftovers/78.png' },
    { name: 'Urban Kicks', category: 'Shoe Care', logo: '/assets/leftovers/79.png' },
    
    // Hair & Grooming (from otherbrands)
    { name: 'VO5', category: 'Hair & Grooming', logo: '/assets/otherbrands/VO5.png' },
    { name: 'L\'Oréal', category: 'Hair & Grooming', logo: '/assets/otherbrands/L\'Oréal.png' },
    { name: 'milbon', category: 'Hair & Grooming', logo: '/assets/otherbrands/milbon.png' },
    { name: 'DARIYA', category: 'Hair & Grooming', logo: '/assets/otherbrands/DARIYA.png' },
    { name: 'Miche Bloomin', category: 'Hair & Grooming', logo: '/assets/otherbrands/Miche Bloomin.png' },
    
    // Personal Care (from otherbrands)
    { name: 'Always', category: 'Personal Care', logo: '/assets/otherbrands/Always.png' },
    { name: 'Nivea', category: 'Personal Care', logo: '/assets/otherbrands/Nivea.png' },
    { name: 'Oral b', category: 'Personal Care', logo: '/assets/otherbrands/Oral b.png' },
    { name: 'APAGARD', category: 'Personal Care', logo: '/assets/otherbrands/APAGARD.png' },
    { name: 'Anua', category: 'Personal Care', logo: '/assets/otherbrands/Anua.png' },
    { name: 'AXIS-Y', category: 'Personal Care', logo: '/assets/otherbrands/AXIS-Y.png' },
    { name: 'BEAUTY OF JOSEON', category: 'Personal Care', logo: '/assets/otherbrands/BEAUTY OF JOSEON.png' },
    { name: 'COSRX', category: 'Personal Care', logo: '/assets/otherbrands/COSRX.png' },
    { name: 'haruharu wonder', category: 'Personal Care', logo: '/assets/otherbrands/haruharu wonder.png' },
    { name: 'INTO YOU', category: 'Personal Care', logo: '/assets/otherbrands/INTO YOU.png' },
    { name: 'JOOCYEE', category: 'Personal Care', logo: '/assets/otherbrands/JOOCYEE.png' },
    { name: 'JUDYDOLL', category: 'Personal Care', logo: '/assets/otherbrands/JUDYDOLL.png' },
    { name: 'Kisocare', category: 'Personal Care', logo: '/assets/otherbrands/Kisocare.png' },
    { name: 'KOSE', category: 'Personal Care', logo: '/assets/otherbrands/KOSE.png' },
    { name: 'medicube', category: 'Personal Care', logo: '/assets/otherbrands/medicube.png' },
    { name: 'mixsoon', category: 'Personal Care', logo: '/assets/otherbrands/mixsoon.png' },
    { name: 'numbuzin', category: 'Personal Care', logo: '/assets/otherbrands/numbuzin.png' },
    { name: 'Purito SEOUL', category: 'Personal Care', logo: '/assets/otherbrands/Purito SEOUL.png' },
    { name: 'SKIN1004', category: 'Personal Care', logo: '/assets/otherbrands/SKIN1004.png' },
    { name: 'TIRTIR', category: 'Personal Care', logo: '/assets/otherbrands/TIRTIR.png' },
    { name: 'TOCOBO', category: 'Personal Care', logo: '/assets/otherbrands/TOCOBO.png' },
    
    // Kitchen & Cooking (from otherbrands)
    { name: 'Nespresso', category: 'Kitchen & Cooking', logo: '/assets/otherbrands/Nespresso.png' },
    { name: 'Nestle', category: 'Kitchen & Cooking', logo: '/assets/otherbrands/Nestle.png' },
    { name: 'Tassimo', category: 'Kitchen & Cooking', logo: '/assets/otherbrands/Tassimo.png' },
    
    // Books (from bookswholesaler)
    { name: 'Pan Macmillan', category: 'Books', logo: '/assets/bookswholesaler/1.png' },
    { name: 'Gardners Books', category: 'Books', logo: '/assets/bookswholesaler/2.png' },
    { name: 'Penguin Random House (PRH)', category: 'Books', logo: '/assets/bookswholesaler/3.png' },
    { name: 'Ingram Content Group', category: 'Books', logo: '/assets/bookswholesaler/4.png' },
    { name: 'Hachet Livre UK', category: 'Books', logo: '/assets/bookswholesaler/5.png' }
  ];

  // Group brands by category
  const brandsByCategory = categories.map(category => ({
    category,
    brands: brands.filter(brand => brand.category === category)
  })).filter(group => group.brands.length > 0);

  return (
    <div className="min-h-screen">
      <section className="relative h-80 lg:h-[450px] xl:h-[550px] 2xl:h-[650px] bg-gradient-to-r from-[#002D62] to-[#003d82] text-white">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {brandsByCategory.map(({ category, brands }, categoryIndex) => (
            <div key={category} className={categoryIndex > 0 ? 'mt-20' : ''}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] mb-8 pb-4 border-b-2 border-gray-200">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
                {brands.map((brand, index) => (
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
                        className={`max-w-full object-contain ${
                          ['Seal-A-Pack', 'Home Maid', 'Nuage', 'Cotton Tree', 'Dentiplus', 'Escenti', 
                           'PestShield', 'PestShield Personal Care', 'Always', 'Oral b', 'APAGARD', 
                           'Anua', 'AXIS-Y', 'BEAUTY OF JOSEON', 'COSRX', 'haruharu wonder', 
                           'INTO YOU', 'JOOCYEE', 'JUDYDOLL', 'Kisocare', 'KOSE', 'medicube', 
                           'numbuzin', 'Purito SEOUL', 'SKIN1004', 'TIRTIR', 'Masterplast', 
                           'Hygienics', 'Eazifeed', 'Chatsworth', 'Nuage Hair', 'L\'Oréal', 
                           'DARIYA', 'Miche Bloomin'].includes(brand.name)
                            ? 'max-h-48' 
                            : 'max-h-32'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#002D62] to-[#003d82] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Interested in Stocking Our Brands?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get in touch with our trade team to discuss partnership opportunities and pricing
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-white text-[#002D62] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition"
            >
              Contact Trade Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
