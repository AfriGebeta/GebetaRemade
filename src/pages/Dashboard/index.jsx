import React from "react";

import ApiDetail from "../../component/Card/ApiDetail";
import Cards from "./Card";
import ApiToken from "./APIToken";
import DashBoardNav from "../../component/NavBar/DashBoardNav";
import Footer from "../../component/Footer/Footer";




function Dashboard() {

  return (
    <div className="bg-Dark flex flex-col min-h-screen">

    <div className="w-[80%] mx-auto text-[#ccc] text-child flex flex-col flex-grow">
      <div className=" justify-between items-center">
        <div className="mt-[4%]">
            <ApiDetail />
        </div>
        <Cards />
        <ApiToken />
      </div>
    </div>

  </div>

   
  );
}

export default Dashboard;
