import { getProductById } from "@/app/utils/products"
import Content from "./Content"

async function page({params}) {
const {id}=await params
const data =await getProductById(id)
// console.log(data)
  return <Content product={data}/>
}

export default page