import React from "react";
import ApiDetail from "../../component/Card/ApiDetail";
import Plans from "./Priceplan";
import BillingHistory from "./BillingHistory";


function Priceplan() {
    return (
        <div className="bg-Dark min-h-screen">
            <div className="w-[95%] mx-auto py-8">
                <div className="grid grid-cols-1 text-[#ccc] lg:grid-cols-2 gap-4">
                    <div className="lg:col-span-2 space-y-4">
                        <ApiDetail/>
                        <Plans/>
                    </div>
                    <div className="col-span-2">
                        <BillingHistory/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Priceplan;
