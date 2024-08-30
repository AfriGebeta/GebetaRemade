import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {add, format} from "date-fns";

function ApiDetail({metrics}) {

    const user = useSelector((state) => state).user


    const addDate = (date) => {
        try {
            const dateString = new Date(date);
            const _date = add(dateString, {
                days: 30,
            });

            const formattedDate = _date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });

            return formattedDate;
        } catch (err) {
            return "";
        }
    };

    const getTotal = () => {
        return (metrics.ONM || 0) + (metrics.Direction || 0) + (metrics.Matrix || 0) + (metrics.TSS || 0) + (metrics.Geocoding || 0);
    };

    const getMaximum = () => {
        let max = Object.entries(metrics).reduce(
            (max, entry) => ((entry[1] || 0) >= (max[1] || 0) ? entry : max),
            [0, -Infinity]
        );

        return max;
    };


    const getMinimum = () => {
        let min = Object.entries(metrics).reduce(
            (min, entry) => ((entry[1] || 0) <= (min[1] || 0) ? entry : min),
            [0, +Infinity]
        );
        return min;
    };


    return (
        <div className="bg-[#202022] px-4 py-6 rounded-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                <div className="flex flex-col">
                    <h4 className="text-sm font-medium mb-1">API Token Status</h4>
                    <span
                        className={`${user.data.token != null ? "text-green-500" : "text-red-500"} font-semibold text-xs`}>
        {user.data.token != null ? "active" : "inactive"}
      </span>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-medium text-sm mb-1">Subscription</h4>
                    <span className="text-green-500 text-xs font-semibold">pay-as-you-go</span>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-xs font-medium mb-1">Next Billing</h4>
                    <h3 className="text-GebetaMain text-sm font-semibold">
                        {user.data.purchasedDate != null ? addDate(user.data.purchasedDate) : "-"}
                    </h3>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-xs font-medium text-secondary mb-1">Total Usage</h4>
                    <h3 className="text-GebetaMain text-sm font-semibold">{getTotal()} calls</h3>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-secondary text-xs font-medium mb-1">Max Usage</h4>
                    <h3 className="text-GebetaMain text-sm font-semibold">
                        {getMinimum()[0]} - {getMinimum()[1]}
                    </h3>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-secondary text-xs font-medium mb-1">Min Usage</h4>
                    <h3 className="text-GebetaMain text-sm font-semibold">
                        {getMaximum()[0]} - {getMaximum()[1]}
                    </h3>
                </div>
            </div>
        </div>

    );
}

export default ApiDetail;
