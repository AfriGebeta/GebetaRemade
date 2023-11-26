import React, { useState , useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "./../../context/AuthProvider";
import { useNavigate } from "react-router-dom"; 

function Signin({ signintosignup }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext); // Access the AuthContext
  const navigate = useNavigate();
  const handleUsername = (event) => setUserName(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  


  const handleContinue = () => {
    console.log("ok clicked khere")
    // Call the login function from the context
    authContext.login();

    // Navigate to another page using React Router
     navigate("/dashboard");
  };


  return (
    <div className="md:card h-full md:h-auto w-[100%] md:w-[25%] md:rounded bg-Dark text-white p-10 absolute md:top-[10%] left-1/2 transform -translate-x-1/2 ">
        <div className="flex flex-col">
                <p  className='  text-[#A0AABA] ' style={{fontFamily: "Zen Dots" }}>Welcome Back</p>
                <p className='  text-white font-bold text-xl ' style={{fontFamily: "Zen Dots" }}>Log in to your Account </p>
                <div className="w-[95%] mt-[10%]">
                    <div class="w-full">
                        <div class="relative h-10 w-full min-w-[200px]">
                            <input
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
                            <input
                            class=" h-full w-full py-6 rounded-[7px] border border-white border-t-transparent bg-transparent px-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            />
                            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>
                    </div>
                    <div className="flex  justify-between mt-[5%]">
                        <div className="flex">
                            <input className="bg-white" type="checkbox" id="myCheckbox" class="hidden"/>
                            <span class="ml-2">Remeber Me?</span>
                        </div>
                        <p>Forgot password?</p>
                    </div>

                    <button
                        className="w-[100%] mt-[5%] bg-GebetaMain hover:bg-GebetaDark-700 text-white font-bold py-3 px-4 rounded"
                        type="button"
                        onClick={handleContinue}
                        >
                            Continue
                    </button>

                    <div class="flex items-center mt-[2%]">
                        <div class="flex-1 border-t border-gray-500"></div>
                        <span class="mx-4 text-white"> or </span>
                        <div class="flex-1 border-t border-gray-500"></div>
                    </div>

                    
                    <div className="w-[100%] mt-[5%]  border border-white  text-white font-bold py-3 px-4 rounded flex justify-between">
                        <FaFacebook/>
                        <p>Log in with Google</p>
                        <p></p>
                    </div>
                    
                   

                    <div className="w-[100%] mt-[5%]  border border-white  text-white font-bold py-3 px-4 rounded flex justify-between">
                        <FaGoogle/>
                        <p>Log in with FaceBook</p>
                        <p></p>
                    </div>

                    <div className="w-full mt-[15%] mb-[5%] text-center">
                        <p onClick={()=> signintosignup()}>New User? SIGN UP HERE</p>
                    </div>

                </div>

                
               


               
        </div>

    </div>
  );
}

export default Signin;
