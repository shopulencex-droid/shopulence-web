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
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition font-semibold">
                  Trade Inquiries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-white transition">
                  Household Cleaning
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-white transition">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-white transition">
                  Kitchen & Cooking
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-white transition">
                  Hair & Grooming
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-white transition">
                  Pet Treats & Toys
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@shopulence.com" className="text-gray-300 hover:text-white transition">
                  info@shopulence.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Shopulence. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/terms-and-conditions" className="hover:text-white transition">
                Terms and Conditions
              </Link>
              <Link to="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/returns-and-refunds" className="hover:text-white transition">
                Returns and Refunds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
