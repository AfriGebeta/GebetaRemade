import React from "react";
import NavBar from "../../component/NavBar/NavBar";

import Contact from "./Contact";
import OurCustomers from "./OurCustomers";
import Testimonials from "./Testimonial";
import Solutions from "./Solutions";
import Footer from "../../component/Footer/Footer";
import Hero from "./Hero";


function Main(){
    return(
        <div className=" flex flex-col ">
            <NavBar  />   
            <div className='flex flex-col w-full items-center relative'>
                <Hero/>       
            </div> 
            <OurCustomers />
            <Solutions/>
            <Testimonials/>
            <Contact />    
            <Footer />      
        </div>  
    )
}

export default Main







