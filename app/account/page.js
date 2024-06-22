import Link from 'next/link'

import SetNave from "../components/SetNave"

import FirstSecton from "./FirstSecton"
import Section from './Section'
import Header from './header/Header'
 export default function page() {

 return (
    <>
    {/* <SetNave name='account' display={true}/> */}
 
<div className=" p-3 h-f   dark:bg-gray-700">
 
  <Header/>
<FirstSecton/>
<Section/>

 

</div>

    </>
 )
}


