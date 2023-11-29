import React, { useEffect } from "react";
import DocCard from "../../component/Card/DocCard";
import { Link } from "react-router-dom";

const Cards = ({metrics }) => {

    useEffect(()=>{
      console.log(metrics)
    })
    const objs = [
      {
        package: "ONM",
        calls: metrics.ONM  ,
      },
      {
        package: "Matrix",
        calls: metrics.Matrix,
      },
      {
        package: "Direction",
        calls: metrics.Direction,
      },
      {
        package: "Tss",
        calls: metrics.TSS,
      },
  
      {
        package: "Geocoding",
        calls: metrics.Geocoding,
      },
  
  
      
    ];


   return (
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
       
      </div>
      <div className="flex items-end space-x-2">
        <h1 className="m-0">{data.calls}</h1>
        <span>Calls</span>
      </div>
    </div>
  ))}
</div>
</div>
   )
}

export default Cards