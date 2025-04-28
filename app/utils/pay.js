import axios from 'axios';
import { API_BASE_URL } from "../urls";
export const processPayment = async (paymentData,addressId,userToken) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pay`, {
      addressId: addressId, // Pass data as query parameters
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
