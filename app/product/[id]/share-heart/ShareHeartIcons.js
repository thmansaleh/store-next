"use client "

import HeartIcon from "./Heart"
import Share from "./Share"


export default function ShareHeartIcons(){

return <div className=" z-50
    absolute inline-block  top-3 end-3 -60 space-y-3 
    ">
      <Share/>
    <HeartIcon/>
</div>

}