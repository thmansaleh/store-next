// const API_BASE_URL = 'http://your-api-base-url'; // Replace with your actual API base URL

import { API_BASE_URL } from "../urls";

/**
 * Handles API errors
 * @param {Response} response - The fetch response object
 * @returns {Promise} - The JSON response or throws an error
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

/**
 * Creates a new cart
 * @param {number|null} userId - User ID (null for guests)
 * @param {string|null} sessionId - Session ID (null for logged-in users)
 * @returns {Promise<Object>} - The created cart data
 */
export const createCart = async (userId = null, sessionId = null) => {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_id: userId, session_id: sessionId }),
  });
  return handleResponse(response);
};

/**
 * Gets cart by user ID or session ID
 * @param {number|null} userId - User ID
 * @param {string|null} sessionId - Session ID
 * @returns {Promise<Object>} - The cart data
 */
export const getCartByUserOrSession = async (userId = null, sessionId = null) => {
  const queryParams = new URLSearchParams();
  if (userId) queryParams.append('user_id', userId);
  if (sessionId) queryParams.append('session_id', sessionId);

  const response = await fetch(`${API_BASE_URL}/cart/user-cart?${queryParams.toString()}`);
  return handleResponse(response);
};

/**
 * Gets cart by cart ID
 * @param {number} cartId - Cart ID
 * @returns {Promise<Object>} - The cart data
 */
export const getCartById = async (cartId) => {
  const response = await fetch(`${API_BASE_URL}/cart/${cartId}`);
  return handleResponse(response);
};

/**
 * Gets all items in a cart
 * @param {number} cartId - Cart ID
 * @returns {Promise<Array>} - Array of cart items
 */
export const getCartItems = async (cartId) => {
  const response = await fetch(`${API_BASE_URL}/cart/${cartId}/items`);
  return handleResponse(response);
};

/**
 * Adds or updates an item in the cart
 * @param {number} cartId - Cart ID
 * @param {number} productId - Product ID
 * @param {number} quantity - Quantity to add/update
 * @returns {Promise<Object>} - Operation result
 */
export const addOrUpdateCartItem = async (cartId, productId, quantity,options) => {
  // console.log('server',options)
  // return null
  const response = await fetch(`${API_BASE_URL}/cart/${cartId}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ product_id: productId, quantity ,options}),
  });
  return handleResponse(response);
};

/**
 * Updates cart item quantity
 * @param {number} cartId - Cart ID
 * @param {number} itemId - Cart item ID
 * @param {number} quantity - New quantity
 * @returns {Promise<Object>} - Update result
 */
export const updateCartItemQuantity = async (cartId, itemId, quantity) => {
  const response = await fetch(`${API_BASE_URL}/cart/${cartId}/items/${itemId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ quantity }),
  });
  return handleResponse(response);
};

/**
 * Removes an item from the cart
 * @param {number} cartId - Cart ID
 * @param {number} itemId - Cart item ID
 * @returns {Promise<Object>} - Deletion result
 */
export const removeCartItem = async (cartId, itemId) => {
  const response = await fetch(`${API_BASE_URL}/cart/${cartId}/items/${itemId}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

/**
 * Clears all items from the cart
 * @param {number} cartId - Cart ID
 * @returns {Promise<Object>} - Clear operation result
 */
export const clearCart = async (cartId) => {
  const response = await fetch(`${API_BASE_URL}/cart/${cartId}/items`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

/**
 * Calculates cart totals
 * @param {Array} items - Cart items
 * @returns {Object} - Totals object {totalItems, totalQuantity, totalPrice}
 */
export const calculateCartTotals = (items) => {
  return items.reduce(
    (totals, item) => {
      return {
        totalItems: totals.totalItems + 1,
        totalQuantity: totals.totalQuantity + item.quantity,
        totalPrice: totals.totalPrice + item.price * item.quantity,
      };
    },
    { totalItems: 0, totalQuantity: 0, totalPrice: 0 }
  );
};

// Utility function to manage cart in localStorage for guest users
export const cartLocalStorage = {
  getSessionId: () => localStorage.getItem('cart_session_id'),
  setSessionId: (sessionId) => localStorage.setItem('cart_session_id', sessionId),
  clearSessionId: () => localStorage.removeItem('cart_session_id'),
};