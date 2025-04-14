"use client"
import { API_BASE_URL } from '@/app/urls';
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

// API service layer - keeps API logic separate from state management
const cartAPI = {
  fetchCart: async (userId, sessionId) => {
    const params = new URLSearchParams();
    if (userId) params.append('user_id', userId);
    if (sessionId) params.append('session_id', sessionId);
    
    const response = await fetch(`${API_BASE_URL}/cart/user-cart?${params}`);
    if (!response.ok) throw new Error('Failed to fetch cart');
    return response.json();
  },
  
  fetchItems: async (cartId) => {
    const response = await fetch(`${API_BASE_URL}/cart/${cartId}/items`);
    if (!response.ok) throw new Error('Failed to fetch cart items');
    return response.json();
  },
  
  addItem: async (cartId, productId, quantity, options = []) => {
    const response = await fetch(`${API_BASE_URL}/cart/${cartId}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_id: productId, quantity, options })
    });
    if (!response.ok) throw new Error('Failed to add item to cart');
    return response.json();
  },
  
  updateItemQuantity: async (cartId, itemId, quantity) => {
    const response = await fetch(`${API_BASE_URL}/cart/${cartId}/items/${itemId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity })
    });
    if (!response.ok) throw new Error('Failed to update quantity');
    return response.json();
  },
  
  removeItem: async (cartId, itemId) => {
    const response = await fetch(`${API_BASE_URL}/cart/${cartId}/items/${itemId}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to remove item from cart');
    return { cart_item_id: itemId };
  },
  
  clearCart: async (cartId) => {
    const response = await fetch(`${API_BASE_URL}/cart/${cartId}/items`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to clear cart');
    return { cart_id: cartId };
  }
};

// Async thunks
export const initializeCart = createAsyncThunk(
  'cart/initialize',
  async ({ user_id, session_id }, { rejectWithValue }) => {
    try {
      return await cartAPI.fetchCart(user_id, session_id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCartItems = createAsyncThunk(
  'cart/fetchItems',
  async (cart_id, { rejectWithValue }) => {
    try {
      return await cartAPI.fetchItems(cart_id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addItem',
  async ({ cart_id, product_id, quantity = 1, options = [] }, { rejectWithValue }) => {
    try {
      return await cartAPI.addItem(cart_id, product_id, quantity, options);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCartItemQuantity = createAsyncThunk(
  'cart/updateQuantity',
  async ({ cart_id, cart_item_id, quantity }, { rejectWithValue }) => {
    try {
      await cartAPI.updateItemQuantity(cart_id, cart_item_id, quantity);
      return { cart_item_id, quantity };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeItem',
  async ({ cart_id, cart_item_id }, { rejectWithValue }) => {
    try {
      await cartAPI.removeItem(cart_id, cart_item_id);
      return { cart_item_id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (cart_id, { rejectWithValue }) => {
    try {
      await cartAPI.clearCart(cart_id);
      return { cart_id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart_id: null,
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    alert: {
      show: false,
      type: null, // 'success' | 'error'
      message: ''
    },
    lastUpdated: null
  },
  reducers: {
    showAlert: (state, action) => {
      state.alert = {
        show: true,
        type: action.payload.type || 'success',
        message: action.payload.message || 'Item added to cart'
      };
    },
    hideAlert: (state) => {
      state.alert.show = false;
    },
    resetCartStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Initialize cart
      .addCase(initializeCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(initializeCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cart_id = action.payload.cart_id;
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(initializeCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Fetch cart items
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Add item to cart
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        
        // Handle the response which includes cart_item_id and other details
        const { cart_item_id, quantity, product_id } = action.payload;
        
        // Find existing item with the same cart_item_id if it exists
        const existingItemIndex = state.items.findIndex(
          item => item.cart_item_id === cart_item_id
        );
        
        if (existingItemIndex >= 0) {
          // Update quantity if exists
          state.items[existingItemIndex].quantity = quantity;
        } else {
          // Add new item - note: in reality, you'd want the complete item details from the API
          // This is simplified and you'd likely need to fetch the complete cart or item details
          state.items.push({
            cart_item_id,
            product_id,
            quantity,
            // Other fields would come from the API response
          });
        }
        
        state.alert = {
          show: true,
          type: 'success',
          message: 'Item added to cart'
        };
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.alert = {
          show: true,
          type: 'error',
          message: `Error: ${action.payload}`
        };
      })
      
      // Update quantity
      .addCase(updateCartItemQuantity.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { cart_item_id, quantity } = action.payload;
        const index = state.items.findIndex(item => item.cart_item_id === cart_item_id);
        
        if (index !== -1) {
          state.items[index].quantity = quantity;
        }
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(updateCartItemQuantity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.alert = {
          show: true,
          type: 'error',
          message: `Error: ${action.payload}`
        };
      })
      
      // Remove item
      .addCase(removeFromCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = state.items.filter(item => item.cart_item_id !== action.payload.cart_item_id);
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.alert = {
          show: true,
          type: 'error',
          message: `Error: ${action.payload}`
        };
      })
      
      // Clear cart
      .addCase(clearCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.status = 'succeeded';
        state.items = [];
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

// Actions
export const { showAlert, hideAlert, resetCartStatus } = cartSlice.actions;

// Selectors
export const selectCart = (state) => state.cart;
export const selectCartId = (state) => state.cart.cart_id;
export const selectCartItems = (state) => state.cart.items;
export const selectCartStatus = (state) => state.cart.status;
export const selectCartError = (state) => state.cart.error;
export const selectCartAlert = (state) => state.cart.alert;

// Memoized selectors for derived data
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (items) => items.reduce((count, item) => count + item.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + (item.price * item.quantity), 0)
);

export const selectIsCartEmpty = createSelector(
  [selectCartItems],
  (items) => items.length === 0
);

export default cartSlice.reducer;