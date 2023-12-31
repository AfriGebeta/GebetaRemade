import React, { useEffect, useState } from "react";


function Notify({value}) {
  const [show,setShow] = useState('hidden');

  useEffect(() => {

    setShow(value.visible?'block':'hidden')
    setTimeout(() => setShow('hidden'),value.timeout || 2000);
   },[value.visible])
   useEffect(() => {
    console.log(show);
   }, [show]);
   
  return (
    <div className={" fixed top-0 right-0 left-0 text-center ml-auto mr-auto py-3 text-white "+show}>
      <div className=" bg-[#202022] card rounded-3xl px-10 py-2 inline-block shadow-xl shadow-black text-white">
        {value.msg}
      </div>
    </div>
  )
}

export default Notify;