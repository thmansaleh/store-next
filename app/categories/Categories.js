'use client';
import { useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

const Categories = () => {
  const [animateCategory, setAnimateCategory] = useState(null);
  
  // Using SWR to fetch categories data
  const { data: categories, error, isLoading } = useSWR(
    "https://store-api-new.vercel.app/api/categories", 
    fetcher
  );

  const handleCategoryClick = (categoryId) => {
    setAnimateCategory(categoryId);
    setTimeout(() => setAnimateCategory(null), 500);
  };

  // Loading states
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10" dir="rtl" lang="ar">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-2">تصفح الفئات</h1>
                <p className="text-emerald-100 text-lg max-w-lg">
                  استكشف مجموعة متنوعة من المنتجات من خلال الفئات المختلفة
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/4 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
            </div>

            <div className="p-6">
              <div className="animate-pulse grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 mb-4"></div>
                    <div className="h-4 bg-emerald-50 rounded-md w-16"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-10" dir="rtl" lang="ar">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="flex items-center justify-center text-red-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">حدث خطأ</h3>
            <p className="text-gray-600 mb-6">لم نتمكن من تحميل الفئات</p>
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              إعادة المحاولة
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10" dir="rtl" lang="ar">
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
              <h1 className="text-3xl font-bold mb-2">تصفح الفئات</h1>
              <p className="text-emerald-100 text-lg max-w-lg">
                استكشف مجموعة متنوعة من المنتجات من خلال الفئات المختلفة
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/4 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
            </div>
          </div>

          <div className="p-6">
            {/* Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {categories && categories.map((category) => (
                <Link 
                  href={`/categories/${category.slug}`} 
                  key={category.category_id}
                  onClick={() => handleCategoryClick(category.category_id)}
                  className="block"
                >
                  <div 
                    className={`transition-all duration-300 transform hover:-translate-y-2 hover:shadow-md ${
                      animateCategory === category.category_id ? 'scale-102 shadow-md' : ''
                    } flex flex-col items-center`}
                  >
                    <div className="bg-emerald-50 border border-emerald-100 rounded-full w-20 h-20 mb-3 flex items-center justify-center overflow-hidden shadow-sm hover:shadow transition-all duration-300 hover:border-emerald-300">
                      <Image 
                        src={category.image_url} 
                        alt={category.name}
                        width={60}
                        height={60}
                        className="object-contain animate-fade-in"
                        priority={category.category_id <= 6}
                      />
                    </div>
                    <h3 className="text-center font-bold text-gray-800">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* Empty state - show if no categories */}
            {categories && categories.length === 0 && (
              <div className="text-center py-16 px-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">لا توجد فئات</h3>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  لم يتم العثور على أي فئات. يرجى المحاولة مرة أخرى لاحقاً.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;