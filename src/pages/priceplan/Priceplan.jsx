import React, {useState} from "react";
import {getAllCredits} from "../../redux/api/creditsApi";
import {buyCredit} from "../../redux/api/buyCreditApi";
import {FaCheck} from "react-icons/fa6";
import {useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import Signin from "../Signin/SignIn";
import Modal from "../../component/Modal/Modal";
import Signup from "../Signup/Signup";
import useLocalStorage from "../../hooks/use-local-storage";
import {query} from "../../index";

function Plan({data, index}) {
    const [currentProfile, _] = useLocalStorage({
        key: 'currentProfile',
        defaultValue: null,
    })
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
                buyCredit(currentProfile?.token, id)
                    .then(response => {
                        query.invalidateQueries('history')
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

    const isPurchased = data.name !== 'Custom' ? currentProfile?.user?.credits?.find(item => item.bundle_id === data.id) : false

    const getButtonText = () => {
        if (data.name === "Custom") return "Contact Us";
        if (isPurchased) return "Selected Plan";
        return "Select Plan";
    }
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
                            <h1 className="font-bold text-3xl">{data.price}<span className='text-[14px]'>/{data.expiredIn === 30 ? "month" : "year" }</span>
                            </h1>
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-1">
                        <span className="w-fit bg-white text-zinc-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                            Recommended
                        </span>
                            <span className="text-sm font-semibold">Enterprise</span>
                        </div>

                    )}
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
                    <button
                        className={`w-full transition duration-150 border border-zinc-700 borer-2 outline-none ${isPurchased ? 'bg-white text-zinc-950 border-none' : 'hover:bg-GebetaMain'} hover:border-GebetaMain rounded-md px-3 py-1.5 text-sm font-medium`}
                        onClick={() => data.name === "Custom" ? navigate('/contact') : handleUpgrade(data.id)}
                        disabled={isPurchased}
                    >
                        {getButtonText()}
                    </button>
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
        call_caps: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"],
        included_call_types: ["Geocoding", "Direction", "Matrix", "Route"],
    };

    const SkeletonCard = () => (
        <div className="w-full p-6 h-[420px] rounded-lg bg-[#202022] shadow-md flex flex-col justify-between items-center min-w-[200px] animate-pulse">
            <div>
                {Array(5).fill(0).map((_, i) => (
                    <div className="h-5 w-3/4 bg-gray-700 rounded mb-4" key={i}></div>
                ))}
            </div>
        </div>
    );

    const { data, isLoading } = useQuery({
        queryKey: ['plans'],
        queryFn: () => getAllCredits({ page: 1, limit: 10 }),
        staleTime: 5 * 60 * 1000,
    });

    const [activeTab, setActiveTab] = useState("monthly");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Filter plans based on expiredIn value
    const monthlyPlans = data?.credit_bundles?.filter(credit => credit.expiredIn === 30) || [];
    const yearlyPlans = data?.credit_bundles?.filter(credit => credit.expiredIn === 365) || [];

    return (
        <div>
            <div className="flex justify-center mt-12 mb-8">
                <div className="bg-GebetaMain p-1 rounded-full inline-flex">
                    <div className="relative">
                        <div className="absolute inset-0 flex" aria-hidden="true">
                            <div
                                className={`w-1/2 bg-white rounded-full transition-all duration-300 ease-out ${
                                    activeTab === "yearly" ? "translate-x-full" : ""
                                }`}
                            ></div>
                        </div>
                        <div className="relative flex">
                            <button
                                type="button"
                                className={`w-24 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                    activeTab === "monthly" ? "text-GebetaMain" : "text-white"
                                }`}
                                onClick={() => handleTabChange("monthly")}
                            >
                                Monthly
                            </button>
                            <button
                                type="button"
                                className={`w-24 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                    activeTab === "yearly" ? "text-GebetaMain" : "text-white"
                                }`}
                                onClick={() => handleTabChange("yearly")}
                            >
                                Yearly
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                {isLoading ?
                    Array(3).fill(0).map((_, i) => <SkeletonCard key={i} />) :
                    (activeTab === "monthly" ? monthlyPlans : yearlyPlans).map((credit, index) => (
                        <Plan data={credit} index={index} key={index} />
                    ))}
                <Plan data={enterprise} index={data?.length || 1} /> {/* Include enterprise plan */}
            </div>
        </div>
    );
}

export default Plans;
