'use client';
import { useSelector } from 'react-redux';
import { selectSelectedAddress } from '../store/features/addresses';
import { processPayment } from '../utils/pay';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import for redirection after payment

export default function PayButton({ className = '', size = 'default' }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const addressId = useSelector(state => state.address.selectedAddressId);
  const router = useRouter();

  // Determine if the payment can proceed
  const canPay = addressId !== null && addressId !== undefined;

  const handlePayment = async () => {
    if (!canPay) {
      setError('يرجى تحديد عنوان للشحن أولاً');
      setTimeout(() => setError(null), 3000); // Clear error after 3 seconds
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const userToken = localStorage.getItem('userToken');
      const sessionId = localStorage.getItem('session_id');
      
      const response = await processPayment(addressId, userToken, sessionId);
      
      // Show success state briefly before redirect
      setSuccess(true);
      
      // Redirect to confirmation page after successful payment
      setTimeout(() => {
        router.push('/order-confirmation');
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
    bg-emerald-600 hover:bg-emerald-700
    text-white font-medium
    rounded-lg
    transition duration-200
    focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
    ${!canPay ? 'opacity-70 cursor-not-allowed' : ''}
    ${loading ? 'opacity-80 cursor-wait' : ''}
  `;

  return (
    <div className="relative" dir="rtl">
      {error && (
        <div className="absolute -top-12 left-0 right-0 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md text-sm text-center animate-fade-in">
          {error}
        </div>
      )}
      
      <button
        onClick={handlePayment}
        disabled={loading || !canPay}
        className={buttonClasses}
      >
        {loading ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            جاري الدفع...
          </span>
        ) : (
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            إتمام الدفع
          </span>
        )}
      </button>
    </div>
  );
}

// Usage examples:
// <PayButton /> - Default size
// <PayButton size="small" /> - Small button
// <PayButton size="large" className="mt-4" /> - Large button with custom class