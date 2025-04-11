"use client"
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import Link from 'next/link';
import useSWR from 'swr';
import './slider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function SimilarProducts({ id }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { data, error, isLoading } = useSWR(
    `https://store-api-new.vercel.app/api/related-products/${id}`,
    async (url) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch related products');
      return res.json();
    }
  );

  if (error) return <div className="p-4 text-red-500 rounded bg-red-50">خطأ في تحميل المنتجات ذات الصلة</div>;
  if (isLoading) return <div className="p-4 flex justify-center items-center h-56">
    <div className="loader"></div>
  </div>;
  if (!data || data.length === 0) return null;

  return (
    <div className='similar-products-container px-3 py-5 my-6 bg-gradient-to-r from-gray-50 to-white rounded-lg'>
      <h2 className="text-lg font-bold mb-6 relative">
        <span className="relative z-10">منتجات قد تعجبك</span>
        <span className="absolute bottom-0 left-0 w-1/4 h-1 bg-yellow-400 opacity-70"></span>
      </h2>
      
      {isClient && (
        <Swiper
          style={{
            zIndex: 0,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={2.5}
          breakpoints={{
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 4.5 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return `<span class="${className} similar-product-bullet"></span>`;
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
        >
          {data.map((product) => {
            const randomDiscount = Math.floor(Math.random() * 101) > 50 
              ? Math.floor(Math.random() * 30) + 10 
              : null;

            return (
              <SwiperSlide key={product.relation_id} className="pb-12 pt-2">
                <Link
                  href={`/product/${product.relation_id}`}
                  className="product-card block relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:shadow-md"
                >
                  <div className="product-image-container relative overflow-hidden">
                    <img
                      className="w-full h-40 object-contain transition-transform duration-500 hover:scale-105"
                      src={product.img_url}
                      alt={product.name}
                      loading="lazy"
                    />
                    {randomDiscount && (
                      <div className="discount-badge absolute top-0 left-0 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 text-xs rounded-br-lg font-medium">
                        خصم {randomDiscount}%
                      </div>
                    )}
                    <div className="product-overlay absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="product-info p-3">
                    <h3 className="product-title line-clamp-2 text-sm h-10 mb-2 font-medium">{product.name}</h3>
                    <div className="product-price flex items-center justify-between bg-gray-50 p-2 rounded">
                      <div className="flex items-center">
                        <span className="font-bold">{product.price}</span>
                        <span className="inline-block text-green-600 mx-1 text-sm">د.أ</span>
                      </div>
                      <div className="view-btn opacity-0 transition-opacity duration-300 text-xs text-blue-600">
                        عرض
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
          <div className="navigation-controls mt-4 flex justify-center gap-4">
            <button className="swiper-button-prev-custom navigation-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="swiper-button-next-custom navigation-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </Swiper>
      )}
    </div>
  );
}