// components/PaymentButton.jsx
import React, { useState } from 'react';
import axios from 'axios';

const PaymentButton = ({ cart, user, shippingAddress, billingAddress }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    if (!cart || cart.cartItems.length === 0) {
      setError('Your cart is empty');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Prepare payment data
      const paymentData = {
        cartId: cart.cart_id,
        userId: user?.user_id || null,
        sessionId: cart.session_id,
        shippingAddress: shippingAddress,
        billingAddress: billingAddress || shippingAddress,
        cartItems: cart.cartItems.map(item => ({
          product_id: item.product_id,
          quantity: item.quantity
        }))
      };

      // Call backend to create payment intent
      const response = await axios.post('/api/payments/create-checkout-session', paymentData);
      
      // Redirect to Stripe checkout
      window.location.href = response.data.url;
      
    } catch (err) {
      setError(err.response?.data?.message || 'Payment processing failed');
      setLoading(false);
    }
  };

  return (
    <div className="payment-button-container">
      {error && <div className="error-message">{error}</div>}
      <button 
        onClick={handlePayment}
        disabled={loading || !cart || cart.cartItems.length === 0}
        className="pay-button"
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default PaymentButton;