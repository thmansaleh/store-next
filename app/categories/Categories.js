import useSWR from "swr"
import Link from "next/link"

// Fetcher function for SWR
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Categories() {
  // Using SWR to fetch categories data
  const { data, error, isLoading } = useSWR(
    "https://store-api-new.vercel.app/api/categories", 
    fetcher
  )

  // Show loading state
  if (isLoading) return <div className="p-5">Loading categories...</div>
  
  // Show error state
  if (error) return <div className="p-5">Failed to load categories</div>
  
  // Show categories grid
  return (
    <div className="p-5">
      <div className="flex gap-x-6 gap-y-8 font-bold text-base flex-wrap">
        {data && data.map((category) => (
          <Link 
            href={`./categories/${category.slug}`} 
            key={category.category_id}
            className="block"
          >
            <div>
              <div className="bg-gray-50 shadow-sm h-20 w-20 rounded-full">
                <img 
                  className="w-full h-full object-contain" 
                  src={category.image_url} 
                  alt={category.name} 
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