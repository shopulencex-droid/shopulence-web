import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Menu, X, Mail, Facebook, Instagram, Linkedin, Search } from 'lucide-react';
import logo from '../../assets/shopulence.png';

const navLinkClass = (isActive: boolean) =>
  isActive
    ? 'text-[#002D62] font-semibold'
    : 'text-gray-700 hover:text-[#002D62] font-medium';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (pathname === '/search') setSearchQuery(searchParams.get('q') || '');
  }, [pathname, searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const isHome = pathname === '/';
  const isBrands = pathname.startsWith('/brands');
  const isAbout = pathname === '/about';
  const isContact = pathname === '/contact';

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-[#002D62] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="mailto:admin@shopulence.co.uk" className="flex items-center hover:text-gray-300 transition">
                <Mail size={14} className="mr-1" />
                admin@shopulence.co.uk
              </a>
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-white/20">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                  <Facebook size={16} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                  <Instagram size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                  <Linkedin size={16} />
                </a>
              </div>
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

          <div className="hidden md:flex items-center space-x-6">
            <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50 focus-within:ring-2 focus-within:ring-[#002D62] focus-within:border-transparent">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-40 lg:w-52 px-3 py-2 text-sm bg-transparent border-0 focus:ring-0 outline-none placeholder-gray-500"
                aria-label="Search products"
              />
              <button type="submit" className="p-2 text-gray-600 hover:text-[#002D62] hover:bg-gray-100 transition" aria-label="Submit search">
                <Search size={18} />
              </button>
            </form>
            <Link to="/" className={`transition ${navLinkClass(isHome)}`}>
              Home
            </Link>
            <Link to="/brands" className={`transition ${navLinkClass(isBrands)}`}>
              Brands
            </Link>
            <Link to="/about" className={`transition ${navLinkClass(isAbout)}`}>
              About
            </Link>
            <Link to="/contact" className={`transition ${navLinkClass(isContact)}`}>
              Contact
            </Link>
            <Link
              to="/contact"
              className={`px-6 py-3 rounded-md font-semibold transition ${
                isContact
                  ? 'bg-[#003d82] text-white'
                  : 'bg-[#002D62] text-white hover:bg-[#003d82]'
              }`}
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
            <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50 mb-4">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-3 py-2 text-sm bg-transparent border-0 focus:ring-0 outline-none"
                aria-label="Search products"
              />
              <button type="submit" className="p-2 text-gray-600" aria-label="Submit search">
                <Search size={18} />
              </button>
            </form>
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={navLinkClass(isHome)}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/brands"
                className={navLinkClass(isBrands)}
                onClick={() => setMobileMenuOpen(false)}
              >
                Brands
              </Link>
              <Link
                to="/about"
                className={navLinkClass(isAbout)}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={navLinkClass(isContact)}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className={`px-6 py-3 rounded-md font-semibold text-center ${
                  isContact ? 'bg-[#003d82] text-white' : 'bg-[#002D62] text-white'
                }`}
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
