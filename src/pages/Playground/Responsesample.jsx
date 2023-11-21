import React, { useState } from 'react'

const ResponseSample = (props) => {
  const [requestLanguage, setRequestLanguage] = useState(0)
  const handlerequestLanguage = (i) => setRequestLanguage(i)
  return (
    <div className='mt-[15%] h-[50%]'>
    <p className='mt-[2%] font-bold text-xl text-[#A0AABA]'>Response samples</p>
    <div className='bg-[#11171a] text-[#A0AABA] mt-[2%] py-[1%] mb-[1%]' style={{ height: requestLanguage === 0 ? 'auto' : '300px'}}>
          {props.component}
  
    </div>
  </div>
  )
}

export default ResponseSample