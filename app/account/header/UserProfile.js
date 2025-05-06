import useSWR from 'swr'
import { getUsername } from '@/app/utils/user'
import { useState, useCallback } from 'react'

const UserProfile = () => {
  // 1. Token initialization with debug logging
  const [userToken] = useState(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('userToken')
      console.log('[Debug] Initial token from localStorage:', token)
      return token
    }
    return null
  })

  // 2. Fetch function with enhanced error handling
  const fetchUserData = useCallback(async () => {
    console.log('[Debug] Attempting fetch with token:', userToken)
    if (!userToken) {
      console.log('[Debug] No token available, skipping fetch')
      return null
    }
    
    try {
      const user = await getUsername(userToken)
      console.log('[Debug] Received user data:', user)
      
      if (!user) {
        console.warn('[Debug] Empty response received')
        return null
      }
      
      // Ensure expected fields exist
      return {
        name: user.name || 'Guest', // Fallback if name missing
        userId: user.userId || 'N/A' // Fallback if ID missing
      }
    } catch (error) {
      console.error('[Debug] Fetch failed:', error)
      throw error
    }
  }, [userToken])

  // 3. SWR configuration with loading states
  const { data: user, error, isLoading } = useSWR(
    userToken ? ['userData', userToken] : null,
    fetchUserData,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      onErrorRetry: (error) => {
        console.log('[Debug] Retry prevented for error:', error)
      }
    }
  )

  // 4. Debug render states
  console.log('[Debug] Current render state:', {
    isLoading,
    error,
    user,
    hasName: !!user?.name,
    hasId: !!user?.userId
  })

  return (
    <div className="flex items-center gap-3">
      {/* Profile icon with loading state */}
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

      {/* User information */}
      <div className="flex flex-col">
        {isLoading ? (
          <>
            <div className="h-4 w-24 bg-gray-100 rounded animate-pulse mb-1"></div>
            <div className="h-3 w-16 bg-gray-100 rounded animate-pulse"></div>
          </>
        ) : error ? (
          <>
            <span className="text-sm text-gray-500">Error loading</span>
            <span className="text-xs text-red-500">Try refreshing</span>
          </>
        ) : (
          <>
            <span className="text-sm font-medium text-gray-900">
              {user?.name}
            </span>
            <span className="text-xs text-gray-500">
              {user?.userId ? `ID: ${user.userId}` : 'No ID found'}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default UserProfile