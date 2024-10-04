import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { getUserUsageForGraph } from "../../redux/api/usageAPI";

function APIUsage(graphData) {

  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  const user = useSelector((state) => state).user

  useEffect(()=>{
      console.log(graphData)
      if(response.error == null) {
        let labels = []
        let data = []
        for (let [key, value] of Object.entries(response.data.data)) {
          labels.push(key)
          data.push(value)
        }
        setLabels(labels)
        setData(data.sort())
      }
  },[])




  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "Api Usage Graph",
      },
    },
  };

  const datas = {
    labels: labels,
    datasets: [
      {
        // label: "First dataset",
        data: data,
        fill: true,
        backgroundColor: "rgba(222,117,1,0.2)",
        borderColor: "rgba(222,117,0,1)",
      },
    ],
  };

  return (
    <div className="rounded-md px-4 py-3 bg-[#202022] md:mt-[2%] ">
      <div className="flex justify-between items-center w-full sm:!sw">
        <div>
          <h2 className="m-0">API Usage</h2>
          <span>Track your api usage here</span>
        </div>
        <div className="flex gap-4 items-center ">
         
        </div>
      </div>
      <div></div>
      <div className="text-white  ">

        <div className="border border-dashed rounded-md border-white p-10 flex items-center justify-center sm:h-[200px] md:h-[200px] lg:h-[600px]">
          {data.length > 0 ? (
            <Line options={options} data={datas} className="!w-full" />
          ) : (
            <h3 className="text-white">
              You don't have any account activity for the selected period.
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default APIUsage;
