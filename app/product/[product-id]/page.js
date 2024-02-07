import Flip from '@/app/components/flip/Flip'
import Slider from '../Slider'
import ProductInformation from '@/app/product/information/ProductInformation'
import AddToCartButton from "@/app/product/AddToCartButton"
import Description from '../description/Description'
import FreeDelivery from '@/app/product/FreeDelivery'
import Size from '@/app/product/Size'
import SetNave from '@/components/SetNave'

export default function ProductId() {
  return <> 
    <SetNave show={false}/>
    <Slider/>
<div className="p-2">

    <ProductInformation/>
    <Size/>
<FreeDelivery/>
    <Flip/>
    <Description/>
<AddToCartButton/>
</div>
   
    </>
}
