


import Home from '@/app/home/Home'

const productss= async () => {
     const data =   await fetch('https://dummyjson.com/products')
    const products = await data.json()
    return products.products

    }
    
export default async function Page() {
const products = await productss()
// console.log(products)
  return  <Home products={products}/>
}
