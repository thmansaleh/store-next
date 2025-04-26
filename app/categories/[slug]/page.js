import { getCategoryProducts } from "@/app/utils/categories"
import Content from "./Content"

async function page({params}) {
    const {slug}=await params
    const data= await getCategoryProducts(slug)
    if(data.error) return <div className="mt-12 text-center to-gray-800 text-xl font-semibold">لاتوجد منتجات</div>
  return <Content data={data}/>
}

export default page