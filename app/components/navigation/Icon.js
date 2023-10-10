"use client"

import { useDispatch,useSelector } from 'react-redux';
import { setNav } from '@/app/store/features/navigationSlice';

function Icon({svg,iconParent,dot,name}) {
    const dispatch = useDispatch();
    // const svgId = document.getElementById(`${useSelector(state => state.navigation.name)}`);
    // svgId?svgId.style.fill='black':null


    const setPage =()=>{
        dispatch(setNav(name))

    }
  return (
    <div onClick={setPage}
     style={iconParent?{marginBottom:'8px'}:{marginBottom:'0px'}}>
        {svg}
        <div style={iconParent?{bottom:'0'}:{bottom:'-50%'}} className="dot"></div>
    </div>
  )
}

export default Icon