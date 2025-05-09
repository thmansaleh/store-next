import Link from "next/link"
function Footer() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
    
    {/* Important Links Section */}
    <h2 className="text-2xl font-bold text-center mb-8">روابط مهمة</h2>
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-sm text-semibold">
      {/* Link items */}
      <div className="flex items-center">
        <span className="h-2 w-2 bg-gray-600 rounded-full ml-2" />
        <Link href="#" className="hover:text-purple-700">سياسة الإلغاء ورد الأموال</Link>
      </div>
      <div className="flex items-center">
        <span className="h-2 w-2 bg-gray-600 rounded-full ml-2" />
        <Link href="important-links/complaint" className="hover:text-purple-700">الشكاوى</Link>
      </div>
      {/* <div className="flex items-center">
        <span className="h-2 w-2 bg-gray-600 rounded-full ml-2" />
        <Link href="#" className="hover:text-purple-700">طريقة الدفع</Link>
      </div> */}
      {/* <div className="flex items-center">
        <span className="h-2 w-2 bg-gray-600 rounded-full ml-2" />
        <Link href="#" className="hover:text-purple-700">تي نوصل الطلب كهدية؟</Link>
      </div> */}
      <div className="flex items-center">
        <span className="h-2 w-2 bg-gray-600 rounded-full ml-2" />
        <Link href="important-links/after-sale" className="hover:text-purple-700">مابعد البيع</Link>
      </div>
      <div className="flex items-center">
        <span className="h-2 w-2 bg-gray-600 rounded-full ml-2" />
        <Link href="#" className="hover:text-purple-700">و المزيد من المعلومات</Link>
      </div>
      <div className="flex items-center">
        <span className="h-2 w-2 bg-gray-600 rounded-full ml-2" />
        <Link href="#" className="hover:text-purple-700">معرفة مقاس خاتمك</Link>
      </div>
      <div className="flex items-center">
        <span className="h-2 w-2 bg-gray-600 rounded-full ml-2" />
        <Link href="important-links/policy" className="hover:text-purple-700">سياسة الخصوصية</Link>
      </div>
      <div className="flex items-center">
        <span className="h-2 w-2 bg-gray-600 rounded-full ml-2" />
        <Link href="important-links/order-policy" className="hover:text-purple-700">سياسة الطلب</Link>
      </div>
    
      <div className="flex items-center">
        <span className="h-2 w-2 bg-gray-600 rounded-full ml-2" />
        <Link href="important-links/who-we-are" className="hover:text-purple-700">من نحن</Link>
      </div>
    </div>
    {/* Contact Methods */}
    <div className="flex flex-wrap justify-center gap-2 py-6 border-t border-b border-gray-200 border-dashed mb-8">
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
        <span className="ml-2">إيميل</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
        <span className="ml-2">هاتف</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
        <span className="ml-2">جوال</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
        <span className="ml-2">واتساب</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-80b0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
        </svg>
      </div>
    </div>
    {/* Social Icons */}
    <div className="flex justify-center gap-4 mb-8">
      <Link href="#" className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </Link>
      <Link href="#" className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </Link>
      <Link href="#" className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12a3 3 0 0116 0v0a3 3 0 01-3 3h-2l-3 3a3 3 0 01-2.121.879A3 3 0 015 16v-1h3l1-3z" />
        </svg>
      </Link>
      <Link href="#" className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Link>
      <Link href="#" className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </Link>
    </div>
    {/* Copyright */}
    <div className="text-center text-gray-600 mb-8">
      الحقوق محفوظة | 2025 متجر عثمان
    </div>
    {/* Payment Methods */}
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <img src="https://levantine.ae/wp-content/uploads/2023/03/tabby-badge.png" alt="Cash" className="h-8" />
      <img src="https://cdn.salla.sa/gBXVw/4YWl9xohgk6c2JbBZFyoFZ9yBVl1lcZDJIM4NR1P.jpg" alt="Payment Method" className="h-8" />
      <img src="https://www.fintechfutures.com/files/2021/09/Visa_2021.jpg" alt="STC Pay" className="h-8" />
      <img src="https://cdn-icons-png.flaticon.com/512/2489/2489756.png" alt="Bank Transfer" className="h-8" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/640px-Mastercard_2019_logo.svg.png" alt="PayPal" className="h-8" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Visa/Mastercard" className="h-8" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmPGCdqf5xuKU1ENA9eG-EFP2evK6Okh0aw&s" alt="Mada" className="h-8" />
      <div /> </div>
  </div>
  
  )
}

export default Footer
