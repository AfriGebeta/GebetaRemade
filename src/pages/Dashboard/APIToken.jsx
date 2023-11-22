

import React, { useState } from "react";
import {
  CopyOutlined,
  DeleteFilled,
  EyeInvisibleFilled,
} from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";




function APIToken() {

  const [showTokenModal, setTokenModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [description, setDescription] = useState("");
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
 

  const tokenView = () => {
    return (
      <div className="bg-[#aaa] shadow w-[300px] rounded-lg  divide-gray-200">
        <div className="px-5 py-3">
          <p className="text-red-600">{errorMessage}</p>
          <label className="font-semibold text-sm text-black pb-1 block">
            Description
          </label>
          <textarea
            type="textarea"
            rows={4}
            className="border h-auto px-3 py-2 mt-1 mb-5 text-sm w-full text-black"
            placeholder="Token Definition.."
            onChange={handleDescription}
            defaultValue={description}
          ></textarea>

          <div className=" py-3">
            {showLoading ? (
              <button
                type="button"
                className="w-[270px]  rounded-md bg-orange-200 text-black  py-2 mt-1 mb-5 transition duration-200 bg-blue-500 hover:bg-orange-500  focus:ring-opacity-50 text-white  py-2.5  text-sm shadow-sm hover:shadow-md font-semibold"
                disabled
                onClick={(event) => {
                  event.preventDefault();
                  updateToken();
                }}
              >
                <span className="inline-block ">Sign In</span>
              </button>
            ) : (
              <button
                type="button"
                className="w-[270px]  rounded-md  text-white  py-2 mt-1 mb-5 transition duration-200 bg-[#1A1F32]  focus:ring-opacity-50 text-white  py-2.5  text-sm shadow-sm hover:shadow-md font-semibold "
                onClick={(event) => {
                  event.preventDefault();

                  updateToken();
                }}
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  //function to delete apiKey
  const deleteToken = () => {

  };

  const updateToken = () => {
   
  };

  


  function copyToClipboard() {

  }

  const [textType, setTextType] = useState("text");

  return (
    <div className="flex gap-1 sm:gap-4 items-center flex-wrap bg-[#202022] px-4 py-3 text-[#aaa] text-child">
     
      
      <button className="btn-sty1 self-start my-6 bg-black/60 text-[#aaa] " onClick={() => setTokenModal(true)}>+ API Token</button>
      <div className="flex-1 flex items-center gap-4">
        <input
          disabled
          type={textType}
       
          value={ ""}
          className="bg-transparent p-1 flex-1"
        />
        <div className="flex gap-6">
          <EyeInvisibleFilled
            className="cursor-pointer"
            onClick={() =>
              setTextType(textType === "text" ? "password" : "text")
            }
          />
          <CopyOutlined className="cursor-pointer" onClick={copyToClipboard} />
          <DeleteFilled
            className="!text-red-600 cursor-pointer"
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
