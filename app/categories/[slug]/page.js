import { getCategoryProducts } from "@/app/utils/categories"
import Content from "./Content"
import Header from "@/app/components/header/Header"

async function page({params}) {
    const {slug}=await params
    const data= await getCategoryProducts(slug)
    if(data.error) return <div className="mt-12 text-center to-gray-800 text-xl font-semibold">لاتوجد منتجات</div>
  return <>
  <Header/>
  <Content data={data}/>
  </>
}

export default page