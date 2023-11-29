import React,{useEffect , useState} from "react";

import { useSelector, useDispatch } from "react-redux"
import ApiDetail from "../../component/Card/ApiDetail";
import Plans from "./Priceplan";
import { getUserUsage } from "../../redux/api/usageAPI";


function Priceplan() {
  const [metrics , setMetrics] = useState({})
  const user = useSelector((state) => state).user

  useEffect(()=>{
    getUserUsage(user.data.id).then((response)=>{
      if(response.error == null) setMetrics(response.data.data)
    })
  },[])

  return (
    <div className="flex flex-col min-h-screen bg-Dark">
 
    <div className="w-[80%] mx-auto text-[#ccc] text-child flex flex-col flex-grow">
      <div className=" justify-between items-center">
        <div className="mt-[20%] md:mt-[3%]">
            <ApiDetail metrics = {metrics} />
        </div>
      <p className="mt-[2%]">asdfjklasdfhjkasashf jhahsfjjhahsf hajfhaasjkfh hasfjklfhassfjkfh hjkasfhfjaasfh jha aj sfhaasjkfh lh jahlfjkfhdfj hjlaahffjaahfj haklajkldfflhk asdfjklasdfhjkasashf jhahsfjjhahsf hajfhaasjkfh hasfjklfhassfjkfh hjkasfhfjaasfh jha aj sfhaasjkfh lh jahlfjkfhdfj hjlaahffjaahfj haklajkldfflhk asdfjklasdfhjkasashf jhahsfjjhahsf hajfhaasjkfh hasfjklfhassfjkfh hjkasfhfjaasfh jha aj sfhaasjkfh lh jahlfjkfhdfj hjlaahffjaahfj haklajkldfflhk</p>
      
   
      
      <Plans/>
        
      </div>
    </div> 

    
  
  </div>

   
  );
}

export default Priceplan;
