"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { setNav } from "../store/features/navigationSlice";

function SetNave({name,display}) {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setNav({pageName:name,display:display})) 

    }, []);
}

export default SetNave
