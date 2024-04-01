
"use client"
import useSWR from 'swr'
export function useProduct(url) {
const fetcher =fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    throw new Error('Error load');
  });



  const { data, error, isLoading } = useSWR(url, fetcher)
 
  return {
    data,
    isLoading,
    isError: error 
  }
}
