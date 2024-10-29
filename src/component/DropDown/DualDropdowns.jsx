import React, {useEffect, useRef, useState} from 'react'
import {Link} from 'react-router-dom';


const DualDropdowns = ({color, textColor ,dropdown1 , dropdown2}) => {
    const [isDropdown1Open, setDropdown1Open] = useState(false);
    const [isDropdown2Open, setDropdown2Open] = useState(false);
   
    const dropdownContainerRef = useRef(null);
  
    useEffect(() => {
      const closeDropdowns = (event) => {
        // Check if the click occurred outside of the dropdowns
        if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target)) {
          setDropdown1Open(false);
          setDropdown2Open(false);
        }
      };
  
      // Attach the event listener to the document
      document.addEventListener('click', closeDropdowns);
  
      // Cleanup the event listener on component unmount
      return () => {
        document.removeEventListener('click', closeDropdowns);
      };
    }, []); // Empty dependency array ensures the effect runs only once
  
    const toggleDropdown1 = () => {
      setDropdown1Open(!isDropdown1Open);
      setDropdown2Open(false);
    };
  
    const toggleDropdown2 = () => {
      setDropdown2Open(!isDropdown2Open);
      setDropdown1Open(false);
    };
  
    return (
      <div className="md:flex  flex-col md:flex-row  md:space-x-4 space-y-3 md:space-y-0" ref={dropdownContainerRef}>
        <div className="relative">
        

          <p 
            
            onClick={toggleDropdown1}
            className={`flex hover:text-GebetaMain text-${textColor} inline-flex  justify-center gap-x-1.5    font-semibold " id="menu-button" aria-expanded="true" aria-haspopup="true"`}>
                Company
              <svg className="font-bold -mr-1 h-5 w-8 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </p>


  
          {isDropdown1Open && (
            <div className={`md:absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg `}>
              <ul>
                {
                    dropdown1.map((item)=>{
                       return (
                       
                        <Link className='w-full' to={item.path}> <li className="hover:text-GebetaMain py-2 px-4 hover:bg-gray-100 cursor-pointer"> {item.text} </li> </Link>
                   
                       
                       )
                    })
                }
                
                
              </ul>
            </div>
          )}
        </div>
  
        <div className="relative">
            <p 
            
            onClick={toggleDropdown2}
            className={`flex items-center hover:text-GebetaMain  text-${textColor} inline-flex  justify-center gap-x-1.5    font-semibold " id="menu-button" aria-expanded="true" aria-haspopup="true"`}>
                Community
              <svg className="font-bold -mr-1 h-5 w-8 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </p>
  
          {isDropdown2Open && (
            <div className={`md:absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg`}>
              <ul>
              {
                    dropdown2.map((item)=>{
                       return (<a href={item.link} target="_blank"><li className="hover:text-GebetaMain py-2 px-4 hover:bg-gray-100 cursor-pointer z-10">{item.text}</li></a>)
                    })
                }
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default DualDropdowns