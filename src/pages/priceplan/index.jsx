import React from "react";
import './custom.css'
import ApiDetail from "../../component/Card/ApiDetail";
import Cards from "./Card";
import DashBoardNav from "../../component/NavBar/DashBoardNav";
import Footer from "../../component/Footer/Footer";
import Plans from "./Priceplan";



function Priceplan() {
  let userData = { username : "asdf"}
  return (
    <div className="flex flex-col min-h-screen">
   <DashBoardNav color={"black"} textColor={"[#ccc]"}/>
    <div className="w-[80%] mx-auto text-[#ccc] text-child flex flex-col flex-grow">
      <div className=" justify-between items-center">
        <div className="mt-[20%] md:mt-[3%]">
            <ApiDetail />
        </div>
      <p className="mt-[2%]">asdfjklasdfhjkasashf jhahsfjjhahsf hajfhaasjkfh hasfjklfhassfjkfh hjkasfhfjaasfh jha aj sfhaasjkfh lh jahlfjkfhdfj hjlaahffjaahfj haklajkldfflhk asdfjklasdfhjkasashf jhahsfjjhahsf hajfhaasjkfh hasfjklfhassfjkfh hjkasfhfjaasfh jha aj sfhaasjkfh lh jahlfjkfhdfj hjlaahffjaahfj haklajkldfflhk asdfjklasdfhjkasashf jhahsfjjhahsf hajfhaasjkfh hasfjklfhassfjkfh hjkasfhfjaasfh jha aj sfhaasjkfh lh jahlfjkfhdfj hjlaahffjaahfj haklajkldfflhk</p>
      
   
      
      <Plans/>
        
      </div>
    </div> 

    
    <Footer color={"black"} textColor={"[#ccc]"}/>
  </div>

   
  );
}

export default Priceplan;
