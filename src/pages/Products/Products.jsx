import React from "react";
import displayImage from "./../../assets/img/display.png"

const OurProducts = () => {
    return (
            <div className="mt-[10%] relative flex flex-col md:mt-[8%] w-full  ">
                 <p className="mx-auto mb-[5%] text-[#A0AABA] text-3xl font-semibold sm:text-4xl" style={{fontFamily: "Zen Dots" }}>
                                Find Our Products
                </p>
                <div>
                    <div className="hidden md:flex flex-col md:flex-row  text-white w-full  justify-between items-center ">
                            <div className= "  md:ml-[10%] m:mr-[5%] ">
                                <p className="text-4xl text-[#A0AABA]" style={{fontFamily: "Zen Dots" }}>Direction </p>

                              
                                <p className="mt-[3%] text-[#A0AABA]">Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.</p>
                            </div>
                        
                            <img className="mt-[5%] md:mt-[0%] w-[50%] h-[50%] mr-[5%]" src={displayImage}/>
                        </div>


                        <div className=" md:hidden flex flex-col md:flex-row  text-white w-[100%]  justify-between items-center  space-x-5 ">
                            <div className= " w-[80%] mx-auto  ">
                             
                                <p className="text-4xl text-[#A0AABA]" style={{fontFamily: "Zen Dots" }}>Direction</p>
                                <p className="mt-[3%] text-[#A0AABA]">Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.</p>
                            </div>
                        
                            <img className=" mt-[2%] w-[90%] h-[90%] mr-[5%]" src={displayImage}/>
                        </div>
                </div>
                {/* second card */}



                <div className="mt-[5%]">
                    <div className="hidden md:flex flex-col md:flex-row  text-white w-full  justify-between items-center ">
                            <img className=" md:ml-[10%] m:mr-[5%] w-[50%] h-[50%]" src={displayImage}/>
                            <div className= "  md:ml-[10%] m:mr-[5%] ">
                        
                                <p className="text-4xl text-[#A0AABA]" style={{fontFamily: "Zen Dots" }}>Matrix</p>
                                <p className="mt-[3%] text-[#A0AABA]">Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.</p>
                            </div>
                        
                    
                        </div>


                        <div className=" md:hidden flex flex-col md:flex-row  text-white w-[100%]  justify-between items-center  space-x-5 ">
                            <div className= " w-[80%] mx-auto  ">
                              
                                <p className="text-4xl text-[#A0AABA]" style={{fontFamily: "Zen Dots" }}>Matrix</p>
                                <p className="mt-[3%] text-[#A0AABA]">Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.</p>
                            </div>
                        
                            <img className=" mt-[2%] w-[90%] h-[90%]" src={displayImage}/>
                        </div>
                </div>



                {/*third card  */}
                <div className="mt-[5%]">
                    <div className="hidden md:flex flex-col md:flex-row  text-white w-full  justify-between items-center ">
                            <div className= "  md:ml-[10%] m:mr-[5%] ">
                         
                                <p className="text-4xl text-[#A0AABA]" style={{fontFamily: "Zen Dots" }}>ONM</p>
                                <p className="mt-[3%] text-[#A0AABA]">Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.</p>
                            </div>
                        
                            <img className="mt-[5%] md:mt-[0%] w-[50%] h-[50%] mr-[5%]" src={displayImage}/>
                        </div>


                        <div className=" md:hidden flex flex-col md:flex-row  text-white w-[100%]  justify-between items-center  space-x-5 ">
                            <div className= " w-[80%] mx-auto  ">
                               
                                <p className="text-4xl text-[#A0AABA]" style={{fontFamily: "Zen Dots" }}>ONM</p>
                                <p className="mt-[3%] text-[#A0AABA]">Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.</p>
                            </div>
                        
                            <img className=" mt-[2%] w-[90%] h-[90%]" src={displayImage}/>
                        </div>
                </div>

                {/* fourth card */}
                <div className="mt-[5%]">
                    <div className="hidden md:flex flex-col md:flex-row  text-white w-full  justify-between items-center ">
                            <img className=" md:ml-[10%] m:mr-[5%] w-[50%] h-[50%]" src={displayImage}/>
                            <div className= "  md:ml-[10%] m:mr-[5%] ">
                        
                                <p className="text-4xl text-[#A0AABA]" style={{fontFamily: "Zen Dots" }}>TSS</p>
                                <p className="mt-[3%] text-[#A0AABA]">Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.</p>
                            </div>
                        
                    
                        </div>


                        <div className=" md:hidden flex flex-col md:flex-row  text-white w-[100%]  justify-between items-center  space-x-5 ">
                            <div className= " w-[80%] mx-auto  ">
                              
                                <p className="text-4xl text-[#A0AABA]" style={{fontFamily: "Zen Dots" }}>TSS</p>
                                <p className="mt-[3%] text-[#A0AABA]">Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.</p>
                            </div>
                        
                            <img className=" mt-[2%] w-[90%] h-[90%]" src={displayImage}/>
                        </div>
                </div>
                {/* geocoding */}
                <div className="mt-[5%]">
                    <div className="hidden md:flex flex-col md:flex-row  text-white w-full  justify-between items-center ">
                            <div className= "  md:ml-[10%] m:mr-[5%] ">
                         
                                <p className="text-4xl text-[#A0AABA]" style={{fontFamily: "Zen Dots" }}>Geocoding</p>
                                <p className="mt-[3%] text-[#A0AABA]">Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.</p>
                            </div>
                        
                            <img className="mt-[5%] md:mt-[0%] w-[50%] h-[50%] mr-[5%]" src={displayImage}/>
                        </div>


                        <div className=" md:hidden flex flex-col md:flex-row  text-white w-[100%]  justify-between items-center  space-x-5 ">
                            <div className= " w-[80%] mx-auto  ">
                               
                                <p className="text-4xl text-[#A0AABA]" style={{fontFamily: "Zen Dots" }}>Geocoding</p>
                                <p className="mt-[3%] text-[#A0AABA]">Use Mapbox APIs and SDKs, ready-made map styles, and live updating data to build customizable maps for web, mobile, automotive and AR.</p>
                            </div>
                        
                            <img className=" mt-[2%] w-[90%] h-[90%]" src={displayImage}/>
                        </div>
                </div>
            </div>
    )
}


export default OurProducts