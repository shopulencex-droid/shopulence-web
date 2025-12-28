import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#002D62] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-2">
              Shopulence
            </div>
            <div className="text-sm text-gray-300 mb-4">Your Global Supply</div>
            <p className="text-gray-300 text-sm mb-4">
              Leading UK wholesaler and manufacturer serving retailers and trade partners with premium brands across multiple categories.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-white transition">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Cleaning Products</li>
              <li className="text-gray-300">DIY & Tools</li>
              <li className="text-gray-300">Pet Care</li>
              <li className="text-gray-300">Health & Beauty</li>
              <li className="text-gray-300">Household Essentials</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:hello@shopulence.com" className="text-gray-300 hover:text-white transition">
                  hello@shopulence.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shopulence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
