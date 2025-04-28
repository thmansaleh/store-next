'use client'

import { useDispatch } from "react-redux"
import { redirect } from 'next/navigation'
import { openModal } from "../store/features/AuthModal";
import AuthModal from "../account/login/AuthModal";

function RedirectToCheckoutPageBtn() {
    const dispatch=useDispatch()
    const handleOpenModal = () => {
        const userToken= localStorage.getItem ('userToken')
      
if(userToken){
redirect("./checkout")
}else{
dispatch(openModal());
} }
  return <>
  <AuthModal/>
    <button onClick={handleOpenModal} className="md:w-24 w-full bg-black text-white text-md font-semibold rounded-lg py-2 my-2">
      الدفع 
    </button>
  </>
 
}

export default RedirectToCheckoutPageBtn