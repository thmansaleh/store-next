import SetNave from '../components/SetNave'
import OrderDetailes from './OrderDetailes'
import Item from './item/Item'

export default function Cart(){

  return <div className='cart'>
    <SetNave name='cart' show={true}/>
   <Item/>
   <Item/>
   <Item/>
   {/* <EmptyCart/> */}
   <OrderDetailes/>
   </div>
}
