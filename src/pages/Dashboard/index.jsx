import React from "react";
import { ReactComponent as DirectionIcon } from "../../assets/img/direct.svg";
import { ReactComponent as SettingsIcon } from "../../assets/img/settings.svg";
import ApiDetail from "./ApiDetail";
import DocCard from "./DocCard";
import ApiToken from "./APIToken";
import DashBoardNav from "../../component/NavBar/DashBoardNav";
import Footer from "../../component/Footer/Footer";


function Cards() {


  
  const metrics = {}
  const objs = [
    {
      package: "ONM",
      calls: metrics.onm,
    },
    {
      package: "Matrix",
      calls: metrics.matrix,
    },
    {
      package: "Direction",
      calls: metrics.direction,
    },
    {
      package: "Tss",
      calls: metrics.tss,
    },

    {
      package: "Geocoding",
      calls: metrics.Geocoding,
    },


    
  ];

  return (
    <>
  
<div className="flex gap-6 flex-wrap mt-[2%]">
<DocCard />

<div className="flex-1 flex grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-evenly">
  {objs.map((data, i) => (
    <div
      key={i}
      className="p-4 bg-[#202022] flex-1 text-[#777] rounded-md flex justify-between min-w-full xs:min-w-[40%]"
    >
      <div className="leading-3">
        <h2 className="p-0 m-0">{data.package}</h2>
        <p className="m-0 p-0">endpoint</p>
      </div>
      <div className="flex items-end">
        <h1 className="m-0">{data.calls}</h1>
        <span>Calls</span>
      </div>
    </div>
  ))}
</div>
</div>

</>
  );
}

function Dashboard() {
  let userData = { username : "asdf"}
  return (
    <div className="flex flex-col min-h-screen">
    <DashBoardNav color={"black"} textColor={"[#ccc]"}/>
    <div className="w-[80%] mx-auto text-[#ccc] text-child flex flex-col flex-grow">
      <div className=" justify-between items-center">
        <div className="mt-[4%]">
            <ApiDetail />
        </div>
        <Cards />
        <ApiToken />
      </div>
    </div>
    <Footer color={"black"} textColor={"[#ccc]"}/>
  </div>

   
  );
}

export default Dashboard;
