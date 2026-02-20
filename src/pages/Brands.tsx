import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories, brands } from '../data/brands';
import { exBrandSlugs } from '../data/exProducts';

const LARGE_LOGO_BRANDS = [
  'Seal-A-Pack', 'Home Maid', 'PestShield', 'Always', 'Oral b', 'BEAUTY OF JOSEON',
  'Kisocare', 'KOSE', 'medicube', 'numbuzin', 'Purito SEOUL', 'SKIN1004',
  'TIRTIR', 'Masterplast', 'Hygienics', 'Eazifeed', 'Chatsworth',
  'L\'Oréal', 'DARIYA', 'Miche Bloomin'
];

const Brands = () => {
  useEffect(() => {
    document.title = 'Shopulence | Brands';
  }, []);

  // Only show brands that have products in the ex folder; group by category
  const brandsInEx = brands.filter(brand => exBrandSlugs.includes(brand.slug));
  const brandsByCategory = categories.map(category => ({
    category,
    brands: brandsInEx.filter(brand => brand.category === category)
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
                  <Link
                    key={index}
                    to={`/brands/${brand.slug}`}
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
                          LARGE_LOGO_BRANDS.includes(brand.name) ? 'max-h-48' : 'max-h-32'
                        }`}
                      />
                    </div>
                  </Link>
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
