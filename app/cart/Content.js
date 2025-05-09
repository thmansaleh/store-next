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
import RedirectToCheckoutPageBtn from './RedirectToCheckoutPageBtn';
import { getOrCreateSessionId } from '../utils/generateSessionId';

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
      // const sessionId = localStorage.getItem('session_id') || 
      //                  `guest_${Math.random().toString(36).substring(2, 15)}`;
      
      const sessionId = getOrCreateSessionId()
      // Store session ID if it's new
   
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
          <OrderDetailes/>
          <RedirectToCheckoutPageBtn/>
        </>
      )}
    </div>
    </>
}