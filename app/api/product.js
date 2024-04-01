
"use client"
import useSWR from 'swr'
export function useProduct() {
const fetcher =fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    if (!response.ok) {
      throw new Error("failed")
    }
    return response.json();
  })
  .catch(error => {
    throw new Error("false")
  });



  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos/1', fetcher)
 
  return {
    data,
    isLoading,
    isError: error 
  }
}
