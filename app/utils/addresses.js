import { API_BASE_URL } from "../urls";

const BASE_URL = 'http://localhost:3000/api/email';  // Replace with your actual base URL
export async function fetchUserAddresses(userId) {
    try {
      const response = await fetch(`/api/addresses/user/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch addresses for user');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching addresses for user ${userId}:`, error);
    }
  }
  export async function fetchAddressById(addressId) {
    try {
      const response = await fetch(`/api/addresses/${addressId}`);
      if (!response.ok) {
        throw new Error('Address not found');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching address with ID ${addressId}:`, error);
    }
  }
  export async function createAddress(addressData) {
// console.table(addressData.userName)
    // return null
    try {
      const response = await fetch(`${API_BASE_URL}/addresses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addressData),
      });
      if (!response.ok) {
        throw new Error('Failed to create address');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating address:', error);
    }
  }
  export async function updateAddress(addressId, updatedData) {

    try {
      const response = await fetch(`${API_BASE_URL}/addresses/${addressId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error('Failed to update address');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error updating address with ID ${addressId}:`, error);
    }
  }
  export async function deleteAddress(addressId) {
    try {
      const response = await fetch(`${API_BASE_URL}/addresses/${addressId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete address');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error deleting address with ID ${addressId}:`, error);
    }
  }
  