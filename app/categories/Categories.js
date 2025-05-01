"use client"
import useSWR from "swr"
import Link from "next/link"
import Image from "next/image"

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Categories() {
  // Using SWR to fetch categories data
  const { data, error, isLoading } = useSWR(
    "https://store-api-new.vercel.app/api/categories", 
    fetcher
  )

  // Show loading skeleton UI
  if (isLoading) {
    return (
      <div className="p-5">
        <div className="flex gap-x-6 gap-y-8 flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((skeleton) => (
            <div key={skeleton} className="animate-pulse">
              <div className="bg-gray-200 h-20 w-20 rounded-full"></div>
              <div className="h-4 bg-gray-200 rounded mt-3 w-16 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  // Show error state
  if (error) return (
    <div className="p-5 text-red-500 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
      Failed to load categories
    </div>
  )
  
  // Show categories grid
  return (
    <div className="p-5">
      <div className="flex gap-x-6 gap-y-8 font-bold text-base flex-wrap">
        {data && data.map((category) => (
          <Link 
            href={`./categories/${category.slug}`} 
            key={category.category_id}
            className="block transition-transform hover:scale-105"
          >
            <div>
              <div className="bg-gray-50 shadow-sm h-20 w-20 rounded-full relative flex items-center justify-center overflow-hidden">
                <Image 
                  src={category.image_url} 
                  alt={category.name}
                  width={80}
                  height={80}
                  className="object-contain"
                  priority={category.category_id <= 2}
                />
              </div>
              <div className="text-center mt-2">{category.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}