'use client';
import { useSelector } from 'react-redux';
import { processPayment } from '../utils/pay';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PayButton({ className = '', size = 'default' }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // Added missing state variable
  const addressId = useSelector(state => state.address.selectedAddressId);
  const router = useRouter();

  // Determine if the payment can proceed
  const canPay = addressId !== null && addressId !== undefined;

  const handlePayment = async () => {
    if (!canPay) {
      setError('يرجى تحديد عنوان للشحن أولاً');
      setTimeout(() => setError(null), 3000);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const userToken = localStorage.getItem('userToken');
      const sessionId = localStorage.getItem('session_id');
      
      const response = await processPayment(addressId, userToken, sessionId);
      
      setSuccess(true);
      
      // Redirect to confirmation page after successful payment
      setTimeout(() => {
        router.push('/order-confirmation'); // Changed to more semantic route
      }, 1000);
      
    } catch (error) {
      console.error('Payment failed:', error.message);
      setError(error.message || 'فشلت عملية الدفع. يرجى المحاولة مرة أخرى');
    } finally {
      setLoading(false);
    }
  };

  // Button size variants
  const sizeClasses = {
    small: 'py-1.5 px-3 text-sm',
    default: 'py-2.5 px-4',
    large: 'py-3 px-6 text-lg'
  };

  // Combine all classes
  const buttonClasses = `
    ${className} 
    ${sizeClasses[size] || sizeClasses.default}
    relative
    flex items-center justify-center
    w-full md:w-auto
    ${success 
      ? 'bg-green-500 hover:bg-green-600' 
      : 'bg-emerald-600 hover:bg-emerald-700'
    }
    text-white font-medium
    rounded-lg
    transition duration-200
    shadow-md hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
    ${!canPay ? 'opacity-70 cursor-not-allowed' : ''}
    ${loading ? 'opacity-80 cursor-wait' : ''}
  `;

  return (
    <div className="border-t border-gray-200 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-gray-600 mb-5">
          <p className="mb-1 text-sm md:text-base">سيتم توصيل طلبك خلال 3-5 أيام عمل</p>
          <p className="text-xs md:text-sm">بالضغط على زر الإتمام، فإنك توافق على <a href="/terms" className="text-emerald-600 hover:underline">شروط الخدمة</a></p>
        </div>
      </div>
      
      <div className="relative mt-2" dir="rtl">
        {error && (
          <div 
            className="mb-4 bg-red-100 border-r-4 border-red-500 text-red-700 p-3 rounded-md text-sm animate-fade-in flex items-center" 
            role="alert"
            aria-live="assertive"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        )}
        
        {success && (
          <div 
            className="mb-4 bg-green-100 border-r-4 border-green-500 text-green-700 p-3 rounded-md text-sm animate-fade-in flex items-center"
            role="alert"
            aria-live="assertive"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>تم الدفع بنجاح! جاري تحويلك...</span>
          </div>
        )}
        
        <button
          onClick={handlePayment}
          disabled={loading || !canPay || success}
          className={buttonClasses}
        >
          {loading ? (
            <span className="flex items-center justify-center w-full">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              جاري الدفع...
            </span>
          ) : success ? (
            <span className="flex items-center justify-center w-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              تم الدفع بنجاح
            </span>
          ) : (
            <span className="flex items-center justify-center w-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              إتمام الدفع
            </span>
          )}
        </button>
        
        {!canPay && (
          <p className="mt-2 text-amber-600 text-sm text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            يجب تحديد عنوان التوصيل قبل الدفع
          </p>
        )}
      </div>
    </div>
  );
}