"use client"

import { useSelector } from "react-redux"
import RecentSearch from "./RecentSearch"
import SearchInput from "./SearchInput"
import SearchTrends from "./SearchTrends"
import ProductsList from "./ProductsList"


export default function Serach(){
  const searchValue=useSelector(state=>state.search.searchValue)

if (searchValue) {
  return <>
<SearchInput/>
<ProductsList/>
  
  </>
}
return < >
<SearchInput/>
<SearchTrends/>
{/* <RecentSearch/> */}

</>

}