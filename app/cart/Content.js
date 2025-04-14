"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  initializeCart,
  fetchCartItems, 
  updateCartItemQuantity, 
  removeFromCart, 
  clearCart,
  selectCartId,
  selectCartItems, 
  selectCartStatus, 
  selectCartTotal,
  selectCartItemsCount,
  selectIsCartEmpty,
  selectCartAlert,
  hideAlert
} from "../store/features/cart";
import OrderDetailes from './OrderDetailes';
import Items from './Items';
import EmptyCart from './EmptyCart';
import BackArrowBtn from '../components/BackArrowBtn';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cartId = useSelector(selectCartId);
  const items = useSelector(selectCartItems);
  const status = useSelector(selectCartStatus);
  const total = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartItemsCount);
  const isEmpty = useSelector(selectIsCartEmpty);
  const alert = useSelector(selectCartAlert);

  // Initialize cart if needed
  useEffect(() => {
    if (!cartId) {
      // For logged-in users, get the user ID from your auth system
      // This is just a placeholder - replace with your actual auth logic
      const userId = localStorage.getItem('user_id');
      
      // For guest users, use a session ID
      const sessionId = localStorage.getItem('session_id') || 
                       `guest_${Math.random().toString(36).substring(2, 15)}`;
      
      // Store session ID if it's new
      if (!localStorage.getItem('session_id')) {
        localStorage.setItem('session_id', sessionId);
      }

      // Initialize the cart
      dispatch(initializeCart({ user_id: userId, session_id: sessionId }));
    }
  }, [dispatch, cartId]);

  // Fetch cart items once we have a cart ID
  useEffect(() => {
    if (cartId) {
      dispatch(fetchCartItems(cartId));
    }
  }, [dispatch, cartId]);

  // Handle auto-dismissing alerts
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert.show, dispatch]);

  const handleQuantityChange = (itemId, quantity) => {
    if (quantity < 1) return;
    dispatch(updateCartItemQuantity({
      cart_id: cartId,
      cart_item_id: itemId,
      quantity
    }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart({
      cart_id: cartId,
      cart_item_id: itemId
    }));
  };

  const handleClearCart = () => {
    dispatch(clearCart(cartId));
  };

  // Show loading state during initialization or fetching items
//   if (status === 'loading') {
//     return (
//       <div className="p-4 text-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
//         <p className="mt-2">Loading your cart...</p>
//       </div>
//     );
//   }

  return <>
     <BackArrowBtn/>
    <div className="p-3">
      
      {/* Alert message */}
      {alert.show && (
        <div className={`mb-4 p-3 rounded ${alert.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {alert.message}
        </div>
      )}

      {isEmpty ? (
        <EmptyCart/>
      ) : (
        <>
       
<Items/>
          {/* {items.map(item => (
            <div key={item.cart_item_id} className="grid grid-cols-12 gap-4 py-4 border-b border-gray-100">
              <div className="col-span-5 flex items-center">
                {item.product_image && (
                  <img src={item.product_image} alt={item.product_name} className="w-16 h-16 object-cover mr-4" />
                )}
                <div>
                  <h3 className="font-medium">{item.product_name}</h3>
                  {item.options && item.options.length > 0 && (
                    <p className="text-sm text-gray-500">
                      {item.options.map(opt => `${opt.name}: ${opt.value}`).join(', ')}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="col-span-2 flex items-center justify-center">
                ${item.price ? item.price : '0.00'}
              </div>
              
              <div className="col-span-3 flex items-center justify-center">
                <div className="flex items-center border rounded">
                  <button 
                    className="px-3 py-1 border-r hover:bg-gray-100"
                    onClick={() => handleQuantityChange(item.cart_item_id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{item.quantity}</span>
                  <button 
                    className="px-3 py-1 border-l hover:bg-gray-100"
                    onClick={() => handleQuantityChange(item.cart_item_id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="col-span-1 flex items-center justify-end">
                ${item.price ? (item.price * item.quantity) : '0.00'}
              </div>
              
              <div className="col-span-1 flex items-center justify-center">
                <button 
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveItem(item.cart_item_id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))} */}

          {/* <div className="mt-6 flex flex-col items-end">
            <div className="text-xl font-bold text-gray-800 mb-4">
              Total ({itemCount} {itemCount === 1 ? 'item' : 'items'}): ${total}
            </div>
            
            <div className="flex gap-4">
              <button 
                className="bg-red-100 text-red-700 py-2 px-4 rounded hover:bg-red-200 transition-colors"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              
              <button 
                className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors"
                onClick={() => window.location.href = '/checkout'}
              >
                Proceed to Checkout
              </button>
            </div>
          </div> */}
          <OrderDetailes/>
        </>
      )}
    </div>
    </>
}