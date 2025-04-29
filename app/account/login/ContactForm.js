'use client';

import { registerUser } from '@/app/utils/auth';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export const ContactForm = ({
  email
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateName = (name) => {
    return name.trim().length > 0;
  };

  const validatePhone = (phone) => {
    const phonePattern = /^\d{10,15}$/;
    return phonePattern.test(phone);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (nameError && validateName(e.target.value)) {
      setNameError(false);
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (phoneError && validatePhone(e.target.value)) {
      setPhoneError(false);
    }
  };

  const handleNameBlur = () => {
    if (name !== '' && !validateName(name)) {
      setNameError(true);
    }
  };

  const handlePhoneBlur = () => {
    if (phone !== '' && !validatePhone(phone)) {
      setPhoneError(true);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Validate inputs
    const isNameValid = validateName(name);
    const isPhoneValid = validatePhone(phone);
    
    if (!isNameValid) {
      setNameError(true);
    }
    
    if (!isPhoneValid) {
      setPhoneError(true);
    }
    
    // If any validation fails, return early
    if (!isNameValid || !isPhoneValid) {
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
    
      const data = await registerUser(email,name,phone)
      
      if (!data.success) {
        throw new Error(data.message || 'حدث خطأ أثناء إرسال البيانات');
      }
      
      // Success
      setShowSuccess(true);
      localStorage.setItem('userToken',data.token)
      setSuccessMessage('تم إرسال معلومات الاتصال بنجاح!');
      setTimeout(()=>{
redirect(`/checkout`)

},3000)
      // Reset form
      setName('');
      setPhone('');
      
    } catch (error) {
      setErrorMessage(error.message || 'حدث خطأ أثناء إرسال البيانات');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white  text-center p-4">
      <h1 className="text-gray-800 text-2xl font-semibold mb-2">معلومات الاتصال</h1>
      <p className="text-gray-600 mb-8 text-sm">يرجى إدخال بيانات الاتصال الخاصة بك</p>
      
      <form onSubmit={onSubmit} className="flex flex-col">
        <div className="mb-5">
          <label htmlFor="name" className="sr-only">الاسم الكامل</label>
          <div className="relative">
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              className={`h-14 w-full rounded-xl border ${nameError ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-gray-600 focus:ring-gray-200'} px-4 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
              placeholder="أدخل اسمك الكامل"
              required
            />
            {nameError && (
              <div className="text-right text-red-500 text-xs mt-1">يرجى إدخال اسم صالح</div>
            )}
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="sr-only">رقم الهاتف</label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              className={`h-14 w-full rounded-xl border ${phoneError ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-gray-600 focus:ring-gray-200'} px-4 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
              placeholder="أدخل رقم هاتفك"
              required
            />
            {phoneError && (
              <div className="text-right text-red-500 text-xs mt-1">يرجى إدخال رقم هاتف صالح</div>
            )}
          </div>
        </div>
        
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl ${isSubmitting ? 'bg-gray-500' : 'bg-gray-700 hover:bg-gray-800'} text-white font-semibold text-base cursor-pointer transition-all active:scale-95 focus:outline-none`}
        >
          {isSubmitting ? (
            <svg className="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'إرسال'
          )}
        </button>
      </form>

      {showSuccess && (
        <div className="mt-4 text-green-500 font-semibold bg-green-50 border border-green-100 rounded-lg p-3">
          {successMessage || 'تم إرسال معلومات الاتصال بنجاح!'}
        </div>
      )}
      
      <p className="mt-6 text-xs text-gray-500">
        بإرسال هذه المعلومات، فإنك توافق على <a href="#" className="text-gray-700">شروط الخدمة</a> و <a href="#" className="text-gray-700">سياسة الخصوصية</a>
      </p>
    </div>
  );
};