import React, { useState } from "react";
import { CopyOutlined, DeleteFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../redux/api/userApi";
import Modal from "./../../component/Modal/Modal"
import Notify from "../../component/Popup/Notify";
import { setUserData } from "../../redux/reducers/userSlice";


function APIToken() {
  const [showTokenModal, setTokenModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [description, setDescription] = useState("");
  const [textType, setTextType] = useState("text");
  const [notify, setNotify] = useState({ visible: false });

  const user = useSelector((state) => state).user
  const dispatch = useDispatch()
  
  const handleDescription = (event) => setDescription(event.target.value);
  

  // ... (other functions remain unchanged)

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(user.data.token);

      setNotify({ visible: true, msg: "Copied", type: "success" });
      setTimeout(() => setNotify({ visible: false }), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };


  

  const deleteToken = () => {
    // Implement delete token logic

      dispatch(setToken({ id: user.data.id, token: "token" }))
      .then((resultAction) => {
        if (setToken.fulfilled.match(resultAction)) {
            
        } else {
              alert("failed")
        }    
      });
    
   
  };


  const createToken = () => {

    dispatch(setToken({ id: user.data.id, email: "soemtext" }))
    .then((resultAction) => {
      if (setToken.fulfilled.match(resultAction)) {
          
      } else {
            alert("failed")
      }    
    });
  
  }

  return (
    // flex flex-row sm:flex-row gap-1 sm:gap-4 items-center flex-wrap
    <>
   
        <Notify value={notify} />
      <div className="w-full flex flex-col bg-[#202022] px-4  text-[#aaa] text-child items-center mt-[2%] ">
    
          <div className="w-[98%] mb-[2%]">
            <p className="mt-[2%] sm:mt-[2%] mb-[1%] mt-[1%] font-bold text-xl text-white">Api Token</p>
            <button
            onClick={createToken}
              className="rounded-full mt-1 border border-GebetaMain bg-transparent text-GebetaMain rounded p-2 px-5 hover:bg-GebetaMain hover:text-white transition duration-300"
            >
              + Create Token
            </button>
            <div className=" w-full h-[1px] mt-[6%] md:mt-[2%] bg-white"></div>
            {/* now the other code  */}
            <p className="mt-[2%] text-lg text-white"> Api Token</p>
            <div className="flex justify-between mt-[1%] items-center">
            
              <div className="relative w-full">
                  
                  <input
                      type="text"
                      placeholder={user.data.token}
                      className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border  shadow-sm rounded-lg"
                  />
              

                  <CopyOutlined className="w-6 h-6 text-gray-400 absolute right-3 inset-y-0 my-auto top-2" onClick={copyToClipboard} />

              </div>
                  
                  <DeleteFilled
                  className="!text-red-600 cursor-pointer ml-[2%]"
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
