import Flip from '@/app/components/flip/Flip'
import Slider from '../Slider'
import ProductInformation from '@/app/product/information/ProductInformation'
import AddToCartButton from '@/app/product/AddToCartButton'
import Description from '../description/Description'
import FreeDelivery from '@/app/product/FreeDelivery'
import Size from '@/app/product/Size'
//import SetNave from '@/components/SetNave'


const data= async () => {
     const product=   await fetch('https://dummyjson.com/products/1')
    const productData = await data.json()
    return productData

    }


export default function ProductId() {
  return <> 
    
    <Slider images={data.images}/>
<div className="p-2">

    <ProductInformation product={data}/>
    <Size/>
<FreeDelivery/>
    <Flip/>
    <Description description={data.description}/>

</div>
<AddToCartButton item={data}/>
   
    </>
}
