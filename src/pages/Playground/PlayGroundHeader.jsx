import React , {useState} from "react";
import GeocodingDropdown from "./GeocodingDropdown";
import { useSelector , useDispatch } from "react-redux";
import { changeToken } from "../../redux/reducers/tokenSlice";

const PlayGroundHeader = () => {

    const [search , setSearch] = useState("")
    const { token } = useSelector((state) => state) 
 
    const dispatch = useDispatch()
    return (
        <div className="w-full mx-auto  pt-4 md:px-8">
            <div className="">
                <div className="max-w-lg ">
                        <h3 className="text-gray-800 text-2xl font-bold relative mx-[2%] md:mx-[0%]">
                            Playground | <GeocodingDropdown/>
                        </h3>                
                </div>
                <div className="md:w-full mt-[1%]">
                    <div className="flex  text-gray-400 border mx-[2%] md:mx-[0%]">   
                        <input 
                            type="text"
                            placeholder={token.token}
                            id="username"
                            onChange={(e) => {setSearch(e.target.value)}}
                            className="w-full p-2.5  bg-gray-300 outline-none"
                        />

                        <button
                            className="px-6 py-2.5 text-white border-r bg-GebetaMain"
                            onClick={() => { dispatch(changeToken(search)) }}
                        >
                            add
                        </button>               
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default PlayGroundHeader