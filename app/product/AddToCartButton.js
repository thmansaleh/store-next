"use client"
import { useDispatch } from "react-redux";
import { addItemToCart} from "@/app/store/features/cart";

export default function AddToCartButton({item}){
    const dispatch = useDispatch()

return <div onClick={() => dispatch(addItemToCart(item))}
 className="w-full bg-white select-none p-3 sticky bottom-0">
  <button className="focus:outline-none  rounded-lg w-full bg-black text-sm font-semibold text-white py-3 hover:bg-transparent active:bg-transparent">إضافة الى السلة</button>
</div>

}