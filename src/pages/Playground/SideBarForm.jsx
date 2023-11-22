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




const SideBarForm = ({
    clearWaypoints,
    clearDestination,
    clearOrigin,
    waypoint,
    origin,
    destination,
    setSelectedButtonFunction,
    selectedButton,
    object
}) => {
    // state variables
    const [selectedGeocoding , setSelectedGeocoding] = useState("forward")
    const [startWayPoint , setStartWayPoint] = useState(false)
    const [instruction , setInstruction] = useState(false)
    const [apikey , setApKey] = useState("")
    // helper function
    const setGeocoding = (text) => setSelectedGeocoding(text)
    const  setOptionalParameter = (text) => {
        if(text == "instruction") setInstruction(!instruction)
        if(text == "waypoints") setStartWayPoint(!startWayPoint)
    }

    const waypointsString = waypoint.length > 0 ? `&${object.type == "direction" ? "waypoints" : "coordinates"}=[${waypoint.map(point => `{${point.lat},${point.lng}}`).join(",")}]` : "";
    
    const urlMap = {
        direction :`https://mapapi.gebeta.app/api/route/direction/?origin=${origin.lat == null ? "{}" : `{${origin.lat},${origin.lng}}`} &destination=${destination.lat == null ? "{}" : `{${destination.lat},${destination.lng}}`}${waypointsString}&apiKey=${apikey}`,
        geocoding : `https://mapapi.gebeta.app/api/route/direction/?origin=${origin}&destination=${destination}&apiKey=${apikey}`,
        tss : `https://mapapi.gebeta.app/api/route/direction/?origin=${origin}&destination=${destination}&apiKey=${apikey}`,
        onm : `https://mapapi.gebeta.app/api/route/direction/?origin=${origin}&destination=${destination}&apiKey=${apikey}`,
        matrix : `https://mapapi.gebeta.app/api/route/direction/?origin=${origin}&destination=${destination}&apiKey=${apikey}`,
    }
  

    const renderButton = (type, request) => {
        switch (type) {
            case "start":
                return (
                    <button
                        className={`w-full p-2.5 ${selectedButton === "start" ? "bg-GebetaMain" : "bg-gray-300"} outline-none mt-[1%]`}
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedButtonFunction("start");
                        }}
                    >
                        origin
                    </button>
                );
            case "waypoint":
                if (request !== "geocoding")
                    return (
                        <button
                            className={`w-full p-2.5 ${selectedButton === "waypoint" ? "bg-GebetaMain" : "bg-gray-300"} outline-none mt-[4%]`}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedButtonFunction("waypoint");
                            }}
                        >
                            waypoints
                        </button>
                    );
                else return null;
            case "destination":
                return (
                    <button
                        className={`w-full p-2.5 ${selectedButton === "destination" ? "bg-GebetaMain" : "bg-gray-300"} outline-none mt-[4%]`}
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedButtonFunction("destination");
                        }}
                    >
                        destination
                    </button>
                );
            default:
                return null;
        }
    };

    // based on the 
    const calculate = () => {

    }
 
    
    return (
        <div className="  text-gray-600 w-full mr-[5%] overflow-auto  ">
            <div className="relative w-full">
                {object.type === "geocoding" ? React.cloneElement(object.radioInput, { selectedGeocoding, setGeocoding }) : ""}            
                    {
                         object.type == "geocoding" ? 
                            (
                                selectedGeocoding == "forward" ? 
                                <div className="mt-[4%] flex flex-col">
                                <lable>search </lable>
                                <input
                                    type="text"
                                    placeholder="e.g bole"
                                    className="w-full  pr-1 text-gray-500 border rounde d-md "
                                />  
                                </div>: ""
                            ) : ""
                }

                {/* Render buttons based on type */}
                {(object.type === "direction" || object.type === "onm") ? renderButton("start", object.type) : null}
                {object.type === "direction" ? (startWayPoint ? renderButton("waypoint", object.type) : null) : renderButton("waypoint", object.type)}
                {object.type === "direction" ? renderButton("destination", object.type) : null}
                {object.type === "geocoding" ? null : <button className={`w-full p-2.5 bg-GebetaMain outline-none mt-[4%]`} onClick={(e)=> {calculate()}}>calculate</button>}
                {object.type === "direction" ? <p className='mt-[2%] font-bold text-xl text-[#A0AABA] mt-[5%]'>Optional parameter</p> : ""}
                {
                    object.optionalParameter.map((n) => (
                        <div className="flex space-x-2" key={n.name}>
                            {/* Render optional parameter radio input */}
                            {n.name === "instruction" ? (
                                <input type="radio" checked={instruction} onClick={(e) => { setOptionalParameter(n.name) }} />
                            ) : (
                                <input type="radio" checked={startWayPoint} onClick={(e) => { setOptionalParameter(n.name) }} />
                            )}
                            <p>{n.name}</p>
                        </div>
                    ))
                }

                  <RequestSample className=" mt-[1%]" curl= {urlMap[object.type]} js={[]} />
                  <ResponseSample className=" mt-[2%]" component = {<JsonViewer data={jsonData} alwaysExpand = {true}  />} /> 
              </div>                   
          </div>
      )    
}

export default SideBarForm

  
