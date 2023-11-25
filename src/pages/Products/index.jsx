import React from "react";
import OurProducts from "./Products";
import Hero from "./Hero";

function Products(){
    return(
        <div className=" flex flex-col bg-Dark ">
            <div className='flex flex-col w-full items-center relative'>
                <Hero/>       
            </div> 
            <OurProducts/>  
        </div>  
    )
}

export default Products







