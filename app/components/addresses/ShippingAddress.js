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
  selectSelectedAddress
} from '@/app/store/features/addresses';
import './style.css';
import { createAddress } from '@/app/utils/addresses';

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
    // Replace '1' with actual user ID (could come from auth context/redux)
    dispatch(fetchUserAddresses('1'));
  }, [dispatch]);

  const handleSelectAddress = (addressId) => {
    dispatch(selectAddress(addressId));
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

  const  saveAddress = async () => {
    const { addressName,userName } = newAddress;

    if (!addressName) {
      alert("يرجى ملء جميع الحقول");
      return;
    }

     dispatch(addAddress({ userId: '1', addressName: addressName,userName:userName }));

    setShowAddressForm(false);
    setNewAddress({ addressName: '',  userName: ''    });
  };

  // Loading state
  if (status === 'loading' && addresses.length === 0) {
    return <div className="text-center p-5">جاري التحميل...</div>;
  }

  // Error state
  if (status === 'failed' && addresses.length === 0) {
    return <div className="text-center p-5 text-red-500">حدث خطأ: {error}</div>;
  }

  return (
    <div className="bg-gray-50 text-gray-800 p-5 max-w-md mx-auto" dir="rtl" lang="ar">
      <div className="header text-center mb-8">
        <h1 className="text-xl font-semibold text-gray-700 mb-2">عنوان الشحن</h1>
        <p className="text-gray-500 text-sm">حُدّد عنوان استلام الطلب، واحرص على صحة بيانات الموقع</p>
      </div>

      {/* Display if there are no addresses */}
      {addresses.length === 0 && (
        <div className="text-center mb-5">
          <p className="text-gray-600">لا توجد لديك عناوين حالياً.</p>
          <p className="text-gray-500">يرجى إضافة عنوان لاستلام الطلب.</p>
        </div>
      )}

      {/* Address list */}
      <div className="address-container bg-white rounded-lg p-4 mb-5 border border-gray-100">
        {addresses.map((address, index) => (
          <div 
            key={address.address_id || index}
            className={`address-item p-4 border rounded-md mb-3 relative flex items-center cursor-pointer transition-all hover:border-gray-300 bg-white ${
              address.selected ? 'border-primary bg-green-50' : 'border-gray-200'
            }`}
            onClick={() => handleSelectAddress(address.address_id)}
          >
            <input 
              type="radio" 
              name="address" 
              id={`address${ index}`} 
              className="ml-2 w-4 h-4 accent-primary" 
              checked={address.selected} 
              onChange={() => {}} // React needs an onChange handler for controlled inputs
            />
            <label htmlFor={`address${ index}`} className="address-text flex-grow text-gray-600 leading-relaxed">
              {`${address.address_name}`}
            </label>
            <span className={`absolute -right-2 top-1/2 transform -translate-y-1/2 ${
              address.selected ? 'bg-primary' : 'bg-gray-500'
            } text-white w-5 h-5 rounded-full flex items-center justify-center text-xs`}>
              { index + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Add Address Button */}
      <button 
        onClick={toggleAddressForm} 
        className="btn-secondary w-full py-3 rounded-md mb-3 bg-white text-gray-600 border border-gray-200 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all"
      >
        {addresses.length === 0 ? 'إضافة عنوان الآن' : 'إضافة عنوان جديد'}
      </button>

      {/* New Address Form */}
      <div id="newAddressForm" className={`${showAddressForm ? '' : 'hidden'} bg-white p-4 rounded-lg border border-gray-200 mb-4`}>
        <h3 className="text-lg font-medium text-gray-700 mb-3">إضافة عنوان جديد</h3>

        <div className="mb-3">
          <label className="block text-gray-600 text-sm mb-1">اسم المستلم</label>
          <input 
            type="text" 
            id="userName" 
            value={newAddress.userName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-600 text-sm mb-1">العنوان الكامل</label>
          <input 
            type="text" 
            id="addressName" 
            value={newAddress.addressName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>

      

        <div className="flex gap-2 mt-4">
          <button 
            onClick={toggleAddressForm} 
            className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
          >
            إلغاء
          </button>
          <button 
            onClick={saveAddress} 
            className="flex-1 py-2 bg-primary text-white rounded-md hover:bg-green-600 transition"
            disabled={status === 'loading'}
          >
            حفظ العنوان
          </button>
        </div>
      </div>
{/* 
      <div className="note flex items-center p-3 bg-gray-50 rounded-md mb-5 border border-gray-100">
        <span className="icon ml-2 text-gray-500 text-lg">😊</span>
        <span className="note-text text-gray-600 text-sm">استلام الطلب عبر شخص آخر؟</span>
      </div> */}

      
    </div>
  );
};

export default ShippingAddressPage;
