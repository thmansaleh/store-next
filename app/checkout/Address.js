"use client";

import { useSelector, useDispatch } from "react-redux";
import { setAddressDetails } from "@/app/store/features/address";

export default function Address() {
  const dispatch = useDispatch();
  const addressDetails = useSelector((state) => state.address);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setAddressDetails({ [name]: value }));
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">عنوان الشحن</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">الاسم الكامل</label>
          <input
            type="text"
            name="fullName"
            value={addressDetails.fullName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            placeholder=" " 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">العنوان</label>
          <input
            type="text"
            name="address"
            value={addressDetails.address}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            placeholder=" "
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">المدينة</label>
            <input
              type="text"
              name="city"
              value={addressDetails.city}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              placeholder=" "
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">الرمز البريدي</label>
            <input
              type="text"
              name="postalCode"
              value={addressDetails.postalCode}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              placeholder="12345"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
