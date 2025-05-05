'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
// import { search } from '@/utils'; // Import the search function from utils
import './style.css'
import { search } from '../utils/search';
const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [animateProduct, setAnimateProduct] = useState(null);
  const searchInputRef = useRef(null);
  
  // Debounce search query to avoid excessive API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch search results using SWR
  const { data: products, error, isLoading } = useSWR(
    debouncedQuery ? ['search', debouncedQuery] : null,
    () => debouncedQuery ? search(debouncedQuery) : [],
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 5000 // Cache results for 5 seconds
    }
  );

  // Focus on search input when component mounts
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleProductClick = (productId) => {
    setAnimateProduct(productId);
    setTimeout(() => setAnimateProduct(null), 500);
  };

  // Handler for clearing search
  const clearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 search-page" dir="rtl" lang="ar">
      <div className="max-w-4xl mx-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-6 px-4">
          <Link href="/" className="flex items-center text-emerald-600 hover:text-emerald-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            العودة للرئيسية
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Page Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">البحث عن المنتجات</h1>
              <p className="text-emerald-100 text-lg max-w-lg">
                يمكنك البحث عن المنتجات بالاسم أو الوصف للعثور على ما تبحث عنه بسهولة
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 opacity-10 decorative-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/4 opacity-10 decorative-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
          </div>

          <div className="p-6">
            {/* Search Bar */}
            <div className="mb-6  relative">
              <div className="relative">
              <div className="absolute inset-y-0 rigt-0 flex items-center pr-3 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  ref={searchInputRef}
                  className="w-full pr-12 pl-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent search-input"
                  placeholder="ابحث عن منتج..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
             
                {searchQuery && (
                  <button 
                    onClick={clearSearch}
                    className="absolute inset-y-0 left-0 ml-3 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Initial state (no search yet) */}
            {!searchQuery && !products && (
              <div className="text-center py-20 px-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 mb-6 empty-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">ابدأ البحث</h3>
                <p className="text-gray-500 mb-4 max-w-md mx-auto">
                  اكتب في مربع البحث للعثور على المنتجات التي تبحث عنها
                </p>
              </div>
            )}

            {/* Loading state */}
            {isLoading && searchQuery && (
              <div className="py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse">
                      <div className="h-48 bg-gray-200"></div>
                      <div className="p-4">
                        <div className="h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
                        <div className="h-4 bg-gray-100 rounded mb-3 w-1/2"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Error state */}
            {error && (
              <div className="text-center py-10 px-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">حدث خطأ</h3>
                <p className="text-gray-500">لم نتمكن من إتمام عملية البحث، يرجى المحاولة مرة أخرى</p>
                <button 
                  onClick={() => setDebouncedQuery(searchQuery)}
                  className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition btn-primary"
                >
                  إعادة المحاولة
                </button>
              </div>
            )}

            {/* No results */}
            {products && products.length === 0 && searchQuery && !isLoading && (
              <div className="text-center py-10 px-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">لا توجد نتائج</h3>
                <p className="text-gray-500">لم نتمكن من العثور على منتجات تطابق "{searchQuery}"</p>
              </div>
            )}

            {/* Products Grid */}
            {products && products.length > 0 && !isLoading && (
              <div className="grid grid-cols-2 md:grid-cols-2 gap-x-2 gap-y-4">
                {products.map((product) => (
                  <Link 
                    href={`/product/${product.product_id}`} 
                    key={product.product_id}
                    onClick={() => handleProductClick(product.product_id)}
                    className={`bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 product-card ${
                      animateProduct === product.product_id ? 'scale-102 shadow-md' : ''
                    }`}
                  >
                    <div className="relative aspect-w-16 aspect-h-9 h-48 bg-gray-100 overflow-hidden">
                      <img 
                        src={product.img_url} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-3">{product.name}</h3>
                      {/* <p className="text-gray-600 mb-3 text-sm">{product.short_description}</p> */}
                      <div className="flex justify-between items-center">
                        {/* <span className="font-bold text-emerald-600 text-lg">{product.price} دؤهم</span>
                        <span className="bg-emerald-50 text-emerald-600 text-xs px-2 py-1 rounded-full">
                          عرض التفاصيل
                        </span> */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;