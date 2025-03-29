
const BASE_URL = 'http://localhost:3000/api/email';  // Replace with your actual base URL

export async function getCartById(cartId) {
    try {
      const response = await fetch(`/api/cart/${cartId}`);
      if (!response.ok) {
        throw new Error('Cart not found');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching cart with ID ${cartId}:`, error);
    }
  }
  export async function getCartItems(cartId) {
    try {
      const response = await fetch(`/api/cart/${cartId}/items`);
      if (!response.ok) {
        throw new Error('Failed to fetch cart items');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching items for cart ${cartId}:`, error);
    }
  }
    
  export async function addItemToCart(cartId, productId, variantId, quantity) {
    try {
      const response = await fetch(`/api/cart/${cartId}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId, variant_id: variantId, quantity: quantity }),
      });
      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  }

  export async function updateCartItemQuantity(cartId, itemId, quantity) {
    try {
      const response = await fetch(`/api/cart/${cartId}/items/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: quantity }),
      });
      if (!response.ok) {
        throw new Error('Failed to update cart item');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error updating item ${itemId} in cart ${cartId}:`, error);
    }
  }
  export async function deleteCartItem(cartId, itemId) {
    try {
      const response = await fetch(`/api/cart/${cartId}/items/${itemId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete cart item');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error deleting item ${itemId} from cart ${cartId}:`, error);
    }
  }
  
  export async function deleteCart(cartId) {
    try {
      const response = await fetch(`/api/cart/${cartId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete cart');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error deleting cart ${cartId}:`, error);
    }
  }
  