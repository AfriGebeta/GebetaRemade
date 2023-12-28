import React ,{useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"
import ApiDetail from "../../component/Card/ApiDetail";
import Cards from "./Card";
import ApiToken from "./APIToken";
import { getUserUsage } from "../../redux/api/usageAPI";



function Dashboard() {
  const [metrics , setMetrics] = useState({})
  const user = useSelector((state) => state).user

  useEffect(()=>{
    getUserUsage(user.data.id).then((response)=>{
      if(response.error == null) setMetrics(response.data.data)
    })
  },[metrics])


  return (
    <div className="bg-Dark flex flex-col min-h-screen">

   <div className="w-[95%] mx-auto text-[#ccc] text-child flex flex-col flex-grow">
      <div className=" justify-between items-center">
        <div className="mt-[4%]">
            <ApiDetail metrics = {metrics} />
        </div>
        <Cards metrics = {metrics}/>
        <ApiToken />
      </div>
    </div>

  </div>

   
  );
}

export default Dashboard;


// zayrides token
//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55bmFtZSI6InpheXJpZGUiLCJpZCI6IjM1NTY1Mjk3LTZjZGUtNDVmNy1hYjllLTAwMjU1Y2MxZGVlZSIsInVzZXJuYW1lIjoiemF5cmlkZSJ9.s3mr--J2KM72MWedho9Vo5qOZn-zSk3IR1ZXZ73xppw