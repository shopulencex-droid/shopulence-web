import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Package, Truck, Shield, Users, Sparkles, Wrench, Heart, Star, Award, TrendingUp, ShoppingBag, Building2, Car, Scissors, BookOpen } from 'lucide-react';
import FAQ from '../components/FAQ';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.title = 'Shopulence | Home';
  }, []);

  const slides = [
    {
      title: 'Premium Brands for Trade Partners',
      subtitle: 'Discover our portfolio of trusted household brands',
      image: 'https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=1920',
      cta: 'Explore Brands'
    },
    {
      title: 'Quality Cleaning Solutions',
      subtitle: 'Industry-leading cleaning products for every need',
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1920',
      cta: 'View Range'
    },
    {
      title: '200,000 sq ft Distribution',
      subtitle: 'Fast, reliable delivery across the UK and Europe',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1920',
      cta: 'Learn More'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const categories = [
    {
      icon: Sparkles,
      title: 'Cleaning Products',
      description: 'Professional-grade cleaning solutions for every surface',
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Wrench,
      title: 'DIY & Tools',
      description: 'Quality tools and materials for trade professionals',
      image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Heart,
      title: 'Health & Pet Care',
      description: 'Trusted products for family and pet wellness',
      image: 'https://images.pexels.com/photos/4498220/pexels-photo-4498220.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const features = [
    {
      icon: Package,
      title: 'Wide Product Range',
      description: 'Over 500+ products across multiple categories and brands'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Next-day delivery available across the UK mainland'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'All products manufactured to the highest standards'
    },
    {
      icon: Users,
      title: 'Trade Support',
      description: 'Dedicated account managers for all trade partners'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#002D62]/95 to-[#002D62]/70"></div>
            </div>
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {slide.subtitle}
                </p>
                <Link
                  to="/brands"
                  className="inline-block bg-white text-[#002D62] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002D62] mb-4">Featured Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of products designed for trade professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/90 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <category.icon size={32} className="mb-3" />
                  <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <Link
                    to="/brands"
                    className="inline-flex items-center text-white font-semibold hover:underline"
                  >
                    Explore Range →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#002D62] to-[#003d82] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Brands Portfolio</h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                We partner with leading manufacturers and trusted brands across multiple industries. 
                From household essentials to professional tools, our extensive brand portfolio ensures 
                you have access to quality products your customers trust.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">60+</div>
                  <div className="text-gray-200">Trusted Brands</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2">14</div>
                  <div className="text-gray-200">Categories</div>
                </div>
              </div>
              <Link
                to="/brands"
                className="inline-block bg-white text-[#002D62] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition"
              >
                View All Brands
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Star className="mx-auto mb-3" size={32} />
                <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
                <p className="text-sm text-gray-200">Industry-leading standards</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Award className="mx-auto mb-3" size={32} />
                <h3 className="font-bold text-lg mb-2">Certified Brands</h3>
                <p className="text-sm text-gray-200">Trusted by professionals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <TrendingUp className="mx-auto mb-3" size={32} />
                <h3 className="font-bold text-lg mb-2">Growing Range</h3>
                <p className="text-sm text-gray-200">New brands added regularly</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <ShoppingBag className="mx-auto mb-3" size={32} />
                <h3 className="font-bold text-lg mb-2">Wide Selection</h3>
                <p className="text-sm text-gray-200">500+ products available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002D62] mb-4">Why Partner With Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide exceptional value and support to our trade partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#002D62] text-white rounded-full mb-4">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#002D62] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#002D62] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied trade partners and retailers across the UK and Europe
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#002D62] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#002D62] mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive product categories and find exactly what you need for your business
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Sparkles className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">Household Cleaning</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Wrench className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">Kitchen & Cooking</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Building2 className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">Home Fragrance</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Heart className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">Personal Care</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Shield className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">First Aid</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Car className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">Car Care</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Scissors className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">Hair & Grooming</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Package className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">Pet Treats</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Wrench className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">D.I.Y.</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Sparkles className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">Gardening</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Scissors className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">Haberdashery</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-violet-50 to-violet-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Package className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">Stationery</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <Car className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">Shoe Care</h3>
            </Link>
            <Link
              to="/brands"
              className="group bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
            >
              <BookOpen className="mx-auto mb-3 text-[#002D62] group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-[#002D62] text-sm">Books</h3>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/brands"
              className="inline-block text-[#002D62] font-semibold text-lg hover:underline"
            >
              View All Categories →
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default Home;
