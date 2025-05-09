"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Address from "./Address"
import CashOnDelivery from "./CashOnDelivery"
import PayButton from "./PayButton"
import PaymentSection from "./PaymentSection"

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Check if token exists (you might have it in localStorage, cookies, or context)
    const token = localStorage.getItem('userToken') 
    if (!token) {
      router.push('/'); // Redirect to home page if no token
    }
  }, [router]);

  // Optional: You might want to show a loading state while checking auth
  const token = typeof window !== 'undefined' ? localStorage.getItem('userToken') : null;
  if (typeof window !== 'undefined' && !token) {
    return null; // or return a loading spinner
  }

  return (
    <div className="p-3">
      <PaymentSection/>
      <Address/>
      <CashOnDelivery/>
      <PayButton/>
    </div>
  )
}