import { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { allProductsForSearch } from '../data/exProducts';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const q = (searchParams.get('q') || '').trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return [];
    return allProductsForSearch.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.brandName.toLowerCase().includes(q)
    );
  }, [q]);

  useEffect(() => {
    document.title = q ? `Shopulence | Search: ${q}` : 'Shopulence | Search';
  }, [q]);

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
                  <Link
                    key={`${product.brandSlug}-${product.title}-${index}`}
                    to={`/brands/${product.brandSlug}`}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center min-h-[260px] text-left w-full"
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
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchResults;
