import { useEffect } from 'react';
import { Building2, Target, Award, TrendingUp } from 'lucide-react';
import FAQ from '../components/FAQ';

const About = () => {
  useEffect(() => {
    document.title = 'Shopulence | About';
  }, []);
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide exceptional value and quality products to trade partners across the UK, building lasting relationships through reliability and innovation.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every product in our portfolio meets rigorous quality standards. We manufacture and source only the best for our partners and their customers.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We invest in infrastructure, technology, and people to ensure we remain at the forefront of wholesale distribution and manufacturing.'
    }
  ];

  const stats = [
    { number: '40+', label: 'Years in Business' },
    { number: '500+', label: 'Products' },
    { number: '200K', label: 'Sq Ft Warehouse' },
    { number: '1000+', label: 'Trade Partners' }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-gradient-to-r from-[#002D62] to-[#003d82] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Four decades of excellence in wholesale distribution and manufacturing
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#002D62] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#002D62] mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                Shopulence is a leading UK-based wholesaler and manufacturer with over 40 years of industry experience. We operate from a state-of-the-art 200,000 square foot distribution center, serving trade partners across the United Kingdom.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our diverse portfolio includes multiple trusted brands spanning cleaning products, DIY supplies, pet care, health and beauty, and household essentials. We pride ourselves on delivering exceptional value, quality, and service to retailers and trade professionals.
              </p>
              <p className="text-lg text-gray-600">
                With a commitment to innovation and customer satisfaction, we continue to expand our range and improve our services, maintaining our position as a trusted partner in the wholesale industry.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Distribution Center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div key={index} className="bg-[#F3F4F6] p-8 rounded-lg">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#002D62] text-white rounded-full mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#002D62] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#002D62] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Building2 size={64} className="mb-6" />
              <h2 className="text-4xl font-bold mb-4">State-of-the-Art Facilities</h2>
              <p className="text-lg text-gray-200 mb-4">
                Our 200,000 square foot distribution center features advanced inventory management systems, climate-controlled storage, and efficient logistics operations.
              </p>
              <p className="text-lg text-gray-200">
                This infrastructure enables us to maintain optimal stock levels, ensure product quality, and deliver orders promptly to partners across the UK.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-gray-300">Operations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">99.8%</div>
                <div className="text-gray-300">Order Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">Next Day</div>
                <div className="text-gray-300">UK Delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-gray-300">Quality Tested</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default About;
