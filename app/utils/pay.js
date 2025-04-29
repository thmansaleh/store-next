import axios from 'axios';
import { API_BASE_URL } from "../urls";

export const processPayment = async ( addressId, userToken,sessionId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/pay`,
      { 
        addressId: addressId, 
        sessionId: sessionId, 
        // paymentData: paymentData // You probably want to send paymentData too
      },
      {
        headers: {
          'userToken': userToken,
          'Content-Type': 'application/json',
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Error processing payment');
  }
};
