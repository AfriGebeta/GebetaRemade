import React, {useState, useEffect, useContext} from "react";
import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom";
import {userEmailConfirm} from "../../redux/api/userApi";
import {updateprofile} from '../../redux/api/userApi'

import Notify from '../../component/Popup/Notify'
import {AuthContext} from "./../../context/AuthProvider";
// get the token 
// send to confirm 
// if accepted change the context to login then login user 
// if not redirct to main page


const Confirm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [token, setToken] = useState("")
    const [confirmed, setConfirmed] = useState(false)
    const [password, setPassword] = useState("");
    const [userid, setUserId] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [notify, setNotify] = useState({visible: false});
    const user = useSelector((state) => state).user

    const [confirmPassword, setConfirmPassword] = useState("")
    const authContext = useContext(AuthContext); // Access the AuthContext
    const handlePassword = (event) => setPassword(event.target.value);

    const handleConfirmPassword = (event) => setConfirmPassword(event.target.value);


    const updatePassword = () => {


        if (password != confirmPassword) {
            setNotify({visible: true, msg: "password doesnt match", type: "failure"});
            setTimeout(() => setNotify({visible: false}), 2000);
            return;
        }
        updateprofile({id: userid, password: password})
            .then((response) => {

                if (response.ok) {
                    setNotify({visible: true, msg: "Updated", type: "success"});
                    setTimeout(() => setNotify({visible: false}), 2000);
                    authContext.login();
                    navigate("/dashboard")
                } else {
                    setNotify({visible: true, msg: "Update failed", type: "failure"});
                    setTimeout(() => setNotify({visible: false}), 2000);
                }

            })
    }

    useEffect(() => {
        const controller = new AbortController()
        const urlParams = new URLSearchParams(window.location.search);
        const token = user.data.token;
        //setConfirmed


        // Make the API request

        fetch("http://localhost:8080/api/v1/users/confirmforgotpassword?token=" + token, {
            signal: controller
        })
            .then((data) => {
                if (data.status != 200) navigate("/")
                return data.json();
            })
            .then((data) => {
                setConfirmed(true)
                setUserId(data?.data?.id)
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setErrorMessage("Error sending email");
            })

        return () => controller.abort()

    }, [])
    return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                {
                    confirmed ?
                        <div className="max-w-lg mx-auto space-y-3 text-center">
                            <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl  pb-10">
                                Reset Password
                            </h3>

                            {errorMessage != "" ? <p className="mb-[5%] text-red-400">{errorMessage}</p> : ""}
                            <Notify value={notify}/>
                            <div class="w-full mt-[12px] mt-[5%]">
                                <div class="relative h-10 w-full min-w-[200px]">
                                    <input
                                        class=" h-full w-full py-6 rounded-[7px] border border-black border-white border-t-transparent bg-transparent px-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        type="password"
                                        onChange={handlePassword}
                                    />
                                    <label
                                        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Passsword
                                    </label>
                                </div>
                            </div>

                            <div class="w-full pt-[8%] pb-[8%]">
                                <div class="relative h-10 w-full min-w-[200px]">
                                    <input
                                        class=" h-full w-full py-6 rounded-[7px] border border-black border-t-transparent bg-transparent px-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        type="password"
                                        onChange={handleConfirmPassword}
                                    />
                                    <label
                                        class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Confirm password
                                    </label>
                                </div>
                            </div>
                            <button
                                className="w-[100%] mt-[15%] bg-GebetaMain hover:bg-GebetaDark-700 text-white font-bold py-3 px-4 rounded"
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    updatePassword()
                                }}
                            >
                                update
                            </button>
                        </div> : ""
                }
            </div>
        </main>)
}

export default Confirm