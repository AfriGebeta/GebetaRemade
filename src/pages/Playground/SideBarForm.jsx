import React , {useState} from "react";
import RequestSample from "./RequestSample";
import ResponseSample from "./Responsesample";
import JsonViewer from "./JsonViewer";
import RadioInputGeocoding from "./RadioInputGeocoding";

const jsonData = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Cityville',
      zip: '12345',
    },
    hobbies: ['Reading', 'Coding', 'Hiking'],
  };





const aobject = {
    type : "geocoding",
    radioInput : <RadioInputGeocoding  />,
    requestSampleUrl : "https://api.mapbox.com/search/geocode/v6/forward?q={search_text}"
}

const object = {
    type : "direction", 
    requestSampleUrl : "https://api.mapbox.com/search/geocode/v6/forward?q={search_text}",
    optionalParameter : [
       { name : "instruction"},
       { name : "waypoints"},
       
    ]
}



const SideBarForm = ({
    clearWaypoints,
    clearDestination,
    clearOrigin,
    waypoint,
    origin,
    destination,
    setSelectedButtonFunction,
    selectedButton
}) => {
    const [selectedGeocoding , setSelectedGeocoding] = useState("forward")
    const [startWayPoint , setStartWayPoint] = useState(false)
    const [instruction , setInstruction] = useState(false)

    const  setOptionalParameter = (text) => {
       
        if(text == "instruction") setInstruction(!instruction)
        if(text == "waypoints") setStartWayPoint(!startWayPoint)
    }
    const setGeocoding = (text) => setSelectedGeocoding(text)
    
      return (
          <div className="  text-gray-600 w-full mr-[5%] overflow-auto  ">
              <div className="relative w-full">
                    {
                        object.type == "geocoding" ? React.cloneElement(object.radioInput, {
                        selectedGeocoding,
                        setGeocoding,
                        }) : ""
                    }
                    
                    {
                         object.type == "geocoding" ? 
                            (
                                selectedGeocoding == "forward" ? 
                                <div className="mt-[4%] flex flex-col">
                                <lable>search </lable>
                                <input
                                    type="text"
                                    placeholder="e.g bole"
                                    className="w-full  pr-1 text-gray-500 border rounded-md "
                                />  
                                </div>: ""
                            ) : ""
                    }



                    {/* direction */}
                    {
                        object.type == "direction" ? <div className="flex flex-col">
                        <button className={`w-full p-2.5  ${selectedButton == "start" ? "bg-GebetaMain" : "bg-gray-300"} outline-none mt-[1%]`} onClick={(e)=>{ e.preventDefault(); setSelectedButtonFunction("start")}}>origin</button>
                        {startWayPoint ? <button className={`w-full p-2.5  ${selectedButton == "waypoint" ? "bg-GebetaMain" : "bg-gray-300"} outline-none mt-[4%]`} onClick={(e)=>{e.preventDefault(); setSelectedButtonFunction("waypoint")}}>waypoins</button> : "" }
                        <button className={`w-full p-2.5  ${selectedButton == "destination" ? "bg-GebetaMain" : "bg-gray-300"} outline-none mt-[4%]`} onClick={(e)=>{e.preventDefault(); setSelectedButtonFunction("destination")}}>destination</button>
                        <button className={`w-full p-2.5   bg-GebetaMain outline-none mt-[4%]`} >calculate</button>
                    </div> : ""
                    }
                   


                    { object.type == "direction" ? <p className='mt-[2%] font-bold text-xl text-[#A0AABA] mt-[5%]'>Optional parameter</p> : "" }
                    {
                         object.type == "direction" ? 
                            (
                                
                                object.optionalParameter.map((n) => {
                                    return (
                                            <div className="flex space-x-2 ">
                                                {
                                                    n.name == "instruction" ?
                                                    <input type="radio" checked={instruction} onClick={(e)=>{setOptionalParameter(n.name)}} /> :
                                                    <input type="radio" checked={startWayPoint} onClick={(e)=>{setOptionalParameter(n.name)}} />
                                                }
                                                <p> {n.name}</p>
                                            </div>
                                    )
                                })
                            ) : ""
                    }

                  <RequestSample className=" mt-[1%]" curl= {object.requestSampleUrl} js={[]} />
                  <ResponseSample className=" mt-[2%]" component = {<JsonViewer data={jsonData} alwaysExpand = {true}  />} /> 
              </div>                   
          </div>
      )    
}

export default SideBarForm