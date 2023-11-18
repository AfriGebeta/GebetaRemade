import React from "react";
import runningman from "./../../assets/img/RunningMan.png"

const Hero = () => {
    return (
        <>
            <img src={runningman} className=' mt-[15%] md:mt-[5%] md:ml-[12%] md:ml-[1%]' />
            <div className='' style={{position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)'}}>
                <p className='text-white mx-auto whitespace-pre-wrap  text-center text-5xl md:text-7xl  font-bold' 
                        style={{fontFamily: 'Trebuchet MS' }}>
                        <span className='text-GebetaMain'>GebetaMaps</span>{'\n'} 
                            Routing, Direction {'\n'}
                            and {'\n'}
                            Map API Service
                </p>

                <p  className='text-center mt-[10%] md:mt-[15%] text-[#A0AABA] md:text-2xl text-xl' style={{fontFamily: "Zen Dots" }}>LET US FIND YOUR WAY</p>  
                </div>

               <div class="inline-flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto   ">
                    <button class="rounded-full mt-[2%] md:mt-[0%] text-lg font-semibold px-6 py-3  mr-4  bg-GebetaMain text-white "> <span className="px-5">Get Started</span></button>
                    <button class="rounded-full  mt-[2%] md:mt-[0%]  text-lg font-semibold px-6 py-3  border border-white text-white "><span className="px-5">Read Docs</span></button>
                </div>
            </>
    )
}

export default Hero