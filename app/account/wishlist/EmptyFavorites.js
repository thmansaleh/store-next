
"use client"
import { Heart } from "lucide-react";
import Link from "next/link";

export default function EmptyFavorites() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-6 text-center">
      <div className="p-6 rounded-full bg-rose-100 text-rose-600">
        <Heart className="h-12 w-12" strokeWidth={1.5} />
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-medium text-gray-800">المفضلة فارغة</h2>
        <p className="text-gray-500 max-w-md px-4">
          لم تقم بإضافة أي منتجات إلى قائمة المفضلة الخاصة بك بعد
        </p>
      </div>
      
      <Link
        href="/"
        className="px-6 py-3 rounded-md bg-rose-600 text-white font-medium hover:bg-rose-800 transition-colors duration-200 flex items-center gap-2"
      >
        تصفح المنتجات
      </Link>
    </div>
  );
}