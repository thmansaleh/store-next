"use client"
import { useRouter } from 'next/navigation'

import { useDispatch,useSelector } from 'react-redux';
import { setNav } from '@/app/store/features/navigationSlice';
import {useEffect, useRef } from 'react';

function Icon({svg,iconParent,dot,name}) {

  const router = useRouter()
    const dispatch = useDispatch();
    const pageName = useSelector(state => state.navigation.name);
    const icon = useRef(null)
    const setPage =()=>{ router.push(`/${name}`); }
    useEffect(() => {  
      dot?icon.current.childNodes[0].style.fill='black':icon.current.childNodes[0].style.fill='#A8A9B6'
    }, [pageName]);
  return (
    <div ref={icon}  onClick={() => router.push(`/${name}`)}
     style={iconParent?{marginBottom:'8px'}:{marginBottom:'0px'}}>
        {svg}
        <div style={iconParent?{bottom:'0'}:{bottom:'-50%'}} className="dot"></div>
    </div>
  )
}

export default Icon