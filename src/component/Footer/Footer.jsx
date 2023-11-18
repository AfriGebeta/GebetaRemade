import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" relative w-full mt-[5%]  py-[1%] text-[#A0AABA] bg-[#161a1d]  ">
            <div className="border-t-1 border-gray-600 absolute top-[-2px] left-0 right-0"></div>
            <div className="mx-[5%] flex justify-between items-center">
                <div className="flex space-x-3">
                    <p>Terms |</p>
                    <p>Privacy</p>
                </div>

                {/* icons */}
                <div className="flex space-x-4">

                    < FaFacebook className="w-7 h-7" />
                    < FaGoogle  className="w-7 h-7"  />
                    < FaLinkedin  className="w-7 h-7"  />
                    < FaYoutube  className="w-7 h-7" />
                    < FaFacebook  className="w-7 h-7" />

                </div>
                
            </div>
        </div>  
    )
}


export default Footer