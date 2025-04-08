import Link from 'next/link'

export const metadata = {
  title: 'Payment Successful',
  description: 'Your payment was processed successfully',
}

export default async function PaymentSuccessPage({ searchParams }) {
  const { session_id, order_id } = searchParams

  // Mock order data - replace with your actual data fetching
  const order = {
    order_number: `ORD-${Math.floor(Math.random() * 1000000)}`,
    total_amount: 125.99,
    created_at: new Date().toISOString(),
  }

  if (!session_id || !order_id) {
    return (
      <div className="max-w-3xl mx-auto p-8 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-red-700">
          <h1 className="text-2xl font-bold mb-4">Invalid Payment Confirmation</h1>
          <p className="mb-6">
            We couldn't verify your payment. Please check your email for confirmation or contact support if you have any questions.
          </p>
          <Link href="/" className="inline-block bg-blue-500 text-white px-4 py-2 rounded font-medium">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="bg-green-50 border border-green-200 rounded-lg overflow-hidden">
        <div className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-200 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">Payment Successful!</h1>
          <p className="text-lg text-green-600 mb-8">Thank you for your purchase</p>
        </div>

        <div className="p-6 bg-white border-t border-gray-200">
          <div className="bg-white rounded-md border border-gray-200 shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Order Summary</h2>
            <div className="grid gap-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Order Number</span>
                <span className="font-medium">{order.order_number}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date</span>
                <span className="font-medium">{new Date(order.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total</span>
                <span className="font-medium">${order.total_amount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-center mb-6">
            We've sent a confirmation email with your order details. You'll receive another email when your order ships.
          </p>

          <div className="flex flex-col gap-2">
            <Link href="/orders" className="block px-4 py-2 rounded border border-gray-300 bg-white text-center text-gray-900 font-medium">
              View Order Details
            </Link>
            <Link href="/products" className="block px-4 py-2 rounded bg-blue-500 text-white text-center font-medium">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
