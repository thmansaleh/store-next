import { useState, useCallback, useEffect } from 'react'
import useSWR from 'swr'
import { getUsername } from '@/app/utils/user'

const UserProfile = () => {
  // Use a state variable for the token
  const [userToken, setUserToken] = useState(null)
  
  // Get token from localStorage on client-side only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserToken(localStorage.getItem('userToken'))
    }
  }, [])

  // Fetch user data with proper error handling
  const fetchUserData = useCallback(async () => {
    if (!userToken) return null
    try {
      const user = await getUsername(userToken)
      return {
        name: user?.name || 'Guest',
        avatar: user?.avatar || null
      }
    } catch (err) {
      console.error('Error fetching user data:', err)
      throw err
    }
  }, [userToken])

  // Use SWR for data fetching with improved options
  const { data: user, error, isLoading, mutate } = useSWR(
    userToken ? ['userData', userToken] : null,
    fetchUserData,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      errorRetryCount: 2,
      dedupingInterval: 60000, // 1 minute
    }
  )

  // Handler for retrying on error
  const handleRetry = () => {
    mutate()
  }

  return (
    <div className="flex items-center gap-3">
      {/* Avatar Circle */}
      <div 
        className={`relative flex items-center justify-center w-10 h-10 rounded-full 
        ${isLoading ? 'bg-gray-100 animate-pulse' : 'bg-emerald-100'}`}
        aria-hidden={isLoading ? 'true' : 'false'}
      >
        {!isLoading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-emerald-500"
          >
            <path 
              fillRule="evenodd" 
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" 
              clipRule="evenodd" 
            />
          </svg>
        )}
      </div>

      {/* User Info */}
      <div className="flex flex-col">
        {isLoading ? (
          <div 
            className="h-4 w-24 bg-gray-100 rounded animate-pulse mb-1"
            aria-label="Loading user information"
          />
        ) : error ? (
          <div className="flex items-center gap-1">
            <span className="text-sm text-red-500">Failed to load</span>
            <button
              onClick={handleRetry}
              className="p-1 text-gray-500 hover:text-gray-700 rounded-full"
              aria-label="Retry loading user data"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-3.5 w-3.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                />
              </svg>
            </button>
          </div>
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