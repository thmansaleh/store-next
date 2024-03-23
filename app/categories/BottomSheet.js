"use client"
import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'

// if setting up the CSS is tricky, you can add this to your page somewhere:
// <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css" crossorigin="anonymous">
import 'react-spring-bottom-sheet/dist/style.css'

export default function BottomSheett() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
onDismiss={()=>setOpen(false)}
header={<h1 className="text-md font-semibold ">اللغة</h1>}
 open={open}>

يرجى اختيار  اللغة المفضة

</BottomSheet>
    </>
  )
}