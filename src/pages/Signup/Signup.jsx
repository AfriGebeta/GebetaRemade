import React, { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the eye icons
import { userLogoutEndPointCaller } from "../../redux/api/userApi";
// firebaase  
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { userLogin } from "../../redux/api/userApi";
import { auth, provider } from "./../../firebase/Firebase";
import { AuthContext } from "./../../context/AuthProvider";
import {buyCredit} from "../../redux/api/buyCreditApi";




function Signup({ signupintosignin }) {
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

    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const dispatch = useDispatch();

    const handleUsername = (event) => setUserName(event.target.value);
    const handleEmail = (event) => setEmail(event.target.value);
    const handlePhone = (event) => setPhone(event.target.value);
    const handleCompanyName = (event) => setCompanyName(event.target.value);
    const handlePassword = (event) => setPassword(event.target.value);
    const handleConfirmPassword = (event) => setConfirmPassword(event.target.value);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () => setConfirmPasswordVisibility(!showConfirmPassword);

    function validateInputs(username, email, phone, companyname, password, confirmPassword) {
        if (!username || !email || !phone || !companyname || !password || !confirmPassword) {
            return { error: true, msg: "All fields must be filled out." };
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
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

    const signup = () => {
        setLoading(true);
        const validationResults = validateInputs(username, email, phone, companyname, password, confirmPassword);
        if (validationResults.error) {
            setErrorMessage(validationResults.msg);
            setLoading(false);
        } else {
            setErrorMessage("");
            userLogoutEndPointCaller({
                username,
                password,
                companyname,
                email,
                phone,
                fid: fireBaseId,
            }).then((response) => {
                if (response.error != null) setErrorMessage(response.error);
                setLoading(false);
                dispatch(userLogin({ username, password })).then((resultAction) => {
                    if (userLogin.fulfilled.match(resultAction)) {
                        if (resultAction.payload.data == null) {
                            setErrorMessage(resultAction.payload.error);
                        } else {
                            authContext.login();
                            if (localStorage.getItem("redirect")) {
                                localStorage.removeItem("redirect");
                                navigate("/priceplan");
                                const id = localStorage.getItem("plan");
                                buyCredit(resultAction.payload.data.token, id)
                                    .then((response) => {
                                        if (response.data.data.status === "success") {
                                            window.open(response.data.data.Data.checkout_url, "_blank");
                                        }
                                    })
                                    .catch((err) => console.log(err));
                            } else {
                                navigate("/dashboard");
                            }
                        }
                    } else {
                        setErrorMessage(resultAction.error.message);
                    }
                    setLoading(false);
                });
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">Let's get you started</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
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
                        <InputField
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            required
                            placeholder="Phone number"
                            value={phone}
                            onChange={handlePhone}
                        />
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
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-GebetaMain hover:bg-GebetaMain/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-GebetaMain"
                            onClick={signup}
                            disabled={loading}
                        >
                            {loading ? <ClipLoader color="#ffffff" size={20} /> : "Sign up"}
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center">
                    <p>
                        Already have an account?{" "}
                        <button onClick={signupintosignin} className="font-medium text-GebetaMain hover:text-GebetaMain/70">
                            Sign in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

function InputField({ id, name, type, autoComplete, required, placeholder, value, onChange }) {
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
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:GebetaMain/70 focus:border-GebetaMain/70 focus:z-10 sm:text-sm"
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
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:GebetaMain/70 focus:border-GebetaMain/70 focus:z-10 sm:text-sm pr-10"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
            >
                {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400" />
                ) : (
                    <FaEye className="h-5 w-5 text-gray-400" />
                )}
            </button>
        </div>
    );
}

export default Signup;
