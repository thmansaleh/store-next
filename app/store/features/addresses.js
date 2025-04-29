import { API_BASE_URL } from '@/app/urls';
import { 
  fetchUserAddresses as fetchUserAddressesUtil,
  createAddress as createAddressUtil,
  updateAddress as updateAddressUtil,
  deleteAddress as deleteAddressUtil
} from '@/app/utils/addresses';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch addresses for a user
export const fetchUserAddresses = createAsyncThunk(
  'address/fetchUserAddresses',
  async (userId, { rejectWithValue }) => {
    try {
      const data = await fetchUserAddressesUtil(userId);
      if (!data) {
        throw new Error('No addresses found');
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch addresses');
    }
  }
);

// Async thunk to add a new address
export const addAddress = createAsyncThunk(
  'address/addAddress',
  async ({ userId, userName, addressName }, { rejectWithValue }) => {
    try {
      const data = await createAddressUtil({ userId, addressName, userName });
      if (!data) {
        throw new Error('Failed to create address');
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to add address');
    }
  }
);

// Async thunk to update an existing address
export const updateAddress = createAsyncThunk(
  'address/updateAddress',
  async ({ addressId, addressData }, { rejectWithValue }) => {
    try {
      const data = await updateAddressUtil(addressId, addressData);
      if (!data) {
        throw new Error('Failed to update address');
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update address');
    }
  }
);

// Async thunk to delete an address
export const deleteAddress = createAsyncThunk(
  'address/deleteAddress',
  async (addressId, { rejectWithValue }) => {
    try {
      const data = await deleteAddressUtil(addressId);
      if (!data) {
        throw new Error('Failed to delete address');
      }
      return addressId; // Return the ID to remove it from state
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to delete address');
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
        state.addresses = action.payload;
        // Set selectedAddressId if there's a default address
        const defaultAddress = action.payload.find(addr => addr.isDefault);
        if (defaultAddress) {
          state.selectedAddressId = defaultAddress.address_id;
        } else if (action.payload.length > 0) {
          // Otherwise select the first address
          state.selectedAddressId = action.payload[0].address_id;
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
        const index = state.addresses.findIndex(addr => addr.address_id === action.payload.address_id);
        if (index !== -1) {
          state.addresses[index] = {
            ...action.payload,
            selected: state.selectedAddressId === action.payload.address_id
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
        state.addresses = state.addresses.filter(addr => addr.address_id !== action.payload);
        // If the selected address was deleted, select another one
        if (state.selectedAddressId === action.payload) {
          state.selectedAddressId = state.addresses.length > 0 ? state.addresses[0].address_id : null;
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
      });
  },
});

// Export actions and reducer
export const { selectAddress, resetAddressState } = addressSlice.actions;
export default addressSlice.reducer;

// Selectors
export const selectAllAddresses = (state) => state.address.addresses;
export const selectAddressById = (state, addressId) => 
  state.address.addresses.find(addr => addr.address_id === addressId);
export const selectSelectedAddress = (state) => 
  state.address.addresses.find(addr => addr.address_id === state.address.selectedAddressId);
export const selectAddressStatus = (state) => state.address.status;
export const selectAddressError = (state) => state.address.error;