import { CopyOutlined, EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notify from "../../component/Popup/Notify";
import { setToken } from "../../redux/api/userApi";
import { setUserData } from "../../redux/reducers/userSlice";
import useLocalStorage from "../../hooks/use-local-storage";

function APIToken() {
    const [showToken, setShowToken] = useState(false);
    const [notify, setNotify] = useState({ visible: false });
    const dispatch = useDispatch();

    const [currentProfile, _] = useLocalStorage({
        key: 'currentProfile',
        defaultValue: null,
    })

    console.log("current user", currentProfile)

    const [tokenValue, setTokenValue] = useState(currentProfile?.user?.token ? currentProfile.user.token[currentProfile.user.token.length - 1] : "");

    const showNotification = (msg, type) => {
        setNotify({ visible: true, msg, type });
        setTimeout(() => setNotify({ visible: false }), 2000);
    };

    // console.log(user?.data?.user)

    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText(tokenValue);
            showNotification("Copied", "success");
        } catch (err) {
            console.error('Failed to copy: ', err);
            showNotification("Failed to copy", "error");
        }
    };

    const handleEyeVisible = () => {
        setShowToken(!showToken);
    };

    const createToken = async () => {
        try {
            const response = await setToken(currentProfile?.user?.token);
            console.log("New token received:", response.token);

            dispatch(setUserData({
                token: currentProfile.user.token,
                user: {
                    ...currentProfile.user,
                    token: [...currentProfile.user.token, response.token]
                }
            }));

            setTokenValue(response.token)

            showNotification("Token created successfully", "success");
        } catch (err) {
            console.error('Failed to create token: ', err);
            showNotification("Failed to create token", "error");
        }
    };

    return (
        <>
            <Notify value={notify} />
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
                        <CopyOutlined onClick={copyToClipboard} />
                        {!showToken ? <EyeInvisibleFilled onClick={handleEyeVisible} /> :
                            <EyeFilled onClick={handleEyeVisible} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default APIToken;