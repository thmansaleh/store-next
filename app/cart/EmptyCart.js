import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function EmptyCart() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-6 text-center">
      <div className="p-6 rounded-full bg-emerald-100 text-emerald-600">
        <ShoppingBag className="h-12 w-12" strokeWidth={1.5} />
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-medium text-gray-800">السلة فارغة</h2>
        <p className="text-gray-500 max-w-md px-4">
          لم تقم بإضافة أي منتجات إلى سلة التسوق الخاصة بك بعد
        </p>
      </div>
      
      <Link
        href="/"
        className="px-6 py-3 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-800 transition-colors duration-200 flex items-center gap-2"
      >
        <ShoppingBag className="h-4 w-4" strokeWidth={2} />
        ابدأ التسوق الآن
      </Link>
    </div>
  );
}