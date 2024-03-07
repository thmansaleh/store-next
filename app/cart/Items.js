"use client"
import {useRef} from "react"

import DeleteButton from "./DeleteButton"
export default function Items({cartItems}){

    const cartItemss= cartItems 
const itemContainer =useRef(null)
const containerEffect =() =>{
itemContainer.classList.add("scale-0")
}

 return <div>

  {cartItemss.map((e,i) => { 

return <div ref={itemContainer} key={i} className=" transition-all  my-1.5 rounded-lg   border w-full flex border-gray-300 justify-between items-center bg-white p-3">
      <img className="object-contain w-24 mx-2" loading="lazy" src={e.thumbnail} />
      <div className>
        <h3 className="text-sm line-clamp-2">{e.description}</h3>
        <span className="text-md my-2 inline-block font-semibold">{e.price} AED</span>
        <div className="b flex justify-between items-center  ">
          <div>
            <button className="h-8 w-8 rounded-full border border text-xl leading-none text-black hover:bg-black hover:text-white">+</button>
            <input className="mx-1 h-8 w-14 appearance-none rounded-2xl border border-gray-600 text-center outline-none" type="number" max={20} min={1} defaultValue={1} /><button className="h-8 w-8 rounded-full border border text-xl leading-none text-primary hover:bg-black hover:text-white">-</button>
          </div>
          
<DeleteButton id={e.id} containerEffect={containerEffect}/>



        </div>
      </div>
    </div>


}
)

}
</div>


}