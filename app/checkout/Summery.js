import useSWR from 'swr';
import { getOrCreateSessionId } from '../utils/generateSessionId';
import { getCartItemsBySession } from '../utils/cart';
import Image from 'next/image';

function Summary() {
  // Define fetcher function for SWR that uses your getCartItemsBySession function
  const fetcher = async () => {
    const sessionId = getOrCreateSessionId();
    try {
      return await getCartItemsBySession(sessionId);
    } catch (error) {
      console.error('Error fetching cart data:', error);
      throw error;
    }
  };

  // Use SWR hook for fetching cart items
  const { data: cartItems, error, isLoading } = useSWR('cartItems', fetcher);

  // Calculate totals from fetched data
  const subtotal = cartItems?.reduce((sum, item) => {
    // Ensure price is treated as a number
    const itemPrice = parseFloat(item.price);
    return sum + (itemPrice * item.quantity);
  }, 0) || 0;
  
  const shippingCost = cartItems?.length > 0 ? 0 : 0; // Example shipping cost
  const tax = subtotal * 0; // 15% VAT
  const total = subtotal + shippingCost + tax;

  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium text-gray-800 mb-4">ملخص الطلب</h2>
      
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        {isLoading ? (
          <div className="text-center py-4 text-gray-500">
            جاري التحميل...
          </div>
        ) : error ? (
          <div className="text-center py-4 text-red-500">
            حدث خطأ أثناء تحميل بيانات السلة
          </div>
        ) : cartItems && cartItems.length > 0 ? (
          <div className="space-y-3">
            {cartItems.map((item, index) => (
              <div key={item.cart_item_id || index} className="flex items-center justify-between pb-3 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="bg-gray-200 w-12 h-12 rounded-md flex items-center justify-center ml-3 overflow-hidden">
                    {item.product_image ? (
                      <Image 
                        src={item.product_image} 
                        alt={item.product_name} 
                        width={48}
                        height={48}
                        className="object-cover"
                        unoptimized={true} // Remove this if you're using optimized images from your own domain
                      />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{item.product_name}</p>
                    <p className="text-sm text-gray-500">الكمية: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-gray-700 font-medium">
                  {(parseFloat(item.price) * item.quantity).toFixed(2)} درهم
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
        {cartItems && cartItems.length > 0 && (
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>المجموع الفرعي:</span>
              <span>{subtotal.toFixed(2)} درهم</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>تكلفة الشحن:</span>
              <span>{shippingCost.toFixed(2)} درهم</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>ضريبة القيمة المضافة (15%):</span>
              <span>{tax.toFixed(2)} درهم</span>
            </div>
            <div className="flex justify-between font-bold text-gray-800 pt-2 border-t border-gray-200 mt-2">
              <span>الإجمالي:</span>
              <span>{total.toFixed(2)} درهم</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Summary;