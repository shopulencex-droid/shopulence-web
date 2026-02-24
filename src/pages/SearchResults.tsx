import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, X } from 'lucide-react';
import { allProductsForSearch } from '../data/exProducts';

type SearchProduct = (typeof allProductsForSearch)[number];
type FormState = { name: string; email: string; phone: string; note: string };

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get('q') || '').trim().toLowerCase();

  const [selectedProduct, setSelectedProduct] = useState<SearchProduct | null>(null);
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', note: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const results = useMemo(() => {
    if (!q) return [];
    return allProductsForSearch.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.brandName.toLowerCase().includes(q) ||
        (p.ean && p.ean.includes(q))
    );
  }, [q]);

  useEffect(() => {
    document.title = q ? `Shopulence | Search: ${q}` : 'Shopulence | Search';
  }, [q]);

  useEffect(() => {
    if (!selectedProduct) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [selectedProduct]);

  const openModal = (product: SearchProduct) => {
    setSelectedProduct(product);
    setForm({ name: '', email: '', phone: '', note: '' });
    setSubmitted(false);
    setError('');
  };

  const closeModal = () => setSelectedProduct(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'product',
          name: form.name,
          email: form.email,
          phone: form.phone,
          note: form.note,
          productTitle: selectedProduct.title,
          brandName: selectedProduct.brandName,
          ean: selectedProduct.ean
        })
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Server error: ${text || 'Invalid response format'}`);
      }
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error occurred' }));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', note: '' });
      setTimeout(() => {
        setSubmitted(false);
        closeModal();
      }, 2500);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'An error occurred. Please try again.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-48 lg:h-64 bg-gradient-to-r from-[#002D62] to-[#003d82] text-white">
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Product search</h1>
            <p className="text-gray-200 mt-1">
              {q ? `Results for "${searchParams.get('q')}"` : 'Enter a search term above'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!q ? (
            <p className="text-gray-600">Use the search bar in the header to find products.</p>
          ) : results.length === 0 ? (
            <p className="text-gray-600">No products found for "{searchParams.get('q')}".</p>
          ) : (
            <>
              <p className="text-gray-600 mb-6">
                {results.length} product{results.length !== 1 ? 's' : ''} found
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {results.map((product, index) => (
                  <button
                    key={`${product.brandSlug}-${product.title}-${index}`}
                    type="button"
                    onClick={() => openModal(product)}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center min-h-[260px] text-left w-full cursor-pointer"
                  >
                    <div className="text-xs font-semibold text-gray-500 mb-2 text-center w-full">
                      {product.brandName}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 mb-4 text-center w-full line-clamp-3">
                      {product.title}
                    </div>
                    <div className="flex-1 flex items-center justify-center w-full min-h-[120px]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-full object-contain max-h-28"
                      />
                    </div>
                    {product.ean && (
                      <div className="text-xs text-gray-400 mt-2 w-full text-center">
                        EAN: {product.ean}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Inquiry modal for selected product */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-modal-title"
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase">Title</p>
                <h2 id="search-modal-title" className="text-lg font-bold text-[#002D62]">{selectedProduct.title}</h2>
                <p className="text-xs text-gray-500 mt-1">EAN: {selectedProduct.ean || '—'}</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <p className="text-sm font-semibold text-gray-700 mb-3">Contact for</p>
              <div className="border-2 border-gray-800 rounded-lg p-6 relative">
                <span className="absolute top-2 left-3 text-3xl text-gray-400 font-serif leading-none">"</span>
                <span className="absolute bottom-2 right-3 text-3xl text-gray-400 font-serif leading-none">"</span>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Thank you for your inquiry.</p>
                    <p className="text-sm">We&apos;ll get back to you shortly.</p>
                  </div>
                ) : error ? (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-4">
                    <p className="text-sm">{error}</p>
                  </div>
                ) : null}
                {!submitted && (
                  <form onSubmit={handleSubmit} className="space-y-4 pl-2">
                    <div>
                      <label htmlFor="search-modal-name" className="block text-xs font-semibold text-gray-600 uppercase mb-1">Name *</label>
                      <input
                        type="text"
                        id="search-modal-name"
                        required
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="search-modal-email" className="block text-xs font-semibold text-gray-600 uppercase mb-1">Email *</label>
                      <input
                        type="email"
                        id="search-modal-email"
                        required
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="search-modal-phone" className="block text-xs font-semibold text-gray-600 uppercase mb-1">Phone num</label>
                      <input
                        type="tel"
                        id="search-modal-phone"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none"
                        placeholder="+44 123 456 7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="search-modal-note" className="block text-xs font-semibold text-gray-600 uppercase mb-1">Note</label>
                      <textarea
                        id="search-modal-note"
                        rows={3}
                        value={form.note}
                        onChange={(e) => handleChange('note', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none resize-none"
                        placeholder="Your message or requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#002D62] text-white px-4 py-3 rounded-md font-semibold hover:bg-[#003d82] transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending...' : 'Send inquiry'}
                      {!loading && <Send size={18} />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
