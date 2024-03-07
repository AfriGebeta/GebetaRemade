import React from "react";
import displayImage from "./../../assets/img/display.png";
import onmVid from "./../../assets/vid/onm.mp4";
import geoVid from "./../../assets/vid/gc.mp4";
import routeVid from "./../../assets/vid/ro.mp4";
import onmgif from "./../../assets/vid/onm.gif";
import geogif from "./../../assets/vid/gc.gif";
import routegif from "./../../assets/vid/ro.gif";
import geoPhoto from "./../../assets/vid/videophoto/geocoding.png"
import onmPhoto from "./../../assets/vid/videophoto/onm.png"
import roPhoto from "./../../assets/vid/videophoto/ro.png"



import { useEffect, useRef } from "react";
// import ReactPlayer from "react-player";

// const VideoPlayer = ({ className, url , thumbnail }) => {
//   return (
//     <ReactPlayer
//       className={className}
//       muted={true}
//       playing={true}
//       url={url}
//       loop={true}
//       playsinline={true}
//       light={thumbnail}
//       config={{
//         file: {
//           attributes: {
//             autoPlay: true,
//             muted: true,
//           },
//         },
//       }}
//     />
//   )
// }

const Solutions = () => {
  return (
    <div className="mt-[10%] relative flex flex-col md:mt-[10%] w-full  ">
      <p
        className="mx-auto mb-[5%] text-gray-200 text-center text-3xl font-semibold sm:text-4xl"
        style={{ fontFamily: "Zen Dots" }}
      >
        Find your solution
      </p>
      <div>
        <div className="hidden md:flex flex-col md:flex-row  text-white w-full  justify-between items-center ">
          <div className="  md:ml-[10%] md:mr-[5%] flex-1 ">
            <p
              className="text-5xl text-[#A0AABA]"
              style={{ fontFamily: "Zen Dots" }}
            >
              Provide local information{" "}
            </p>
            <p className="mt-[3%] text-[#A0AABA]">
              Utilize the capabilities of the gebeta maps API to seamlessly
              access and integrate comprehensive local data. Whether you're
              developing web or mobile applications, Gebeta maps API empowers
              you to incorporate and customize relevant information for a rich
              and dynamic user experience.
            </p>
          </div>

          {/* <div className=" mt-[5%] md:mt-[0%] mr-[5%] rounded-lg overflow-hidden"> */}
         
            {/* <VideoPlayer className="opacity-85 hover:opacity-95" url={geoVid} thumbnail={geoPhoto} /> */}
           <img src={geogif} className="opacity-85 hover:opacity-95  w-[30%]  m-[5%]  mt-[5%] rounded-lg overflow-hidden"/>
          {/* </div> */}
        </div>

        <div className=" md:hidden flex flex-col md:flex-row  text-white w-[100%]  justify-between items-center  ">
          <div className=" w-[80%] mx-auto text-center ">
            <p
              className="text-2xl text-gray-300 text-center"
              style={{ fontFamily: "Zen Dots" }}
            >
              Provide local information{" "}
            </p>
            <p className="mt-[3%] text-[#A0AABA]">
              Utilize the capabilities of the gebeta maps API to seamlessly
              access and integrate comprehensive local data. Whether you're
              developing web or mobile applications, Gebeta maps API empowers
              you to incorporate and customize relevant information for a rich
              and dynamic user experience.
            </p>
          </div>

          {/* <div className=" w-[95%] h-[50%] mt-[5%] rounded-lg overflow-hidden"> */}
           
            {/* <VideoPlayer className="opacity-85 hover:opacity-95" url={geoVid} thumbnail={geoPhoto} /> */}
            <img src={geogif} className="opacity-85 hover:opacity-95 w-[95%] mt-[5%]  rounded-lg overflow-hidden"/>
          {/* </div> */}
        </div>
      </div>
      {/* second card */}

      <div className="mt-[5%]">
        <div className="hidden md:flex flex-col md:flex-row  text-white w-full  justify-between items-center ">
          {/* <div className="md:ml-[10%] mt-[5%] md:mt-[0%] mr-[5%] rounded-lg overflow-hidden"> */}
          
             {/* <VideoPlayer className="opacity-85 hover:opacity-95" url={routeVid} thumbnail={roPhoto} /> */}
             <img src={routegif} className="opacity-85 hover:opacity-95  w-[30%]  m-[5%]  mt-[5%] rounded-lg overflow-hidden"/>
          {/* </div> */}

          <div className="  md:ml-[10%] md:mr-[5%] flex-1">
            <p
              className="text-5xl text-[#A0AABA]"
              style={{ fontFamily: "Zen Dots" }}
            >
              Offer efficient routes
            </p>
            <p className="mt-[3%] text-[#A0AABA]">
              Leverage the efficiency of GebetaMaps API to provide optimal and
              streamlined routes. Whether it's for navigation in web or mobile
              applications, GebetaMaps API ensures the delivery of effective
              route information, enhancing user experience by offering the most
              efficient paths to destinations.
            </p>
          </div>
        </div>

        <div className=" md:hidden flex flex-col md:flex-row  text-white w-[100%]  justify-between items-center   ">
          <div className=" w-[80%] mx-auto  ">
            <p
              className="text-3xl text-gray-300 text-center"
              style={{ fontFamily: "Zen Dots" }}
            >
              Offer efficient routes
            </p>
            <p className="mt-[3%] text-[#A0AABA] text-center">
              Use Mapbox APIs and SDKs, ready-made map styles, and live updating
              data to build customizable maps for web, mobile, automotive and
              AR.
            </p>
          </div>

          {/* <div className=" w-[95%] h-[50%] mt-[5%] rounded-lg overflow-hidden"> */}
          
            {/* <VideoPlayer className="opacity-85 hover:opacity-95" url={routeVid} thumbnail={roPhoto} /> */}
            <img src={routegif} className="opacity-85 hover:opacity-95 w-[95%] mt-[5%]  rounded-lg overflow-hidden"/>
            
          {/* </div> */}
        </div>
      </div>

      {/*third card  */}
      <div className="mt-[5%]">
        <div className="hidden md:flex flex-col md:flex-row  text-white w-full  justify-between items-center ">
          <div className="  md:ml-[10%] md:mr-[5%] flex-1">
            <p
              className="text-5xl text-[#A0AABA]"
              style={{ fontFamily: "Zen Dots" }}
            >
              Optimize your business operations
            </p>
            <p className="mt-[3%] text-[#A0AABA]">
              With our "One to Many" service, optimize your delivery operations
              seamlessly. Powered by GebetaMaps API, this solution empowers you
              to precisely calculate distances from one central point to
              multiple destinations (n places), providing a strategic advantage
              for enhancing delivery routes, streamlining logistics planning,
              and refining location-based services. Elevate your operational
              efficiency and unlock new possibilities for your business with the
              streamlined capabilities of our "One to Many" service.
            </p>
          </div>
          {/* <div className=" mt-[5%] md:mt-[0%] mr-[5%] rounded-lg overflow-hidden"> */}
       
            {/* <VideoPlayer className="opacity-85 hover:opacity-95" url={onmVid} thumbnail={onmPhoto}/> */}
            <img src={onmgif} className="opacity-85 hover:opacity-95  w-[30%]  m-[5%]  mt-[5%] rounded-lg overflow-hidden"/>
            
          {/* </div> */}
        </div>

        <div className=" md:hidden flex flex-col md:flex-row  text-white w-[100%]  justify-between items-center   ">
          <div className=" w-[80%] mx-auto  ">
            <p
              className="text-3xl text-gray-300 text-center"
              style={{ fontFamily: "Zen Dots" }}
            >
              Improve addresses
            </p>
            <p className="mt-[3%] text-[#A0AABA] text-center">
              With our "One to Many" service, optimize your delivery operations
              seamlessly. Powered by GebetaMaps API, this solution empowers you
              to precisely calculate distances from one central point to
              multiple destinations (n places), providing a strategic advantage
              for enhancing delivery routes, streamlining logistics planning,
              and refining location-based services. Elevate your operational
              efficiency and unlock new possibilities for your business with the
              streamlined capabilities of our "One to Many" service.
            </p>
          </div>
          {/* <div className=" w-[95%] h-[50%] mt-[5%] rounded-lg overflow-hidden"> */}
            
            {/* <VideoPlayer className="opacity-85 hover:opacity-95" url={onmVid} thumbnail={onmPhoto} /> */}
            <img src={onmgif} className="opacity-85 hover:opacity-95 w-[95%] mt-[5%]  rounded-lg overflow-hidden "/>
              {" "}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Solutions;