import React, { useState , useContext , useRef} from "react";
import { useSelector, useDispatch } from "react-redux"
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "./../../context/AuthProvider";
import { useNavigate } from "react-router-dom"; 
import { userLogin } from "../../redux/api/userApi";

import Loading from "../Loading";


function EmailConfirmationForgotPassword({ signintosignup }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading , setLoading] = useState(false)
  const [errorMessage , setErrorMessage] = useState("")
  const authContext = useContext(AuthContext); // Access the AuthContext
  const fieldsRef = useRef()
  const [state, setState] = useState({ code1: "", code2: "", code3: "", code4: "" , code5 : "", code6 : "" })




  const navigate = useNavigate();
  const dispatch = useDispatch();




  const inputFocus = (e) => {
    const elements = fieldsRef.current.children
    const dataIndex = +e.target.getAttribute("data-index")
    if ((e.key === "Delete" || e.key === "Backspace")) {
        const next = dataIndex - 1;
        if (next > -1) {
            elements[next].focus()
        }
    } else {

        const next = dataIndex + 1
        if (next < elements.length && e.target.value != " " && e.target.value != "" && e.key.length == 1) {
            elements[next].focus()
        }
    }
}

const handleChange = (e, codeNumber) => {
    const value = e.target.value
    setState({ ...state, [codeNumber]: value.slice(value.length - 1) })
}


  const handleSendEmail = () => {
   
   };
   


  return (
  
            <div className="md:card h-full md:h-auto w-[100%] md:w-[25%] md:rounded bg-Dark text-white p-10 absolute md:top-[10%] left-1/2 transform -translate-x-1/2 ">
            <div className="flex flex-col">
                    <p  className='  text-[#A0AABA] ' style={{fontFamily: "Zen Dots" }}>Email Confirmation</p>
                    {/* <p className='  text-white font-bold text-xl ' style={{fontFamily: "Zen Dots" }}>Log in to your Account </p> */}
                    <div className="w-[95%] mt-[10%]">
                        {errorMessage != "" ? <p className="mb-[5%] text-red-400">{errorMessage}</p> : ""}
                        
                    
                        <label className="text-gray-600">
                Verification code
            </label>
            <div ref={fieldsRef} className="mt-2 flex items-center gap-x-4">
                <input type="text" data-index="0" placeholder="0" value={state.code1} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code1")}
                    onKeyUp={inputFocus}
                />
                <input type="text" data-index="1" placeholder="0" value={state.code2} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code2")}
                    onKeyUp={inputFocus}
                />
                <input type="text" data-index="2" placeholder="0" value={state.code3} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code3")}
                    onKeyUp={inputFocus}
                />
                <input type="text" data-index="3" placeholder="0" value={state.code4} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code4")}
                    onKeyUp={inputFocus}
                />
                   <input type="text" data-index="3" placeholder="0" value={state.code4} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code5")}
                    onKeyUp={inputFocus}
                />
                   <input type="text" data-index="3" placeholder="0" value={state.code4} className="w-12 h-12 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"
                    onChange={(e) => handleChange(e, "code6")}
                    onKeyUp={inputFocus}
                />
            </div>
    
                       
    
                        <button
                            className="w-[100%] mt-[5%] bg-GebetaMain hover:bg-GebetaDark-700 text-white font-bold py-3 px-4 rounded"
                            type="button"
                            onClick={handleSendEmail}
                            >
                                Verify 
                        </button>
    
                    </div>
            </div>
    
        </div>
   
  );
}

export default EmailConfirmationForgotPassword;
