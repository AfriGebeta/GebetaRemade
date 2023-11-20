import React from "react";
import RequestSample from "./RequestSample";
import TableResponse from "./TableResponse";
import TableRequirement from "./TableRequirement";



const Content = ({object}) => {

    return (
        <div className="w-[90%] md:w-[80%] md:ml-[0%] ml-[3%]">
            <p className="mt-[2%]">
                {object.introduction}
            </p>
            <p className='mt-[2%]   font-bold text-xl'>{object.usecase}</p>
            <p className="mt-[1%]">{object.useCaseText}</p>
            <div className="font-bold ml-[2%]">
                <ul className="list-disc mt-[1%]">
                 
                    {
                        object.useCaselist.map((n) => ( <li className="mb-2">{n}</li>))
                    }
                </ul>
            </div>

            <RequestSample curl= {object.requestText} js={[]} />
        
            <p className='mt-[2%]   font-bold text-xl text-[#A0AABA]'>Requirement parameter</p>
            <TableRequirement tabledata={object.requiredParameter} />
            <p className='mt-[2%]   font-bold text-xl text-[#A0AABA]'>Optional parameter</p>
            <TableRequirement tabledata={object.optionalParameter} />
            
            <p className='mt-[2%]   font-bold text-xl text-[#A0AABA] '>Directions API Responses</p>
            <TableResponse tabledata={object.responseTable} />

            <p className='mt-[2%]   font-bold text-xl text-[#A0AABA]'>{object.restrictionHeader}</p>
            <p className="mt-[1%]"> {object.restriction }</p>

            <p className='mt-[2%]   font-bold text-xl text-[#A0AABA]'>{object.pricingHeader}</p>
            <p className="mt-[1%]"> {object.pricingText} </p>
            
        </div>
    )
}

export default Content