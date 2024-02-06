import Flip from '@/app/components/flip/Flip'
import Slider from '../Slider'
import ProductInformation from '@/app/product/information/ProductInformation'
import Description from '../description/Description'
import FreeDelivery from '@/app/product/FreeDelivery'
import Size from '@/app/product/Size'
export default function ProductId() {
  return <> 
    <Slider/>
    <ProductInformation/>
    <Size/>
<FreeDelivery/>
    <Flip/>
    <Description/>

   
    </>
}
