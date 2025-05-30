"use client"

import SwiperCommitments from "./Swiper"
export default function Commitments(){


return <div className="px-2 my-4">
<div className="w-full bg-emerald-600 text-white h-10 rounded-md    px-2   text-sm font-semibold flex justify-between items-center">
  <div className="flex items-center gap-x-2 ">
    <svg className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={512} height={512}><path d="M19.944,2.642,12,.009,4.056,2.642A3,3,0,0,0,2,5.49V12c0,7.524,9.2,11.679,9.594,11.852l.354.157.368-.122C12.712,23.755,22,20.577,22,12V5.49A3,3,0,0,0,19.944,2.642Zm-7.5,11.347a1.873,1.873,0,0,1-1.335.553h-.033a1.872,1.872,0,0,1-1.345-.6l-2.306-2.4L8.868,10.16,11.112,12.5l5.181-5.181,1.414,1.414Z" /></svg>
    <span>التزاماتنا</span>
  </div>


<div className="h-full w-fit">  <SwiperCommitments/>
</div> 

</div>
</div>

}