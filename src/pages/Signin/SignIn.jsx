import React, {useContext, useState} from "react";
import {useDispatch} from "react-redux"
import {FaEye, FaEyeSlash} from 'react-icons/fa'; // Import the eye icons
import {AuthContext} from "./../../context/AuthProvider";
import {Link, useNavigate} from "react-router-dom";
import {userLogin} from "../../redux/api/userApi";
import ClipLoader from "react-spinners/ClipLoader";
import {buyCredit} from "../../redux/api/buyCreditApi";
import useLocalStorage from "../../hooks/use-local-storage";
import {setUserData} from "../../redux/reducers/userSlice";


function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [_, setCurrentProfile] = useLocalStorage({
        key: 'currentProfile',
        defaultValue: null,
    })

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
                console.log(resultAction)
                if (userLogin.fulfilled.match(resultAction)) {
                    if (resultAction.payload.response?.data?.error) {
                        if(resultAction.payload.response?.status === 404) {
                            setErrorMessage("No user found with this username")
                        }
                        else if(resultAction.payload.response?.status === 401){
                            setErrorMessage("Invalid password or username")
                        }
                        else{
                            setErrorMessage("Unexpected error occurred")
                        }
                    } else {
                        authContext.login();
                        console.log(resultAction.payload.data)
                        dispatch(setUserData(resultAction.payload.data.user));
                        setCurrentProfile({...resultAction.payload.data})
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
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold text-white">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-300">Welcome back</p>
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
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:border-[#F2994A] focus:outline-none"
                                placeholder="Enter your username"
                                value={username}
                                onChange={handleUsername}
                            />
                        </div>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:border-[#F2994A] focus:outline-none pr-10"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePassword}
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
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-[#F2994A] hover:bg-[#e88b3d] text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2994A] focus:ring-offset-2 focus:ring-offset-gray-800"
                            onClick={handleSignIn}
                            disabled={loading}
                        >
                            {loading ? <ClipLoader color="#ffffff" size={20}/> : "Sign in"}
                        </button>
                    </div>
                </form>

                <div className="flex flex-col gap-y-4 text-sm text-center">
                    <p className="text-gray-300">
                        Don't have an account?{" "}
                        <Link to="/auth/sign-up" className="font-medium text-[#F2994A] hover:text-[#e88b3d]">
                            Sign up
                        </Link>
                    </p>
                    <p>
                        <Link to="/request-otp" className="font-medium text-[#F2994A] hover:text-[#e88b3d]">
                            Forgot password?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signin;






