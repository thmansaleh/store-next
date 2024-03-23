"use client"
import { useDispatch } from "react-redux";
import { addItemToCart} from "@/app/store/features/cart";
import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import SimilarProducts from"@/app/product/SimilarProducts"

export default function AddToCartButton({item}){
    const dispatch = useDispatch()

return <div onClick={() => dispatch(addItemToCart(item))}
 className="w-full bg-white select-none p-3 sticky bottom-0">
  <div className="focus:outline-none  rounded-lg w-full bg-black text-sm font-semibold text-white py-3  ">إضافة الى السلة</div>
</div>

}