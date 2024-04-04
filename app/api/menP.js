


'use client'

import axios from 'axios';

import useSWR from 'swr'
//  import { fetchProduct } from '@/app/api/product';

export function menP (){
 const url =
'https://theluxurycloset.com/wapi/api/web/v3/products?category_level_one_ids=men&initial_params=category_level_one_ids%3Dmen&page=1&sizes=72-81&is_seo=1&countryCode=AE&ctr_ranking=1&collection_ranking=1&multifilter=1&language=ar&country=AE'
const fetchProducts = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetchProducts)
return {
  data,
  isLoading,
   error
}

}
 
