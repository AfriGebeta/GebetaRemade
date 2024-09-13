function BillingHistory() {
    const formatter = new Intl.NumberFormat('en-US');

    return (
        <div className='bg-[#202022] text-[#ccc] p-4 rounded-lg'>
            <h2 className='text-xl text-white font-semibold mb-4'>Billing History</h2>
            <div className="space-y-4">
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2 pb-4 border-b border-gray-700 last:border-b-0'>
                        <div className='flex justify-between items-center'>
                            <h4 className='text-base text-white font-semibold'>{item.name} Pac.</h4>
                            <h5 className='text-[#ccc] text-xs font-medium'>{item.date}</h5>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='bg-green-700 w-1 h-4'></span>
                            <h4 className='text-sm font-semibold text-GebetaMain'>ETB {item.price}</h4>
                        </div>
                        <p className="pb-1 text-sm">{item.startDate} - {item.endDate}</p>
                        <div>
                            <p className='font-semibold text-md'>{item.name} package</p>
                            <p className="mt-0">{formatter.format(item.calls)} calls</p>
                        </div>
                        <div className='flex justify-between text-sm'>
                            <h4 className="font-semibold">Payment Status</h4>
                            {item.status ?
                                <h4 className='text-green-500 font-semibold'>Completed</h4> :
                                <h4 className='text-GebetaMain font-semibold'>Pending</h4>
                            }
                        </div>
                    </div>
                ))}
            </div>
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