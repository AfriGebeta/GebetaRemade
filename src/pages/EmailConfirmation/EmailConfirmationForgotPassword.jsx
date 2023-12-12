import React, { useState , useContext , useRef} from "react";
import { useSelector, useDispatch } from "react-redux"
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "./../../context/AuthProvider";
import { useNavigate } from "react-router-dom"; 
import { userLogin } from "../../redux/api/userApi";




function EmailConfirmationForgotPassword() {
  const [errorMessage , setErrorMessage] = useState("")
  const [counter , setCounter] = useState(0)
  const [email , setEmail] = useState("")
  const intervalIdRef = useRef(null);
  const handleEmail = (event) => setEmail(event.target.value);

  const handleSendEmail = async () => {
    // Clear any existing interval
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
    }
   
    // Make the API request
    try {
      const response = await fetch('http://localhost:8080/api/v1/users/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailto: email }),
      });
   
      const data = await response.json();
   
      if (!response.ok) {
        setErrorMessage("Can not send email now");
      } else {
        setErrorMessage("");
        // Start the countdown
        setCounter(60); // set counter to 60 seconds
        intervalIdRef.current = setInterval(() => {
          setCounter((prevCounter) => {
            if (prevCounter === 0) {
              clearInterval(intervalIdRef.current);
              return 0;
            } else {
              return prevCounter - 1;
            }
          });
        }, 1000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage("Error sending email");
    }
   };


  return (
  
            <div className="md:card h-full md:h-auto w-[100%] md:w-[25%] md:rounded bg-Dark text-white p-10 absolute md:top-[10%] left-1/2 transform -translate-x-1/2 ">
            <div className="flex flex-col">
                    <p  className='  text-[#A0AABA] ' style={{fontFamily: "Zen Dots" }}>Email Confirmation</p>
                    <div class="w-full mt-[8%]">
                    {counter == 0 ?
                        <div class="relative h-10 w-full min-w-[200px]">
                            <input
                            class=" h-full w-full py-6 rounded-[7px] border border-white border-t-transparent bg-transparent px-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            onChange={handleEmail}
                            />
                            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Email
                            </label>
                        </div>
                        : 
                        <p></p>    
                    }
                    
                </div>
                    {/* <p className='  text-white font-bold text-xl ' style={{fontFamily: "Zen Dots" }}>Log in to your Account </p> */}
                    <div className="w-[95%] mt-[10%]">
                        {errorMessage != "" ? <p className="mb-[5%] text-red-400">{errorMessage}</p> : ""}
                        <p>{counter > 0 ? "We sent you a confirmation email. Confirm your account by clicking on the link in the email and you'll be able to start mapping." : ""}</p>
                        <button
                            className="w-[100%] mt-[5%] bg-GebetaMain hover:bg-GebetaDark-700 text-white font-bold py-3 px-4 rounded " 
                            type="button"
                            onClick={counter > 0 ? null : handleSendEmail}
                            disabled={counter > 0}>
                            {counter > 0 ? `Please Wait for ${counter} sec` : "Send Email"} 
                        </button>
                    </div>
            </div>
    
        </div>
   
  );
}

export default EmailConfirmationForgotPassword;






  