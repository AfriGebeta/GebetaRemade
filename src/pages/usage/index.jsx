import React from "react";
import './custom.css'
import ApiDetail from "../../component/Card/ApiDetail";
import Cards from "./Card";
import ApiToken from "./APIToken";
import DashBoardNav from "../../component/NavBar/DashBoardNav";
import Footer from "../../component/Footer/Footer";
import APIUsage from "../Dashboard/APIUsage";


const SelectForGraph = () => {
  return (
    <div className="bg-[#202022] mt-[12%] md:mt-[2%] mb-[2%]">

    <div className="flex flex-col md:flex-row md:items-center   py-5 mx-[1%] md:space-x-14">
    
    <div className="flex flex-row items-center justify-between">
      <p className=" mx-4">Select endpoints : </p>
      <select className=" mx-4 w-40 h-10 bg-transparent border border-gray-300 rounded px-4 text-white">
          <option value="all" className="text-black">All</option>
          <option value="geocoding" className="text-black">Geocoding</option>
          <option value="direction" className="text-black">Direction</option>
          <option value="matrix" className="text-black">Matrix</option>
          <option value="onm" className="text-black">Onm</option>
          <option value="tss" className="text-black">TSS</option>
      </select>
    </div>

      <div className="flex flex-row items-center justify-between">
         <p className=" mx-4">from : </p>
      <input
        type="date"
        className=" mx-4 w-40 h-10 bg-transparent border border-gray-300 rounded px-4"
        value="2023-10-24"
      />
      </div>
      
      <div className="flex flex-row items-center justify-between">
        <p className=" mx-4">to : </p>
        <input
          type="date"
          className=" mx-4 w-40 h-10 bg-transparent border border-gray-300 rounded px-4"
          value="2023-11-24"
        />
      </div>
    </div>
    </div>
  )
}
function Usage() {
  let userData = { username : "asdf"}
  return (
    <div className="flex flex-col min-h-screen bg-Dark">
   
    <div className="w-[80%] mx-auto text-[#ccc] text-child flex flex-col flex-grow">
      <div className=" justify-between items-center">
        <div className="mt-[20%] md:mt-[3%]">
            <ApiDetail />
        </div>
        <SelectForGraph/>
 
        <APIUsage />
      </div>
    </div> 

    

  </div>

   
  );
}

export default Usage;
