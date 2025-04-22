'use client';

import { useState, useEffect } from 'react';
import { sendOTPVerification, verifyOTP } from '../../utils/email';
import { EmailComponent } from './Email';
import { OTPComponent } from './Otp';
import { ContactForm } from './ContactForm';
// import { EmailComponent } from './EmailComponent';
// import { OTPComponent } from './OTPComponent';

export const Content = () => {
  // States
  const [contact,setContact]=useState(false)

  const [showEmailModal, setShowEmailModal] = useState(true);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [verifying, setVerifying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle email form submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const response = await sendOTPVerification({ email });
      console.log("API Response:", response);
      
      setShowEmailModal(false);
      setShowOtpModal(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error sending OTP:', error);
      setShowEmailModal(false);
      setShowOtpModal(true);
      setIsSubmitting(false);
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

  // Handle OTP verification
  const verifyOtp = async (enteredOtp) => {
    setVerifying(true);
    
    try {
      const response = await verifyOTP(enteredOtp, email);
    //   console.log("OTP Verification Response:", response);
      
      setVerifying(false);
      
      if (response.status) {
        setShowError(false);
        setShowSuccess(true);

        setTimeout(() => {
        if(!response.userExists){
            setContact(true)

        }else{
            localStorage.setItem('userId',response.token)

        }
        }, 2000);
      } else if (response.status === false) {
        setShowError(true);
        setShowSuccess(false);
        setOtp(['', '', '', '']);
        setErrorMessage('رمز التحقق غير صالح. يرجى المحاولة مرة أخرى.');
      } else {
        setShowError(true);
        setShowSuccess(false);
        setOtp(['', '', '', '']);
        setErrorMessage('حدث خطأ أثناء التحقق من الرمز. يرجى المحاولة مرة أخرى.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setVerifying(false);
      setShowError(true);
      setShowSuccess(false);
      setOtp(['', '', '', '']);
      setErrorMessage('حدث خطأ أثناء التحقق من الرمز. يرجى المحاولة مرة أخرى.');
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
      const response = await sendOTPVerification({ email });
      console.log("Resend OTP Response:", response);
      
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

  // Auto verify when all OTP digits are entered
  useEffect(() => {
    if (otp.every(digit => digit !== '')) {
      verifyOtp(otp.join(''));
    }
  }, [otp]);

  if(contact){
    return <ContactForm email={email}/>
  }else return (
    <div className="flex justify-center items-center p-3" dir="ltr">
      {showEmailModal && (
        <EmailComponent
          email={email}
          setEmail={setEmail}
          onSubmit={handleEmailSubmit}
          isSubmitting={isSubmitting}
          errorMessage={errorMessage}
        />
      )}
    
      {showOtpModal && (
        <OTPComponent
          email={email}
          otp={otp}
          setOtp={setOtp}
          onResend={handleResendOtp}
          onChangeEmail={handleChangeEmail}
          verifying={verifying}
          showSuccess={showSuccess}
          showError={showError}
          errorMessage={errorMessage}
          resendDisabled={resendDisabled}
          countdown={countdown}
        />
      )}
    </div>
  );
};