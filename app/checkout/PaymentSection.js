'use client';
import { useDispatch, useSelector } from 'react-redux';
import Summary from './Summery';

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
    <div className="bg-gray-50  py-8" dir="rtl" lang="ar">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
            <h1 className="text-2xl font-bold mb-1">إتمام الطلب</h1>
            <p className="text-emerald-50 text-sm">راجع تفاصيل طلبك وأكمل عملية الدفع</p>
          </div>

          <div className="p-6">
            {/* Order Summary */}
            <Summary/>
           

            {/* Shipping Address */}
            {/* <div className="mb-8">
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
            </div> */}

            {/* Payment Method - Cash on Delivery Only */}

            {/* Complete Order Button */}
          
          </div>
        </div>
      </div>
    </div>
  );
}