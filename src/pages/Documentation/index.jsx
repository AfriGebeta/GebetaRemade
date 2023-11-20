import React ,{useEffect , useState} from "react";
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";
import Sidebar from "./Sidebar";
import DocumentationHeader from "./DocumentationHeader";
import Content from "./Content";




const ContentsObject = {
    introduction : "A route is a navigable path between a start location, or origin, and an end location, or destination. You can choose to get a route for different modes of transportation, such as walking, biking, or different types of vehicles. You can also request route details such as distance, estimated time to navigate the route, expected tolls, and step-by-step instructions to navigate the route.", 
    usecase : "Use Case of Direction API" , 
    useCaseText : "With the Routes API, you can get accurate routes and trip information using transport details, up-to-date traffic and road conditions, and route preferences:", 
    useCaselist : [
        "Which direction a vehicle is headed",
        "The side of the road for pick ups or drop offs",
        "Traffic conditions and road closures",
        "Safety concerns such as avoiding dangerous areas or providing safe pickup areas",
        "Balance latency, quality, and cost across your routing needs with optional features such as tolls and trip metadata such as time and distance, and fuel efficiency"
        
    ] , 
    requestText :  'curl https://mapapi.gebeta.app/api/route/direction/?origin={lat1},{lon1}&destination={lat2},{lat2}&apiKey={apiKey}', 
    restrictionHeader :"Directions API restrictions and limits" , 
    restriction : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs.", 
    pricingHeader : "Directions API pricing",
    pricingText : "The Routes API uses a pay-as-you-go pricing model. The Google Maps Platform APIs and SDKs are billed by SKU. Usage is tracked for each SKU, and any API or SDK may have more than one product SKU. Cost is calculated by SKU usage × Price per each use Use our Pricing and Usage calculator to estimate your usage cost per API or SDK. For qualifying Google Maps Platform SKUs, a $200 USD Google Maps Platform credit is available each month for each billing account. This credit is automatically applied1 to the qualifying SKUs"
}


const Documentation = () => {

    return (
      <div className="flex flex-col">
        <NavBar color={"white"} textColor={"black"}/>
        <DocumentationHeader />
        <div className="flex md:flex-row flex-col relative">
          <Sidebar />
          <div  className="w-[70%] md:w-[70%]  overflow-y-auto max-h-[calc] ml-[calc]" >
            <p className="md:mt-[2%] text-[#A0AABA] md:text-2xl text-xl" style={{ fontFamily: "Zen Dots" }}>
              Overview
            </p>
            <Content object={ContentsObject}/>
          </div>
        </div>
        <Footer color={"white"} textColor={"black"}/>
      </div>
    );
  };


export default Documentation


