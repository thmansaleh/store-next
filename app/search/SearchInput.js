'use cleint'

import axios from "axios";
import { useState } from "react";
import useSWR from "swr";
import Suggestion from "./Suggestion";

export default function SearchInput() {
    const [search, setSearch] = useState('');

    const url =`https://sugg.theluxurycloset.com/index/get?q=${search}&pro_sugg=1`
    const fetcher = async () => {
       const response = await axios.get(url);
    console.log(response.data)
       return response.data;
     };
    const { data, error,isLoading } = useSWR(url, fetcher, {
      keepPreviousData: true
    });

    return  <div className="w-full  bg-white sticky top-0    py-4   p-2 px-3 bg-white border-b border-zinc-200">

        
    <div className="flex justify-center items-center gap-x-2">
    <input   value={search}
        onChange={(e) => setSearch(e.target.value)} placeholder="بحث" type="search" className="w-3/4   bg-gray-100 rounded outline-0 px-3 py-2 text-sm  " />
            <button className=" text-xs font-semibold ">بحث</button>

    </div>
<div className=" divide-y divide-gray-200">
    {/* {isLoading&& <h1>loading...</h1>} */}
    {error&& <h1>error...</h1>}
    {data && <Suggestion data={data.data.suggestion}/>}

</div>
    </div>
}