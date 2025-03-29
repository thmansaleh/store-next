import BackArrowBtn from '@/app/components/BackArrowBtn'
import Addresses from './Addresses'
import ShippingAddress from '@/app/components/addresses/ShippingAddress'

function page() {
  return <>
  <BackArrowBtn/>
  <div className='p-4'>
  {/* <Addresses/> */}
<ShippingAddress/>
  </div>

  </>
}

export default page