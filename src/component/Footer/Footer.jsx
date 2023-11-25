import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {

    let color =  "Dark";
    let textColor =  "white";
   
    const currentPath = window.location.pathname;
    if(currentPath == "/documentation" || currentPath == "/playground"){
       color = "white"
       textColor = "black"
    }else{
       color = "Dark"
       textColor = "white"
    }


    return (
        <div className = {`relative w-full   pt-[5%] pb-[2%] text-[#A0AABA] bg-${color}`}>
            <div className="border-t-1 border-gray-600 absolute top-[-2px] left-0 right-0"></div>
            <div className="mx-[5%] flex justify-between items-center">
                <div className={`flex space-x-3 text-${textColor}`}>
                    <p className="hover:text-GebetaMain">Terms |</p>
                    <p className="hover:text-GebetaMain">Privacy</p>
                </div>

                {/* icons */}
                <div className={`flex space-x-4 text-${textColor}`}>

                    < FaFacebook className="w-7 h-7 hover:text-GebetaMain" />
                    < FaGoogle  className="w-7 h-7 hover:text-GebetaMain"  />
                    < FaLinkedin  className="w-7 h-7 hover:text-GebetaMain"  />
                    < FaYoutube  className="w-7 h-7 hover:text-GebetaMain" />
                    < FaFacebook  className="w-7 h-7 hover:text-GebetaMain" />

                </div>
                
            </div>
        </div>  
    )
}


export default Footer