


import Home from '@/app/home/Home'

const products= async () => {
     const data =   await fetch('https://dummyjson.com/products')
    const products = await data.json()
    return products.products

    }
export default async function Page() {
const products = await products()
// console.log(products)
  return  <Home products={products}/>
}
