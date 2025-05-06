"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectFade } from 'swiper';
import { ChevronLeft, ChevronRight, ZoomIn, Heart } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function EnhancedSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [favorited, setFavorited] = useState([false, false, false]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const images = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/store-6d415.firebasestorage.app/o/products%2F1743789819976%2F1000200857.jpg?alt=media&token=50ffefde-24dc-4ecd-946a-a694e9d42b65',
      title: 'Product One',
      description: 'High-quality premium item'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/store-6d415.firebasestorage.app/o/products%2F1743790508956%2F1000200868.jpg?alt=media&token=8b8fa7d5-d8e7-4bbc-8208-95a0c49345e2',
      title: 'Product Two',
      description: 'Exclusive limited edition'
    },
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/store-6d415.firebasestorage.app/o/products%2F1743790205450%2F1000200861.jpg?alt=media&token=2292f196-8113-4ba3-a71b-ba57ba175525',
      title: 'Product Three',
      description: 'Best-selling item'
    },
  ];

  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  const toggleFavorite = (index) => {
    const newFavorites = [...favorited];
    newFavorites[index] = !newFavorites[index];
    setFavorited(newFavorites);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      {/* Swiper Component */}
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{
          "--swiper-pagination-bullet-border-radius": "4px",
          "--swiper-pagination-bullet-width": "30px",
          "--swiper-pagination-bullet-height": "4px",
          "--swiper-pagination-color": "#3B82F6",
          "--swiper-pagination-bullet-inactive-color": "#E5E7EB",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-theme-color": "#3B82F6"
        }}
        modules={[Pagination, Autoplay, Navigation, EffectFade]}
        spaceBetween={20}
        rewind={true}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="py-8"
      >
        {images.map((item, i) => (
          <SwiperSlide key={i} className="h-80 group">
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-white">
              <div className="absolute top-0 left-0 z-10 w-full p-3 flex justify-between items-center">
                <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">New</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(i);
                  }}
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <Heart 
                    size={16} 
                    className={favorited[i] ? "text-red-500 fill-red-500" : "text-gray-400"} 
                  />
                </button>
              </div>
              
              <img 
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105" 
                src={item.img} 
                alt={item.title} 
              />
              
              <div className="p-4">
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
              
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(item.img);
                  }}
                  className="bg-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  <ZoomIn size={18} className="text-blue-600" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons */}
      <div className="hidden md:block">
        <button className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
          <ChevronLeft size={20} className="text-gray-800" />
        </button>
        <button className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
          <ChevronRight size={20} className="text-gray-800" />
        </button>
      </div>
      
      {/* Slide Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 rounded-full transition-all duration-300 ${
              idx === activeIndex ? "w-8 bg-blue-500" : "w-4 bg-gray-300"
            }`}
          />
        ))}
      </div>
      
      {/* Image Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={() => setModalOpen(false)}>
          <div className="relative bg-white p-2 rounded-lg max-w-4xl max-h-screen overflow-auto" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md z-10"
              onClick={() => setModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={modalImage} 
              alt="Enlarged view" 
              className="max-h-[80vh] w-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}