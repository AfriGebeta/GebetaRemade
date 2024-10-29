import React from "react";
import DocCard from "../../component/Card/DocCard";
import {useQuery} from "@tanstack/react-query";
import {getUserUsage} from "../../redux/api/usageAPI";
import useLocalStorage from "../../hooks/use-local-storage";

const Cards = ({ metrics }) => {
    const [currentProfile, _] = useLocalStorage({
        key: 'currentProfile',
        defaultValue: null,
    })

    const {data, isLoading} = useQuery({
        queryKey: ['metrics', currentProfile.token],
        queryFn: () => getUserUsage(currentProfile.token),
        staleTime: 5 * 60 * 1000
    })

    const defaultMetrics = [
        { calltype: "GEOCODING", total: 0 },
        { calltype: "DIRECTION", total: 0 },
        { calltype: "ONM", total: 0 },
        { calltype: "MATRIX", total: 0 },
        { calltype: "TSS", total: 0 },
    ];

    const mergedMetrics = React.useMemo(() => {
        if (!data) return defaultMetrics;

        const metricsMap = data.reduce((acc, item) => {
            acc[item.calltype] = item.total;
            return acc;
        }, {});

        return defaultMetrics.map(metric => ({
            calltype: metric.calltype,
            total: metricsMap[metric.calltype] || 0
        }));
    }, [data]);

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
                {isLoading ? (
                    Array(5).fill(0).map((_, i) => <SkeletonCard key={i} />)
                ) : (
                    mergedMetrics.map((data, i) => (
                        <div
                            key={i}
                            className="w-full bg-[#202022] text-[#777] rounded-lg shadow-md p-4 flex-1 flex justify-between items-center min-w-[200px]"
                        >
                            <div>
                                <h3 className="text-md font-bold uppercase text-white">{data.calltype}</h3>
                                <span className='block text-xs font-medium lowercase'>endpoint</span>
                            </div>
                            <div className="text-right">
                                <h4 className="font-semibold text-[18px] text-GebetaMain">{data.total}</h4>
                                <span className='font-medium text-xs'>Calls</span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Cards;