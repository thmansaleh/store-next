import SetNave from '../components/SetNave'
import OrderDetailes from './OrderDetailes'
import Item from './item/Item'

export default function Cart(){

  return <div className='cart relative'>
    <SetNave name='cart' show={false}/>
   <Item/>
   <Item/>
   <Item/>
   {/* <EmptyCart/> */}
   <OrderDetailes/>
   </div>
}
