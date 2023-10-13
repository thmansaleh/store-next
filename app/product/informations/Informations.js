"use client"
import Filp from '../../../Layout/filp/Flip'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Information = () => {

  const notify = () =>  toast.success('Added Successful', {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });


  return <div className="product-information">
  <span>title</span>
  <span className="product-description">ROUND TOE LOW TOP SNEAKERS</span>
  <div className="product-prices-container">
    <div>
      <span>200 AED</span>
      <span>22 AED</span>
    </div>
    <span>On Sale 33 Off</span>
  </div>
  <div className="product-delivery-title">
    <span>Delivery by </span>
    <span>10 May, Wednesday</span>
  </div>
  <Filp/>
  <button onClick={()=>{

    notify()

  }}
  >ADD TO BAG</button>
  <ToastContainer />

</div>
  
}

export default import Informations
