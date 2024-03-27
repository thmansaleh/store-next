"use client"

import { useDispatch } from "react-redux";
import { removeItemFromCart} from "@/app/store/features/cart";
import { increaseQuantity} from "@/app/store/features/cart";


import { decreaseQuantity} from "@/app/store/features/cart";
import DeleteButton from "./DeleteButton"
import {addItemToWishlist} from "@/app/store/features/wishlist"
export default function Items({cartItems}){

    const cartItemss= cartItems 

    const dispatch = useDispatch()

const remove =(id) =>{
dispatch(removeItemFromCart(id))
}


const increase = (id) =>
 { 
dispatch(increaseQuantity(id))
}


const decrease = (id) =>
 { 
dispatch(decreaseQuantity(id))
}
const addToWishlist =(item)=>{
console.log("click")
dispatch(addItemToWishlist(item))
}




 return <div className="select-none">

  {cartItemss.map((e,i) => { 

return <div key={i} className=" transition-all  my-1.5 rounded-lg   border w-full flex border-gray-300 justify-between items-center bg-white p-3">
      <img className="object-contain w-24 mx-2" loading="lazy" src={e.thumbnail} />
      <div className>
        <h3 className="text-sm line-clamp-2">{e.description}</h3>






<div className="flex items-center justify-between">

        <span className="text-md my-2 inline-block font-semibold">{e.price} AED</span>


  <svg onClick={addToWishlist(e)}
className="h-5 w-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
  <path d="m15,5.5c0,.276-.224.5-.5.5h-6c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h6c.276,0,.5.224.5.5Zm0,5c0-.276-.224-.5-.5-.5h-6c-.276,0-.5.224-.5.5s.224.5.5.5h6c.276,0,.5-.224.5-.5Zm-10,4c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm0-10c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm0,5c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm8.5,13.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h10c1.93,0,3.5,1.57,3.5,3.5v6c0,.276.224.5.5.5s.5-.224.5-.5v-6c0-2.481-2.019-4.5-4.5-4.5H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-5-8c-.276,0-.5.224-.5.5s.224.5.5.5h1c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1Zm15.483,1.451c0,2.562-3.148,5.378-5.025,6.828-.287.223-.63.333-.975.333s-.688-.11-.975-.333c-1.876-1.45-5.025-4.266-5.025-6.828,0-1.913,1.458-3.47,3.25-3.47,1.145,0,2.161.516,2.761,1.334.589-.826,1.586-1.334,2.739-1.334,1.792,0,3.25,1.557,3.25,3.47Zm-1,0c0-1.361-1.009-2.47-2.25-2.47-1.116,0-2.019.656-2.246,1.632-.104.453-.869.453-.974,0-.224-.961-1.161-1.632-2.28-1.632-1.241,0-2.25,1.108-2.25,2.47,0,2.276,3.549,5.196,4.637,6.037.214.166.512.166.726,0,1.088-.841,4.637-3.761,4.637-6.037Z"/>
</svg>
</div>











        <div className="b flex justify-between items-center  ">
          <div>
            <button onClick={() => increase(e.id)} className="h-8 w-8 rounded-full border border text-xl leading-none text-black hover:bg-black hover:text-white">+</button>
            <input disabled className="mx-1 h-8 w-14 appearance-none rounded-2xl border border-gray-600 text-center outline-none" type="number" value={e.quantity}  /><button onClick={() => decrease(e.id)} className="h-8 w-8 rounded-full border border text-xl leading-none  hover:bg-black hover:text-white">-</button>
          </div>
          










 <svg onClick={() => remove(e.id)} className="fill-red-500          h-5 w-5" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
            <path fillRule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clipRule="evenodd" />
          </svg>











        </div>
      </div>
    </div>


}
)

}
</div>


}