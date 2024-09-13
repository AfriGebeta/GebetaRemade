import { CopyOutlined, DeleteFilled, EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notify from "../../component/Popup/Notify";
import { setToken } from "../../redux/api/userApi";

function APIToken() {
    const [showToken, setShowToken] = useState(false);
    const [notify, setNotify] = useState({ visible: false });

    const user = useSelector((state) => state.user);
    const [tokenValue, setTokenValue] = useState(user.data.user.token || "");

    useEffect(() => {
        setTokenValue(user.data.user.token || "");
    }, [user.data.user.token]);

    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText(tokenValue);
            setNotify({ visible: true, msg: "Copied", type: "success" });
            setTimeout(() => setNotify({ visible: false }), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const handleEyeVisible = () => {
        setShowToken(!showToken);
    };

    const createToken = async () => {
        try {
            const response = await setToken(user.data.token);
            console.log(tokenValue)
            setTokenValue(JSON.stringify(response.token).slice(1,-1));
            setNotify({ visible: true, msg: "Token created successfully", type: "success" });
            setTimeout(() => setNotify({ visible: false }), 2000);
        } catch (err) {
            console.error('Failed to create token: ', err);
            setNotify({ visible: true, msg: "Failed to create token", type: "error" });
            setTimeout(() => setNotify({ visible: false }), 2000);
        }
    };

    return (
        <>
            <Notify value={notify} />
            <div className="bg-[#202022] rounded text-[#aaa] px-6 py-5 mt-2">
                <div className="flex flex-wrap items-center gap-4">
                    <p className="text-sm font-medium text-white whitespace-nowrap"> API Token</p>
                    <button
                        className="border border-GebetaMain bg-transparent text-sm text-GebetaMain rounded py-2 px-3 mt-0 hover:bg-GebetaMain hover:text-white transition duration-300"
                        onClick={createToken}
                    >
                        Create Token
                    </button>
                    <input
                        type={showToken ? "text" : "password"}
                        readOnly
                        value={tokenValue.slice(1,-1)}
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