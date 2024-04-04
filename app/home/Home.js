
import SetNave from '@/app//components/SetNave'
import SearchInput from "@/app/components/SearchInput"
import FristSlider from './FristSlider'
import Products from'@/app/home/Products'
import SwiperFreemodeSection from './SwiperFreemodeSection'
import MenProducts from './MenProducts'
import StoresSwiper from './StoresSwiper'

export default function Home({products}){
  return <>
    <SetNave name='/' display={true}/>
<SearchInput/>
{/* <FristSlider/> */}
<StoresSwiper/>
<SwiperFreemodeSection/>


<Products />
{/* <MenProducts/> */}



</>

}