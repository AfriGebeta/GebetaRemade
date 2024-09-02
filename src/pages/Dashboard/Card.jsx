import React from "react";
import DocCard from "../../component/Card/DocCard";

const Cards = ({ metrics }) => {
    const isLoading = !metrics || Object.keys(metrics).length === 0;

    const objs = [
        { package: "ONM", calls: metrics.ONM },
        { package: "Matrix", calls: metrics.Matrix },
        { package: "Direction", calls: metrics.Direction },
        { package: "Tss", calls: metrics.TSS },
        { package: "Geocoding", calls: metrics.Geocoding },
    ];

    const SkeletonCard = () => (
        <div className="w-full bg-[#202022] rounded-lg shadow-md p-4 flex-1 flex justify-between items-center min-w-[200px] animate-pulse">
            <div>
                <div className="h-5 w-20 bg-gray-700 rounded mb-2"></div>
                <div className="h-3 w-16 bg-gray-700 rounded"></div>
            </div>
            <div className="text-right">
                <div className="h-6 w-12 bg-gray-700 rounded mb-1"></div>
                <div className="h-3 w-8 bg-gray-700 rounded"></div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col md:flex-row gap-6 mt-4">
            <DocCard />
            <div className="w-3/2 flex flex-wrap gap-4">
                {isLoading
                    ? Array(5).fill(0).map((_, i) => <SkeletonCard key={i} />)
                    : objs.map((data, i) => (
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

export default Cards;