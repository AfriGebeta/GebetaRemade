import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import ApiDetail from "../../component/Card/ApiDetail";
import Cards from "./Card";
import ApiToken from "./APIToken";
import {getUserUsage} from "../../redux/api/usageAPI";
import {useQuery} from "@tanstack/react-query";

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


