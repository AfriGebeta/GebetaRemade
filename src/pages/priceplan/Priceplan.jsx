import React, { useEffect } from "react";


import { useSelector, useDispatch } from "react-redux";



function Plan({ data }) {
  if (!data) return null;
  return (
    <div
      className={
        "card flex-1 py-8 px-4 rounded-lg flex flex-col gap-4 text-white min-w-[200px] max-w-[300px] " +
        (data.status !== "current" ? "bg-[#202022]" : "bg-[#f2994a]/20")
      }
    >
      <div className="flex-1">
        <h3 className="font-bold">{data.name}</h3>
        <div className="flex gap-2 items-end mt-[3%]">
          <div className="self-stretch pt-2">
            <p className=" ">$</p>
          </div>
          <h1 className="m-0 inline-block">{data.price}</h1>
          <tiny>per 1000 calls</tiny>
        </div>
        <hr className="border-gray-500" />
        <p className="mt-[5%] max-w-[300px]">{data.description}</p>
      </div>
      <div className="flex-1 mb-10 min-h-[170px]">
        <h2 className="font-bold mb-[2%]">Core Features</h2>

        {data.features.map((feature, i) => (
          <li className="flex list-none items-center gap-3" key={i}>
            
            {feature}
          </li>
        ))}
      </div>
      <div></div>
    </div>
  );
}
function Plans() {


  const Total = 12;

  const list = [
    {
      name: "Starter",
      price: "2.00",
      description:
        "GebetaMap’s Starter plan if your API usage is 0 - 100000 API calls.",
      features: [
        "Geocoding Endpoint",
        "Direction Endpoint",
        "Matrix Endpoint",
        "Route Optimization",
      ],
      status: Total >= 0 && Total <= 100000 ? "current" : "",
    },
    {
      name: "Business",
      price: "1.75",
      description:
        "GebetaMap’s Business plan if your API usage is 100001 - 500000 API calls.",
      features: [
        "Geocoding Endpoint",
        "Direction Endpoint",
        "Matrix Endpoint",
        "Route Optimization",
      ],
      status: Total >= 100001 && Total <= 500000 ? "current" : "",
    },
    {
      name: "Professional",
      price: "1.50",
      description:
        "GebetaMap’s Professional plan if your API usage is 500001 - 1000000 API calls.",
      features: [
        "Geocoding Endpoint",
        "Direction Endpoint",
        "Matrix Endpoint",
        "Route Optimization",
      ],
      status: Total >= 500001 && Total <= 1000000 ? "current" : "",
    },
    {
      name: "Premium",
      price: "1.00",
      description:
        "GebetaMap’s Premium plan if your API usage is 1000001 - 5000000 API calls.",
      features: [
        "Geocoding Endpoint",
        "Direction Endpoint",
        "Matrix Endpoint",
        "Route Optimization",
      ],
      status: Total >= 1000001 && Total <= 5000000 ? "current" : "",
    },
  ];
  return (

    
    <div className=" mt-[5%] flex gap-6 flex-wrap w-full justify-between  ">
      {list.map((data) => (
        <Plan data={data} />
      ))}
    </div>
  );
}


export default Plans;
