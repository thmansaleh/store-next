'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper';
import Link from 'next/link';
import useSWR from 'swr';
import StoriesLoading from './StoriesLoading';

// Define the fetcher function
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function StoresSwiper() {
  const { data: categories, error, isLoading } = useSWR(
    'https://store-api-new.vercel.app/api/categories',
    fetcher
  );

  if (isLoading) return <StoriesLoading />;
  if (error) return <div className="text-red-500 px-2">Error loading categories</div>;
  if (!categories || categories.length === 0) return <div className="px-2">No categories found</div>;

  return (
    <>
      <div className='text-lg text-black font-semibold my-4 px-2'>الفئات</div>
      <Swiper
        slidesPerView={4}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode]}
        className="mb-8 px-5"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.category_id}>
            <Link 
              href={`/categories/${category.category_id}`} 
              className='flex flex-col items-center space-y-2 inline-block'
            >
              <div className='ring-2 ring-gray-100 flex overflow-hidden justify-center items-center rounded-full w-14 h-14 object-contain'>
                <img 
                  src={category.image_url} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "/default-category.png"; // fallback image
                  }}
                />
              </div>
              <div className='text-sm font-semibold text-black text-center'>{category.name}</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}