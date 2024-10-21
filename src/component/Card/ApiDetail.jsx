import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getCredit } from "../../redux/api/creditsApi";
import {useQuery} from "@tanstack/react-query";
import {getUserUsage} from "../../redux/api/usageAPI";
import useLocalStorage from "../../hooks/use-local-storage";

function ApiDetail() {
  const [currentProfile, _] = useLocalStorage({
    key: 'currentProfile',
    defaultValue: null,
  })
  const [purchasedPlans, setPurchasedPlans] = useState('')


  const {data, isLoading, error} = useQuery({
    queryKey: ['metrics', currentProfile.token],
    queryFn: () => getUserUsage(currentProfile.token),
    staleTime: 5 * 60 * 1000
  })

  useEffect(() => {
    if (currentProfile?.user?.token) {
      setPurchasedPlans("Credits")
    }

    if (currentProfile?.user?.purchased_date != null) {
      setPurchasedPlans("Pay as you go")
    }
  }, [])

  const getTotal = () => {
    if(!data || data.length===0) return 0;
    return data.reduce((acc, item) => acc + item.total, 0);
  };

  const getMaximum = () => {
    if(!data || data.length===0) return "0";
    let maxValue = Math.max(...data.map(metric => metric.total));
    let maxMessage = data.find(item => item.total === maxValue)?.calltype;
    return `${maxValue} ${maxMessage.charAt(0).toUpperCase() + maxMessage.slice(1).toLowerCase()}`;
  };

  const getMinimum = () => {
    if(!data || data.length===0) return "0"
    let minValue = Math.min(...data.map(metric => metric.total));
    let minMessage = data.find(item => item.total === minValue).calltype;
    return `${minValue} ${minMessage.charAt(0).toUpperCase() + minMessage.slice(1).toLowerCase()}`;
  };

  const SkeletonItem = () => (
    <div className="flex flex-col">
      <div className="bg-gray-700 h-4 w-3/4 mb-2 rounded animate-pulse"></div>
      <div className="bg-gray-700 h-4 w-1/2 rounded animate-pulse"></div>
    </div>
  );

  return (
    <div className="bg-[#202022] px-8 py-6 rounded-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {isLoading ? (
          [...Array(5)].map((_, index) => <SkeletonItem key={index} />)
        ) : (
          <>
            <div className="flex flex-col">
              <h4 className="text-sm font-semibold mb-1">API Token Status</h4>
              <span className={`${currentProfile?.token != null ? "text-green-500" : "text-red-500"} font-semibold text-xs`}>
                {currentProfile?.user?.token != null ? "active" : "inactive"}
              </span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-sm mb-1">Subscription</h4>
              <span className="text-green-500 text-xs font-semibold">{purchasedPlans}</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-sm text-secondary mb-2">Total Usage</h4>
              <h3 className="text-GebetaMain text-xs font-semibold">{getTotal()} calls</h3>
            </div>
            <div className="flex flex-col">
              <h4 className="text-secondary font-semibold text-sm mb-2">Max Usage</h4>
              <h3 className="text-GebetaMain text-xs whitespace-nowrap font-semibold">
                {getMaximum()} calls
              </h3>
            </div>
            <div className="flex flex-col">
              <h4 className="text-secondary font-semibold text-sm mb-2">Min Usage</h4>
              <h3 className="text-GebetaMain text-xs font-semibold">
                {getMinimum()} calls
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ApiDetail;