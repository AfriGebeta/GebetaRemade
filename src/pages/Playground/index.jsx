import React ,{useEffect , useState  } from "react";
import { useSelector, useDispatch } from "react-redux"
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";
import PlayGroundHeader from "./PlayGroundHeader";
import MapView from "./MapView";


const PlayGround = () => {


    return (
        <div className="flex flex-col bg-white">
          <NavBar color={"white"} textColor={"black"}/>
          <PlayGroundHeader />
          <div className="w-[100%] mx-auto px-5 pt-4 md:px-10">
                  <MapView/>
          </div>
          <Footer color={"white"} textColor={"black"}/>
        </div>
    );
};
















export default PlayGround


