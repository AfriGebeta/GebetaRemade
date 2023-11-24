import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, format } from "date-fns";

function ApiDetail() {

  const dispatch = useDispatch();

  const [detail] = useState({
    status: "active",
    type: "pay-as-you-go",
    nextbilling: "Feb 28,2022",
    totalusage: "23,127 Calls",
    maxusage: {
      directionEP: "78%",
    },
    minusage: {
      matrixEP: "3%",
    },
  });

  const metrics = {}

  const addDate = () => {
    try {
      const dateString = new Date("userData.purchasedDate");
      const _date = add(dateString, {
        days: 30,
      });

      return String(format(_date, "YYY-MM-d"));
    } catch (err) {
      return "";
    }
  };

  const getTotal = () => {
    return metrics.onm + metrics.direction + metrics.matrix + metrics.tss;
  };

  const getMaximum = () => {
    let max = Object.entries(metrics).reduce(
      (max, entry) => (entry[1] >= max[1] ? entry : max),
      [0, -Infinity]
    );

    return max;
  };

  const getMinimum = () => {
    let min = Object.entries(metrics).reduce(
      (min, entry) => (entry[1] <= min[1] ? entry : min),
      [0, +Infinity]
    );
    return min;
  };
  return (

    <div className="flex-1 flex flex-col w-full grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-6 justify-evenly bg-[#202022]  py-3 px-3 ">
    <div className="leading-4 pl-2 flex flex-row flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="m-0 pr-2">API Token Status</h4>
        <span className="text-green-500">{detail.status}</span>
      </div>
      <div className="leading-4 pl-2 flex flex-row flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="m-0 pr-2">Subscription</h4>
        <span className="text-green-500">{detail.type}</span>
      </div>
      <div className="leading-4 pl-2 flex flex-row flex-wrap items-center whitespace-nowrap snap-start">
       
        <h4 className=" m-0 pr-2">Next Billing</h4>
        <h3 className="!text-secondary">2/12/2015</h3>
      </div>
      <div className="leading-4 pl-2 flex flex-row flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="!text-secondary m-0 pr-2">Total Usage</h4>
        <h3 className="m-0">1212</h3>
        
      </div>
      <div className="leading-4 pl-2 flex flex-row flex-wrap items-center whitespace-nowrap snap-start">
 
          {/* {getMaximum()[0]} Endpoint - {getMaximum()[1]} */}
       

        <h4 className="!text-secondary m-0 pr-2">Min Usage</h4>
        <h3 className="">
          {/* {getMinimum()[0]} Endpoint - {getMinimum()[1]} */}
          ONM endpoint - 212
       </h3>
        
      </div>
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
      <h4 className="!text-secondary m-0 pr-2">Min Usage</h4>
        <h3 className="">
          {/* {getMinimum()[0]} Endpoint - {getMinimum()[1]} */}
          ONM endpoint - 212
       </h3>
        
      </div>

  </div>


    // <div className="flex gap-10 items-center px-4 py-3 bg-[#202022] overflow-x-auto snap-x scroll-shadow mt-[4%]">
      
    // </div>
  );
}

export default ApiDetail;
