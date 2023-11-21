import React, { useState } from 'react'

const RequestSample = (props) => {
  const [requestLanguage, setRequestLanguage] = useState(0)
  const handlerequestLanguage = (i) => setRequestLanguage(i)
  return (
    <div className='mt-[15%]'>
    <p className='mt-[2%] font-bold text-xl text-[#A0AABA]'>Request samples</p>
    <div className='bg-[#11171a] text-[#A0AABA] mt-[2%] py-[1%] mb-[1%]' style={{ height: requestLanguage === 0 ? 'auto' : '300px'}}>
          <p className='mx-[2%] space-x-2 pb-[1%] break-all'>{props.curl}</p> 
  
    </div>
  </div>
  )
}

export default RequestSample