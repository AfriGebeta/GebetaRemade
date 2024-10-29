import React, {useState} from "react";
import {CopyOutlined, DeleteFilled} from "@ant-design/icons";

function APIToken() {
  const [showTokenModal, setTokenModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [description, setDescription] = useState("");
  const [textType, setTextType] = useState("text");

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  // ... (other functions remain unchanged)

  const copyToClipboard = () => {
    // Implement copy to clipboard logic
  };

  const deleteToken = () => {
    // Implement delete token logic
  };

  const updateToken = () => {
    // Implement update token logic
  };

  return (
    // flex flex-row sm:flex-row gap-1 sm:gap-4 items-center flex-wrap
    <div className="w-full flex flex-col bg-[#202022] px-4 py-3 text-[#aaa] text-child items-center mt-[2%] ">
    <div className="w-[98%] mb-[2%]">
      <p className="mt-[2%] sm:mt-[2%] mb-[1%] mt-[1%] font-bold text-xl text-white">Api Token</p>
      <button
        className="rounded-full mt-1 border border-GebetaMain bg-transparent text-GebetaMain rounded p-2 px-5 hover:bg-GebetaMain hover:text-white transition duration-300"
      >
        + Create Token
      </button>
      <div className=" w-full h-[1px] mt-[6%] md:mt-[2%] bg-white"></div>
      {/* now the other code  */}
      <p className="mt-[2%] text-lg text-white">your token</p>
      <div className="flex justify-between mt-[1%] items-center">
      
        <div className="relative w-full">
            
            <input
                type="text"
                placeholder="your token"
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
  );
}

export default APIToken;
