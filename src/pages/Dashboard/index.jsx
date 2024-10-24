import React from "react";
import ApiDetail from "../../component/Card/ApiDetail";
import Cards from "./Card";
import ApiToken from "./APIToken";

function Dashboard() {

    return (
        <div className="bg-Dark flex flex-col min-h-screen">
            <div className="w-[95%] mx-auto text-[#ccc] text-child flex flex-col flex-grow">
                <div className=" justify-between items-center">
                    <ApiToken/>
                    <div className="mt-[1.5%]">
                        <ApiDetail/>
                    </div>
                    <Cards />
                </div>
            </div>

        </div>
    );
}

export default Dashboard;


