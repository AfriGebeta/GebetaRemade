import React, {useEffect, useState} from "react";
import {getAllBilling} from "../../redux/api/billingAPI";
import {useSelector} from "react-redux";
import billing from '../../assets/img/billing.png'
import {useQuery} from "@tanstack/react-query";
import chapa from '../../assets/img/chapa.png'

function BillingHistory() {
    const user = useSelector((state) => state.user);

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year

        return `${month}/${day}/${year}`;
    }

    const [currentPage, setCurrentPage] = useState(1)
    const limit = 4

    const {data, isLoading} = useQuery({
        queryKey: ['history', user.data.token, currentPage],
        queryFn: () => getAllBilling(user.data.token, currentPage, limit),
        staleTime: 5 * 60 * 1000
    })

    const totalPages = Math.ceil(data?.count / limit)

    console.log("data", data)

    const SkeletonCard = () => (
        <div className='flex flex-col gap-6 pb-4 pt-5 animate-pulse'>
            <div className='flex justify-between itlast:border-b-0ems-center'>
                <div className='w-32 h-4 bg-gray-600 rounded-md'></div>
                <div className='w-20 h-4 bg-gray-600 rounded-md'></div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='w-full h-4 bg-gray-600 rounded-md'></div>
                <div className='w-full h-4 bg-gray-600 rounded-md'></div>
                <div className='flex justify-between items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <div className='w-24 h-4 bg-gray-600 rounded-md'></div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-16 h-4 bg-gray-600 rounded-md'></div>
                        <div className='w-12 h-4 bg-gray-600 rounded-md'></div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className='bg-[#202022] text-[#ccc] p-4 rounded-lg min-h-[60vh]'>
            {isLoading ? Array(2).fill(0).map((_, i) => <SkeletonCard key={i}/>) : data.billing.length > 0 ?
                <>
                    <h2 className='text-xl text-white font-semibold mb-4'>Billing History</h2>
                    <div className="space-y-4">
                        {data?.billing.map((item, index) => (
                            <div key={index}
                                 className='flex flex-col gap-6 pb-4 border-b border-gray-700 last:border-b-0'>
                                <div className='flex justify-between items-center'>
                                    <h4 className='text-base text-white font-semibold'>{item?.credit.credit_bundle.name} Pac.</h4>
                                    <h5 className='text-[#ccc] text-xs font-medium'>{formatDate(item.created_at)}</h5>
                                </div>
                                <div className='flex justify-between text-sm'>
                                    <h4 className="font-semibold">Payment Status</h4>
                                    {item?.installments?.map((installment) => (
                                        <div className='flex flex-col justify-between gap-4'>
                                            <div className='flex items-center gap-2'>
                                                <h4 className='text-GebetaMain font-semibold'>{installment.status}</h4>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                {installment.method === 'CHAPA' ? <img src={chapa} alt="chapa logo" className='bg-[#202022] text-[#202022] w-5 h-5'/> : ''}
                                                <h4 className='text-green-500 font-semibold'>{installment.method}</h4>
                                                <span className='bg-green-700 w-1 h-4'></span>
                                                <h4 className='text-sm font-semibold text-GebetaMain'>{installment.amount} ETB</h4>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        ))}
                        <div className='flex justify-between'>
                            <button
                                onClick={() => setCurrentPage((page) => page - 1)}
                                disabled={currentPage === 1 || data.billing.length === 0}
                                className='bg-GebetaMain text-white px-4 py-2 rounded-md disabled:opacity-50'
                            >
                                Previous</button>
                            <button
                                onClick={() => setCurrentPage((page) => page + 1)}
                                disabled={currentPage === totalPages || data.billing.length === 0}
                                className='bg-GebetaMain text-white px-4 py-2 rounded-md disabled:opacity-50'
                            >Next</button>
                        </div>
                    </div>
                </>
                : (
                    <div className="flex flex-col justify-center text-center">
                        <img className="w-full h-[250px]" src={billing} alt="billing image"/>
                        <p>No Billing History</p>
                    </div>
                )}
        </div>
    )
}

const data = [
    {
        name: 'Business',
        calls: '110334',
        date: '11/02/21',
        startDate: '11/01/22',
        endDate: '11/05/22',
        price: '3400',
        status: true
    },
    {
        name: 'Premium',
        calls: '110334',
        date: '11/02/21',
        startDate: '11/01/22',
        endDate: '11/05/22',
        price: '3400',
        status: false
    },
]

export default BillingHistory