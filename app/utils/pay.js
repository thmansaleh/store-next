import axios from 'axios';
import { API_BASE_URL } from "../urls";

export const processPayment = async (paymentData, addressId, userToken) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/pay`,
      { 
        addressId: addressId, 
        paymentData: paymentData // You probably want to send paymentData too
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
