'use cleint'

import axios from "axios";
import { useState } from "react";
import useSWR from "swr";
import Suggestion from "./Suggestion";
import { useDispatch ,useSelector} from "react-redux";
import { setSearcValue } from "../store/features/search";

export default function SearchInput() {
    const dispatch=useDispatch()
    const searchValue=useSelector(state=>state.search.searchValue)
    return  <div className="w-full  sticky top-0    py-4  z-50 p-2 px-3 bg-white border-b border-zinc-200">

        
    <div className="flex justify-center items-center gap-x-2">
    <input   value={searchValue}
        onChange={(e) => dispatch(setSearcValue(e.target.value))} placeholder="بحث" type="search" className="w-3/4   bg-gray-100 rounded outline-0 px-3 py-2 text-sm  " />
            <button className=" text-xs font-semibold ">بحث</button>

    </div>
    </div>
}