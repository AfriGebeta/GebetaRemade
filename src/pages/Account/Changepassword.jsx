import React, {useState, useEffect} from 'react'
import {updateprofile} from '../../redux/api/userApi'
import {useSelector, useDispatch} from 'react-redux'
import Notify from '../../component/Popup/Notify'
import ClipLoader from "react-spinners/ClipLoader";
import useLocalStorage from "../../hooks/use-local-storage";

function ChangePassword({currentState}) {
    const [currentProfile, _] = useLocalStorage({
        key: 'currentProfile',
        defaultValue: null,
    })
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [companyname, setCompanyName] = useState(currentProfile.user.company_name ?? "")
    const [email, setEmail] = useState(currentProfile.user.email ?? "")
    const [phone, setPhone] = useState(currentProfile.user.phone ?? "")
    const [isLoading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [notify, setNotify] = useState({visible: false});

    const isEmpty = (str) => {
        if (typeof str == 'undefined' || !str || str.length === 0 || str === "" || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g, "") === "")
            return true;
        else
            return false;
    }
    const update = () => {
        setLoading(true)
        if (currentState == "Password") {
            if (password != confirmPassword) {
                setErrorMessage("password doesnt match")
            } else {
                updateprofile({id: currentProfile.user.id, password: password}, currentProfile.token)
                    .then(response => {
                        if (response.data) {
                            setNotify({visible: true, msg: "Updated", type: "success"});
                            setTimeout(() => setNotify({visible: false}), 2000);
                        } else {
                            setNotify({visible: true, msg: "Update failed", type: "failure"});
                            setTimeout(() => setNotify({visible: false}), 2000);
                        }
                        setLoading(false)
                    })

            }
        } else {
            if (companyname != "" || phone != "" || email != "") {

                let data = {id: currentProfile.id}

                if (!isEmpty(companyname)) {
                    Object.assign(data, {"companyname": companyname})
                }
                if (!isEmpty(email)) {
                    Object.assign(data, {"email": email})
                    let regEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
                    if (!regEmail.test(email)) {
                        setErrorMessage("password doesnt match")
                        throw Object.assign(
                            new Error('Parameter is not a number!'),
                            {code: 402}
                        );
                    }
                }


                updateprofile(data, currentProfile.token)
                    .then((response) => {
                        if (response.data) {
                            setNotify({visible: true, msg: "Updated", type: "success"});
                            setTimeout(() => setNotify({visible: false}), 2000);
                        } else {
                            setNotify({visible: true, msg: "Update failed", type: "failure"});
                            setTimeout(() => setNotify({visible: false}), 2000);
                        }
                        setLoading(false)
                    })

            }
        }
        setLoading(false)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onCurrentChangePassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const onCompanyNameChange = (e) => {
        setCompanyName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onPhoneChange = (e) => {
        setPhone(e.target.value)
    }


    return (
        <div className='sw py-10 border mt-[4%] px-10  w-[100%] md:w-[80%]'>
            <div className='flex gap-4'>
                {/* <Nav url='password' /> */}
                <div className='flex-1 flex flex-col items-center text-white'>
                    <div className='card2 flex flex-col gap-3 w-2/3 space-y-5'>

                        <Notify value={notify}/>
                        {errorMessage != "" ? <p className="mb-[5%] text-red-400">{errorMessage}</p> : ""}

                        <div className={`${currentState == "Password" ? "hidden" : ""} relative h-10 w-full min-w-[200px]`}>
                            <input
                                value={companyname}
                                className=" h-full py-6 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3  font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all   focus:border-2   disabled:border-0 disabled:bg-blue-gray-50"
                                onChange={onCompanyNameChange}
                            />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                company name
                            </label>
                        </div>

                        <div className={`${currentState == "Password" ? "hidden" : ""} relative h-10 w-full min-w-[200px]`}>
                            <input
                                value={email}
                                className=" h-full py-6 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3  font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all   focus:border-2   disabled:border-0 disabled:bg-blue-gray-50"
                                onChange={onEmailChange}
                            />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                email
                            </label>
                        </div>

                        <div className={`${currentState == "Password" ? "hidden" : ""} relative h-10 w-full min-w-[200px]`}>
                            <input
                                className=" h-full py-6 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3  font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all   focus:border-2   disabled:border-0 disabled:bg-blue-gray-50"
                                value={phone}
                                onChange={onPhoneChange}
                            />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                phone
                            </label>
                        </div>

                        <div className={`${currentState != "Password" ? "hidden" : ""} relative h-10 w-full min-w-[200px]`}>
                            <input
                                type="password"
                                onChange={onChangePassword}
                                className=" h-full py-6 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3  font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all   focus:border-2   disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                password
                            </label>
                        </div>

                        <div className={`${currentState != "Password" ? "hidden" : ""} relative h-10 w-full min-w-[200px]`}>
                            <input
                                type="password"
                                onChange={onCurrentChangePassword}
                                className=" h-full py-6 w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3  font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all   focus:border-2   disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=""
                            />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                confirm password
                            </label>
                        </div>


                        <button
                            className="w-[100%] mt-[5%] bg-GebetaMain hover:bg-GebetaDark-700 text-white font-bold py-3 px-4 rounded"
                            onClick={(e) => {
                                e.preventDefault();
                                update()
                            }}
                            type="button">

                            {isLoading ? <ClipLoader color="#ffffff" size={35}/> : "update"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;