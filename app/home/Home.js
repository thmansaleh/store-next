"use client"
import SetNave from '@/app//components/SetNave'
import Header from "@/app/components/header/Header"
import FristSlider from './FristSlider'
import Products from'@/app/home/Products'
import SwiperFreemodeSection from './SwiperFreemodeSection'
import StoresSwiper from './StoresSwiper'
import Commitments from "./commitments/Commitments"
import FreeReturnSection from "./free-return-section/FreeReturnSection"
export default function Home({products}){
  return <>
    {/* <SetNave name='/' display={true}/> */}
<Header/>
<FristSlider/>



  <Commitments/>
<FreeReturnSection/>
<StoresSwiper/>




<Products />



</>

}