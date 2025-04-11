import { addOrUpdateCartItem, cartLocalStorage, createCart, getCartByUserOrSession } from '@/app/utils/cart';
import { useState } from 'react';

/**
 * Add to Cart Button Component
 * 
 * @param {Object} props
 * @param {number} props.productId - ID of the product to add to cart
 * @param {number} props.quantity - Initial quantity (default: 1)
 * @param {function} props.onAddToCart - Optional callback after successful add
 * @param {string} props.buttonText - Text to display on button (default: "Add to Cart")
 */
const AddToCartButton = ({ 
  productId, 
  quantity = 1, 
  onAddToCart = () => {}, 
  buttonText = "Add to Cart",
  className = "bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get user info - in a real app, this would come from your auth context or state
  const userId = 1; // Replace with actual user ID if you have auth implemented
//   const sessionId = cartLocalStorage.getSessionId();
  const sessionId = 'ytuiohjki'

  const handleAddToCart = async () => {
    try {
      setIsLoading(true);
      setError(null);

      let cartId;
      
      // Step 1: Get or create cart
      if (sessionId || userId) {
        // Try to get existing cart
        try {
          const existingCart = await getCartByUserOrSession(userId, sessionId);
          cartId = existingCart.cart_id;
        } catch (err) {
          // If no cart exists, create a new one
          const newCart = await createCart(userId, sessionId);
          cartId = newCart.cart_id;
          
          // For guest users, save the session ID
          if (!userId && newCart.session_id) {
            cartLocalStorage.setSessionId(newCart.session_id);
          }
        }
      } else {
        // No session ID or user ID, create a new cart
        const newCart = await createCart(null, null);
        cartId = newCart.cart_id;
        
        // Save session ID for guest users
        if (newCart.session_id) {
          cartLocalStorage.setSessionId(newCart.session_id);
        }
      }

      // Step 2: Add the product to the cart
      await addOrUpdateCartItem(cartId, productId, quantity);
      
      // Execute callback if provided
      onAddToCart({ cartId, productId, quantity });
      
    } catch (err) {
      setError(err.message || 'Failed to add item to cart');
      console.error('Add to cart error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button 
        className={className}
        onClick={handleAddToCart}
        disabled={isLoading}
      >
        {isLoading ? 'Adding...' : buttonText}
      </button>
      
      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;