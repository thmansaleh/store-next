"use client"
import SetNave from '@/app//components/SetNave'
import SearchInput from "@/app/components/SearchInput"
import FristSlider from './FristSlider'
import Products from'@/app/home/Products'
import SwiperFreemodeSection from './SwiperFreemodeSection'
import StoresSwiper from './StoresSwiper'
import Commitments from "./commitments/Commitments"
import FreeReturnSection from "./free-return-section/FreeReturnSection"
export default function Home({products}){
  return <>
    {/* <SetNave name='/' display={true}/> */}
<SearchInput/>
<FristSlider/>



  <Commitments/>
<FreeReturnSection/>
<StoresSwiper/>
<SwiperFreemodeSection/>



<Products />



</>

}