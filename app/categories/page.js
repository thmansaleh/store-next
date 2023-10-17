

import './style.css'
import Category from './Category'
//import SetNave from '../components/SetNave'
import {SetNav} from '../components/setNave'
export default function Categories(){
  SetNav("categories new function')
  return <div className="categories" >
      <Category 
      name="عبايات ملونة"
      img="https://kitchen.sayidaty.net/uploads/small/f5/f5275c258d4c03b1fc8b1ab888ec642a_w240_h240.jpg"
  
    />
        </div>
}
