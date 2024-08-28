import React, {useState} from "react";
import {CopyOutlined, DeleteFilled, EyeInvisibleFilled} from "@ant-design/icons";
import {useSelector, useDispatch} from "react-redux";
import {setToken} from "../../redux/api/userApi";
import Modal from "./../../component/Modal/Modal"
import Notify from "../../component/Popup/Notify";
import {setUserData} from "../../redux/reducers/userSlice";


function APIToken() {
    const [showTokenModal, setTokenModal] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [showToken, setShowToken] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [description, setDescription] = useState("");
    const [textType, setTextType] = useState("text");
    const [notify, setNotify] = useState({visible: false});

    const user = useSelector((state) => state).user
    const dispatch = useDispatch()

    const handleDescription = (event) => setDescription(event.target.value);


    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText(user.data.token);
            setNotify({visible: true, msg: "Copied", type: "success"});
            setTimeout(() => setNotify({visible: false}), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const handleEyeVisible = () => {
        try {
            setShowToken(!showToken)
            navigator.clipboard.writeText(user.data.token);
            setNotify({visible: true, msg: "hidden", type: "success"});
            setTimeout(() => setNotify({visible: false}), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }


    const deleteToken = () => {
        // Implement delete token logic

        dispatch(setToken({id: user.data.id, token: "token"}))
            .then((resultAction) => {
                if (setToken.fulfilled.match(resultAction)) {

                } else {
                    alert("failed")
                }
            });


    };


    const createToken = () => {

        dispatch(setToken({id: user.data.id, email: "soemtext"}))
            .then((resultAction) => {
                if (setToken.fulfilled.match(resultAction)) {

                } else {
                    alert("failed")
                }
            });

    }

    return (
        <>
            <Notify value={notify}/>
            <div
                className="bg-[#202022] rounded text-[#aaa] px-6 py-4">
                <div className="flex flex-wrap items-center gap-4">
                    <p className="text-sm font-medium text-white whitespace-nowrap"> API Token</p>
                    <input
                        type={showToken ? "text" : "password"}
                        disabled
                        value={user.data.token}
                        className="flex-grow min-w-0 text-gray-500 bg-transparent border-none shadow-sm rounded-lg"
                    />
                    <div className='flex gap-2 items-center'>
                        <CopyOutlined onClick={copyToClipboard}/>
                        <EyeInvisibleFilled onClick={handleEyeVisible}/>
                        <DeleteFilled
                            className="cursor-pointer"
                            onClick={(event) => {
                                event.preventDefault();
                                deleteToken();
                            }}
                        />
                    </div>
                </div>
            </div>
        </>

    );
}

export default APIToken;
