
import SetNave from '@/app//components/SetNave'
import SearchInput from "@/app/components/SearchInput"
import FristSlider from './FristSlider'
import Products from'@/app/home/Products'

export default function Home({products}){
  return <>
    <SetNave name='/' display={true}/>
<SearchInput/>
<FristSlider/>

<div className="p-2 flex  justify-around bg-white  flex-wrap">
<Products products={products}/>
</div>


</>

}