import React from "react";
import RequestSample from "./RequestSample";
import TableResponse from "./TableResponse";
import TableRequirement from "./TableRequirement";


const requiredParameter = [
    {
        name: "origin and destination",
        description: "origin and destnation are  semicolon-separated list of coordinates  {longitude , latitude}."
    },
    {
        name: "apikey",
        description: "you api key"
    }
]

const optionalParameter = [
    {
        name: "instruction",
        description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
    },
    {
        name: "waypoints",
        description: "an array of semicolon separated list of latitude and longitude to specify which places to visit along the way"
    }
]

const responseTable = [
    {   message : "ok",
        name: "200",
        description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
    },
    
    {   message : "NoRoute",
        name: "200",
        description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
    },

    {   message : "NoSegment",
        name: "200",
        description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
    },


    {   message : "Not Authorized - No Token",
        name: "401",
        description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
    },

    {   message : "Not Authorized - Invalid Tokenn",
        name: "401",
        description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
    },

    {   message : "InvalidInput",
    name: "422",
    description: "Whether to return SSML marked-up text for voice guidance along the route (true) or not (false, default). Must be used in conjunction with steps=true."
}   
]

const Content = ({object}) => {

    return (
        <>
             <p className="mt-[2%]">
                {object.introduction}

            </p>
          
           
            <p className='mt-[2%]   font-bold text-xl text-[#A0AABA]'>{object.usecase}</p>
           
            <p className="mt-[1%]">{object.useCaseText}</p>

            <div className="font-bold ml-[2%] text-[#A0AABA]">
                <ul className="list-disc mt-[1%]">

                    <li className="mb-2">Type and capabilities of different modes of transport</li>
                    {
                        object.useCaselist.map((n) => ( <li className="mb-2">{n}</li>))
                    }
                   
                </ul>
            </div>

             
         
            <RequestSample
              curl= {object.requestText}
              js={[]}
            />
        
            <p className='mt-[2%]   font-bold text-xl text-[#A0AABA]'>Requirement parameter</p>
            <TableRequirement tabledata={requiredParameter} />
            <p className='mt-[2%]   font-bold text-xl text-[#A0AABA]'>Optional parameter</p>
            <TableRequirement tabledata={optionalParameter} />
            
            <p className='mt-[2%]   font-bold text-xl text-[#A0AABA]'>Directions API Responses</p>
            <TableResponse tabledata={responseTable} />

            <p className='mt-[2%]   font-bold text-xl text-[#A0AABA]'>{object.restrictionHeader}</p>
            <p className="mt-[1%]"> {object.restriction }</p>

            <p className='mt-[2%]   font-bold text-xl text-[#A0AABA]'>{object.pricingHeader}</p>
            <p className="mt-[1%]"> {object.pricingText} </p>
            
            
            

        </>
    )
}

export default Content