import React ,{ useState , useEffect } from 'react'
import logo from "./../../assets/img/icon/logo.png";
import { Link } from 'react-router-dom';
import Signin from "../../pages/Signin/SignIn";
import Signup from "../../pages/Signup/Signup";
import Modal from "../Modal/Modal";
import ProfileDropDown from '../DropDown/ProfileDropdown';








const DashBoardNav =  ({color  ,textColor}) => {

    const [state, setState] = useState(false)
    const [signinModal, setSigninModal] = useState(false);
    const [signupModal, setSignUpModal] = useState(false);
   
   
    const fromSignIntoSignUp = () => {
        setSignUpModal(true)
        setSigninModal(false)
    }

    const fromSignupIntoSignIn = () => {
        setSignUpModal(false)
        setSigninModal(true)
    }


    const navigation = [
        {type : "text" , title: "Dashboard", path: "/dashboard" },
        {type : "text" , title: "Usage", path: "/usage" },
        {type : "text" , title: "price plan", path: "/priceplan" },
        {type : "text" , title: "Analytics", path: "/account" },
        {type : "text" , title: "accounts", path: "/account" },
      
   ]

    return (


        
        
        <>
            <Modal
                open={signinModal}
                close={() => setSigninModal(false)}
                elem={<Signin  signintosignup={fromSignIntoSignUp} />}
            />

            <Modal
                    open={signupModal}
                    close={() => setSignUpModal(false)}
                    elem={<Signup signupintosignin={fromSignupIntoSignIn} />}
            />
        
        <nav className={`bg-${color} border-b w-full font-bold  md:static md:text-sm md:border-none`}>
            <div className="items-center px-4  mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="javascript:void(0)">
                        <img
                            src={logo}
                            width={120}
                            height={50}
                            
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                if (item.type == "text")
                                return (

                                    <Link 
                                    to={item.path}
                                    className="block">
                                         <li key={idx} className={`text-${textColor} hover:text-GebetaMain`}>
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                    </Link>

                                  
                                )
                                else
                                return <li>{item.component}</li>
                            })
                        }
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        <ProfileDropDown />

                
                     
                    </ul>
                  
                        

                </div>
            </div>
        </nav>
        </>
      
    )
}


export default DashBoardNav