import axios from 'axios';

export const processPayment = async (paymentData,userToken) => {
  try {
    const response = await axios.get('http://localhost:3000/pay', {
      params: paymentData, // Pass data as query parameters
      headers: {
        'userToken': userToken,
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error processing payment');
  }
};
