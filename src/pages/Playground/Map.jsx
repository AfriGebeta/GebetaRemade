import React , {useState , useContext} from "react";
import { MapContainer, TileLayer, Marker, Popup , useMapEvents , Polyline } from 'react-leaflet';
import L from 'leaflet';
import redIcon from "./../../assets/img/red.png"
import greenIcon from "./../../assets/img/green.png"
import blackIcon from "./../../assets/img/black.png"
import 'leaflet/dist/leaflet.css';
import { PlayGroundContext } from "../../context/PlayGround";

const Map = ({selectedButton}) => {
        const playContext = useContext(PlayGroundContext); // Access the AuthContext

        const {waypoint , origin , destination , setOriginCoordinates , setDestinationCoordinates , setWayPointsCoordinates, coordinate} = playContext
       
        const position = [9.035961873355374,38.75238418579102]; // Initial map position

        function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }

        function MyComponent() {
            useMapEvents({
              click: (e) => {
                const { lat, lng } = e.latlng;
                // setMarkers([]);
                if(selectedButton == "start")
                    setOriginCoordinates({ lat, lng });
                if(selectedButton == "destination")
                    setDestinationCoordinates({ lat, lng });
                if(selectedButton == "waypoint"){
                
                    setWayPointsCoordinates({ lat, lng })
                }
                
                    
              },
            });
           
            return null;
           }
         
           console.log(coordinate)
        return (
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }} >
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {/* origin */}
             {origin.lat && origin.lng && (
                <Marker position={origin} icon={new L.Icon({ iconUrl: greenIcon, iconSize: [25, 25] })} />
            )} 
            {/* destionation */}
            {destination.lat && destination.lng && (
                <Marker position={destination} icon={new L.Icon({ iconUrl: redIcon, iconSize: [25, 25] })} />
            )}

            {/* waypoint */}
            {waypoint.map((marker, index) => (
               <Marker key={index} position={marker} icon={new L.Icon({ iconUrl: blackIcon , iconSize: [25, 25] })} />
           ))} 

            {
            coordinate.type == "direction" || coordinate.type == "tss" ? <Polyline positions={coordinate.coords} color="red" /> : ""
           }
         
           {
            coordinate.type == "onm"  ? coordinate.coords.map((pos)=> {return <Polyline positions={pos} color={getRandomColor()} />}) : ""
           }


            <MyComponent/>
        </MapContainer>
        );
};


export default Map