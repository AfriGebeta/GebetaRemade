import React , {useState} from "react"
import Map from "./Map";
import SideBarForm from "./SideBarForm";
import { returnPlaygroundObject } from "../../data/playground";
import { useSelector, useDispatch } from "react-redux"

const MapView = (
    {
        setOriginalCoord,
        setDestinationCoord,
        setWayPointsCoord,
        waypoint,
        origin,
        destination,
        clearWaypoints,
        clearDestination,
        clearOrigin,
    }
) => {

  
    
    const [selectedButton, setSelectedButton] = useState("");
    const { playground } = useSelector((state) => state) 


    const setSelectedButtonFunction = (text) => {
        if(text == selectedButton)
            setSelectedButton("")
        else
            setSelectedButton(text)
            
    }
    
    
   

    return (
        <main className="md:flex  md:h-screen md:w-full"> {/* Set height to 100% */}
        <div className="md:flex flex-1 flex-grow-0 flex-basis-30  "  style={{ flexBasis: '20%' }}> {/* Set width to 30% on large screens */}
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
    
        <div className="bg-red-500 flex-1 flex-grow-0 flex-basis-70 h-screen mx-[2%] md:mx-[0%]"  style={{ flexBasis: '80%' }}> {/* Set height to 100% */}
            <Map 
                  setOriginCoordinates={setOriginalCoord}
                  setDestinationCoordinates={setDestinationCoord}
                  setWayPointsCoordinates ={setWayPointsCoord}
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