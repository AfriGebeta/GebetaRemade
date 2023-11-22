import React , {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup , useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import redIcon from "./../../assets/img/red.png"
import greenIcon from "./../../assets/img/green.png"
import blackIcon from "./../../assets/img/black.png"
import 'leaflet/dist/leaflet.css';


const Map = ({
        setOriginCoordinates,
        setDestinationCoordinates,
        setWayPointsCoordinates,
        selectedButton,
        setSelectedButtonFunction,
        origin,
        destination,
        waypoint
    }) => {
        
        const position = [51.505, -0.09]; // Initial map position

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

            <MyComponent/>
        </MapContainer>
        );
};


export default Map