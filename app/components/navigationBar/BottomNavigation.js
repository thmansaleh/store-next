'use client'
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { Home, Search, Bell, User, Settings, LayoutPanelTop, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Bottom Navigation with active state and animations
export default function BottomNavigation() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('home');
  
  // Update active tab based on current route
  // useEffect(() => {
  //   const path = router.pathname;
  //   if (path === '/') setActiveTab('home');
  //   else if (path.includes('/search')) setActiveTab('search');
  //   else if (path.includes('/notifications')) setActiveTab('notifications');
  //   else if (path.includes('/profile')) setActiveTab('profile');
  //   else if (path.includes('/categories')) setActiveTab('categories');
  // }, [router.pathname]);
  
  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: Home, path: '/' },
    { id: 'categories', label: 'الاقسام', icon: LayoutPanelTop, path: '/categories' },
    { id: 'cart', label: 'السلة', icon: ShoppingCart, path: '/cart' },
    { id: 'search', label: 'البحث', icon: Search, path: '/search' },
    { id: 'account', label: 'الحساب', icon: User, path: '/account' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Blur effect background */}
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800" />
      
      {/* Navigation items */}
      <nav className="relative flex items-center justify-around h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                router.push(item.path);
              }}
              className="flex flex-col items-center justify-center w-16 h-full relative outline-none focus:outline-none"
            >
              {/* No top line indicator */}
              
              <div className={`flex flex-col items-center transition-all duration-200  ${isActive ? 'transform -translate-y-1' : ''}`}>
                <Icon 
                  size={20} 
                  className={`mb-1 transition-colors ${isActive ? 'text-emerald-500' : 'text-gray-500 dark:text-gray-400'}`} 
                />
                <span 
                  className={`text-xs transition-colors ${isActive ? 'font-medium text-emerald-500' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  {item.label}
                </span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
}