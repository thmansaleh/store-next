"use client"

import { useDispatch, useSelector } from "react-redux";
import { 
  removeFromCart, 
  updateCartItemQuantity,
  selectCartId,
  selectCartItems
} from "../store/features/cart";
import { addItemToWishlist } from "@/app/store/features/wishlist";
import Image from "next/image";
import { Heart, Trash2, Plus, Minus } from "lucide-react";

export default function Items() {
  const dispatch = useDispatch();
  const cartId = useSelector(selectCartId);
  const cartItems = useSelector(selectCartItems);
  const wishlistItems = useSelector(state => state.wishlist.items);

  const remove = (itemId) => {
    dispatch(removeFromCart({
      cart_id: cartId,
      cart_item_id: itemId
    }));
  };

  const increase = (itemId, currentQuantity) => {
    dispatch(updateCartItemQuantity({
      cart_id: cartId,
      cart_item_id: itemId,
      quantity: currentQuantity + 1
    }));
  };

  const decrease = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateCartItemQuantity({
        cart_id: cartId,
        cart_item_id: itemId,
        quantity: currentQuantity - 1
      }));
    }
  };

  const addToWishlist = (newItem) => {
    if (wishlistItems.length > 0) {
      const exists = wishlistItems.some(item => item.id === newItem.id);
      if (!exists) {
        dispatch(addItemToWishlist(newItem));
      }
    } else {
      dispatch(addItemToWishlist(newItem));
    }
  };

  return (
    <div className="space-y-4">
      {cartItems.map((item, i) => (
        <div 
          key={item.cart_item_id || i} 
          className="relative flex gap-4 p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
        >
          {/* Product Image */}
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50">
            <Image
              fill
              className="object-contain"
              loading="lazy"
              src={item.product_image} 
              alt={item.product_name || "Product"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          {/* Product Details */}
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {item.product_name}
                </h3>
                {item.description && (
                  <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
              
              <button 
                onClick={() => addToWishlist(item)}
                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Price and Quantity Controls */}
            <div className="mt-auto pt-3 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">
                {item.price} {item.currency || "AED"}
              </span>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded-full">
                  <button
                    onClick={() => decrease(item.cart_item_id, item.quantity)}
                    className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-full transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" strokeWidth={2} />
                  </button>
                  <span className="w-10 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increase(item.cart_item_id, item.quantity)}
                    className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-full transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" strokeWidth={2} />
                  </button>
                </div>

                <button
                  onClick={() => remove(item.cart_item_id)}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}