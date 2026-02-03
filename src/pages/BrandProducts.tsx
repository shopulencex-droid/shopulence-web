import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { getBrandBySlug } from '../data/brands';

export interface Product {
  title: string;
  ean: string;
  image: string;
}

// Mock products per brand – replace with API/data later
function getMockProducts(brandName: string, brandLogo: string): Product[] {
  return [
    {
      title: `${brandName} – Product 1`,
      ean: '5060123456789',
      image: 'https://images.pexels.com/photos/3985323/pexels-photo-3985323.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: `${brandName} – Product 2`,
      ean: '5060123456790',
      image: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: `${brandName} – Product 3`,
      ean: '5060123456791',
      image: brandLogo
    }
  ];
}

type FormState = { name: string; email: string; phone: string; note: string };

const BrandProducts = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  const brand = brandSlug ? getBrandBySlug(brandSlug) : undefined;
  const products = brand ? getMockProducts(brand.name, brand.logo) : [];

  const [forms, setForms] = useState<Record<number, FormState>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});
  const [error, setError] = useState<Record<number, string>>({});

  useEffect(() => {
    document.title = brand ? `Shopulence | ${brand.name} – Products` : 'Shopulence | Brand Products';
  }, [brand]);

  const getForm = (index: number): FormState =>
    forms[index] ?? { name: '', email: '', phone: '', note: '' };

  const setForm = (index: number, data: FormState) => {
    setForms((prev) => ({ ...prev, [index]: data }));
  };

  const handleSubmit = async (e: React.FormEvent, productIndex: number, product: Product) => {
    e.preventDefault();
    if (!brand) return;
    const form = getForm(productIndex);
    setLoading((prev) => ({ ...prev, [productIndex]: true }));
    setError((prev) => ({ ...prev, [productIndex]: '' }));

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
          productTitle: product.title,
          brandName: brand.name,
          ean: product.ean
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

      setSubmitted((prev) => ({ ...prev, [productIndex]: true }));
      setForm(productIndex, { name: '', email: '', phone: '', note: '' });
      setTimeout(() => setSubmitted((prev) => ({ ...prev, [productIndex]: false })), 5000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'An error occurred. Please try again.';
      setError((prev) => ({ ...prev, [productIndex]: msg }));
    } finally {
      setLoading((prev) => ({ ...prev, [productIndex]: false }));
    }
  };

  const handleChange = (index: number, field: keyof FormState, value: string) => {
    setForm(index, { ...getForm(index), [field]: value });
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

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => {
              const form = getForm(index);
              const isSubmitted = submitted[index];
              const isLoading = loading[index];
              const err = error[index];
              return (
                <article
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start border-b border-gray-200 pb-16 last:border-0 last:pb-0"
                >
                  <div className="flex justify-center md:justify-start bg-gray-50 rounded-xl p-8 md:min-h-[420px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-[380px] w-auto object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Title</p>
                    <h2 className="text-xl font-bold text-[#002D62] mb-4">{product.title}</h2>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">EAN</p>
                    <p className="text-gray-700 mb-6">{product.ean}</p>

                    <p className="text-sm font-semibold text-gray-700 mb-2">Contact for</p>
                    <div className="border-2 border-gray-800 rounded-lg p-6 relative">
                      <span className="absolute top-2 left-3 text-3xl text-gray-400 font-serif leading-none">"</span>
                      <span className="absolute bottom-2 right-3 text-3xl text-gray-400 font-serif leading-none">"</span>
                      {isSubmitted ? (
                        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                          <p className="font-semibold">Thank you for your inquiry.</p>
                          <p className="text-sm">We&apos;ll get back to you shortly.</p>
                        </div>
                      ) : err ? (
                        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-4">
                          <p className="text-sm">{err}</p>
                        </div>
                      ) : null}
                      {!isSubmitted && (
                        <form onSubmit={(e) => handleSubmit(e, index, product)} className="space-y-4 pl-2">
                          <div>
                            <label htmlFor={`name-${index}`} className="block text-xs font-semibold text-gray-600 uppercase mb-1">Name *</label>
                            <input
                              type="text"
                              id={`name-${index}`}
                              required
                              value={form.name}
                              onChange={(e) => handleChange(index, 'name', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor={`email-${index}`} className="block text-xs font-semibold text-gray-600 uppercase mb-1">Email *</label>
                            <input
                              type="email"
                              id={`email-${index}`}
                              required
                              value={form.email}
                              onChange={(e) => handleChange(index, 'email', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none"
                              placeholder="your@email.com"
                            />
                          </div>
                          <div>
                            <label htmlFor={`phone-${index}`} className="block text-xs font-semibold text-gray-600 uppercase mb-1">Phone num</label>
                            <input
                              type="tel"
                              id={`phone-${index}`}
                              value={form.phone}
                              onChange={(e) => handleChange(index, 'phone', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none"
                              placeholder="+44 123 456 7890"
                            />
                          </div>
                          <div>
                            <label htmlFor={`note-${index}`} className="block text-xs font-semibold text-gray-600 uppercase mb-1">Note</label>
                            <textarea
                              id={`note-${index}`}
                              rows={3}
                              value={form.note}
                              onChange={(e) => handleChange(index, 'note', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#002D62] focus:border-transparent outline-none resize-none"
                              placeholder="Your message or requirements..."
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#002D62] text-white px-4 py-3 rounded-md font-semibold hover:bg-[#003d82] transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isLoading ? 'Sending...' : 'Send inquiry'}
                            {!isLoading && <Send size={18} />}
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandProducts;
