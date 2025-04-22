'use client';

import { useState } from 'react';


export const EmailComponent = ({ 
  email, 
  setEmail, 
  onSubmit, 
  isSubmitting, 
  errorMessage 
}) => {
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError && validateEmail(e.target.value)) {
      setEmailError(false);
    }
  };

  const handleEmailBlur = () => {
    if (email !== '' && !validateEmail(email)) {
      setEmailError(true);
    }
  };

  return (
    <div className="bg-white   text-center">
      <h1 className="text-gray-800 text-2xl font-semibold mb-2">تسجيل الدخول عبر البريد الإلكتروني</h1>
      <p className="text-gray-600 mb-8 text-sm">أدخل عنوان بريدك الإلكتروني لتلقي رمز التحقق</p>
      
      <form onSubmit={onSubmit} className="flex flex-col">
        <div className="mb-5">
          <label htmlFor="email" className="sr-only">البريد الإلكتروني</label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              className={`h-14 w-full rounded-xl border ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-gray-600 focus:ring-gray-200'} px-4 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:bg-white transition-all`}
              placeholder=""
              required
            />
            {emailError && (
              <div className="text-right text-red-500 text-xs mt-1">يرجى إدخال عنوان بريد إلكتروني صالح</div>
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
            'متابعة'
          )}
        </button>
      </form>
      
      <p className="mt-6 text-xs text-gray-500">
        بالمتابعة، فإنك توافق على <a href="#" className="text-gray-700">شروط الخدمة</a> و <a href="#" className="text-gray-700">سياسة الخصوصية</a>
      </p>
    </div>
  );
};