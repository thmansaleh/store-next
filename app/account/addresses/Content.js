'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchUserAddresses, 
  addAddress, 
  updateAddress,
  selectAddress, 
  selectAllAddresses, 
  selectAddressStatus, 
  selectAddressError,
  selectSelectedAddress,
  deleteAddress
} from '@/app/store/features/addresses';
import Link from 'next/link';

const Content = () => {
  const dispatch = useDispatch();
  const addresses = useSelector(selectAllAddresses);
  const selectedAddress = useSelector(selectSelectedAddress);
  const status = useSelector(selectAddressStatus);
  const error = useSelector(selectAddressError);
  
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [addressFormData, setAddressFormData] = useState({
    userName: '',
    addressName: '',
    addressId: null
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [animateAddress, setAnimateAddress] = useState(null);

  // Fetch addresses when component mounts
  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    dispatch(fetchUserAddresses(userToken));
  }, [dispatch]);

  // Filter addresses based on search query
  const filteredAddresses = addresses.filter(
    address => 
      address.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      address.address_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectAddress = (addressId) => {
    dispatch(selectAddress(addressId));
    setAnimateAddress(addressId);
    setTimeout(() => setAnimateAddress(null), 500);
  };

  const handleDeleteAddress = async (addressId, event) => {
    event.stopPropagation();
    const userToken = localStorage.getItem('userToken');
    if (window.confirm('هل أنت متأكد أنك تريد حذف هذا العنوان؟')) {
      dispatch(deleteAddress(addressId));
    }
  };

  const handleEditAddress = (address, event) => {
    event.stopPropagation();
    setAddressFormData({
      userName: address.name || '',
      addressName: address.address_name || '',
      addressId: address.address_id
    });
    setIsEditFormOpen(true);
  };

  const openAddressForm = () => {
    setAddressFormData({
      userName: '',
      addressName: '',
      addressId: null
    });
    setIsAddFormOpen(true);
  };

  const closeAddressForm = () => {
    setIsAddFormOpen(false);
    setIsEditFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAddressFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const saveAddress = async () => {
    const userToken = localStorage.getItem('userToken');
    const { addressName, userName, addressId } = addressFormData;

    if (!addressName || !userName) {
      alert("يرجى ملء جميع الحقول");
      return;
    }

    if (isEditFormOpen && addressId) {
      // Update existing address
      dispatch(updateAddress({ 
        addressId, 
        addressData: { 
          address_id: addressId,
          address_name: addressName, 
          name: userName 
        } 
      }));
      setIsEditFormOpen(false);
    } else {
      // Add new address
      dispatch(addAddress({ 
        userToken, 
        addressData: { 
          address_name: addressName, 
          name: userName 
        } 
      }));
      setIsAddFormOpen(false);
    }

    setAddressFormData({
      userName: '',
      addressName: '',
      addressId: null
    });
  };

  // Loading states
  if (status === 'loading' && addresses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50" dir="rtl" lang="ar">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-emerald-200 mb-6"></div>
          <div className="h-6 bg-emerald-100 rounded-md w-48 mb-4"></div>
          <div className="h-4 bg-emerald-50 rounded-md w-64 mb-2"></div>
          <div className="h-4 bg-emerald-50 rounded-md w-40"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (status === 'failed' && addresses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50" dir="rtl" lang="ar">
        <div className="max-w-md p-8 bg-white rounded-xl shadow-md">
          <div className="flex items-center justify-center text-red-500 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-center text-gray-800 mb-3">حدث خطأ</h3>
          <p className="text-center text-gray-600 mb-6">{error || 'لم نتمكن من تحميل العناوين الخاصة بك'}</p>
          <button 
            onClick={() => dispatch(fetchUserAddresses(localStorage.getItem('userToken')))}
            className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition focus:outline-none focus:ring-4 focus:ring-emerald-300"
          >
            إعادة المحاولة
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10" dir="rtl" lang="ar">
      <div className="max-w-4xl mx-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-6 px-4">
          <Link href="/checkout" className="flex items-center text-emerald-600 hover:text-emerald-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            العودة للشراء
          </Link>

          <button 
            onClick={openAddressForm}
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-emerald-700 transition shadow-sm transform hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            إضافة عنوان
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Page Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">إدارة العناوين</h1>
              <p className="text-emerald-100 text-lg max-w-lg">
                يمكنك إدارة عناوين الشحن الخاصة بك وتحديد العنوان الافتراضي لاستلام طلباتك
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 transform translate-y-1/2 -translate-x-1/4 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
          </div>

          <div className="p-6">
            {/* Search Bar */}
            {addresses.length > 0 && (
              <div className="mb-6 relative">
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="ابحث عن عنوان..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* Empty state */}
            {addresses.length === 0 && !isAddFormOpen && (
              <div className="text-center py-16 px-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">لا توجد عناوين بعد</h3>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  يبدو أنك لم تقم بإضافة أي عنوان حتى الآن. أضف عنوانك الأول للبدء في استخدام خدمة التوصيل.
                </p>
                <button 
                  onClick={openAddressForm} 
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition shadow-md transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  إضافة عنوان جديد
                </button>
              </div>
            )}

            {/* Address Grid */}
            {filteredAddresses.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredAddresses.map((address) => (
                  <div 
                    key={address.address_id}
                    onClick={() => handleSelectAddress(address.address_id)}
                    className={`relative p-5 rounded-xl cursor-pointer transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-md ${
                      animateAddress === address.address_id ? 'scale-102 shadow-md' : ''
                    } ${
                      address.selected 
                        ? 'bg-emerald-50 border-2 border-emerald-500 shadow-sm' 
                        : 'bg-white border border-gray-200 hover:border-emerald-300'
                    }`}
                  >
                    {/* Selected Indicator */}
                    {address.selected && (
                      <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        العنوان المحدد
                      </span>
                    )}
                    
                    {/* Address Content */}
                    <div className="flex items-start pt-2">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full ml-3 mt-0.5 border-2 flex items-center justify-center ${
                        address.selected 
                          ? 'bg-emerald-500 border-emerald-500' 
                          : 'border-gray-300 group-hover:border-emerald-300'
                      }`}>
                        {address.selected && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{address.name}</h3>
                        <p className="text-gray-600 mb-3">{address.address_name}</p>
                        
                        {/* Action buttons */}
                        <div className="flex justify-end space-x-2 space-x-reverse mt-2">
                          <button 
                            onClick={(e) => handleEditAddress(address, e)}
                            className="text-gray-600 hover:text-emerald-600 p-1 rounded-full hover:bg-emerald-50 transition"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>
                          <button 
                            onClick={(e) => handleDeleteAddress(address.address_id, e)}
                            className="text-gray-600 hover:text-red-600 p-1 rounded-full hover:bg-red-50 transition"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No results */}
            {addresses.length > 0 && filteredAddresses.length === 0 && (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">لا توجد نتائج</h3>
                <p className="text-gray-500">لم نتمكن من العثور على عناوين تطابق بحثك</p>
              </div>
            )}

            {/* Address Form Modal - Add */}
            {isAddFormOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-800">إضافة عنوان جديد</h3>
                      <button 
                        onClick={closeAddressForm}
                        className="text-gray-500 hover:text-gray-700 transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">اسم المستلم</label>
                        <input 
                          type="text" 
                          id="userName" 
                          value={addressFormData.userName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="الاسم الكامل للمستلم"
                        />
                      </div>

                      <div>
                        <label htmlFor="addressName" className="block text-sm font-medium text-gray-700 mb-1">العنوان الكامل</label>
                        <textarea 
                          id="addressName" 
                          value={addressFormData.addressName}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="المدينة، الحي، الشارع، رقم المبنى، الطابق..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row-reverse gap-3">
                    <button 
                      onClick={saveAddress} 
                      className="py-3 px-6 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          جاري الحفظ
                        </span>
                      ) : 'حفظ العنوان'}
                    </button>
                    <button 
                      onClick={closeAddressForm} 
                      className="py-3 px-6 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200 transition"
                    >
                      إلغاء
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Address Form Modal - Edit */}
            {isEditFormOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-800">تعديل العنوان</h3>
                      <button 
                        onClick={closeAddressForm}
                        className="text-gray-500 hover:text-gray-700 transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">اسم المستلم</label>
                        <input 
                          type="text" 
                          id="userName" 
                          value={addressFormData.userName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="الاسم الكامل للمستلم"
                        />
                      </div>

                      <div>
                        <label htmlFor="addressName" className="block text-sm font-medium text-gray-700 mb-1">العنوان الكامل</label>
                        <textarea 
                          id="addressName" 
                          value={addressFormData.addressName}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="المدينة، الحي، الشارع، رقم المبنى، الطابق..."
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row-reverse gap-3">
                    <button 
                      onClick={saveAddress} 
                      className="py-3 px-6 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition"
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          جاري الحفظ
                        </span>
                      ) : 'حفظ التعديلات'}
                    </button>
                    <button 
                      onClick={closeAddressForm} 
                      className="py-3 px-6 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200 transition"
                    >
                      إلغاء
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;