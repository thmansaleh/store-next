"use client"
import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import SimilarProducts from"@/app/product/SimilarProducts"
export default function BottomSheett() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
onDismiss={()=>setOpen(false)}
header={<h1 className="text-md font-semibold ">منتجات مشابهه</h1>}
 open={open}>

<SimilarProducts/>

</BottomSheet>
    </>
  )
}