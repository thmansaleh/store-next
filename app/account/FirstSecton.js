"use client"
import { useSelector } from "react-redux";
import Link from "next/link";
import { Heart, Clock, CreditCard, Ticket } from "lucide-react";

export default function FirstSection() {
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  const menuItems = [
    {
      name: 'المفضلة',
      icon: <Heart className="text-rose-500" size={24} />,
      count: wishlistCount,
      route: "./account/wishlist"
    },
    {
      name: 'شاهدته مؤخرا',
      icon: <Clock className="text-indigo-500" size={24} />,
      count: 0,
      route: './account/orders'
    },
    {
      name: "البطاقات",
      icon: <CreditCard className="text-emerald-500" size={24} />,
      count: 0,
      route: "./account/cards"
    },
    {
      name: "القسائم",
      icon: <Ticket className="text-amber-500" size={24} />,
      count: 0,
      route: "./account/coupons"
    }
  ];

  return (
    <div className="w-full bg-white p-6 rounded-xl mb-4 shadow-sm">
      <h3 className="text-lg font-medium text-gray-800 mb-4 pr-1">حسابي</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.route}
            className="flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-200 hover:bg-gray-50 border border-gray-100 hover:border-gray-200 group"
          >
            <div className="p-2 bg-gray-50 rounded-full mb-2 group-hover:bg-white">
              {item.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {item.name}
            </span>
            {item.count > 0 && (
              <span className="mt-1 inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full bg-rose-50 text-rose-500">
                {item.count}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}