// @/app/hooks/useAuth.js
import { useCallback } from 'react';

export const useAuth = () => {
  const getAuthData = useCallback(() => {
    try {
      return {
        token: localStorage.getItem('userToken'),
        userId: localStorage.getItem('userId')
      };
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return { token: null, userId: null };
    }
  }, []);

  const isAuthenticated = useCallback(() => {
    const { token } = getAuthData();
    return !!token;
  }, [getAuthData]);

  return {
    getAuthData,
    isAuthenticated
  };
};