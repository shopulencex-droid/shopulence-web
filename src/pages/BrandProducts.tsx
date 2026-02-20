import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Send, X } from 'lucide-react';
import { getBrandBySlug } from '../data/brands';
import { productsByBrandSlug } from '../data/exProducts';

export interface Product {
  title: string;
  ean: string;
  image: string;
}

type FormState = { name: string; email: string; phone: string; note: string };

const BrandProducts = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  const brand = brandSlug ? getBrandBySlug(brandSlug) : undefined;
  const exData = brandSlug ? productsByBrandSlug[brandSlug] : undefined;
  const products: Product[] = exData ? exData.products.map(p => ({ title: p.title, ean: p.ean || '', image: p.image })) : [];

  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', note: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = brand ? `Shopulence | ${brand.name} – Products` : 'Shopulence | Brand Products';
  }, [brand]);

  const selectedProduct = selectedProductIndex !== null ? products[selectedProductIndex] : null;

  const openModal = (index: number) => {
    setSelectedProductIndex(index);
    setForm({ name: '', email: '', phone: '', note: '' });
    setSubmitted(false);
    setError('');
  };

  const closeModal = () => {
    setSelectedProductIndex(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand || selectedProductIndex === null) return;

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
          productTitle: selectedProduct!.title,
          brandName: brand.name,
          ean: selectedProduct!.ean
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

  if (!brand) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-[#002D62] mb-4">Brand not found</h1>
          <Link to="/brands" className="text-[#002D62] underline">← Back to Brands</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative h-48 lg:h-64 bg-gradient-to-r from-[#002D62] to-[#003d82] text-white">
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <Link to="/brands" className="text-gray-200 hover:text-white text-sm mb-2 inline-block">← Back to Brands</Link>
            <h1 className="text-3xl md:text-4xl font-bold">{brand.name}</h1>
            <p className="text-gray-200 mt-1">{brand.category}</p>
          </div>
          <img src={brand.logo} alt={brand.name} className="h-20 md:h-24 object-contain opacity-90" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] mb-8 pb-4 border-b-2 border-gray-200">
            Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
            {products.map((product, index) => (
              <button
                key={index}
                type="button"
                onClick={() => openModal(index)}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center min-h-[280px] text-left w-full cursor-pointer"
              >
                <div className="text-sm font-semibold text-gray-500 mb-4 text-center w-full">
                  {product.title}
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full object-contain max-h-32"
                  />
                </div>
                <div className="text-xs text-gray-400 mt-2 w-full text-center">EAN: {product.ean}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal: contact form for selected product */}
      {selectedProductIndex !== null && selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase">Title</p>
                <h2 className="text-lg font-bold text-[#002D62]">{selectedProduct.title}</h2>
                <p className="text-xs text-gray-500 mt-1">EAN: {selectedProduct.ean}</p>
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
                      <label htmlFor="modal-name" className="block text-xs font-semibold text-gray-600 uppercase mb-1">Name *</label>
                      <input
                        type="text"
                        id="modal-name"
                        required
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-email" className="block text-xs font-semibold text-gray-600 uppercase mb-1">Email *</label>
                      <input
                        type="email"
                        id="modal-email"
                        required
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-phone" className="block text-xs font-semibold text-gray-600 uppercase mb-1">Phone num</label>
                      <input
                        type="tel"
                        id="modal-phone"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none"
                        placeholder="+44 123 456 7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-note" className="block text-xs font-semibold text-gray-600 uppercase mb-1">Note</label>
                      <textarea
                        id="modal-note"
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

export default BrandProducts;
