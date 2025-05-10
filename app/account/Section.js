import Link from "next/link";
import { ShoppingBag, MapPin, HeadphonesIcon } from "lucide-react";

export default function Section() {
  const menuItems = [
    {
      name: 'المشتريات',
      icon: <ShoppingBag className="stroke-current" size={22} />,
      route: 'account/orders',
      description: 'تتبع طلباتك السابقة'
    },
    {
      name: 'العنواين',
      icon: <MapPin className="stroke-current" size={22} />,
      route: 'account/addresses',
      description: 'إدارة عناوين التوصيل'
    },
    {
      name: 'خدمة العملاء',
      icon: <HeadphonesIcon className="stroke-current" size={22} />,
      route: 'contact-us',
      description: 'مساعدة ودعم فني'
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-lg font-medium text-gray-800">الخدمات</h3>
      </div>
      
      <div className="divide-y divide-gray-100">
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            href={item.route}
            className="flex items-center p-4 hover:bg-gray-50 transition-colors duration-150 group"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100 group-hover:text-emerald-600">
              {item.icon}
            </div>
            <div className="mr-3 flex flex-col">
              <span className="text-sm font-medium text-gray-800 group-hover:text-emerald-600">
                {item.name}
              </span>
              <span className="text-xs text-gray-500 mt-0.5">
                {item.description}
              </span>
            </div>
            <div className="flex-grow"></div>
            <div className="text-emerald-400 group-hover:text-emerald-600 ml-2">
              <svg className="w-5 h-5 text-gray-500 hover:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}