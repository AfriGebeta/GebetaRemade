import React from "react";
import  Logo  from "../../assets/img/icon/maplogo.png";
import  LocTargetIcon  from "../../assets/img/locTarget.svg";
import { useNavigate } from "react-router-dom"; 

function DocCard() {

  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate("/documentation");
  };
  return (
      <div
          onClick={handleClick}
          className="bg-[#202022] text-[#777] rounded-md w-full md:w-1/2 cursor-pointer overflow-hidden"
      >
        <div className="flex items-center p-4 gap-3">
          <img src={Logo} alt="Logo" className="w-8 h-8"/>
          <h2 className="uppercase leading-tight font-bold">
            Api<br/>Documentation
          </h2>
          <img src={LocTargetIcon} alt="Target" className="ml-auto w-6 h-6"/>
        </div>
        <div className="p-4 pt-2">
          <span className="text-sm">powered by</span>
          <h2 className="text-lg mt-1 font-bold">GebetaMaps</h2>
        </div>
      </div>
  );
}

export default DocCard;
