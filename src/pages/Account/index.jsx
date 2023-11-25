import React, { useState } from "react";
import './custom.css'
import ApiDetail from "../../component/Card/ApiDetail";
import DashBoardNav from "../../component/NavBar/DashBoardNav";
import Footer from "../../component/Footer/Footer";
import Plans from "./Priceplan";
import ChangePassword from "./Changepassword";








function Account() {
  let userData = { username : "asdf"}
  return (
    <div className="flex flex-col min-h-screen">
   <DashBoardNav color={"black"} textColor={"[#ccc]"}/>
    <div className="w-[80%] mx-auto text-[#ccc] text-child flex flex-col flex-grow">
      <div className=" justify-between items-center">
        <div className="mt-[20%] md:mt-[3%]">
        <h3 className="text-white text-2xl font-bold">
                        Documentation
                    </h3>
        </div>
      <div className="flex justify-between w-[100%] md:w-[20%] mt-[2%]">
        <p>Change profile</p>
        
        <p>Billing</p>
        <p></p>       
      </div>
   
      
      <ChangePassword/>
        
      </div>
    </div> 

    
 
  </div>

   
  );
}

export default Account;
