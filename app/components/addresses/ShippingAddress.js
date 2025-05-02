'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchUserAddresses, 
  addAddress, 
  selectAddress, 
  selectAllAddresses, 
  selectAddressStatus, 
  selectAddressError,
  selectSelectedAddress,
  deleteAddress
} from '@/app/store/features/addresses';

const ShippingAddressPage = () => {
  const dispatch = useDispatch();
  const addresses = useSelector(selectAllAddresses);
  const selectedAddress = useSelector(selectSelectedAddress);
  const status = useSelector(selectAddressStatus);
  const error = useSelector(selectAddressError);
  
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    userName: '',
    addressName: ''
  });

  // Fetch addresses when component mounts
  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    dispatch(fetchUserAddresses(userToken));
  }, [dispatch]);

  const handleSelectAddress = (addressId) => {
    dispatch(selectAddress(addressId));
  };

  const handleDeleteAddress = async (addressId) => {
    const userToken = localStorage.getItem('userToken');
    if (window.confirm('هل أنت متأكد أنك تريد حذف هذا العنوان؟')) {
      dispatch(deleteAddress(addressId));
    }
  };

  const toggleAddressForm = () => {
    setShowAddressForm(!showAddressForm);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewAddress((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const saveAddress = async () => {
    const userToken = localStorage.getItem('userToken');
    const { addressName, userName } = newAddress;

    if (!addressName || !userName) {
      alert("يرجى ملء جميع الحقول");
      return;
    }

    dispatch(addAddress({ 
      userToken, 
      addressData: {address_name: addressName, name: userName } 
    }));

    setShowAddressForm(false);
    setNewAddress({ addressName: '', userName: '' });
  };

  // Loading states
  if (status === 'loading' && addresses.length === 0) {
    return (
      <div className=" flex items-center justify-center bg-gray-50" dir="rtl" lang="ar">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-300 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (status === 'failed' && addresses.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50" dir="rtl" lang="ar">
        <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-center text-gray-800 mb-2">حدث خطأ</h3>
          <p className="text-center text-gray-600 mb-4">{error || 'لم نتمكن من تحميل العناوين الخاصة بك'}</p>
          <button 
            onClick={() => dispatch(fetchUserAddresses(localStorage.getItem('userToken')))}
            className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            إعادة المحاولة
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8" dir="rtl" lang="ar">
      <div className="max-w-md mx-auto bg-white  overflow-hidden">
        {/* Header */}
      

        <div className="p-6">
          {/* Empty state */}
          {addresses.length === 0 && !showAddressForm && (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">لا توجد عناوين</h3>
              <p className="text-gray-500 mb-6">يرجى إضافة عنوان لاستلام الطلب</p>
              <button 
                onClick={toggleAddressForm} 
                className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                إضافة عنوان جديد
              </button>
            </div>
          )}

          {/* Address list */}
          {addresses.length > 0 && (
            <div className="space-y-3 mb-6">
              <h2 className="text-gray-700 font-medium mb-2">العناوين المحفوظة</h2>
              {addresses.map((address, index) => (
                <div 
                  key={address.address_id || index}
                  className={`relative p-4 rounded-lg transition-all ${
                    address.selected 
                      ? 'bg-emerald-50 border-2 border-emerald-500' 
                      : 'bg-white border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div 
                    className="flex items-start cursor-pointer"
                    onClick={() => handleSelectAddress(address.address_id)}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full mr-3 mt-1 flex items-center justify-center ${
                      address.selected ? 'bg-emerald-500 border-2 border-emerald-500' : 'border-2 border-gray-300'
                    }`}>
                      {address.selected && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-gray-800">{address.name}</p>
                      <p className="text-gray-600 text-sm mt-1">{address.address_name}</p>
                    </div>
                    
                    {/* Badge with number */}
                    <div className={`absolute -left-2 -top-2 w-6 h-6 rounded-full ${
                      address.selected ? 'bg-emerald-500' : 'bg-gray-400'
                    } text-white flex items-center justify-center text-xs font-medium`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Delete button */}
                  <button 
                    onClick={() => handleDeleteAddress(address.address_id)}
                    className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm border border-gray-200 text-gray-500 hover:text-red-600 transition-colors"
                    aria-label="حذف العنوان"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Add Address Button (when addresses exist) */}
          {addresses.length > 0 && !showAddressForm && (
            <button 
              onClick={toggleAddressForm} 
              className="flex items-center justify-center w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              إضافة عنوان جديد
            </button>
          )}

          {/* New Address Form */}
          {showAddressForm && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-800">إضافة عنوان جديد</h3>
                <button 
                  onClick={toggleAddressForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">اسم المستلم</label>
                  <input 
                    type="text" 
                    id="userName" 
                    value={newAddress.userName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="الاسم الكامل للمستلم"
                  />
                </div>

                <div>
                  <label htmlFor="addressName" className="block text-sm font-medium text-gray-700 mb-1">العنوان الكامل</label>
                  <textarea 
                    id="addressName" 
                    value={newAddress.addressName}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="المدينة، الحي، الشارع، رقم المبنى، الطابق..."
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                  <button 
                    onClick={toggleAddressForm} 
                    className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    إلغاء
                  </button>
                  <button 
                    onClick={saveAddress} 
                    className="flex-1 py-2 px-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جاري الحفظ
                      </span>
                    ) : 'حفظ العنوان'}
                  </button>
                </div>
              </div>
            </div>
          )}

      
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressPage;