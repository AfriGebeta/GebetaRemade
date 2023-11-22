import React , {useState} from "react"
import Map from "./Map";
import SideBarForm from "./SideBarForm";
import { returnPlaygroundObject } from "../../data/playground";
import { useSelector, useDispatch } from "react-redux"

const MapView = () => {
    const [waypoint, setWayPoint] = useState([]);
    const [origin, setOrigin] = useState({ lat: null, lng: null });
    const [destination, setDestination] = useState({ lat: null, lng: null });
    const [selectedButton, setSelectedButton] = useState("");
    const { playground } = useSelector((state) => state) 


    const setSelectedButtonFunction = (text) => {
        if(text == selectedButton)
            setSelectedButton("")
        else
            setSelectedButton(text)
            
    }
    const setOriginCoordinates = (coordinates) =>  setOrigin(coordinates);
    const setDestinationCoordinates = (coordinates) =>  setDestination(coordinates);
    const setWayPointsCoordinates = (coordinate) =>   (waypoint.length < 5) ? setWayPoint([...waypoint , coordinate]) : "";
    
    // clearing 
    const clearWaypoints = () => setWayPoint([]);
    const clearDestination = () => setDestination({});
    const clearOrigin = () => setOrigin({});

    return (
        <main className="flex  h-screen w-full"> {/* Set height to 100% */}
        <div className="md:flex flex-1 flex-grow-0 flex-basis-30 hidden "  style={{ flexBasis: '20%' }}> {/* Set width to 30% on large screens */}
        <SideBarForm  
              clearWaypoints={clearWaypoints}
              clearDestination={clearDestination}
              clearOrigin={clearOrigin}
              waypoint={waypoint}
              origin={origin}
              destination={destination}
              setSelectedButtonFunction={setSelectedButtonFunction}
              selectedButton={selectedButton}
              object={returnPlaygroundObject(playground.current)}
        />
        </div>
        <div className="bg-red-500 flex-1 flex-grow-0 flex-basis-70 h-screen"  style={{ flexBasis: '80%' }}> {/* Set height to 100% */}
            <Map 
                  setOriginCoordinates={setOriginCoordinates}
                  setDestinationCoordinates={setDestinationCoordinates}
                  setWayPointsCoordinates ={setWayPointsCoordinates}
                  selectedButton = {selectedButton}
                  setSelectedButtonFunction = {setSelectedButtonFunction}
                  origin = {origin}
                  destination = {destination}
                  waypoint = {waypoint}
            
            />
        </div>
     </main>
     
    )
}

export default MapView