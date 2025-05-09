"use client"
import Link from "next/link"
import { useSelector } from "react-redux";
import { selectCartItemsCount, selectCartTotal } from "../store/features/cart";
import { Package, Truck, CreditCard } from "lucide-react";

export default function OrderDetails() {
  const total = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div className="my-2 overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
        <Package className="h-5 w-5 text-gray-500" />
        تفاصيل الطلب
      </h3>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="flex items-center gap-2 text-gray-600">
            <span>المنتجات ({itemCount})</span>
          </span>
          <span className="font-medium">{total} AED</span>
        </div>
        
        <div className="flex justify-between">
          <span className="flex items-center gap-2 text-gray-600">
            <Truck className="h-4 w-4" />
            الشحن
          </span>
          <span className="font-medium text-green-600">مجاناً</span>
        </div>
        
        <hr className="my-3 border-gray-200" />
        
        <div className="flex justify-between">
          <span className="font-semibold">المجموع النهائي</span>
          <span className="text-lg font-bold">{total} د.إ</span>
        </div>
      </div>
      
     
      
   
    </div>
  );
}