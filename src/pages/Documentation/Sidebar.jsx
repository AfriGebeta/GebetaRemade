import React , {useState} from "react";


const Sidebar = () => {
   
    const lessons =  [
        { 
            name: "Introduction", 
            href: "javascript:void(0)",
            subList : [
                { 
                    name : 'Introduction to Rust',
                    href : "javascript:void(0)"
                },
            ]

        }, 

        { 
            name: "Direction", 
            href: "javascript:void(0)",
            subList : [
                { 
                    name : 'Overview',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'use case of Direction API',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Requirement parameter',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Optional parameter',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API Responses',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API restrictions and limits',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API pricing',
                    href : "javascript:void(0)"
                },
                
            ]

        }, 

        { 
            name: "Matrix", 
            href: "javascript:void(0)",
            subList : [
                { 
                    name : 'Overview',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'use case of Direction API',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Requirement parameter',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Optional parameter',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API Responses',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API restrictions and limits',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API pricing',
                    href : "javascript:void(0)"
                },
                
            ]

        }, 

        { 
            name: "ONM", 
            href: "javascript:void(0)",
            subList : [
                { 
                    name : 'Overview',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'use case of Direction API',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Requirement parameter',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Optional parameter',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API Responses',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API restrictions and limits',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API pricing',
                    href : "javascript:void(0)"
                },
                
            ]

        }, 

        { 
            name: "Tss", 
            href: "javascript:void(0)",
            subList : [
                { 
                    name : 'Overview',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'use case of Direction API',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Requirement parameter',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Optional parameter',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API Responses',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API restrictions and limits',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API pricing',
                    href : "javascript:void(0)"
                },
                
            ]

        }, 

        { 
            name: "Geocoding", 
            href: "javascript:void(0)",
            subList : [
                { 
                    name : 'Overview',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'use case of Direction API',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Requirement parameter',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Optional parameter',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API Responses',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API restrictions and limits',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API pricing',
                    href : "javascript:void(0)"
                },
                
            ]

        },

        { 
            name: "MapMatching", 
            href: "javascript:void(0)",
            subList : [
                { 
                    name : 'Overview',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'use case of Direction API',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Requirement parameter',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Optional parameter',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API Responses',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API restrictions and limits',
                    href : "javascript:void(0)"
                },
                { 
                    name : 'Directions API pricing',
                    href : "javascript:void(0)"
                },
                
            ]

        }, 

    ]


    const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (idx) => {
    const newExpandedItems = [...expandedItems];
    if (newExpandedItems.includes(idx)) {
      newExpandedItems.splice(newExpandedItems.indexOf(idx), 1);
    } else {
      newExpandedItems.push(idx);
    }
    setExpandedItems(newExpandedItems);
  };

    return (
        <nav className="absolute  md:sticky mt-[2%] top-0 left-0 w-full h-full space-y-8 overflow-auto sm:w-80  px-4 pt-4 md:px-8">
            <div className='text-[0.9rem] '>
                <div className=''>
                            <ul>
                            {lessons?.map((item, idx) => (
                                <li key={idx}>
                                <p
                                    onClick={() => toggleItem(idx)}
                                    className={`text-black font-semibold block w-full py-2 px-4 hover:text-GebetaMain duration-150 ${expandedItems.includes(idx) ? 'active' : ''}`}
                                >
                                    {item.name}  
                                </p>
                                <ul className={`ml-[4%] ${expandedItems.includes(idx) ? 'visible' : 'hidden'}`}>
                                    {item.subList.map((nitem, nidx) => (
                                    <li key={nidx}>
                                        <p className='text-black font-semibold block w-full py-2 px-4 hover:text-GebetaMain duration-150'>
                                        {nitem.name}
                                        </p>
                                    </li>
                                    ))}
                                </ul>
                                </li>
                            ))}
                            </ul>
                    </div>
            </div>
        </nav>
);
};


export default Sidebar