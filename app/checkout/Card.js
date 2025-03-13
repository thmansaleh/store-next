"use client";

import { useSelector, useDispatch } from "react-redux";
import { setCardDetails } from "@/store/features/checkout";

export default function Card() {
  const dispatch = useDispatch();
  const paymentMethod = useSelector((state) => state.checkout.paymentMethod);
  const cardDetails = useSelector((state) => state.checkout.cardDetails);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCardDetails({ [name]: value }));
  };

  if (paymentMethod === 'card') {
    return (
      <>
        <div className="mb-8 mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">معلومات الدفع</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">رقم البطاقة</label>
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                placeholder="123 123 123 123"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">تاريخ الانتهاء</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                  placeholder="123"
                />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }

  return null;
}
