import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { postOTP, resetPassword } from "../../redux/api/userApi"

function OTPVerification() {
    const [email, setEmail] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [timer, setTimer] = useState(360);
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
        } catch (error) {
            setErrorMessage(error.message || 'Failed to send code. Please try again.');
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

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        const otpString = otp.join('');
        if (otpString.length !== 6) {
            setErrorMessage('Please enter all OTP digits');
            setLoading(false);
            return;
        }

        if (!newPassword || !confirmPassword) {
            setErrorMessage('Please enter both passwords');
            setLoading(false);
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            setLoading(false);
            return;
        }

        if (newPassword.length < 6) {
            setErrorMessage('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }

        try {
            const response = await resetPassword(newPassword, otpString, email);
            if (response.error) {
                throw new Error(response.error || 'Password reset failed');
            }
            navigate('/auth/sign-in'); // Adjust the navigation path as needed
        } catch (error) {
            setErrorMessage(error.message || 'Password reset failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        setLoading(true);
        try {
            const response = await postOTP("EMAIL", email);
            if (response.error) {
                throw new Error(response.error || 'Failed to resend OTP');
            }
            setTimer(360);
        } catch (error) {
            setErrorMessage(error.message || 'Failed to resend code. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold text-white">
                        {showOTP ? 'Reset Password' : 'Email Verification'}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-300">
                        {showOTP
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
                ) : (
                    <form onSubmit={handlePasswordSubmit} className="mt-8 space-y-6">
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

                        <div className="space-y-4">
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="New Password"
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:border-[#F2994A] focus:outline-none"
                                required
                            />
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
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
                                {loading ? <ClipLoader color="#ffffff" size={20}/> : "Change Password"}
                            </button>
                        </div>

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
                )}
            </div>
        </div>
    );
}

export default OTPVerification;