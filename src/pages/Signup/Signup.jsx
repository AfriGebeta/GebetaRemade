import React, { useState } from "react";
import EmailConfirmation from "../EmailConfirmation/EmailConfirmation"; 
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { userLogoutEndPointCaller } from "../../redux/api/userApi";
// firebaase  
import  {auth , provider} from "./../../firebase/Firebase"
import { GithubAuthProvider,getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import ClipLoader from "react-spinners/ClipLoader";


function Signup({ signupintosignin ,  }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone , setPhone] = useState("")
  const [companyname  , setCompanyName] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword , setConfirmPassword ] = useState("")
  const [errorMessage , setErrorMessage] = useState("")
  const [fireBaseId , setFirebaseId] = useState("")
  const [loading , setLoading] = useState(false)
  const [emailConfirmation , setEmailConfirmation] = useState(false)
  const handleUsername = (event) => setUserName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePhone = (event) => setPhone(event.target.value);
  const handleCompanyName = (event) => setCompanyName(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleConfirmPassword = (event) => setConfirmPassword(event.target.value);
  


  function validateInputs(username, email, phone, companyname, password, confirmPassword) {
    // Check if any input is empty
    if (!username || !email || !phone || !companyname || !password || !confirmPassword) {
      return { error: true, msg: "All fields must be filled out." };
    }
  
    // Check if the phone number is valid
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return { error: true, msg: "Invalid phone number. It should be 10 digits." };
    }
  
    // Check if the passwords match
    if (password !== confirmPassword) {
      return { error: true, msg: "Passwords do not match." };
    }
  
    // Check if the email is a valid email address

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
        return { error: true, msg: "Invalid email address." };
    }

  
    // If all checks pass, return success
    return { error: false, msg: "" };
  }

  const signUpGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const user = result.user;
        setEmail(user.email)
        if(user.phoneNumber != null) setPhone(user.phoneNumber)
        setFirebaseId(user.uid)
        setLoading(false)
    }) .catch((error) => {
        // Handle Errors here.   
        setLoading(false)
    });

  

 }

  const googleSignup = () => {
    setLoading(true)
    signInWithPopup(auth, provider)
    
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
           
        setEmail(user.email)
        if(user.phoneNumber != null) setPhone(user.phoneNumber)
        setFirebaseId(user.uid)
        setLoading(false)
    }).catch((error) => {
  
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        setLoading(false)
    });

 }

const signup = () => {
    setLoading(true)
    const validationResults = validateInputs(username, email, phone, companyname, password, confirmPassword);
    if(validationResults.error) setErrorMessage(validationResults.msg)
    else{
        setErrorMessage("")
        userLogoutEndPointCaller({
            "username": username,
            "password": password,
            "companyname": companyname,
            "email": email,
            "phone" : phone,
            "fid" : fireBaseId
        }).then((response)=>{
           
            if(response.error != null) setErrorMessage(response.error) 
            else setEmailConfirmation(!emailConfirmation)
            setLoading(false)
        })
    }
    setLoading(false)
  }
    

  return (
<>
    {
        emailConfirmation ? (<EmailConfirmation email = { email } />)  :
    
(
    <div className="md:card md:h-auto w-[100%] md:w-[45%] lg:w-[25%] md:rounded bg-Dark text-white p-10 absolute md:top-[10%] left-1/2 transform -translate-x-1/2 ">
    <div className="flex flex-col">
            <p  className='  text-[#A0AABA] ' style={{fontFamily: "Zen Dots" }}>LET'S GET YOU STARTED</p>
            <p className='  text-white font-bold text-xl ' style={{fontFamily: "Zen Dots" }}>CREATE AN Account </p>
            <div className="w-[95%] mt-[3%]  md:mt-[10%]">
            {errorMessage != "" ? <p className="mb-[5%] text-red-400">{errorMessage}</p> : ""}
                <div class="w-full">
                    <div class="relative h-10 w-full min-w-[200px]">
                        <input
                        class=" h-full py-6 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3  font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all   focus:border-2   disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        onChange={handleUsername}
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
                        value={email}
                        onChange={handleEmail}
                        />
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Email
                        </label>
                    </div>
                </div>

                <div class="w-full mt-[8%]">
                    <div class="relative h-10 w-full min-w-[200px]">
                        <input
                        class=" h-full w-full py-6 rounded-[7px] border border-white border-t-transparent bg-transparent px-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type = "number"
                        value={phone}
                        onChange={handlePhone}
                        />
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Phone
                        </label>
                    </div>
                </div>




                <div class="w-full mt-[8%]">
                    <div class="relative h-10 w-full min-w-[200px]">
                        <input
                        class=" h-full w-full py-6 rounded-[7px] border border-white border-t-transparent bg-transparent px-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        onChange={handleCompanyName}
                        />
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Company name
                        </label>
                    </div>
                </div>

                <div class="w-full mt-[8%]">
                    <div class="relative h-10 w-full min-w-[200px]">
                        <input
                        class=" h-full w-full py-6 rounded-[7px] border border-white border-t-transparent bg-transparent px-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="password"
                        onChange={handlePassword}
                        />
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Password
                        </label>
                    </div>
                </div>

                <div class="w-full mt-[8%]">
                    <div class="relative h-10 w-full min-w-[200px]">
                        <input
                        class=" h-full w-full py-6 rounded-[7px] border border-white border-t-transparent bg-transparent px-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        type="password"
                        onChange={handleConfirmPassword}
                        />
                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Confirm password
                        </label>
                    </div>
                </div>
              

                <button

                    onClick={()=>{signup()}}
                    className="w-[100%] mt-[5%] bg-GebetaMain hover:bg-GebetaDark-700 text-white font-bold py-3 px-4 rounded"
                    type="button">
                        
                        {loading ? <ClipLoader color="#ffffff" size={35} />  : "Continue"} 
                </button>

                <div class="flex items-center mt-[2%]">
                    <div class="flex-1 border-t border-gray-500"></div>
                    <span class="mx-4 text-white"> or </span>
                    <div class="flex-1 border-t border-gray-500"></div>
                </div>

                <div 
                onClick={()=> googleSignup()}
                className="w-[100%] mt-[5%]  border border-white  text-white font-bold py-3 px-4 rounded flex justify-between">
                    <FaGoogle/>
              
                    {loading ? <ClipLoader color="#ffffff" size={35} />  : <span className="hover:text-GebetaMain">Sign up with Google</span>} 
                    <p></p>
                </div>
                
                <div 
                onClick={()=> signUpGithub()}
                className="w-[100%] mt-[5%]  border border-white  text-white font-bold py-3 px-4 rounded flex justify-between">
                    <FaGithub/>
              
                    {loading ? <ClipLoader color="#ffffff" size={35} />  : <span className="hover:text-GebetaMain">Sign up with Github</span>} 
                    <p></p>
                </div>
                
               

              

                <div className="w-full mt-[10%] md:mb-[5%] text-center">
                    <p onClick={()=>{signupintosignin()}}>Already have an account? <span className="hover:text-GebetaMain">login here</span></p>
                </div>

            </div>

            
              
    </div>

</div>
)
  
}</>
  );
}

export default Signup;
