import React from "react";
import { ReactComponent as DirectionIcon } from "../../assets/img/direct.svg";
import { ReactComponent as SettingsIcon } from "../../assets/img/settings.svg";
import ApiDetail from "./ApiDetail";
import DocCard from "./DocCard";
import ApiToken from "./APIToken";
import APIUsage from "./APIUsage";
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";

function Cards() {

  return (
    <div className="flex gap-6 items-stretch flex-wrap">
      <DocCard />

      <div className="flex-1 ">
        <div className="p-6 bg-[#202022] h-full text-[#777] rounded-md">
          <div className="flex gap-4 items-center px-5 py-2">
            <SettingsIcon className="" fill="#777" />
            <h2 className="m-0 uppercase">Business Pac.</h2>
            <DirectionIcon />
          </div>
          <div className="leading-3 py-3">
            <h2>userData.username</h2>
            <span className="!m-0 !p-0 ">
              {/* <CurrentPlan /> */}
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="p-6 bg-[#202022]  text-[#777] rounded-md">
          <div className="flex gap-4 items-center px-5 py-2">
            <SettingsIcon className="" fill="#777" />
            <h2 className="m-0 uppercase">
              Total Calls <small>calls</small>
            </h2>
            <DirectionIcon />
          </div>
          <div className="leading-3 py-3">
            <h2>
              {/* {metrics.onm + metrics.direction + metrics.matrix + metrics.tss + metrics.Geocoding}{" "} */}
              {12}{" "}              
              <small>calls</small>
            </h2>
           
          </div>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="w-full">
      <NavBar color={"black"} textColor={"[#ccc]"}/>
        <div className="w-[98%] mx-auto text-[#ccc] text-child flex flex-wrap gap-4">
        <div className="flex-1 flex flex-col gap-6 ">
          <ApiToken />
          <ApiDetail />
          <Cards />
          <APIUsage />
        </div>
      </div>
      <Footer color={"black"} textColor={"[#ccc]"}/>
    </div>
   
  );
}

export default Dashboard;
