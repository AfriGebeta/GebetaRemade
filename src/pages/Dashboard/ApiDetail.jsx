import React, { useEffect, useState } from "react";

import { add, format } from "date-fns";

function ApiDetail() {






  const [detail] = useState({
    status: "active",
    type: "pay-as-you-go",
    nextbilling: "Feb 28,2022",
    totalusage: "23,127 Calls",
    maxusage: {
      directionEP: "78%",
    },
    minusage: {
      matrixEP: "3%",
    },
  });

  const addDate = () => {
    try {
      const dateString = new Date("s");
      const _date = add(dateString, {
        days: 30,
      });

      return String(format(_date, "YYY-MM-d"));
    } catch (err) {
      return "";
    }
  };

  const getTotal = () => {
    // metrics.onm + metrics.direction + metrics.matrix + metrics.tss;
    return 12
  };

  const getMaximum = () => {
    // let max = Object.entries(metrics).reduce(
    //   (max, entry) => (entry[1] >= max[1] ? entry : max),
    //   [0, -Infinity]
    // );

    return 12;
  };

  const getMinimum = () => {
    // let min = Object.entries(metrics).reduce(
    //   (min, entry) => (entry[1] <= min[1] ? entry : min),
    //   [0, +Infinity]
    // );
    return 12;
  };
  return (
    <div className="flex gap-10 items-center px-4 py-3 bg-[#202022] overflow-x-auto snap-x scroll-shadow">
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="m-0 pr-2">API Token Status</h4>
        <span className="text-green-500">{detail.status}</span>
      </div>
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
        <h4 className="m-0 pr-2">Subscription Type</h4>
        <span className="text-green-500">{detail.type}</span>
      </div>
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
        <h3 className="!text-secondary m-0 pr-2">{addDate()}</h3>
        <h4 className="m-0">Next Billing</h4>
      </div>
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
        <h3 className="!text-secondary m-0 pr-2">{getTotal()}</h3>
        <h4 className="m-0">Total Usage</h4>
      </div>
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
        <h3 className="!text-secondary m-0 pr-2">
          {getMaximum()[0]} Endpoint - {getMaximum()[1]}
        </h3>
        <h4 className="m-0">Max Usage</h4>
      </div>
      <div className="leading-4 pl-2 flex flex-row-rev flex-wrap items-center whitespace-nowrap snap-start">
        <h3 className="!text-secondary m-0 pr-2">
          {getMinimum()[0]} Endpoint - {getMinimum()[1]}
        </h3>
        <h4 className="m-0">Min Usage</h4>
      </div>
    </div>
  );
}

export default ApiDetail;
