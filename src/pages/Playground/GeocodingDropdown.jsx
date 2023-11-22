
import React , {useState} from "react";
import { useSelector, useDispatch } from "react-redux"
import { changeTopicPlayGround } from "../../redux/reducers/playgroundSlice";


function GeocodingDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const { playground } = useSelector((state) => state) 
    const toggleOpen = () => setIsOpen(!isOpen);
    const dispatch = useDispatch()
  
    return (
        <div className="inline-flex bg-white border rounded-md ">
            <button
                onClick={toggleOpen}
                className="px-6 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md flex justify-between items-center space-x-3"
            >
                <p className="mr-[3]">{playground.current}</p> 
                
                 <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"   
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                      />
                  </svg>
            </button>
            {isOpen && (
                <div className="absolute left-0 z-10 w-56 mt-4  bg-white border border-gray-100 rounded-md shadow-lg">
                   <div className="p-2">
                       <a
                            onClick={()=>{ dispatch(changeTopicPlayGround("geocoding")) }}
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                       >
                           Geocoding
                       </a>
                       <a
                           onClick={()=>{ dispatch(changeTopicPlayGround("direction")) }}
                           className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                       >
                          Direction
                       </a>
                       <a
                          onClick={()=>{ dispatch(changeTopicPlayGround("matrix")) }}
                           className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                       >
                           Matrix
                       </a>
                       <a
                          onClick={()=>{ dispatch(changeTopicPlayGround("onm")) }}
                           className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                       >
                           ONM
                       </a>
                       <a
                         onClick={()=>{ dispatch(changeTopicPlayGround("tss")) }}
                           className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                       >
                           TSS
                       </a>
                   </div>
                </div>
            )}
        </div>
    );
 }

 export default GeocodingDropdown


