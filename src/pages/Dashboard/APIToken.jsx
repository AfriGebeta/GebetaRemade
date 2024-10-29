import {CopyFilled, EyeFilled, EyeInvisibleFilled} from "@ant-design/icons";
import React, {useState} from "react";
import {setToken} from "../../redux/api/userApi";
import useLocalStorage from "../../hooks/use-local-storage";
import toast from "react-hot-toast";

function APIToken() {
    const [showToken, setShowToken] = useState(false);

    const [currentProfile, setCurrentProfile] = useLocalStorage({
        key: 'currentProfile',
        defaultValue: null,
    })

    const [tokenValue, setTokenValue] = useState(currentProfile?.user?.token ? currentProfile.user.token[currentProfile.user.token.length - 1] : "");

    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText(tokenValue);
            toast.success("Copied to clipboard");
        } catch (err) {
            console.error('Failed to copy: ', err);
            toast.error("Failed to copy to clipboard");
        }
    };

    const handleEyeVisible = () => {
        setShowToken(!showToken);
    };

    const createToken = async () => {
        try {
            const response = await setToken(currentProfile.token);
            setCurrentProfile({ ...currentProfile, user: { ...currentProfile.user, token: [...currentProfile.user.token, response.token] } });

            setTokenValue(response.token)
            toast.success("Token created successfully");
        } catch (err) {
            console.error('Failed to create token: ', err);
            toast.error("Failed to create token");
        }
    };

    return (
        <>
            <div className="bg-[#202022] rounded text-[#aaa] px-6 py-5 mt-2">
                <div className="flex flex-wrap items-center gap-4">
                    <p className="text-sm font-medium text-white whitespace-nowrap">API Token</p>
                    <button
                        className="border border-GebetaMain bg-transparent text-sm text-GebetaMain rounded py-2 px-3 mt-0 hover:bg-GebetaMain hover:text-white transition duration-300"
                        onClick={createToken}
                    >
                        Create Token
                    </button>
                    <input
                        type={showToken ? "text" : "password"}
                        readOnly
                        value={tokenValue}
                        className="flex-grow min-w-0 text-gray-500 bg-transparent border-none shadow-sm rounded-lg"
                    />
                    <div className='flex gap-6 items-center'>
                        <span className="flex gap-2 items-center p-2 rounded-md bg-gray-700 hover:bg-gray-600 cursor-pointer text-sm" onClick={copyToClipboard}>
                            <CopyFilled/>
                            Copy
                        </span>
                        {!showToken ? <EyeInvisibleFilled onClick={handleEyeVisible} /> :
                            <EyeFilled onClick={handleEyeVisible} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default APIToken;