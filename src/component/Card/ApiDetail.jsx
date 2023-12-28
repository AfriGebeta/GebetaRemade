import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { add, format } from "date-fns";

function ApiDetail({ metrics }) {
  
  const user = useSelector((state) => state).user

 


  const addDate = (date) => {
    try {
      const dateString = new Date(date);
      const _date = add(dateString, {
        days: 30,
      });

      return String(format(_date, "YYY-MM-d"));
    } catch (err) {
      return "";
    }
  };

  const getTotal = () => {
    return (metrics.ONM || 0) + (metrics.Direction || 0) + (metrics.Matrix || 0) + (metrics.TSS || 0) + (metrics.Geocoding || 0);
   };

   const getMaximum = () => {
    let max = Object.entries(metrics).reduce(
    (max, entry) => ((entry[1] || 0) >= (max[1] || 0) ? entry : max),
    [0, -Infinity]
    );
   
    return max;
   };
   

  const getMinimum = () => {
    let min = Object.entries(metrics).reduce(
      (min, entry) => ((entry[1] || 0) <= (min[1] || 0) ? entry : min),
      [0, +Infinity]
    );
    return min;
  };
  return (

    <div className="flex-1 flex flex-col w-full grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-6 justify-evenly bg-[#202022]  py-3 px-3 ">
    <div className="leading-4 pl-2 flex flex-row flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="m-0 pr-2">API Token Status</h4>
        <span className={` ${user.data.token != null ? "text-green-500" : "text-red-500"}`}>
           {user.data.token != null ? "active" : "inactive"}
        </span>
      </div>
      <div className="leading-4 pl-2 flex flex-row flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="m-0 pr-2">Subscription</h4>
        <span className="text-green-500">pay-as-you-go</span>
      </div>
      <div className="leading-4 pl-2 flex flex-row flex-wrap items-center whitespace-nowrap snap-start">
       
        <h4 className=" m-0 pr-2">Next Billing</h4>
        <h3 className="!text-secondary">
          {user.data.purchasedDate != null ? addDate(user.data.purchasedDate) : "-"}
        </h3>
      </div>
      <div className="leading-4 pl-2 flex flex-row flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="!text-secondary m-0 pr-2">Total Usage</h4>
        <h3 className="m-0">{getTotal()}</h3>
        
      </div>
      <div className="leading-4 pl-2 flex flex-row flex-wrap items-center whitespace-nowrap snap-start">
 
    
       

        <h4 className="!text-secondary m-0 pr-2">Max Usage</h4>
        <h3 className="">
         
        {getMinimum()[0]} - {getMinimum()[1]}
       </h3>
        
      </div>
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
      <h4 className="!text-secondary m-0 pr-2">Min Usage</h4>
        <h3 className="">
          {getMaximum()[0]}  - {getMaximum()[1]} 
         
       </h3>
        
      </div>

  </div>

  );
}

export default ApiDetail;
