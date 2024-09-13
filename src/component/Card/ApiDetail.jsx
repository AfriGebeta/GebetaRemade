import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { add, format } from "date-fns";

function ApiDetail({ metrics }) {
  const user = useSelector((state) => state).user

  const isLoading = !metrics || Object.keys(metrics).length === 0;

  const getTotal = () => {
    return metrics?.map((item) => item.total).reduce((acc, index) => acc + index, 0);
  };

  const getMaximum = () => {
    let maxValue = Math.max(...metrics.map(metric => metric.total))
    let maxMessage = metrics.find(item => item.total = maxValue).calltype
    return maxValue + " " + maxMessage.charAt(0).toUpperCase() + maxMessage.slice(1).toLowerCase();
  };

  const getMinimum = () => {
    let minValue = Math.min(...metrics.map(metric => metric.total))
    let minMessage = metrics.find(item => item.total = minValue).calltype
    return minValue + " " + minMessage.charAt(0).toUpperCase() + minMessage.slice(1).toLowerCase();
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
              <span className={`${user.data.token != null ? "text-green-500" : "text-red-500"} font-semibold text-xs`}>
                {user.data.user.token != null ? "active" : "inactive"}
              </span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-sm mb-1">Subscription</h4>
              <span className="text-green-500 text-xs font-semibold">pay-as-you-go</span>
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
