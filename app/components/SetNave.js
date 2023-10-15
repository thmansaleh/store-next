"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { setNav } from "../store/features/navigationSlice";

function SetNave({name,show}) {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setNav({pageName:name,show:show})) 

    }, []);
}

export default SetNave
