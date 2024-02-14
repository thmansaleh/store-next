
import SetNave from '@/app//components/SetNave'
import SearchInput from "@/app/components/SearchInput"
import Products from'@/app/home/Products'
export default function Home(){
  return <>
    <SetNave name='/' show={true}/>
<SearchInput/>
<Products/>

</>

}