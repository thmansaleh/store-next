"use client"

import { useDispatch } from "react-redux";
import { addItemToCart} from "@/app/store/features/cart";
import { useState , useRef} from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import SimilarProducts from"@/app/product/SimilarProducts"

export default function AddToCartButton({item}){
const addRef =useRef(null)
    const dispatch = useDispatch()
  const [open, setOpen] = useState(false)


return <>

 <div ref={addRef} onClick={() =>{ 
addRef.current.innerHtml="loading..."
dispatch(addItemToCart(item))
setOpen(true)
}

}
 className="w-full bg-white select-none p-3 sticky bottom-0">
  <div className="focus:outline-none  rounded-lg w-full bg-black text-sm font-semibold text-white py-3 text-center  ">إضافة الى السلة</div>
</div>

      <BottomSheet
onDismiss={()=>setOpen(false)}
header={<h1 className="text-md font-semibold ">منتجات مشابهه</h1>}
 open={open}>

<SimilarProducts/>

</BottomSheet>
</>

}