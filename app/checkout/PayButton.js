import { processPayment } from '../utils/pay'; 
import { useState } from 'react';

export default function PayButton() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
const userToken=localStorage.getItem('userToken')
const sessionId=localStorage.getItem('session_id')
    setLoading(true);
   

    try {
      const response = await processPayment(1, userToken,sessionId);
      // console.log('Payment successful:', response);
    } catch (error) {
      console.error('Payment failed:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`md:w-24 w-full bg-black text-white text-md font-semibold rounded-lg py-2 my-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {loading ? 'جاري الدفع...' : 'دفع'}
    </button>
  );
}
