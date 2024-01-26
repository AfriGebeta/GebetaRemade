import React ,{useEffect , useState  } from "react";
import { useSelector, useDispatch } from "react-redux"
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";
import PlayGroundHeader from "./PlayGroundHeader";
import MapView from "./MapView";
import { PlayGroundProvider } from "../../context/PlayGround";
import "./index.css"

const PlayGround = () => {
  



    return (
      <PlayGroundProvider>

        <div className="flex flex-col bg-white">
         
          <PlayGroundHeader/>
          <div className="w-[100%] mx-auto pt-4 lg:px-10 md:px-5 ">
                  <MapView />
          </div> 
         
        </div>
        </PlayGroundProvider>
      
    );
};
















export default PlayGround


