import React, {useState} from "react";
import ChangePassword from "./Changepassword";
import './custom.css';

function Account() {
  const [state, changeState] = useState("Password")
  return (
    <div className="flex flex-col min-h-screen bg-Dark">
      <div className="w-[95%] md:w-[80%] mx-auto text-[#ccc] text-child flex flex-col flex-grow">
        <div className=" justify-between items-center  md:mx-0">

          <div className=" md:hidden flex flex-col mt-[20%]  ">
            <h3 className="text-white text-2xl font-bold"> User Profile </h3>
            <div className="mt-[50px]  flex space-x-5">

              <p className="hover:text-GebetaMain" onClick={(e) => { e.preventDefault(); changeState("Password") }}>Change password</p>
              <p className="hover:text-GebetaMain" onClick={(e) => { e.preventDefault(); changeState("Profile") }}>Edit profile </p>
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="hidden md:flex flex-col mt-[20%] md:mt-[3%] h-full ">
              <h3 className="text-white text-2xl font-bold"> User Profile </h3>
              <div className="mt-[50px] space-y-5 ">

                <p className="hover:text-GebetaMain" onClick={(e) => { e.preventDefault(); changeState("Password") }}>Change password</p>
                <p className="hover:text-GebetaMain" onClick={(e) => { e.preventDefault(); changeState("Profile") }}>Edit profile </p>
              </div>
            </div>
            <ChangePassword currentState={state} />
          </div>
        </div>
      </div>
    </div>


  );
}

export default Account;
