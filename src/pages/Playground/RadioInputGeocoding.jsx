import React,{useState} from "react";

const radioInputs = [
    { name : "forward"},
    { name : "reverse"}
]


const RadioInputGeocoding = ({selectedGeocoding,setGeocoding}) => {

    return (
        <div>
            {
                radioInputs.map((n) => {
                              return (
                                  <div className="flex space-x-2 ">
                                      <input type="radio" checked={selectedGeocoding === n.name} onChange={()=>{setGeocoding(n.name)}} />

                                      <p> {n.name}</p>
                                  </div>
                                  )
                          })
                      }
                  </div>
    )
}


export default RadioInputGeocoding