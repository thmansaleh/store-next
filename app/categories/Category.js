'use client'
import Link from 'next/link'

import { swrSectionCategory } from '../libs/swr/sectionCategory'
import StoriesLoading from '../home/StoriesLoading'
 export default function Categories(){ 
    const {data,error,isLoading} =swrSectionCategory()


  const fakeData =[
    {
        img:'https://media.6media.me/media/catalog/product/5/0/50486478_242_300_hb_b2c_sho_01-valid_until_2025310.jpg',
        title:'نساء',
        subTitle:'نساء',
        route:'/'
    },
    {
        img:'https://media.6media.me/media/catalog/product/5/0/50473168_330_350_hb_b2c_sho_01-valid_until_2025517.jpg',
        title:'رجال',
        subTitle:'جميع انواع العبايات',
        route:'/'

    },
    {
        img:'https://media.6media.me/media/catalog/product/cache/51d09e6ba6f1fb68e23a90a2eb71ff17/n/w/nw_2907svsv.jpg',
        title:'ساعات ',
        subTitle:'ساعات ذكية',
        route:'/'

    },
    {
        img:'https://media.6media.me/media/catalog/product/5/0/5059695917150-1.jpg',
        title:' كابات',
        subTitle:'',
        route:'/'

    },
    {
        img:'https://media.6media.me/media/catalog/product/cache/51d09e6ba6f1fb68e23a90a2eb71ff17/6/1/614514335024_1.jpg',
        title:' عطور',
        subTitle:'',
        route:'/'

    },
    {
        img:'https://media.6media.me/media/catalog/product/cache/51d09e6ba6f1fb68e23a90a2eb71ff17/b/b/bbb04974_gold_xl.jpg',
        title:' مجوهرات',
        subTitle:'',
        route:'/'

    },
 
]
  
if(isLoading) return <StoriesLoading/>
if(error) return '............errore'
   return <div>      
  <h1 className="block text-sm font-semibold p-2">تسوق حسب الفئة</h1>
  <div className="flex justify-start gap-y-4  gap-x-5 bg-white flex-wrap py-2 ">
   { data.products.map((product,i)=>{
    return <Link key={product.id} href='./brands/1'
    className='flex flex-col items-center space-y-2   '>
   <div className='ring-2 ring-gray-100 flex overflow-hidden justify-center items-center rounded-full w-14 h-14 '>
    <img src={product.thumbnail} className='object-cover ' />
   </div>
   <div className='text-sm font-semibold text-black'>{product.brand}</div>

   
    </Link>
   })}
  </div>
</div>
 }
