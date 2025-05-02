import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { 
  fetchUserAddresses as fetchUserAddressesUtil,
  createAddress as createAddressUtil,
  updateAddress as updateAddressUtil,
  deleteAddress as deleteAddressUtil
} from '@/app/utils/addresses';

// Async thunk to fetch addresses
export const fetchUserAddresses = createAsyncThunk(
  'address/fetchUserAddresses',
  async (userToken, { rejectWithValue }) => {
    try {
      const data = await fetchUserAddressesUtil(userToken);
      return data || [];
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch addresses');
    }
  }
);

// Async thunk to add a new address
export const addAddress = createAsyncThunk(
  'address/addAddress',
  async ({ userToken, addressData }, { rejectWithValue }) => {
    try {
      const data = await createAddressUtil(userToken, addressData);
      if (!data) {
        throw new Error('Failed to create address');
      }
      return {
        address_id: data.address_id,
        address_name: data.address_name,
        // Add other address fields as needed
        status: 'active' // Default status for new addresses
      };
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to add address');
    }
  }
);

// Async thunk to update an address
export const updateAddress = createAsyncThunk(
  'address/updateAddress',
  async ({ addressId, addressData }, { rejectWithValue }) => {
    try {
      const data = await updateAddressUtil(addressId, addressData);
      if (!data) {
        throw new Error('Failed to update address');
      }
      return {
        address_id: data.address_id,
        address_name: data.address_name,
        status: data.status || 'active' // Maintain or update status
      };
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update address');
    }
  }
);

// Async thunk to delete an address
export const deleteAddress = createAsyncThunk(
  'address/deleteAddress',
  async (addressId , { rejectWithValue }) => {
    try {
      await deleteAddressUtil(addressId);
      return addressId;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to delete address');
    }
  }
);

const initialState = {
  addresses: [],
  selectedAddressId: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  lastAction: null, // Track last action type
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    selectAddress: (state, action) => {
      state.selectedAddressId = action.payload;
      state.addresses = state.addresses.map(address => ({
        ...address,
        selected: address.address_id === action.payload
      }));
    },
    updateAddressStatus: (state, action) => {
      const { addressId, status } = action.payload;
      const addressIndex = state.addresses.findIndex(addr => addr.address_id === addressId);
      if (addressIndex !== -1) {
        state.addresses[addressIndex].status = status;
      }
    },
    resetAddressState: () => initialState,
    clearAddressError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchUserAddresses
      .addCase(fetchUserAddresses.pending, (state) => {
        state.status = 'loading';
        state.lastAction = 'fetch';
      })
      .addCase(fetchUserAddresses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.addresses = action.payload.map(address => ({
          ...address,
          selected: address.address_id === state.selectedAddressId,
          status: address.status || 'active' // Ensure status exists
        }));
        
        // Auto-select first address if none selected
        if (!state.selectedAddressId && action.payload.length > 0) {
          state.selectedAddressId = action.payload[0].address_id;
          if (state.addresses.length > 0) {
            state.addresses[0].selected = true;
          }
        }
      })
      .addCase(fetchUserAddresses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Handle addAddress
      .addCase(addAddress.pending, (state) => {
        state.status = 'loading';
        state.lastAction = 'add';
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const newAddress = {
          ...action.payload,
          selected: true,
          status: 'active' // New addresses are active by default
        };
        state.addresses.push(newAddress);
        state.selectedAddressId = newAddress.address_id;
        
        // Ensure only one address is selected
        state.addresses = state.addresses.map(addr => ({
          ...addr,
          selected: addr.address_id === newAddress.address_id
        }));
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Handle updateAddress
      .addCase(updateAddress.pending, (state) => {
        state.status = 'loading';
        state.lastAction = 'update';
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.addresses.findIndex(
          addr => addr.address_id === action.payload.address_id
        );
        if (index !== -1) {
          state.addresses[index] = {
            ...state.addresses[index], // Keep existing properties
            ...action.payload, // Update with new properties
            selected: state.selectedAddressId === action.payload.address_id
          };
        }
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // Handle deleteAddress
      .addCase(deleteAddress.pending, (state) => {
        state.status = 'loading';
        state.lastAction = 'delete';
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.addresses = state.addresses.filter(
          addr => addr.address_id !== action.payload
        );
        
        // Handle selected address deletion
        if (state.selectedAddressId === action.payload) {
          state.selectedAddressId = state.addresses.length > 0 
            ? state.addresses[0].address_id 
            : null;
          
          if (state.addresses.length > 0) {
            state.addresses[0].selected = true;
          }
        }
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

// Selectors
export const selectAllAddresses = (state) => state.address.addresses;
export const selectAddressById = (state, addressId) => 
  state.address.addresses.find(addr => addr.address_id === addressId);
export const selectSelectedAddress = (state) => 
  state.address.addresses.find(addr => addr.address_id === state.address.selectedAddressId);
export const selectAddressStatus = (state) => state.address.status;
export const selectAddressError = (state) => state.address.error;
export const selectLastAddressAction = (state) => state.address.lastAction;
export const selectActiveAddresses = (state) => 
  state.address.addresses.filter(addr => addr.status === 'active');

// Actions
export const { 
  selectAddress, 
  updateAddressStatus,
  resetAddressState,
  clearAddressError
} = addressSlice.actions;

// Reducer
export default addressSlice.reducer;