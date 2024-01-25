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
        <h3>{data.name}</h3>
        <div className="flex gap-2 items-end">
          <div className="self-stretch pt-2">
            <sup className=" ">Birr</sup>
          </div>
          <h1 className="m-0 inline-block">{data.price}</h1>
          <tiny>per 1000 calls</tiny>
        </div>
        <hr className="border-gray-500" />
        <p className="max-w-[300px]">{data.description}</p>
      </div>
      <div className="flex-1 mb-10 min-h-[170px]">
        <h2 className="!font-normal">Core Features</h2>
        <h4>{data.name}</h4>
        {data.features.map((feature, i) => (
          <li className="flex list-none items-center gap-3" key={i}>
            {/* <ListIcon /> */}
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
      price: "0.20 cents",
      description:
        "GebetaMap's Starter plan if your API usage is 0 - 100000 API calls.",
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
      price: "0.175 cents",
      description:
        "GebetaMap's Business plan if your API usage is 100001 - 500000 API calls.",
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
      price: "0.15 cents",
      description:
        "GebetaMap's Professional plan if your API usage is 500001 - 1000000 API calls.",
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
      price: "0.10 cents",
      description:
        "GebetaMap's Premium plan if your API usage is 1000001 - 5000000 API calls.",
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
