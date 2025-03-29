import { API_BASE_URL } from '@/app/urls';
import { createAddress } from '@/app/utils/addresses';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Base URL for API requests


// Async thunk to fetch addresses for a user
export const fetchUserAddresses = createAsyncThunk(
  'address/fetchUserAddresses',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/addresses/user/${userId}`);
      const data = await response.data;
      return data
    } catch (error) {
      return rejectWithValue(error.data || 'Failed to fetch addresses');
    }
  }
);

// Async thunk to add a new address
export const addAddress = createAsyncThunk(
  'address/addAddress',
  async ({ userId, userName,addressName }, { rejectWithValue }) => {
    
    try {
      const data = await   createAddress({ userId, addressName,userName })

       return data
    } catch (error) {
      return rejectWithValue(error.data || 'Failed to add address');
    }
  }
);

// Async thunk to update an existing address
export const updateAddress = createAsyncThunk(
  'address/updateAddress',
  async ({ addressId, addressData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/address/${addressId}`, addressData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Failed to update address');
    }
  }
);

// Async thunk to delete an address
export const deleteAddress = createAsyncThunk(
  'address/deleteAddress',
  async (addressId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_BASE_URL}/address/${addressId}`);
      return addressId; // Return the ID to remove it from state
    } catch (error) {
      return rejectWithValue(error.response.data || 'Failed to delete address');
    }
  }
);

// Async thunk to set an address as default
export const setDefaultAddress = createAsyncThunk(
  'address/setDefaultAddress',
  async ({ userId, addressId }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/address/user/${userId}/default/${addressId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Failed to set default address');
    }
  }
);

// Initial state
const initialState = {
  addresses: [],
  selectedAddressId: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Create the slice
const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    // Select an address (locally, without API call)
    selectAddress: (state, action) => {
      state.selectedAddressId = action.payload;
      // Update selected status in addresses array
      state.addresses = state.addresses.map(address => ({
        ...address,
        selected: address.address_id === action.payload
      }));
    },
    // Reset the state (useful for logout, etc.)
    resetAddressState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchUserAddresses
      .addCase(fetchUserAddresses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserAddresses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('data',action.payload)
        state.addresses = action.payload;
        // Set selectedAddressId if there's a default address
        const defaultAddress = action.payload.find(addr => addr.isDefault);
        if (defaultAddress) {
          state.selectedAddressId = defaultAddress.id;
        } else if (action.payload.length > 0) {
          // Otherwise select the first address
          state.selectedAddressId = action.payload[0].id;
        }
      })
      .addCase(fetchUserAddresses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch addresses';
      })

      // Handle addAddress
      .addCase(addAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        console.log(action)
        state.status = 'succeeded';
        state.addresses.push(action.payload);
        // Select the new address
        state.selectedAddressId = action.payload.address_id;
        // Update selected status in addresses array
        state.addresses = state.addresses.map(address => ({
          ...address,
          selected: address.address_id === action.payload.address_id
        }));
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to add address';
      })

      // Handle updateAddress
      .addCase(updateAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Replace the updated address in the array
        const index = state.addresses.findIndex(addr => addr.id === action.payload.id);
        if (index !== -1) {
          state.addresses[index] = {
            ...action.payload,
            selected: state.selectedAddressId === action.payload.id
          };
        }
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to update address';
      })

      // Handle deleteAddress
      .addCase(deleteAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Remove the deleted address from the array
        state.addresses = state.addresses.filter(addr => addr.id !== action.payload);
        // If the selected address was deleted, select another one
        if (state.selectedAddressId === action.payload) {
          state.selectedAddressId = state.addresses.length > 0 ? state.addresses[0].id : null;
          // Update selected status
          if (state.addresses.length > 0) {
            state.addresses = state.addresses.map((address, idx) => ({
              ...address,
              selected: idx === 0 // Select the first one
            }));
          }
        }
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to delete address';
      })

      // Handle setDefaultAddress
      .addCase(setDefaultAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setDefaultAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update isDefault flag for all addresses
        state.addresses = state.addresses.map(addr => ({
          ...addr,
          isDefault: addr.id === action.payload.id
        }));
        // Select the default address
        state.selectedAddressId = action.payload.id;
        // Update selected status
        state.addresses = state.addresses.map(address => ({
          ...address,
          selected: address.id === action.payload.id
        }));
      })
      .addCase(setDefaultAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to set default address';
      });
  },
});

// Export actions and reducer
export const { selectAddress, resetAddressState } = addressSlice.actions;
export default addressSlice.reducer;

// Selectors
export const selectAllAddresses = (state) => state.address.addresses;
export const selectAddressById = (state, addressId) => 
  state.address.addresses.find(addr => addr.id === addressId);
export const selectSelectedAddress = (state) => 
  state.address.addresses.find(addr => addr.id === state.address.selectedAddressId);
export const selectAddressStatus = (state) => state.address.status;
export const selectAddressError = (state) => state.address.error;