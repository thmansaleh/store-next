import useSWR from 'swr'
import { getUsername } from '@/app/utils/user'
import { useState, useCallback } from 'react'

const UserProfile = () => {
  const [userToken] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('userToken')
    }
    return null
  })

  const fetchUserData = useCallback(async () => {
    if (!userToken) return null
    const user = await getUsername(userToken)
    return {
      name: user?.name || 'Guest'
    }
  }, [userToken])

  const { data: user, error, isLoading } = useSWR(
    userToken ? ['userData', userToken] : null,
    fetchUserData,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  )

  return (
    <div className="flex items-center gap-3">
      <div className={`relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 ${isLoading ? 'animate-pulse' : ''}`}>
        {!isLoading && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-5 h-5 text-gray-500"
          >
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        )}
      </div>

      <div className="flex flex-col">
        {isLoading ? (
          <>
            <div className="h-4 w-24 bg-gray-100 rounded animate-pulse mb-1"></div>
          </>
        ) : error ? (
          <>
            <span className="text-sm text-gray-500">Error loading</span>
          </>
        ) : (
          <span className="text-sm font-medium text-gray-900">
            {user?.name}
          </span>
        )}
      </div>
    </div>
  )
}

export default UserProfile
