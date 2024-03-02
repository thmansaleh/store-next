import Home from '@/app/home/Home'
export default function Page() {
const products= async () => {
     const data =   await fetch('https://dummyjson.com/products')
    const products = await data.json()
    return products.products

    }
console.log(products)
  return  <Home products={products}/>
}
