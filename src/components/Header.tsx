import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import logo from '../../assets/shopulence.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-[#002D62] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="mailto:info@shopulence.com" className="flex items-center hover:text-gray-300 transition">
                <Mail size={14} className="mr-1" />
                info@shopulence.com
              </a>
            </div>
            <div className="text-xs">
              Your Global Supply
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center hover-scale">
            <img 
              src={logo} 
              alt="Shopulence" 
              className="h-12 object-contain transition-transform duration-300" 
              style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(100%) saturate(1352%) hue-rotate(195deg) brightness(95%) contrast(101%)' }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#002D62] font-medium transition">
              Home
            </Link>

            <Link to="/brands" className="text-gray-700 hover:text-[#002D62] font-medium transition">
              Brands
            </Link>

            <Link to="/about" className="text-gray-700 hover:text-[#002D62] font-medium transition">
              About
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-[#002D62] font-medium transition">
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-[#002D62] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#003d82] transition"
            >
              Trade Inquiries
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-in-left">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#002D62] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/brands"
                className="text-gray-700 hover:text-[#002D62] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Brands
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#002D62] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#002D62] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-[#002D62] text-white px-6 py-3 rounded-md font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trade Inquiries
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
