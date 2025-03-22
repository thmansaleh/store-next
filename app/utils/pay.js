import axios from 'axios';

export const processPayment = async (paymentData) => {
  try {
    const response = await axios.get('http://localhost:3000/pay', {
      params: paymentData, // Pass data as query parameters
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error processing payment');
  }
};
