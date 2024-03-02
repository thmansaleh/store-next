
import SetNave from '@/app//components/SetNave'
import SearchInput from "@/app/components/SearchInput"
import FristSlider from './FristSlider'
import Products from'@/app/home/Products'
export default function Home(){
  return <>
    <SetNave name='/' show={true}/>
<SearchInput/>
<FristSlider/>

<div className="p-2 flex wrap justify-around bg-white  flex-wrap">
<Products/>
</div>


</>

}