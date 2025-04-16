import { addOrUpdateCartItem, cartLocalStorage, createCart, getCartByUserOrSession } from '@/app/utils/cart';
import { getOrCreateSessionId } from '@/app/utils/generateSessionId';
import { useState } from 'react';
import { useSelector } from 'react-redux';

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
  const options = useSelector(state=>state.options);


  // Get user info - in a real app, this would come from your auth context or state
  const userId = null; // Replace with actual user ID if you have auth implemented
//   const sessionId = cartLocalStorage.getSessionId();

  const sessionId =getOrCreateSessionId()
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
            
          }
        }
      } else {
        // No session ID or user ID, create a new cart
        const newCart = await createCart(null, sessionId);
        cartId = newCart.cart_id;
        
        // Save session ID for guest users
        // if (newCart.session_id) {
        //   cartLocalStorage.setSessionId(newCart.session_id);
        // }
      }

      // Step 2: Add the product to the cart
      await addOrUpdateCartItem(cartId, productId, quantity,options.selections);
      
      // Execute callback if provided
      onAddToCart({ cartId, productId, quantity, options});
      
    } catch (err) {
      setError(err.message || 'Failed to add item to cart');
      console.error('Add to cart error:', err);
    } finally {
      setIsLoading(false);
    }
  };
return  <div 
onClick={handleAddToCart}
className="w-full fixed bottom-16 left-1/2 transform -translate-x-1/2  bg-white select-none p-3  ">
 <div  className="flex items-center justify-center  gap-4 focus:outline-none  rounded-lg w-full bg-black text-sm font-semibold text-white py-3 text-center  ">


<svg  aria-hidden="true"  className={isLoading?"w-5 h-5 animate-spin fill-black ":'hidden'} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
</svg>
{isLoading?'جاي الأضافة':'إضافة الى السلة'}
</div>
</div>
  return <>
  
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
  </>
};

export default AddToCartButton;