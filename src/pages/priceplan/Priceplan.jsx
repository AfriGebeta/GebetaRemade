import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import checkmark from '../../assets/img/icon/checkmark-48.png'


function Plan({data}) {
    if (!data) return null;

    // ${data.status !== "current" ? "bg-[#202022]" : "bg-[#f2994a]/20"}
    return (
        <div className={`
      flex flex-col gap-3 text-white p-4 rounded-[12px]
      ${data.status !== "current" ? "bg-[#2A2A2D]" : "bg-[#f2994a]/20"}
    `}>
            <div>
                <h3 className="font-bold text-lg mb-4">{data.name}</h3>
                {data.name !== 'Custom' ? (
                    <div className="flex">
                <span
                    className="text-xs font-bold text-gray-400">
                ETB
                 </span>
                        <h1 className="font-bold text-3xl">{data.price}</h1>
                    </div>
                ) : (
                    <span className="text-sm font-semibold">Enterprise</span>
                )}
                <hr className={`${data.name !== 'Custom' ? "mt-3" : "mt-6"} mb-3 border-gray-600`}/>
            </div>

            <div className="flex-grow">
                <ul className="space-y-1">
                    {data.features.map((feature, i) => (
                        <li className="flex items-start text-xs py-1" key={i}>
                            <img src={checkmark} className='w-3 h-3 mr-1 mt-0.5 flex-shrink-0' alt='checkmark icon'/>
                            <span className='font-medium text-sm'>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-2">
                {data.status === "current" ? (
                    <button
                        className='w-full outline-none bg-GebetaMain rounded-md px-3 py-1.5 text-sm font-medium transition-all'
                        disabled
                    >
                        Current Plan
                    </button>
                ) : (
                    <button
                        className='w-full transition duration-150 border border-gray-600 outline-none hover:bg-GebetaMain hover:border-GebetaMain rounded-md px-3 py-1.5 text-sm font-medium'
                    >
                        Upgrage
                    </button>
                )
                }
            </div>
        </div>
    );
}

function Plans() {


    const Total = 12;

    const list = [
        {
            name: "Starter",
            price: "230",
            description:
                "GebetaMap’s Starter plan if your API usage is 0 - 100000 API calls.",
            features: [
                "500 Geocoding calls",
                "500 Direction calls",
                "Matrix Endpoint",
                "Route Optimization",
            ],
            status: Total >= 0 && Total <= 100000 ? "current" : "",
        },
        {
            name: "Student Pack",
            price: "575",
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
            price: "1150",
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
            name: "Custom",
            catagory: "Enterprise",
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


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {list.map((data, index) => (
                <Plan data={data}/>
            ))}
        </div>
    );
}


export default Plans;
