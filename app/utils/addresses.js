import { API_BASE_URL } from "../urls";

export async function fetchUserAddresses(userToken) {
  try {
    const response = await fetch(`${API_BASE_URL}/addresses/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'userToken': userToken // custom header
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch addresses for user');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching addresses:', error);
  }
}
  export async function fetchAddressById(addressId) {
    try {
      const response = await fetch(`${API_BASE_URL}/addresses/${addressId}`);
      if (!response.ok) {
        throw new Error('Address not found');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching address with ID ${addressId}:`, error);
    }
  }


  export async function createAddress(userToken, addressData) {
    try {
      const response = await fetch(`${API_BASE_URL}/addresses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'userToken': userToken // Add your token here
        },
        body: JSON.stringify({address_name:addressData.address_name}),
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
        body: JSON.stringify({address_name:updatedData.address_name}),
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
  