import React ,{useEffect , useState  } from "react";
import { useSelector, useDispatch } from "react-redux"
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";
import PlayGroundHeader from "./PlayGroundHeader";
import MapView from "./MapView";


const PlayGround = () => {
    
    const [waypoint, setWayPoint] = useState([]);
    const [origin, setOrigin] = useState({ lat: null, lng: null });
    const [destination, setDestination] = useState({ lat: null, lng: null });


    const setOriginCoordinates = (coordinates) =>  setOrigin(coordinates);
    const setDestinationCoordinates = (coordinates) =>  setDestination(coordinates);
    const setWayPointsCoordinates = (coordinate) =>   (waypoint.length < 5) ? setWayPoint([...waypoint , coordinate]) : null;

    const clearWaypoints = () => setWayPoint([]);
    const clearDestination = () => setDestination({ lat: null, lng: null });
    const clearOrigin = () => setOrigin({ lat: null, lng: null });


    return (
        <div className="flex flex-col bg-white">
          <NavBar color={"white"} textColor={"black"}/>
          <PlayGroundHeader
            clearWaypoints={clearWaypoints}
            clearDestination={clearWaypoints}
            clearOrigin={clearOrigin}
          />
          <div className="w-[100%] mx-auto pt-4 lg:px-10 md:px-5 ">
                  <MapView
                    setOriginalCoord = {setOriginCoordinates}
                    setDestinationCoord = {setDestinationCoordinates}
                    setWayPointsCoord = {setWayPointsCoordinates}
                    waypoint = {waypoint}
                    origin={origin}
                    destination={destination}
                    clearWaypoints={clearWaypoints}
                    clearDestination={clearDestination}
                    clearOrigin={clearOrigin}
                  />
          </div>
          <Footer color={"white"} textColor={"black"}/>
        </div>
    );
};
















export default PlayGround


