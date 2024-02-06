
import Categories from './Categories'
import Sections from './Sections'
import SetNave from '../components/SetNave'

export default function () {

  return <>
          <SetNave name='categories' show={true}/>

    <div dir="rtl" className="bg-gray-100 w-full  flex h-dvh">
 

<Categories/>





<div className="w-full overflow-auto">
<span className="block text-sm font-semibold p-2">تسوق حسب الفئة</span>
<Sections/>
</div>





</div>
  </>
}
