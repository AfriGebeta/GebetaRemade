import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllCredits } from "../../redux/api/creditsApi";
import { buyCredit } from "../../redux/api/buyCreditApi";
import { FaCheck } from "react-icons/fa6";

function Plan({ data, index }) {
    const user = useSelector((state) => state).user;

    const handleUpgrade = () => {
        buyCredit(user.data.token, data.id)
            .then(response => {
                if (response.data.data.status === "success") {
                    window.open(response.data.data.Data.checkout_url, '_blank');
                }
            })
            .catch(err => console.log(err));
    };

    const isPurchased = data.name != 'Custom' ? user.data?.user?.credits?.find(item=>item.bundle_id ==data.id) : false
    const isLogin = !!user.data.token
    return (
        <div className={`relative flex flex-col gap-3 text-white ${isPurchased && data.name!='Custom' ? 'bg-GebetaMain/30' : 'bg-[#202022]'} p-6 h-[420px] rounded-lg`} key={index}>
            <div className="relative">
                <h3 className="font-bold text-lg mb-4">{data.name}</h3>
                {data.name !== 'Custom' ? (
                    <div className="flex">
                        <span
                            className={`text-xs font-bold ${isPurchased ? "text-white" : "text-zinc-300"} `}>ETB</span>
                        <h1 className="font-bold text-3xl">{data.price}</h1>
                    </div>
                ) : (
                    <div className="flex flex-col space-y-1">
                        <span className="w-fit bg-white text-zinc-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                            Recommended
                        </span>
                        <span className="text-sm font-semibold">Enterprise</span>
                    </div>

                )}
                {data.name !== 'Custom' && <span className="absolute top-1 right-2 bg-green-600 inline-block px-2 py-1 rounded text-xs font-semibold">
                    {data.expiredIn} days
                </span>}
                <hr className={`${data.name !== 'Custom' ? "mt-3" : "mt-6"} mb-3 border-gray-600`} />
            </div>

            <div className="flex-grow">
                <ul className="space-y-1">
                    {data.included_call_types.map((feature, i) => (
                        <li className="flex items-center space-x-1 text-xs py-1" key={i}>
                            <FaCheck className="block text-sm text-green-400 mr-2 shrink-0" />
                            <span className='font-medium text-sm'>{data.call_caps[i] || '0'} {feature.charAt(0).toUpperCase() + feature.slice(1).toLowerCase()} calls</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-2">
                {data.name != "Custom" ? <button
                    className={`w-full transition duration-150 border border-zinc-700 borer-2 outline-none ${isPurchased ? 'bg-white text-zinc-950 border-none' : 'hover:bg-GebetaMain'} hover:border-GebetaMain rounded-md px-3 py-1.5 text-sm font-medium`}
                    onClick={handleUpgrade}
                    disabled={isPurchased}
                >
                    {isPurchased ?  `Selected Plan` : isLogin ? 'Upgrade' : 'Buy Now'}
                </button>
                    :
                    <button
                        className='w-full transition duration-150 border border-gray-600 outline-none hover:bg-GebetaMain hover:border-GebetaMain rounded-md px-3 py-1.5 text-sm font-medium'
                        onClick={handleUpgrade}
                    >
                        Contact Us
                    </button>
                }
            </div>
        </div>
    );
}

function Plans() {
    const enterprise = {
        name: "Custom",
        price: "",
        expiredIn: 30,
        call_caps: [
            "Unlimited",
            "Unlimited",
            "Unlimited",
            "Unlimited"
        ],
        included_call_types: [
            "Geocoding",
            "Direction",
            "Matrix",
            "Route",
        ],
    };

    const [credits, setCredits] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        getAllCredits({ page: 1, limit: 10 }, controller)
            .then((response) => {
                setCredits(response.data.data.data);
            })
            .catch(err => {
                console.log(err);
            });

        return () => controller.abort();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {credits?.map((credit, index) => (
                <Plan data={credit} index={index} key={index} />
            ))}
            <Plan data={enterprise} index={credits.length} /> {/* Include enterprise plan */}
        </div>
    );
}

export default Plans;