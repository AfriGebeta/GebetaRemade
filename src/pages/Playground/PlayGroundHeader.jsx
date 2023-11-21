import React from "react";


const PlayGroundHeader = () => {
    return (
        <div className="w-full mx-auto  pt-4 md:px-8">
            <div className="">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-2xl font-bold">
                        Playground | GeoCoding
                    </h3>                
                </div>
                <div className="w-full mt-[1%]">
                    <div className="flex  text-gray-400 border ">   
                        <input 
                            type="text"
                            placeholder="token"
                            id="username"

                            className="w-full p-2.5  bg-gray-300 outline-none"
                        />

                        <div className="px-6 py-2.5 text-white  border-r bg-GebetaMain">
                            add
                        </div>                
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default PlayGroundHeader