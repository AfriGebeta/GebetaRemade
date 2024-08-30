import React, {useEffect} from "react";
import DocCard from "../../component/Card/DocCard";
import {Link} from "react-router-dom";

const Cards = ({metrics}) => {

    useEffect(() => {
        console.log(metrics)
    })
    const objs = [
        {
            package: "ONM",
            calls: metrics.ONM,
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
        <div className="flex flex-col md:flex-row gap-6 mt-4">
            <DocCard/>
            <div className="w-3/2 flex flex-wrap gap-4">
                {objs.map((data, i) => (
                    <div
                        key={i}
                        className="w-full bg-[#202022] text-[#777] rounded-lg shadow-md p-4 flex-1 flex justify-between items-center min-w-[200px]"
                    >
                        <div>
                            <h3 className="text-md font-bold uppercase text-white">{data.package}</h3>
                            <span className='block text-xs font-medium lowercase'>endpoint</span>
                        </div>
                        <div className="text-right">
                            <h4 className="font-semibold text-[18px] text-GebetaMain">{data.calls}</h4>
                            <span className='font-medium text-xs'>Calls</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards