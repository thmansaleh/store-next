import axios from 'axios';
import { API_BASE_URL } from "../urls";
export const processPayment = async (paymentData,userToken) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pay`, {
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
