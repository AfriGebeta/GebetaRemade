import React from "react";
import user1 from "./../../assets/img/user1.jpg"



const OurCustomers = () =>{
    return (
        <div className="py-14 mt-[2%]">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      {/* font-semibold text-sm text-gray-600 text-center */}
        <p className='text-center mt-[5%] md:mt-[10%] text-[#A0AABA] md:text-2xl text-xl' style={{fontFamily: "Zen Dots" }}>Our Customers</p>
        <div className="mt-6">
            <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                {/* LOGO 1 */}
               <li>
                    <img src={user1} className="w-28" />
              </li> 
            </ul>
        </div>
    </div>
</div>
    )

}

export default OurCustomers