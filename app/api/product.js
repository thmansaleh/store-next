import useSWR from 'swr'
async function product(url) {
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



  const { data, error, isLoading } = useSWR('url', fetcher)
 console.log(data)
  return {
    data,
    isLoading,
    isError: error 
  }
}
export product 