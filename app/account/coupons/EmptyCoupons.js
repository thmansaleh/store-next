'use cleint'
import { Tag } from "lucide-react";

export default function EmptyCoupons() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-6 text-center">
      <div className="p-6 rounded-full bg-emerald-100 text-emerald-600">
        <Tag className="h-12 w-12" strokeWidth={1.5} />
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-medium text-gray-800">لا توجد كوبونات متاحة</h2>
        <p className="text-gray-500 max-w-md px-4">
          لا يوجد لديك أي كوبونات خصم حالياً
        </p>
      </div>
    </div>
  );
}