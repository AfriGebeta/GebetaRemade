import React , {useState} from "react";
import RequestSample from "./RequestSample";
import { useSelector  } from "react-redux";
import ResponseSample from "./Responsesample";
import JsonViewer from "./JsonViewer";





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
    const [searchText , setSearchText] = useState("")
    const [apiResponse , setApiResponse] = useState({})

    //global state
    const { token } = useSelector((state) => state)  
    
    const waypointsString = waypoint.length > 0 ? `&${object.type == "direction" ? "waypoints" : "json"}=[${waypoint.map(point => `{${point.lat},${point.lng}}`).join(",")}]` : "";
   

    //url function
    const urlMap = {
        geocoding : selectedGeocoding == "forward" ? `http://localhost:8080/api/v1/route/geocoding?name=${searchText}&apiKey=${token.token}` :
        `http://localhost:8080/api/v1/route/revgeocoding?lat=${origin.lat == null ? "" : origin.lat}&lon=${origin.lng == null ? "" : origin.lng}&apiKey=${token.token}`,
        
        direction :`https://mapapi.gebeta.app/api/route/direction/?origin=${origin.lat == null ? "{}" : `{${origin.lat},${origin.lng}}`}&destination=${destination.lat == null ? "{}" : `{${destination.lat},${destination.lng}}`}${waypointsString}&apiKey=${token.token}`,
        tss : `https://mapapi.gebeta.app/api/route/tss/?${waypointsString}&apiKey=${token.token}`,
        onm : `https://mapapi.gebeta.app/api/route/onm/?${waypointsString}&origin=${origin.lat == null ? "{}" : `{${origin.lat},${origin.lng}}`}&apiKey=`,
        matrix : `https://mapapi.gebeta.app/api/route/matrix/?${waypointsString}&apiKey=${token.token}`,
    }

    // helper function
    const setGeocoding = (text) => setSelectedGeocoding(text)
    const  setOptionalParameter = (text) => {
        if(text == "instruction") setInstruction(!instruction)
        if(text == "waypoints") setStartWayPoint(!startWayPoint)
    }

    
    
  
    

    const renderButton = (type, request) => {
        switch (type) {
            case "start":
                return (
                    <button
                        className={`  mx-[2%] md:mx-[0%] w-[96%] p-2.5 ${selectedButton === "start" ? "bg-GebetaMain" : "bg-gray-300"} outline-none mt-[1%]`}
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
                            className={`  mx-[2%] md:mx-[0%] w-[96%] p-2.5 ${selectedButton === "waypoint" ? "bg-GebetaMain" : "bg-gray-300"} outline-none mt-[4%]`}
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
                        className={`  mx-[2%] md:mx-[0%] w-[96%] p-2.5 ${selectedButton === "destination" ? "bg-GebetaMain" : "bg-gray-300"} outline-none mt-[4%]`}
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
    // 
    // based on the 
    const calculate = () => {
        // // fetch function 
        fetch(urlMap[object.type])
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            setApiResponse(data)
        });
    }
 
    
    return (
        <div className="  text-gray-600 w-full lg:mr-[5%] overflow-auto  ">
            <div className="relative w-full">
                {object.type === "geocoding" ? React.cloneElement(object.radioInput, { setSelectedButtonFunction, selectedGeocoding, setGeocoding }) : ""}            
                    {
                         object.type == "geocoding" ? 
                            (
                                selectedGeocoding == "forward" ? 
                                <div className="mt-[4%] flex flex-col   mx-[2%] md:mx-[0%]">
                                <lable>search </lable>
                                <input
                                    type="text"
                                    placeholder="e.g bole"
                                    className="w-full  pr-1 text-gray-500 border rounde d-md "
                                    onChange={(e)=>{setSearchText(e.target.value)}}
                                />  
                                </div>: ""
                            ) : ""
                }

                {/* Render buttons based on type */}
                {(object.type === "direction" || object.type === "onm") ? renderButton("start", object.type) : null}
                {object.type === "direction" ? (startWayPoint ? renderButton("waypoint", object.type) : null) : renderButton("waypoint", object.type)}
                {object.type === "direction" ? renderButton("destination", object.type) : null}
                <button className={`  mx-[2%] md:mx-[0%] w-[96%] p-2.5 bg-GebetaMain outline-none mt-[4%]`} onClick={(e)=> {calculate()}}> {object.type === "geocoding" ? "search" : "calculate"}</button>
                {object.type === "direction" ? <p className='mt-[2%] font-bold text-xl text-[#A0AABA] mt-[5%] mx-[2%] md:mx-[0%]'>Optional parameter</p> : ""}
                
                
                              
                
                {
                    object.optionalParameter.map((n) => (
                        <div className="flex space-x-2 " key={n.name}>
                           
                            {/* Render optional parameter radio input */}
                            {n.name === "instruction" ? (
                                <input type="radio" className="mx-[2%] md:mx-[0%]" checked={instruction} onClick={(e) => { setOptionalParameter(n.name) }} />
                            ) : (
                                <input type="radio" className="mx-[2%] md:mx-[0%]" checked={startWayPoint} onClick={(e) => { 
                                    
                                 
                                    setOptionalParameter(n.name) }} />
                            )}
                            <p>{n.name}</p>
                        </div>
                    ))
                }

                  <RequestSample className=" mt-[1%]   " curl= {urlMap[object.type]} js={[]} />
                  <ResponseSample className=" mt-[2%]   " component = {<JsonViewer data={apiResponse} alwaysExpand = {true}  />} /> 
              </div>                   
          </div>
      )    
}

export default SideBarForm

  
