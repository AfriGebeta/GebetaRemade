import React, { useRef, useState }  from "react";
import Ourpricing from "./Ourpricing";
import Hero from "./Hero";




const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-white">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}



    const faqsList = [
        
        {
            q: "How does the pricing work?",
            a: "The pricing structure varies depending on the nature of each request. For directional queries, charges are based on the number of requests made, while for matrix, TSS, and ONM requests, the billing is determined by the quantity of GPS coordinates transmitted. For example, a matrix request involving 10 coordinates is considered as 10 individual sending requests. Geocoding utilizes a session-based counter, and there is no charge for approximately 5 seconds if the last and new requests are similar."
        },
        {
            q: "What happens if I don't pay on time?",
            a: "In the event of delayed payment, a grace period of 7 days will be provided after one month from your last payment. Failure to settle within this timeframe will result in a temporary suspension of system access until payment is received."
        },
        {
            q: "How does payment scale for a larger number of requests?",
            a: "The payment scale is inversely proportional to your usage. As the volume of requests decreases, the cost per request diminishes. For instance, if you utilize 1,000,000 requests, the rate is $2 per 1,000 requests. However, for a million requests, the price is halved, amounting to $1 per 1,000 requests."
        },
       
    ]
  





function Pricing(){
    return(
        <div className=" flex flex-col bg-Dark ">
            <div className='flex flex-col w-full items-center relative'>
                <Hero/>       
            </div> 
            <Ourpricing/>  
            <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">


            {/* className="mx-auto mb-[2%] text-[#A0AABA] text-3xl font-semibold sm:text-4xl"  */}
                <h1 className="text-3xl text-white font-semibold mt-[5%]" style={{fontFamily: "Zen Dots" }}>
                    Frequently Asked Questions
                </h1>
                <p className="text-white max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto ">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
        </div>  
    )
}

export default Pricing







