import React, { useState, useEffect } from "react";
import "./custom.css";
import { useSelector } from "react-redux";
import ApiDetail from "../../component/Card/ApiDetail";
import APIUsage from "./APIUsage";
import { getUserUsage } from "../../redux/api/usageAPI";
import {
  getUserUsageForGraph,
  getSpecifcUserUsageForGraph,
} from "./../../redux/api/apiCallApi";
import ClipLoader from "react-spinners/ClipLoader";
import {useQuery} from "@tanstack/react-query";

function Usage() {
  const user = useSelector((state) => state).user;
  const [graphData, setGraphData] = useState({ error: "no data" });

  const date = new Date()
  const currentDate = date.toJSON().slice(0, 10)

  const thirtyDaysAgoInMillis = date.getTime() - (30*24*60*60*1000)
  const thirtyDaysAgo = new Date(thirtyDaysAgoInMillis).toJSON().slice(0, 10)

  const [startingDate, setStartingDate] = useState(thirtyDaysAgo);
  const [endingDate, setEndingDate] = useState(currentDate);
  const [selected, setSelected] = useState("All");
  const [loading, setLoading] = useState(false);



  const {data, isLoading} = useQuery({
    queryKey: ['metrics', user.data.token],
    queryFn: () => getUserUsage(user.data.token),
    staleTime: 5 * 60 * 1000
  })
  
  function handleEndChange(event) {
    setEndingDate(event.target.value);
  }

  function handleStaringChange(event) {
    setStartingDate(event.target.value);
  }

  function handleChange(e) {
    // Update the state variable with the new value
    setSelected(e.target.value);
  }

  const getGraphData = () => {
    setLoading(true);
    if (startingDate != "" > 0 && endingDate != "" > 0) {
      getUserUsageForGraph(selected.toUpperCase(), startingDate, endingDate, user.data.token).then(
        (response) => {
          if (response.error == null) {
            setGraphData(response);
          }
        }
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    if(startingDate !=null && endingDate !=null){
      getGraphData()
    }
  },[startingDate, endingDate,selected])

  return (
    <div className="flex flex-col min-h-screen bg-Dark">
      <div className="w-[95%] mx-auto text-[#ccc] text-child flex flex-col flex-grow">
        <div className=" justify-between items-center">
          <div className="mt-[2%] md:mt-[3%]">
            <ApiDetail metrics={data} />
          </div>
          <div className="bg-[#202022] mt-[12%] md:mt-[2%] mb-[2%]">
            <div className="flex flex-col md:flex-row md:items-center   py-5 mx-[1%] md:space-x-14">
              <div className="flex flex-row items-center justify-between">
                <p className=" mx-4">Select endpoints : </p>
                <select
                  className=" mx-4 w-40 h-10 bg-transparent border border-gray-300 rounded px-4 text-white"
                  onChange={handleChange}
                >
                  <option value="All" className="text-black">
                    All
                  </option>
                  <option value="Geocoding" className="text-black">
                    Geocoding
                  </option>
                  <option value="Direction" className="text-black">
                    Direction
                  </option>
                  <option value="Matrix" className="text-black">
                    Matrix
                  </option>
                  <option value="ONM" className="text-black">
                    Onm
                  </option>
                  <option value="TSS" className="text-black">
                    TSS
                  </option>
                </select>
              </div>

              <div className="flex flex-row items-center justify-between mt-[2%] md:mt-[0%] ">
                <p className=" mx-4">from </p>
                <input
                  type="date"
                  onChange={handleStaringChange}
                  className=" mx-4 w-40 h-10 bg-transparent border border-gray-300 rounded px-4"
                  value={startingDate}
                />
              </div>

              <div className="flex flex-row items-center justify-between mt-[2%] md:mt-[0%] ">
                <p className=" mx-4">to </p>
                <input
                  type="date"
                  onChange={handleEndChange}
                  className=" mx-4 w-40 h-10 bg-transparent border border-gray-300 rounded px-4"
                  value={endingDate}
                />
              </div>

              {/*<button*/}
              {/*  className=" mt-[2%] md:mt-[0%] w-full md:w-[30%]  bg-GebetaMain hover:bg-GebetaDark-700 text-white font-bold py-3 rounded"*/}
              {/*  type="button"*/}
              {/*  onClick={getGraphData}*/}
              {/*>*/}
              {/*  {loading ? <ClipLoader color="#ffffff" size={35} /> : "Show"}*/}
              {/*</button>*/}
            </div>
          </div>

          <APIUsage graphData={graphData} isLoading={isLoading}/>
        </div>
      </div>
    </div>
  );
}

export default Usage;
