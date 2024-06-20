import { addItemToWishlist, removeItemFromWishlist } from '@/app/store/features/wishlist';
import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';


const HeartIcon = () => {

    const toas = ()=>{
      toast('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  const product =useSelector(state=>state.productPage.product)
  const items = useSelector(state=>state.wishlist.items)
  const dispatch =useDispatch()
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    const check=items.find(item=>item.id==product.id)
    console.log('check finde', check)
if(!check){
  dispatch(addItemToWishlist(product))
}else{
  dispatch(removeItemFromWishlist(product.id))

}
    setIsFavorite(!isFavorite);
  };
  useEffect(() => {
    const check=items.find(item=>item.id==product.id)
    check&& setIsFavorite(true);

 

  
    return () => {
      
    }
  }, [])
  

  return  <>
   <div className=" cursor-none rounded-full bg-white flex  items-center  justify-center  h-8 w-8 ring-2 ring-gray-500">

    <svg
      onClick={toggleFavorite}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={isFavorite ? "red" : 'gray'}
      stroke={isFavorite ? "red" : "gray"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ cursor: 'pointer' }}
      className="w-5 h-5 cursor-none "
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </div>

</>
};

export default HeartIcon;
