'use client';

import { useRef, useState } from 'react';


export const OTPComponent = ({ 
  email, 
  otp, 
  setOtp, 
  onResend, 
  onChangeEmail, 
  verifying, 
  showSuccess, 
  showError, 
  errorMessage, 
  resendDisabled, 
  countdown 
}) => {

  const otpRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];


  const handleOtpChange = (index, value) => {
    if (value === '' || /^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      if (value && index < 3) {
        otpRefs[index + 1].current?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    
    if (/^\d+$/.test(pastedData) && pastedData.length <= 4) {
      const newOtp = [...otp];
      
      for (let i = 0; i < pastedData.length && i < 4; i++) {
        newOtp[i] = pastedData[i];
      }
      
      setOtp(newOtp);
      
      const focusIndex = Math.min(pastedData.length, 3);
      otpRefs[focusIndex].current?.focus();
    }
  };
 
return (
  <div className="bg-white  text-center">
    <h1 className="text-gray-800 text-2xl font-semibold mb-2">التحقق من البريد الإلكتروني</h1>
    <p className="text-gray-600 mb-8 text-sm">لقد أرسلنا رمزًا إلى بريدك الإلكتروني. يرجى إدخال رمز التحقق المكون من 4 أرقام.</p>
    
    <div className="flex justify-center gap-3 mb-8">
      {[0, 1, 2, 3].map((index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={otpRefs[index]}
          value={otp[index]}
          onChange={(e) => handleOtpChange(index, e.target.value)}
          onKeyDown={(e) => handleOtpKeyDown(index, e)}
          onPaste={index === 0 ? handleOtpPaste : undefined}
          disabled={verifying || showSuccess}
          className="h-16 w-16 rounded-xl border border-gray-300 text-center text-2xl font-semibold bg-gray-50 focus:outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all"
          autoFocus={index === 0}
        />
      ))}
    </div>
    
    {verifying && (
      <div className="flex items-center justify-center mb-4">
        <svg className="animate-spin h-5 w-5 ml-3 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-gray-700 font-medium">جارِ التحقق...</span>
      </div>
    )}
    
    {errorMessage && (
      <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
    )}
    
    <div className="mt-5 text-gray-600 text-sm">
      لم تستلم الرمز؟ 
      {!resendDisabled ? (
        <a 
          href="#" 
          onClick={onResend}
          className="text-gray-700 font-semibold no-underline"
        >
          إعادة إرسال
        </a>
      ) : (
        <span className="text-gray-500">({countdown}ث)</span>
      )}
    </div>
    
    <div className="mt-3 text-xs text-gray-500">
      تم إرسال الرمز إلى <span className="font-medium">{email}</span>
    </div>
    
    {showSuccess && (
      <div className="text-green-500 mt-5 font-semibold">
        تم التحقق بنجاح! جارِ إعادة التوجيه...
      </div>
    )}
    
    {showError && !errorMessage && (
      <div className="text-red-500 mt-5 font-semibold">
        رمز التحقق غير صالح. يرجى المحاولة مرة أخرى.
      </div>
    )}

    <button 
      onClick={onChangeEmail}
      className="mt-6 text-gray-700 text-sm font-medium underline"
    >
      تغيير عنوان البريد الإلكتروني
    </button>
  </div>
);
};