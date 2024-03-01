import React , {useState,  useEffect }   from "react";
import { useLocation } from 'react-router-dom';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {

    const [color, setColor] = useState("Dark");
    const [textColor, setTextColor] = useState("white");
   
    const location = useLocation();

    useEffect(() => {
    if(location.pathname == "/documentation" || location.pathname == "/playground"){
        setColor("white");
        setTextColor("black");
    } else {
        setColor("Dark");
        setTextColor("white");
    }
    }, [location]);


    return (
        <div className = {`relative w-full   pt-[5%] pb-[2%] text-[#A0AABA] bg-${color}`}>
            <div className="border-t-1 border-gray-600 absolute top-[-2px] left-0 right-0"></div>
            <div className="mx-[5%] flex justify-between items-center">
                <div className={`flex space-x-3 text-${textColor}`}>
                    <Link to="/terms"><p className="hover:text-GebetaMain">Terms |</p></Link>
                    <Link to="/privacy"><p className="hover:text-GebetaMain">Privacy</p></Link> 
                </div>

                {/* icons */}
                <div className={`flex space-x-4 text-${textColor}`}>
                <a href="https://www.instagram.com/gebetamaps?igsh=MWlmaWx0ZmU2NGUyOA==" target="_blank" rel="noopener noreferrer">
                    < FaFacebook className="w-7 h-7 hover:text-GebetaMain" />
                    </a>
                 

                    <a href="https://et.linkedin.com/company/gebetamaps" target="_blank" rel="noopener noreferrer">
                    < FaLinkedin  className="w-7 h-7 hover:text-GebetaMain"  />
                    </a>

                    <a href="https://www.youtube.com/@gebetamaps" target="_blank" rel="noopener noreferrer">
                    < FaYoutube  className="w-7 h-7 hover:text-GebetaMain" />
                    </a>

                    <a href="https://twitter.com/GebetaMaps" target="_blank" rel="noopener noreferrer">
                    < FaTwitter  className="w-7 h-7 hover:text-GebetaMain" />
                    </a>

                    <a href="https://web.telegram.org/k/#@gebetamaps" target="_blank" rel="noopener noreferrer">
                    < FaTelegram  className="w-7 h-7 hover:text-GebetaMain" />
                    </a>

                </div>
                
            </div>
        </div>  
    )
}


export default Footer