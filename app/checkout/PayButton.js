import { processPayment } from '../utils/pay'; 
import { useState } from 'react';

export default function PayButton() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
const userToken=localStorage.getItem('userToken')
    setLoading(true);
    const paymentData = {
      user_id: 1,
      payment_method: 'credit_card',
      amount: 50.99,
      token: 'secure_payment_token_here',
      items: [
        { product_id: 1, quantity: 2, price: 20 },
        { product_id: 2, quantity: 1, price: 10.99 }
      ],
      address_id: 1
    };

    try {
      const response = await processPayment(paymentData,1, userToken);
      console.log('Payment successful:', response);
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
