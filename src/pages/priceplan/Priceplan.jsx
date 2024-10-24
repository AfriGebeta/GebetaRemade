import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getAllCredits} from "../../redux/api/creditsApi";
import {buyCredit} from "../../redux/api/buyCreditApi";
import {FaCheck} from "react-icons/fa6";
import {useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import Signin from "../Signin/SignIn";
import Modal from "../../component/Modal/Modal";
import Signup from "../Signup/Signup";

function Plan({data, index}) {
    const user = useSelector((state) => state).user;
    const isLogin = localStorage.getItem('isAuthenticated')
    const [signinModal, setSigninModal] = useState(false);
    const [signupModal, setSignUpModal] = useState(false);
    const navigate = useNavigate();

    const fromSignIntoSignUp = () => {
        setSignUpModal(true);
        setSigninModal(false);
    };

    const fromSignupIntoSignIn = () => {
        setSignUpModal(false);
        setSigninModal(true);
    };

    const handleUpgrade = (id) => {
        if (!isLogin) {
            localStorage.setItem('plan', id)
            localStorage.setItem('redirect', true)
            setSigninModal(true)
        } else {
            if (data.name !== "Custom") {
                buyCredit(user.data.token, id)
                    .then(response => {
                        if (response.data.data.status === "success") {
                            window.open(response.data.data.Data.checkout_url, '_blank');
                        }
                    })
                    .catch(err => console.log(err));
            } else {
                navigate('/contact')
            }
        }

    };

    const isPurchased = data.name !== 'Custom' ? user.data?.user?.credits?.find(item => item.bundle_id === data.id) : false
    return (
        <>
            <Modal
                open={signinModal}
                close={() => setSigninModal(false)}
                elem={<Signin signintosignup={fromSignIntoSignUp}/>}
            />

            <Modal
                open={signupModal}
                close={() => setSignUpModal(false)}
                elem={<Signup signupintosignin={fromSignupIntoSignIn}/>}
            />

            <div
                className={`relative flex flex-col gap-3 text-white ${isPurchased && data.name !== 'Custom' ? 'bg-GebetaMain/30' : 'bg-[#202022]'} p-6 h-[420px] rounded-lg`}
                key={index}>
                <div className="relative">
                    <h3 className="font-bold text-lg mb-4">{data.name}</h3>
                    {data.name !== 'Custom' ? (
                        <div className="w-5 flex gap-x-2">
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
                    {data.name !== 'Custom' && <span
                        className="absolute top-1 right-2 bg-green-600 inline-block px-2 py-1 rounded text-xs font-semibold">
                    {data.expiredIn} days
                </span>}
                    <hr className={`${data.name !== 'Custom' ? "mt-3" : "mt-6"} mb-3 border-gray-600`}/>
                </div>

                <div className="flex-grow">
                    <ul className="space-y-1">
                        {data.included_call_types.map((feature, i) => (
                            <li className="flex items-center space-x-1 text-xs py-1" key={i}>
                                <FaCheck className="block text-sm text-green-400 mr-2 shrink-0"/>
                                <span
                                    className='font-medium text-sm'>{data.call_caps[i] || '0'} {feature.charAt(0).toUpperCase() + feature.slice(1).toLowerCase()} calls</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-2">
                    {data.name != "Custom" ? <button
                            className={`w-full transition duration-150 border border-zinc-700 borer-2 outline-none ${isPurchased ? 'bg-white text-zinc-950 border-none' : 'hover:bg-GebetaMain'} hover:border-GebetaMain rounded-md px-3 py-1.5 text-sm font-medium`}
                            onClick={() => handleUpgrade(data.id)}
                            disabled={isPurchased}
                        >
                            {isPurchased ? `Selected Plan` : isLogin ? 'Upgrade' : 'Select Plan'}
                        </button>
                        :
                        <button
                            className='w-full transition duration-150 border border-gray-600 outline-none hover:bg-GebetaMain hover:border-GebetaMain rounded-md px-3 py-1.5 text-sm font-medium'
                            onClick={() => navigate('/contact')}
                        >
                            Contact Us
                        </button>
                    }
                </div>
            </div>
        </>
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

    const SkeletonCard = () => (
        <div
            className="w-full p-6 h-[420px] rounded-lg bg-[#202022] rounded-lg shadow-md p-4 flex flex-col justify-between items-center min-w-[200px] animate-pulse">
            <div>
                {Array(5).map((_, i) => (
                    <div className="h-5 w-3/4 bg-gray-700 rounded mb-4"></div>
                ))}
            </div>
        </div>
    );

    const {data, isLoading} = useQuery({
        queryKey: ['plans'],
        queryFn: () => getAllCredits({page: 1, limit: 10}),
        staleTime: 5 * 60 * 1000
    })
    console.log(data)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {isLoading ?
                Array(5).fill(0).map((_, i) => <SkeletonCard key={i}/>) :
                data?.credit_bundles.map((credit, index) => (
                    <Plan data={credit} index={index} key={index}/>
                ))}


            <Plan data={enterprise} index={data?.length || 1}/> {/* Include enterprise plan */}
        </div>
    );
}

export default Plans;