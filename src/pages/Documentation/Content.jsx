import React from "react";
import RequestSample from "./RequestSample";
import TableResponse from "./TableResponse";
import TableRequirement from "./TableRequirement";





const Content = ({object , current}) => {

    const returnContent = () => {
        if(current != "intro"){
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
                    <p className="mt-[1%]"> {object.restriction.header }</p>
                 
                    <div className="font-bold ml-[2%]">
                        <ul className="list-disc mt-[1%]">
                         
                            {
                                object.restriction.restrictions .map((n) => ( <li className="mb-2">{n}</li>))
                            }
                        </ul>
                    </div>
                    
        
                    <p className='mt-[2%]   font-bold text-xl text-[#A0AABA]'>{object.pricingHeader}</p>
                    <p className="mt-[1%]"> {object.pricingText} </p>
                    
                </div>
            ) 
        }else{
            return (<div className="min-h-screen">
                <div className="w-[90%] md:w-[80%] md:ml-[0%] ml-[3%]">
                    <p className="mt-[1%]">
                    GebetaMaps is a web-based mapping service that provides various APIs for your location-based needs. You can use GebetaMaps to access high-quality and up-to-date data for geocoding, routing, searching, matrix, and optimization. You can also use GebetaMaps to create and customize your own maps, layers, and styles. Whether you need to find a place, plan a trip, optimize a route, or analyze a location, GebetaMaps can help you with its powerful and easy-to-use features.
                    </p>

                    <p className="mt-[1%]">
                    To access GebetaMaps, you need to sign in with your email and password. If you don’t have an account, you can register for free and get a trial token. A token is a unique code that allows you to use the GebetaMaps APIs. You can manage your tokens and view your usage statistics on your dashboard. To use a token, you need to include it in your API requests as a parameter.
                    You will get a response in JSON format that contains the coordinates and other details of the address. You can use the response to display the location on a map or perform other operations. For more information on how to use the GebetaMaps APIs, you can check out the documentation on direction , matrix route optimizatin and other apis 
                    </p>


                </div>
               
            </div>)
        }
        
    }

    return (returnContent())
    
}

export default Content