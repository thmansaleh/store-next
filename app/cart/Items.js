"use client"

import { useDispatch } from "react-redux";
import { removeItemFromCart} from "@/app/store/features/cart";
import { increaseQuantity} from "@/app/store/features/cart";
import DeleteButton from "./DeleteButton"
export default function Items({cartItems}){

    const cartItemss= cartItems 

    const dispatch = useDispatch()

const remove =(id) =>{
dispatch(removeItemFromCart(id))
}


const increase = (id) => { dispatch(increaseQuantity(id))}





 return <div>

  {cartItemss.map((e,i) => { 

return <div key={i} className=" transition-all  my-1.5 rounded-lg   border w-full flex border-gray-300 justify-between items-center bg-white p-3">
      <img className="object-contain w-24 mx-2" loading="lazy" src={e.thumbnail} />
      <div className>
        <h3 className="text-sm line-clamp-2">{e.description}</h3>
        <span className="text-md my-2 inline-block font-semibold">{e.price} AED</span>
        <div className="b flex justify-between items-center  ">
          <div>
            <button className="h-8 w-8 rounded-full border border text-xl leading-none text-black hover:bg-black hover:text-white">+</button>
            <input className="mx-1 h-8 w-14 appearance-none rounded-2xl border border-gray-600 text-center outline-none" type="number" max={20} min={1} defaultValue={1} /><button onClick={() => increase(i)} className="h-8 w-8 rounded-full border border text-xl leading-none text-primary hover:bg-black hover:text-white">-</button>
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