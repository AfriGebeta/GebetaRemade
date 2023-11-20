import React, { useState } from 'react'

const RequestSample = (props) => {
  const [requestLanguage, setRequestLanguage] = useState(0)
  const handlerequestLanguage = (i) => setRequestLanguage(i)
  return (
  <div className='md:w-[80%]'>
    <p className='mt-[2%]   font-bold text-xl text-[#A0AABA]'>Request samples</p>
  
    <div className='bg-[#11171a] text-[#A0AABA]  mt-[2%] py-[1%] mb-[1%]'>
      {
        requestLanguage === 0 ? <p className='mx-[2%] space-x-2 overflow-x-auto pb-[1%]'>{props.curl}</p> :
          <p className='mx-[2%] mt-[2%] space-x-2 overflow-x-scroll pb-[1%] flex flex-col text-[#A0AABA]'>{props.js.map((data) => {
            return data
          })}</p>
      }


    </div>
  </div>)
}

export default RequestSample