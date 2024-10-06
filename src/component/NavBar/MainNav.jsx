import React ,{ useState , useEffect ,useRef} from 'react'
import logo from "./../../assets/img/icon/logo.png";
import DualDropdowns from '../DropDown/DualDropdowns';
import Signin from "../../pages/Signin/SignIn";
import Signup from "../../pages/Signup/Signup";
import Modal from "../Modal/Modal";
import { Link } from 'react-router-dom';


const MainNav =  ({color  ,textColor}) => {

    const [state, setState] = useState(false)
    const [signinModal, setSigninModal] = useState(false);
    const [signupModal, setSignUpModal] = useState(false);
    const [clicked, setClicked] = useState(false);

    const [aboutDropDownStatus, setAbout] = useState(true);
    const [communityDropDownStatus, setCommunity] = useState(true);

    const fromSignIntoSignUp = () => {
        setSignUpModal(true)
        setSigninModal(false)
    }

    const fromSignupIntoSignIn = () => {
        setSignUpModal(false)
        setSigninModal(true)
    }


    const handleClick = () => {
        setClicked(!clicked);
      };
    
      useEffect(() => {
        document.addEventListener('click', handleClick);
            setCommunity(true)
            setAbout(true)
 
        return () => {
          document.removeEventListener('click', handleClick);
        };
      }, [clicked]);



    const navigation = [
        {type : "text" , title: "Home", path: "/" },
        {type : "text" , title: "Pricing", path: "/pricing" },
        // {type : "text" , title: "Products", path: "/products" },
        {type : "text" , title: "Documentation", path: "/documentation" },
        // {type : "text" , title: "Blog", path: "javascript:void(0)" },
        {
            type : "component",

            // {text : "Careers"} ,{ text: "Blog" }
            component: <DualDropdowns color={color}  textColor = {textColor} dropdown1={[{ text: "About us" , path : "/about" }]}  dropdown2 = {[ { text: "Linkedin" , link: "https://et.linkedin.com/company/gebetamaps"}, { text: "Twitter", link:"https://twitter.com/GebetaMaps" }, { text: "Youtube", link:"https://www.youtube.com/@gebetamaps" }, { text: "Instagram", link: "https://www.instagram.com/gebetamaps?igsh=MWlmaWx0ZmU2NGUyOA==" } , {text : "Telegram" , link : "https://web.telegram.org/k/#@gebetamaps"}]}/>
        }
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
        
        <nav className={`bg-${color} border-b border-gray-700 p-2 md:p-4 w-full font-bold  md:static md:text-sm md:border-none`}>
            <div className="items-center px-4  mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <Link 
                    to="/">
                    <a href="">
                        <img
                            src={logo}
                            width={120}
                            height={50}
                            
                        />
                    </a>
                    </Link>
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
                    <ul className="justify-end items-center space-y-3 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                if (item.type == "text")
                                return (
                                    <li key={idx} className={`text-${textColor} hover:text-GebetaMain`}>
                                        <Link 
                                        to={item.path}  
                                        className="block">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                                else
                                return <li>{item.component}</li>
                            })
                        }
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li>
                                <Link to="/auth/sign-in" className={`hover:text-GebetaMain block py-3 text-center text-${textColor} hover:text-GebetaMain border rounded-lg md:border-none`}>
                                    Log in
                                </Link>
                            </li>
                            <li>
                                <Link to='/auth/sign-up'
                                      className=" py-3 px-4 text-center text-white bg-GebetaMain hover:bg-GebetaMain/200 active:bg-GebetaMain-200 active:shadow-none rounded-lg shadow">
                                    Sign up
                                </Link>
                            </li>
                        </div>
                     
                    </ul>
                  
                        

                </div>
            </div>
        </nav>
        </>
      
    )
}


export default MainNav