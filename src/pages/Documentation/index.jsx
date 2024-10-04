import React ,{useEffect  } from "react";
import { useSelector, useDispatch } from "react-redux"
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";
import Sidebar from "./Sidebar";
import DocumentationHeader from "./DocumentationHeader";
import Content from "./Content";
import { returnDocumentationObject } from "../../data/documentation";
import "./index.css"


const Documentation = () => {
  const { documentation } = useSelector((state) => state)

    return (
      <div className="flex flex-col">
        
        <DocumentationHeader />
        <div className="flex md:flex-row flex-col relative">
          <Sidebar />
          <div  className="w-[100%] md:w-[70%]  overflow-y-auto max-h-[calc] ml-[calc]" >
            <p className="md:mt-[2%] text-[#A0AABA] md:text-2xl text-xl md:ml-[0%] ml-[3%] font-bold">
              Overview
            </p>
          
            <Content object={returnDocumentationObject(documentation.current)} current = {documentation.current} />
          </div>
        </div>

      </div>
    );
  };


export default Documentation


