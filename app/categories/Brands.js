'use client'
import Link from 'next/link'
import { swrSectionCategory } from '../libs/swr/sectionCategory'
import StoriesLoading from '../home/StoriesLoading'
 export default function Brands(){ 
    const {data,error,isLoading} =swrSectionCategory()

  const fakeData =[
    {
        img:'http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.dummyjson.com%2Fproducts%2Fimages%2Fwomens-dresses%2FCorset%2520Leather%2520With%2520Skirt%2F4.png&w=1200&q=75',
        title:'لاكوست',
        subTitle:'تصفح قائمة العطور',
        route:'/'
    },
    {
        img:'https://img.tamara.co/sM1I2Ym48J6_bg4Y7O5zlokABYDRJ5Nx6utBy55SEcI/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50LzQ0OWI3M2YzLWZjNTItNGE3ZS1iMWI5LTQyNTI4YzA3ZmNkYy0xNjg5NzgyMzc3LnBuZw.jpg',
        title:'بوما',
        subTitle:'جميع انواع العبايات',
        route:'/'

    },
    {
        img:'https://img.tamara.co/liWiD59Vb0av-KsX21aMJap1bLH8KMHVTmNCVhWSRaA/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50L2NjYjkwMjdiLWMzYzUtNGNiNi1iZWZiLWMxMmQ0YzRkNTA0OS0xNjk1NzE4NTY0LnBuZw.jpg',
        title:'نمشي ',
        subTitle:'ساعات ذكية',
        route:'/'

    },
    {
        img:'https://img.tamara.co/IxsyrD3UIMkl81ArNCo3gorHyKR6HfNMJgjaZ-xU78o/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50LzQzNzY1ZDQ3LTYxNTUtNGU5MS05MzcxLTE5MWQzZGNhMjM0Yy0xNjg5NzgwMDg2LnBuZw.jpg',
        title:' نكست',
        subTitle:'',
        route:'/'

    },
    {
        img:'https://img.tamara.co/aYoLQb7qD2hxQ3ytz9HBFtecK0zvLjQxDygIt-5nRxA/rs:fill:55:55:0:sm/dpr:2//aHR0cHM6Ly9jZG4udGFtYXJhLmNvL21lcmNoYW50L2M5OTFhMGNkLThkZDUtNGViZS05ZmIxLWNmOWVmMmRmZDgzZi0xNjg5NzgwNDcwLnBuZw.jpg',
        title:' ستايلي',
        subTitle:'',
        route:'/'

    },
 
]
if(isLoading) return <StoriesLoading/>
if(error) return 'error........'
  
   return <div>      
  <h1 className="block text-sm font-semibold p-2">تسوق حسب البراندات</h1>
  <div className="flex justify-start gap-y-4 gap-x-5 bg-white flex-wrap py-2 ">
   { fakeData.map((e,i)=>{
    return <Link key={i}  href='./brands/2'
    className='flex flex-col items-center space-y-2   '>
   <div className='ring-2 ring-gray-100 flex overflow-hidden justify-center items-center rounded-full w-14 h-14 '>
    <img src={e.img} className='object-contain h-full ' />
   </div>
   <div className='text-sm font-semibold text-black'>{e.title}</div>

   
    </Link>
   })}
  </div>
</div>
 }
