import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import {postOTP, resetPassword, verifyOTP} from "../../redux/api/userApi"
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function OTPVerification() {
    const [email, setEmail] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [timer, setTimer] = useState(360);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isOTPVerified, setIsOTPVerified] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const countdown = timer > 0 && showOTP && setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(countdown);
    }, [timer, showOTP]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        if (!email) {
            setErrorMessage('Please enter your email');
            setLoading(false);
            return;
        }

        try {
            const response = await postOTP("EMAIL", email);
            if (response.error) {
                throw new Error(response.error || 'Failed to send OTP');
            }
            setShowOTP(true);
            setTimer(360);
            toast.success("OTP sent successfully!");
        } catch (error) {
            toast.error(error.message || 'Failed to send code. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleOTPVerification = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        const otpString = otp.join('');
        if (otpString.length !== 6) {
            setErrorMessage('Please enter all OTP digits');
            setLoading(false);
            return;
        }

        try {
            const response = await verifyOTP(otpString);
            console.log(response)
            if (response?.response?.status===500) {
                toast.error('Invalid OTP');
                throw new Error(response.error);
            }
            toast.success('OTP verified successfully!');
            setIsOTPVerified(true);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleContinue = () => {
        setShowPasswordFields(true);
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        if (!newPassword || !confirmPassword) {
            toast.error('Please enter both passwords');
            setLoading(false);
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match');
            setLoading(false);
            return;
        }

        if (newPassword.length < 6) {
            toast.error('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }

        try {
            const response = await resetPassword(newPassword, otp.join(''), email);
            if (response.error) {
                throw new Error(response.error || 'Password reset failed');
            }
            toast.success('Password reset successful!');
            navigate('/auth/sign-in');
        } catch (error) {
            toast.error(error.message || 'Password reset failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.value && element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (!otp[index] && index > 0) {
                const newOtp = [...otp];
                newOtp[index - 1] = '';
                setOtp(newOtp);
                e.target.previousSibling?.focus();
            } else {
                const newOtp = [...otp];
                newOtp[index] = '';
                setOtp(newOtp);
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        const pastedArray = pastedData.split('').map(char => isNaN(char) ? '' : char);
        setOtp([...pastedArray, ...Array(6 - pastedArray.length).fill('')].slice(0, 6));
    };

    const handleResend = async () => {
        setLoading(true);
        try {
            const response = await postOTP("EMAIL", email);
            if (response.error) {
                throw new Error(response.error || 'Failed to resend OTP');
            }
            setTimer(360);
            toast.success('OTP resent successfully!');
        } catch (error) {
            toast.error(error.message || 'Failed to resend code. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold text-white">
                        {showPasswordFields ? 'Reset Password' : showOTP ? 'Enter Verification Code' : 'Email Verification'}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-300">
                        {showPasswordFields
                            ? 'Enter your new password'
                            : showOTP
                                ? `Enter the verification code sent to ${email}`
                                : 'Enter your email to receive verification code'
                        }
                    </p>
                </div>

                {errorMessage && (
                    <p className="text-red-500 text-sm text-center">{errorMessage}</p>
                )}

                {!showOTP ? (
                    <form onSubmit={handleEmailSubmit} className="mt-8 space-y-6">
                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:border-[#F2994A] focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 px-4 bg-[#F2994A] hover:bg-[#e88b3d] text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2994A] focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50"
                            >
                                {loading ? <ClipLoader color="#ffffff" size={20}/> : "Send Code"}
                            </button>
                        </div>
                    </form>
                ) : showOTP && !showPasswordFields ? (
                    <form onSubmit={handleOTPVerification} className="mt-8 space-y-6">
                        <div className="flex justify-center space-x-3">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onPaste={handlePaste}
                                    className="w-12 h-12 text-center text-xl font-semibold bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-[#F2994A] focus:outline-none"
                                />
                            ))}
                        </div>

                        {!isOTPVerified ? (
                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 px-4 bg-[#F2994A] hover:bg-[#e88b3d] text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2994A] focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50"
                                >
                                    {loading ? <ClipLoader color="#ffffff" size={20}/> : "Verify Code"}
                                </button>
                            </div>
                        ) : (
                            <div>
                                <button
                                    type="button"
                                    onClick={handleContinue}
                                    className="w-full py-3 px-4 bg-[#F2994A] hover:bg-[#e88b3d] text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2994A] focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    Continue
                                </button>
                            </div>
                        )}

                        <div className="text-center">
                            {timer > 0 ? (
                                <p className="text-gray-300">
                                    Resend code in <span className="text-[#F2994A]">{formatTime(timer)}</span>
                                </p>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleResend}
                                    disabled={loading}
                                    className="text-[#F2994A] hover:text-[#e88b3d] font-medium focus:outline-none disabled:opacity-50"
                                >
                                    Resend Code
                                </button>
                            )}
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handlePasswordSubmit} className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="New Password"
                                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:border-[#F2994A] focus:outline-none"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                >
                                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:border-[#F2994A] focus:outline-none"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 px-4 bg-[#F2994A] hover:bg-[#e88b3d] text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2994A] focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50"
                            >
                                {loading ? <ClipLoader color="#ffffff" size={20}/> : "Change Password"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default OTPVerification;