import React , {useState , useEffect} from "react";
import Tooltip from "react-tooltip";

const PricingSlider = ({ text }) => {
  const [sliderValue, setSliderValue] = useState(0);
 
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };
 
  return (
    <div className="flex justify-between grid grid-cols-2 md:grid-cols-4 mx-[3%] md:mx-[0%] mt-[4%]">
      <div className="">
        <p className="text-xl">{text}</p>
      </div>
      <div className="">
        <input
          type="range"
          min="0"
          max="1000000"
          step="1"
          value={sliderValue}
          onChange={handleSliderChange}
          data-tip
        />
        {/* <ReactTooltip>{sliderValue}</ReactTooltip> */}
      </div>
      <div className="">
        <p className="text-xl ">{sliderValue} request</p>
      </div>
      <div className="flex items-center justify-center ">
        <p className="text-xl ">{parseInt(sliderValue*0.2)} birr</p>
      </div>
    </div>
  );
 };


// Define the component
const Pricing = () => {
 



  // Return the JSX element
  return (
    <div className=" text-white  w-[100%] md:w-[60%] ">
      <div className="mt-[2%] mx-[3%]">
          <p>The Routes API uses a pay-as-you-go pricing model. The Gebeta maps  APIs  arer billed by usage. Cost is calculated by</p>
          <p>api call  × Price per each use</p>

        <p className="mt-[1%]"> Use our Pricing and Usage calculator to estimate your usage cost per API . </p>
        <div className="w-full mt-[4%] bg-[#202022] rounded-md">
           <div className="w-[80%] mx-auto py-[4%]">
           <PricingSlider text = {"Direction API"}/>
            <PricingSlider text = {"Matrix API"}/>
            <PricingSlider text = {"ONM API"}/>
            <PricingSlider text = {"Tss API"}/>
            <PricingSlider text = {"Geocoding API"}/>

           </div>

        </div>  

       
        
      </div>
      

    </div>
  );
};





const Ourpricing = () => {
    return (
            <div className="mt-[10%] relative flex flex-col md:mt-[4%] w-full  ">
                 <p className="mx-auto mb-[2%] text-[#A0AABA] text-3xl font-semibold sm:text-4xl" style={{fontFamily: "Zen Dots" }}>
                                Pricing
                </p>
                <div className="flex justify-center">
                   <Pricing />
                </div>
               
                
            </div>
    )
}


export default Ourpricing