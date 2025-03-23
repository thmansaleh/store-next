'use client'
import { useState, useRef, useEffect } from 'react';
import { sendOTPVerification, verifyOTP } from '../utils/email';

const EmailVerification = () => {
  // States
  const [showEmailModal, setShowEmailModal] = useState(true);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [verifying, setVerifying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [errorMessage, setErrorMessage] = useState('');

  // Refs for OTP inputs
  const otpRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  // Email validation
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Handle email form submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    
    setEmailError(false);
    setIsSubmitting(true);
    
    try {
      // Call the API to send OTP verification
      const response = await sendOTPVerification({ name, email });
      console.log("API Response:", response); // Debug log
      
      // Show OTP modal regardless of response for development purposes
      setShowEmailModal(false);
      setShowOtpModal(true);
      setIsSubmitting(false);
      
      // Focus the first OTP input (LTR direction)
      setTimeout(() => {
        if (otpRefs[0].current) otpRefs[0].current.focus();
      }, 100);
      
      // In production, you can uncomment this code
      /*
      if (response && response.success) {
        setShowEmailModal(false);
        setShowOtpModal(true);
        setIsSubmitting(false);
        
        // Focus the first OTP input (LTR direction)
        setTimeout(() => {
          if (otpRefs[0].current) otpRefs[0].current.focus();
        }, 100);
      } else {
        setIsSubmitting(false);
        setErrorMessage(response?.message || 'حدث خطأ أثناء إرسال رمز التحقق. يرجى المحاولة مرة أخرى.');
      }
      */
    } catch (error) {
      console.error('Error sending OTP:', error);
      
      // For development - still show OTP modal even if API fails
      setShowEmailModal(false);
      setShowOtpModal(true);
      setIsSubmitting(false);
      
      // Focus the first OTP input (LTR direction)
      setTimeout(() => {
        if (otpRefs[0].current) otpRefs[0].current.focus();
      }, 100);
      
      // In production, uncomment this:
      /*
      setIsSubmitting(false);
      setErrorMessage('حدث خطأ أثناء الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.');
      */
    }
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError && validateEmail(e.target.value)) {
      setEmailError(false);
    }
  };

  // Handle name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handle email input blur
  const handleEmailBlur = () => {
    if (email !== '' && !validateEmail(email)) {
      setEmailError(true);
    }
  };

  // Handle changing email
  const handleChangeEmail = () => {
    setShowOtpModal(false);
    setShowEmailModal(true);
    setOtp(['', '', '', '']);
    setShowSuccess(false);
    setShowError(false);
    setVerifying(false);
    setErrorMessage('');
  };

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    if (value === '' || /^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-tab to next input (LTR direction)
      if (value && index < 3) {
        otpRefs[index + 1].current.focus();
      }
      
      // Check if all inputs are filled
      if (value && newOtp.every(digit => digit !== '')) {
        verifyOtp(newOtp.join(''));
      }
    }
  };

  // Handle OTP verification
  const verifyOtp = async (enteredOtp) => {
    setVerifying(true);
    
    try {
      // Call the API to verify OTP
      const response = await verifyOTP(enteredOtp, email);
      console.log("OTP Verification Response:", response); // Debug log
      console.log("OTP Verification Response:", response); // Debug log
      
      setVerifying(false);
      
      // Check if response status is 200 (correct OTP) or 400 (incorrect OTP)
      if ( response.status) {
        // Handle success - OTP is correct

        setShowSuccess(true);
        setShowError(false);
        
        // Redirect or show success message
        setTimeout(() => {
          alert('تم التحقق بنجاح! سيتم إعادة توجيهك إلى التطبيق.');
          // Here you can redirect the user to the next page
          // window.location.href = '/dashboard';
        }, 2000);
      } else if ( response.status==false) {
        // Handle incorrect OTP
        setShowError(true);
        setShowSuccess(false);
        setOtp(['', '', '', '']);
        setErrorMessage( 'رمز التحقق غير صالح. يرجى المحاولة مرة أخرى.');
        
        // Focus the first input again (LTR)
        setTimeout(() => {
          if (otpRefs[0].current) otpRefs[0].current.focus();
        }, 100);
      } else {
        // Generic error case
        setShowError(true);
        setShowSuccess(false);
        setOtp(['', '', '', '']);
        setErrorMessage('حدث خطأ أثناء التحقق من الرمز. يرجى المحاولة مرة أخرى.');
        
        // Focus the first input again
        setTimeout(() => {
          if (otpRefs[0].current) otpRefs[0].current.focus();
        }, 100);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      
      // Handle errors from API call
      setVerifying(false);
      setShowError(true);
      setShowSuccess(false);
      setOtp(['', '', '', '']);
      setErrorMessage('حدث خطأ أثناء التحقق من الرمز. يرجى المحاولة مرة أخرى.');
      
      // Focus the first input again
      setTimeout(() => {
        if (otpRefs[0].current) otpRefs[0].current.focus();
      }, 100);
    }
  };

  // Handle backspace in OTP inputs
  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  // Handle pasting OTP
  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    
    if (/^\d+$/.test(pastedData) && pastedData.length <= 4) {
      const newOtp = [...otp];
      
      // For LTR: paste from left to right
      for (let i = 0; i < pastedData.length && i < 4; i++) {
        newOtp[i] = pastedData[i];
      }
      
      setOtp(newOtp);
      
      // Focus appropriate field after paste
      const focusIndex = Math.min(pastedData.length, 3);
      otpRefs[focusIndex].current.focus();
      
      // Verify if complete
      if (newOtp.every(digit => digit !== '')) {
        setTimeout(() => verifyOtp(newOtp.join('')), 100);
      }
    }
  };

  // Handle resend OTP
  const handleResendOtp = async (e) => {
    e.preventDefault();
    
    setShowSuccess(false);
    setShowError(false);
    setVerifying(false);
    setResendDisabled(true);
    setOtp(['', '', '', '']);
    setErrorMessage('');
    
    try {
      // Call the API to resend OTP
      const response = await sendOTPVerification({ name, email });
      console.log("Resend OTP Response:", response); // Debug log
      
      // Focus the first input again (LTR)
      setTimeout(() => {
        if (otpRefs[0].current) otpRefs[0].current.focus();
      }, 100);
      
      // Countdown timer
      setCountdown(30);
      
      if (response && response.success) {
        alert('تم إرسال رمز تحقق جديد إلى بريدك الإلكتروني.');
      } else {
        setErrorMessage('حدث خطأ أثناء إعادة إرسال رمز التحقق.');
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
      setErrorMessage('حدث خطأ أثناء الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.');
    }
  };

  // Countdown effect
  useEffect(() => {
    let timer;
    if (resendDisabled && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
    }
    
    return () => clearTimeout(timer);
  }, [resendDisabled, countdown]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" dir="ltr">
    {/* Email Modal */}
    {showEmailModal && (
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-gray-800 text-2xl font-semibold mb-2">تحقق من بريدك الإلكتروني</h1>
        <p className="text-gray-600 mb-8 text-sm">أدخل عنوان بريدك الإلكتروني لتلقي رمز التحقق</p>
        
        <form onSubmit={handleEmailSubmit} className="flex flex-col">
          <div className="mb-5">
            <label htmlFor="name" className="sr-only">الاسم</label>
            <div className="relative">
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="h-14 w-full rounded-xl border border-gray-300 focus:border-gray-600 focus:ring-gray-200 px-4 text-base bg-gray-50 focus:outline-none focus:ring-2 focus:bg-white transition-all"
                placeholder="الاسم الكامل"
                required
              />
            </div>
          </div>
          
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
                placeholder="name@example.com"
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
    )}
  
    {/* OTP Verification Modal */}
    {showOtpModal && (
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-gray-800 text-2xl font-semibold mb-2">التحقق من البريد الإلكتروني</h1>
        <p className="text-gray-600 mb-8 text-sm">لقد أرسلنا رمزًا إلى بريدك الإلكتروني. يرجى إدخال رمز التحقق المكون من 4 أرقام.</p>
        
        <div className="flex justify-center gap-3 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
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
              onClick={handleResendOtp}
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
          onClick={handleChangeEmail}
          className="mt-6 text-gray-700 text-sm font-medium underline"
        >
          تغيير عنوان البريد الإلكتروني
        </button>
      </div>
    )}
  </div>
  
  );
};

export default EmailVerification;