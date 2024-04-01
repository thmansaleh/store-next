
"use client"
import useSWR from 'swr'
export function useProduct() {
const fetcher =fetch("https://mobapp.rcuae.ae/MOBAPP_V3_PROD/ERC_MOB_V2_WS.asmx/local_aids_file_info?p_user_id=139622&Lang=AR")
  .then(response => {
    if (!response.ok) {
      throw new Error("failed")
    }
    return response.json();
  })
  .catch(error => {
    throw new Error("false")
  });



  const { data, error, isLoading } = useSWR("https://mobapp.rcuae.ae/MOBAPP_V3_PROD/ERC_MOB_V2_WS.asmx/local_aids_file_info?p_user_id=139622&Lang=AR", fetcher)
 
  return {
    data,
    isLoading,
    isError: error 
  }
}
