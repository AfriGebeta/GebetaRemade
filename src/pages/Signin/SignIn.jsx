import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux"
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the eye icons
import { AuthContext } from "./../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { userLogin, fireBaseLogin } from "../../redux/api/userApi";
import EmailConfirmationForgotPassword from "../EmailConfirmation/EmailConfirmationForgotPassword";
import { auth, provider } from "./../../firebase/Firebase"
import ClipLoader from "react-spinners/ClipLoader";
import Loading from "../Loading";
import { GithubAuthProvider, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {buyCredit} from "../../redux/api/buyCreditApi";


function Signin({ signintosignup }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleUsername = (event) => setUsername(event.target.value);
    const handlePassword = (event) => setPassword(event.target.value);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleSignIn = () => {
        setLoading(true);
        dispatch(userLogin({ username, password }))
            .then((resultAction) => {
                if (userLogin.fulfilled.match(resultAction)) {
                    if (resultAction.payload.data == null) {
                        setErrorMessage(resultAction.payload.error);
                    } else {
                        authContext.login();
                        handleRedirect(resultAction.payload.data.token);
                    }
                } else {
                    setErrorMessage(resultAction.error.message);
                }
                setLoading(false);
            });
    };

    const handleRedirect = (token) => {
        if (localStorage.getItem('redirect')) {
            localStorage.removeItem('redirect');
            navigate("/priceplan");
            const id = localStorage.getItem('plan');
            buyCredit(token, id)
                .then(response => {
                    if (response.data.data.status === "success") {
                        window.open(response.data.data.Data.checkout_url, '_blank');
                    }
                })
                .catch(err => console.log(err));
        } else {
            navigate("/dashboard");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">Welcome back</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                    <div className="space-y-6">
                        <div>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:GebetaMain/70 focus:border-GebetaMain/70 sm:text-sm"
                                placeholder="Enter your username"
                                value={username}
                                onChange={handleUsername}
                            />
                        </div>
                        <div>
                            <div className="mt-1 relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:GebetaMain/70 focus:border-GebetaMain/70 sm:text-sm"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={handlePassword}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-GebetaMain hover:bg-GebetaMain/70 focus:outline-none"
                            onClick={handleSignIn}
                            disabled={loading}
                        >
                            {loading ? <ClipLoader color="#ffffff" size={20} /> : "Sign in"}
                        </button>
                    </div>
                </form>

                <div className="text-sm text-center">
                    <p>
                        Don't have an account?{" "}
                        <button onClick={signintosignup} className="font-medium text-GebetaMain hover:text-GebetaMain/70">
                            Sign up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signin;






