import React, { useState , useContext } from "react";
import { useSelector, useDispatch } from "react-redux"
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the eye icons
import { AuthContext } from "./../../context/AuthProvider";
import { useNavigate } from "react-router-dom"; 
import { userLogin , fireBaseLogin} from "../../redux/api/userApi";
import EmailConfirmationForgotPassword from "../EmailConfirmation/EmailConfirmationForgotPassword";
import  {auth , provider} from "./../../firebase/Firebase"
import ClipLoader from "react-spinners/ClipLoader";
import Loading from "../Loading";
import { GithubAuthProvider, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function Signin({ signintosignup }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading , setLoading] = useState(false)
  const [errorMessage , setErrorMessage] = useState("")
  const [forgotPassword , setForgotPassword] = useState(false)
  const [fireBaseId , setFirebaseId] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const authContext = useContext(AuthContext); // Access the AuthContext
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUsername = (event) => setUserName(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleForgotPassword = () => setForgotPassword(!forgotPassword)
  const togglePasswordVisibility = () =>  setShowPassword(!showPassword);


  const signInGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const user = result.user;
        dispatch(fireBaseLogin(user.uid)).then((resultAction) => {
            if (fireBaseLogin.fulfilled.match(resultAction)) {
                  authContext.login();
                  navigate("/dashboard");
            } else {
                  setErrorMessage(resultAction.error.message);
            }
            setLoading(false)
                  
          });
    }) .catch((error) => {
        // Handle Errors here.   
        setLoading(false)
    });

  

 }


  const handleContinue = () => {
    setLoading(true)
    dispatch(userLogin({
      "username": username,
      "password": password
    })).then((resultAction) => {
        console.log(resultAction)
      if (userLogin.fulfilled.match(resultAction)) {
            if(resultAction.payload.data == null){
             
                setErrorMessage(resultAction.payload.error);
            }else{
                authContext.login();
                navigate("/dashboard");
            }
      } else {
            
            setErrorMessage(resultAction.error.message);
      }
      setLoading(false)
            
    });
   };
   

const googleLogin = () => {
    setLoading(true)
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        
        dispatch(fireBaseLogin(user.uid)).then((resultAction) => {
          if (fireBaseLogin.fulfilled.match(resultAction)) {
                authContext.login();
                navigate("/dashboard");
          } else {
                setErrorMessage(resultAction.error.message);
          }
          setLoading(false)
                
        });
   
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    setLoading(false)
    });

 }
  return (
    <>
        {
            loading ? <Loading/>:

            forgotPassword ? <EmailConfirmationForgotPassword/> :



            <div className="md:card h-full md:h-auto w-[100%] md:w-[25%] md:rounded bg-Dark text-white p-10 absolute md:top-[10%] left-1/2 transform -translate-x-1/2 ">
            <div className="flex flex-col">
                    <p  className='  text-[#A0AABA] ' style={{fontFamily: "Zen Dots" }}>Welcome Back</p>
                    <p className='  text-white font-bold text-xl ' style={{fontFamily: "Zen Dots" }}>Log in to your Account </p>
                    <div className="w-[95%] mt-[10%] flex flex-col gap-5">
                        {errorMessage != "" ? <p className="mb-[5%] text-red-400">{errorMessage}</p> : ""}
                        
                    
                        <div class="w-full">
                            <div class="relative h-10 w-full min-w-[200px]">
                                <input
                                onChange={handleUsername}
                                class=" h-full py-6 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3  font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all   focus:border-2   disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                                />
                                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                username
                                </label>
                            </div>
                        </div>
    
                        <div class="w-full mt-[8%]">
                            <div class="relative h-10 w-full min-w-[200px]">
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={handlePassword}
                                    className="h-full py-6 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-2 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                 <span
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer "
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash className="text-white" /> : <FaEye className="text-white" />}
                                </span>
                                </div>
                                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>
                        </div>
                        <div className="flex  justify-between mt-[5%]">
                            <div className="flex">
                                <input className="bg-white" type="checkbox" id="myCheckbox" class="hidden"/>
                                <span class="ml-2"></span>
                            </div>
                            <p className=" hover:text-GebetaMain block   hover:text-GebetaMain border rounded-lg md:border-none " onClick={handleForgotPassword}>Forgot password?</p>
                        </div>
    
                        <button
                            className="w-[100%] mt-[5%] bg-GebetaMain hover:bg-GebetaDark-700 text-white font-bold py-3 px-4 rounded"
                            type="button"
                            onClick={handleContinue}
                            >
                                
                                {loading ? <ClipLoader color="#ffffff" size={35} />  : "Continue"} 

                        </button>
    
                        {/* <div class="flex items-center mt-[2%]">
                            <div class="flex-1 border-t border-gray-500"></div>
                            <span class="mx-4 text-white"> or </span>
                            <div class="flex-1 border-t border-gray-500"></div>
                        </div> */}
    
                        
                        {/* <div 
                        onClick={()=> googleLogin()}
                        className="w-[100%] mt-[5%]  border border-white  text-white font-bold py-3 px-4 rounded flex justify-between">
                           <FaGoogle/>
                           <p>{loading ? <ClipLoader color="#ffffff" size={35} /> : <span className="hover:text-GebetaMain">Sign in with Google</span>} </p>
                            <p></p>
                        </div>
                        
                       
    
                        <div 
                        onClick={() => signInGithub()}
                        className="w-[100%] mt-[5%]  border border-white  text-white font-bold py-3 px-4 rounded flex justify-between">
                            
                            <FaGithub/>
                          
                            <p>{loading ? <ClipLoader color="#ffffff" size={35} /> : <span className="hover:text-GebetaMain">Sign in with Github</span>} </p>
                            <p></p>
                        </div> */}
    
                        <div className="w-full mt-[15%] mb-[5%] text-center">
                            <p onClick={()=> signintosignup()}>new user ?<span className="hover:text-GebetaMain"> sign up here </span></p>
                        </div>
    
                    </div>
            </div>
    
        </div>
        
        }

    </>
   
  );
}

export default Signin;






  