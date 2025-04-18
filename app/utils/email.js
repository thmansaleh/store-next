import { API_BASE_URL } from "../urls";
// Function to send OTP verification email
export async function sendOTPVerification({ name, email }) {
    const response = await fetch(`${API_BASE_URL}/send-otp-verification?name=${name}&email=${email}`);
    const data = await response.json();
    return data;
}

// Function to verify the OTP
export async function verifyOTP(otp, email) {
    const response = await fetch(`${API_BASE_URL}/verify-otp?otp=${otp}&email=${email}`);
    const data = await response.json();
    return data;
}
