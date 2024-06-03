
import Brands from './Brands'
import Category from './Category'
import Sections  from "./Sections"
//import Brands from './Brands'
import SetNave from '@/app/components/SetNave'

export default function Categories() {

  return <>
          {/* <SetNave name='categories' display={false}/> */}

     <div >
<Sections/>
  <div className="bg-white p-2 space-y-4 col-span-3">
<Category/>
<Brands/>
</div>

  
</div>
  </>
}
