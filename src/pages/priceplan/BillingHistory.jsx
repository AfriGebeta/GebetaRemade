import { useEffect, useState } from "react";
import { getAllBilling } from "../../redux/api/billingAPI";
import { useSelector } from "react-redux";
import { getCredit } from "../../redux/api/creditsApi";
import billing from '../../assets/img/billing.png'

function BillingHistory() {
    const user = useSelector(state => state.user)

    const [billingData, setBillingData] = useState([])

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year

        return `${month}/${day}/${year}`;
    }

    useEffect(() => {
        async function getBillingData() {
            const response = await getAllBilling(user.data.token)
            console.log(response)
            setBillingData(response)
        }

        getBillingData()
    }, [])

    console.log(billingData)

    return (
        <div className='bg-[#202022] text-[#ccc] p-4 rounded-lg min-h-[60vh]'>
            {billingData?.length > 0 ?
                <>
                    <h2 className='text-xl text-white font-semibold mb-4'>Billing History</h2>
                    <div className="space-y-4">
                        {billingData?.map((item, index) => (
                            <div key={index} className='flex flex-col gap-6 pb-4 border-b border-gray-700 last:border-b-0'>
                                <div className='flex justify-between items-center'>
                                    <h4 className='text-base text-white font-semibold'>Business Pac.</h4>
                                    <h5 className='text-[#ccc] text-xs font-medium'>{formatDate(item.created_at)}</h5>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='bg-green-700 w-1 h-4'></span>
                                    <h4 className='text-sm font-semibold text-GebetaMain'>{item.amount_due} ETB</h4>
                                </div>
                                <div className='flex justify-between text-sm'>
                                    <h4 className="font-semibold">Payment Status</h4>
                                    {item?.installments?.map((installment) => (
                                        <>
                                            <h4 className='text-green-500 font-semibold'>{installment.method}</h4>
                                            <h4 className='text-GebetaMain font-semibold'>{installment.status}</h4>
                                        </>
                                    ))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </>
                : (
                    <div className="flex flex-col justify-center text-center">
                        <img className="w-full h-[250px] text-GebetaMain" src={billing} alt="billing image"/>
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