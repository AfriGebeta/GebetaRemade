import React, { useState, useContext, useEffect } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { userLogoutEndPointCaller } from "../../redux/api/userApi";
// import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { userLogin } from "../../redux/api/userApi";
// import { auth, provider } from "./../../firebase/Firebase";
import { AuthContext } from "../../context/AuthProvider"
import { buyCredit } from "../../redux/api/buyCreditApi";
import useLocalStorage from "../../hooks/use-local-storage";
import { setUserData } from "../../redux/reducers/userSlice";
import { postOTP, register } from "../../redux/api/userApi";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

function InputField({id, name, type, autoComplete, required, placeholder, value, onChange}) {
    return (
        <div>
            <label htmlFor={id} className="sr-only">
                {placeholder}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                autoComplete={autoComplete}
                required={required}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:border-[#F2994A] focus:outline-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

function PasswordField({ id, name, placeholder, value, onChange, showPassword, togglePasswordVisibility }) {
    return (
        <div className="relative">
            <label htmlFor={id} className="sr-only">
                {placeholder}
            </label>
            <input
                id={id}
                name={name}
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:border-[#F2994A] focus:outline-none pr-10"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#F2994A]"
                onClick={togglePasswordVisibility}
            >
                {showPassword ? (
                    <FaEyeSlash className="h-5 w-5" />
                ) : (
                    <FaEye className="h-5 w-5" />
                )}
            </button>
        </div>
    );
}

function Signup() {
    // State variables
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [companyname, setCompanyName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [fireBaseId, setFirebaseId] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmPasswordVisibility] = useState(false);
    const [step, setStep] = useState(1);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [timer, setTimer] = useState(360);

    const [_, setCurrentProfile] = useLocalStorage({
        key: 'currentProfile',
        defaultValue: null,
    });

    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const dispatch = useDispatch();

    // Effect for OTP timer
    useEffect(() => {
        const countdown = timer > 0 && step === 2 && setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(countdown);
    }, [timer, step]);

    // Handlers
    const handleUsername = (event) => setUserName(event.target.value);
    const handleEmail = (event) => setEmail(event.target.value);
    const handlePhone = (value) => setPhone(value);
    const handleCompanyName = (event) => setCompanyName(event.target.value);
    const handlePassword = (event) => setPassword(event.target.value);
    const handleConfirmPassword = (event) => setConfirmPassword(event.target.value);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () => setConfirmPasswordVisibility(!showConfirmPassword);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // OTP handlers
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

    // Validation
    function validateInputs(username, email, phone, companyname, password, confirmPassword) {
        if (!username || !email || !phone || !companyname || !password || !confirmPassword) {
            return { error: true, msg: "All fields must be filled out." };
        }

        const phoneRegex = /^\+251[9][0-9]{8}$/;
        if (phoneRegex.test(phone)) {
            return { error: true, msg: "Invalid phone number. It should be 10 digits." };
        }

        if (password !== confirmPassword) {
            return { error: true, msg: "Passwords do not match." };
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email)) {
            return { error: true, msg: "Invalid email address." };
        }

        return { error: false, msg: "" };
    }

    const validateFirstStep = () => {
        const validationResults = validateInputs(username, email, phone, companyname, password, confirmPassword);
        if (validationResults.error) {
            setErrorMessage(validationResults.msg);
            return false;
        }
        return true;
    };

    // Main handlers
    const handleContinue = async () => {
        setLoading(true);
        if (!validateFirstStep()) {
            setLoading(false);
            return;
        }

        try {
            const response = await postOTP("EMAIL", email);
            if (response.error) {
                throw new Error(response.error);
            }
            setStep(2);
            setTimer(360);
            setErrorMessage("");
        } catch (error) {
            setErrorMessage(error.message || "Failed to send OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleResendOTP = async () => {
        setLoading(true);
        try {
            const response = await postOTP("EMAIL", email);
            if (response.error) {
                throw new Error(response.error);
            }
            setTimer(360);
            setErrorMessage("");
        } catch (error) {
            setErrorMessage(error.message || "Failed to resend OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleFinalSubmit = async () => {
        setLoading(true);
        const otpString = otp.join('');
        if (otpString.length !== 6) {
            setErrorMessage('Please enter a valid OTP');
            setLoading(false);
            return;
        }

        const formData = {
            username,
            password,
            companyname,
            email,
            phone,
            otp: otpString
        };

        try {
            const response = await register(formData);
            if (response.error) {
                setErrorMessage(response.error);
            } else {
                dispatch(userLogin({ username, password })).then((resultAction) => {
                    if (userLogin.fulfilled.match(resultAction)) {
                        if (resultAction.payload.data == null) {
                            setErrorMessage(resultAction.payload.error);
                        } else {
                            authContext.login();
                            dispatch(setUserData(resultAction.payload.data));
                            setCurrentProfile({...resultAction.payload.data});
                            navigate("/dashboard");
                        }
                    } else {
                        setErrorMessage(resultAction.error.message);
                    }
                });
            }
        } catch (error) {
            setErrorMessage(error.message || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 p-8">
            <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold text-white">
                        {step === 1 ? "Create an account" : "Verify Email"}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-300">
                        {step === 1 ? "Join us today" : `Enter the code sent to ${email}`}
                    </p>
                </div>

                {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}

                {step === 1 ? (
                    <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-4">
                            <InputField
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                placeholder="Username"
                                value={username}
                                onChange={handleUsername}
                            />
                            <InputField
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="Email address"
                                value={email}
                                onChange={handleEmail}
                            />
                            <div>
                                <PhoneInput
                                    country={'et'}
                                    value={phone}
                                    onChange={handlePhone}
                                    placeholder= "example +251 9********"
                                    inputStyle={{
                                        width: '93%',
                                        padding: '24px',
                                        borderRadius: '8px',
                                        border: '1px solid #4B5563',
                                        backgroundColor: '#374151',
                                        marginLeft:'24px',
                                        color: '#FFFFFF'
                                    }}
                                    dropdownStyle={{backgroundColor: '#1F2937', color: '#71717A'}}
                                />
                            </div>
                            <InputField
                                id="companyname"
                                name="companyname"
                                type="text"
                                autoComplete="organization"
                                required
                                placeholder="Company name"
                                value={companyname}
                                onChange={handleCompanyName}
                            />
                            <PasswordField
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePassword}
                                showPassword={showPassword}
                                togglePasswordVisibility={togglePasswordVisibility}
                            />
                            <PasswordField
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={handleConfirmPassword}
                                showPassword={showConfirmPassword}
                                togglePasswordVisibility={toggleConfirmPassword}
                            />
                        </div>

                        <div>
                            <button
                                type="button"
                                className="w-full py-3 px-4 bg-[#F2994A] hover:bg-[#e88b3d] text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2994A] focus:ring-offset-2 focus:ring-offset-gray-800"
                                onClick={handleContinue}
                                disabled={loading}
                            >
                                {loading ? <ClipLoader color="#ffffff" size={20}/> : "Continue"}
                            </button>
                        </div>
                    </form>
                ) : (
                    <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
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

                        <div>
                            <button
                                type="button"
                                className="w-full py-3 px-4 bg-[#F2994A] hover:bg-[#e88b3d] text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2994A] focus:ring-offset-2 focus:ring-offset-gray-800"
                                onClick={handleFinalSubmit}
                                disabled={loading}
                            >
                                {loading ? <ClipLoader color="#ffffff" size={20}/> : "Complete Signup"}
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
                                    onClick={handleResendOTP}
                                    disabled={loading}
                                    className="text-[#F2994A] hover:text-[#e88b3d] font-medium focus:outline-none disabled:opacity-50"
                                >
                                    Resend Code
                                </button>
                            )}
                        </div>
                    </form>
                )}

                <div className="text-sm text-center">
                    <p className="text-gray-300">
                        Already have an account?{" "}
                        <Link to="/auth/sign-in" className="font-medium text-[#F2994A] hover:text-[#e88b3d]">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;