'use client';
import { useSelector } from 'react-redux';
import PayButton from './PayButton';

export default function PaymentSection() {
  const selectedAddress = useSelector(state => state.address.selectedAddress);
  const cartItems = useSelector(state => state.cart.items);
  const cartTotal = useSelector(state => state.cart.total);

  // Calculate totals
  const subtotal = cartTotal || 0;
  const shippingCost = selectedAddress ? 15 : 0;
  const tax = subtotal * 0.15; // 15% VAT
  const total = subtotal + shippingCost + tax;

  return (
    <div className="bg-gray-50 min-h-screen py-8" dir="rtl" lang="ar">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
            <h1 className="text-2xl font-bold mb-1">إتمام الطلب</h1>
            <p className="text-emerald-50 text-sm">راجع تفاصيل طلبك وأكمل عملية الدفع</p>
          </div>

          <div className="p-6">
            {/* Order Summary */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-800 mb-4">ملخص الطلب</h2>
              
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                {cartItems && cartItems.length > 0 ? (
                  <div className="space-y-3">
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex items-center justify-between pb-3 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="bg-gray-200 w-12 h-12 rounded-md flex items-center justify-center mr-3">
                            {item.image ? (
                              <img src={item.image} alt={item.name} className="w-10 h-10 object-cover" />
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{item.name}</p>
                            <p className="text-sm text-gray-500">الكمية: {item.quantity}</p>
                          </div>
                        </div>
                        <div className="text-gray-700 font-medium">
                          {item.price * item.quantity} ريال
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    لا توجد منتجات في سلة التسوق
                  </div>
                )}

                {/* Totals */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>المجموع الفرعي:</span>
                    <span>{subtotal.toFixed(2)} ريال</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>تكلفة الشحن:</span>
                    <span>{shippingCost.toFixed(2)} ريال</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>ضريبة القيمة المضافة (15%):</span>
                    <span>{tax.toFixed(2)} ريال</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-800 pt-2 border-t border-gray-200 mt-2">
                    <span>الإجمالي:</span>
                    <span>{total.toFixed(2)} ريال</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-800 mb-4">عنوان الشحن</h2>
              
              {selectedAddress ? (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex">
                    <div className="ml-3 text-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{selectedAddress.name}</p>
                      <p className="text-gray-600 mt-1">{selectedAddress.address_name}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-yellow-800">
                    يرجى اختيار عنوان للشحن قبل إتمام عملية الدفع
                  </span>
                </div>
              )}
            </div>

            {/* Payment Method - Cash on Delivery Only */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-800 mb-4">طريقة الدفع</h2>
              
              <div className="p-4 border rounded-lg border-emerald-500 bg-emerald-50">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full mr-3 flex items-center justify-center border-2 border-emerald-500">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium text-gray-800">الدفع عند الاستلام</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Order Button */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-gray-600">
                  <p className="mb-1">سيتم توصيل طلبك خلال 3-5 أيام عمل</p>
                  <p className="text-sm">بالضغط على زر الإتمام، فإنك توافق على <a href="#" className="text-emerald-600 hover:underline">شروط الخدمة</a></p>
                </div>
                <PayButton size="large" className="md:w-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}