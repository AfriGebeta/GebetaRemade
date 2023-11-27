import React , {useState} from "react";
import { useSelector, useDispatch } from "react-redux"
import { changeTopic } from "../../redux/reducers/documentationSlice";

import { documentationSideBarLinks } from "../../data/documentation";





const Sidebar = () => {
   
    
  const [expandedItems, setExpandedItems] = useState([]);
  const { documentation } = useSelector((state) => state)

  
  const toggleItem = (idx , href) => {
    const newExpandedItems = [...expandedItems];
    if (newExpandedItems.includes(href)) {
      newExpandedItems.splice(newExpandedItems.indexOf(href), 1);
    } else {
      newExpandedItems.push(href);
    }
    setExpandedItems(newExpandedItems);
    dispatch(changeTopic(href))
  };

    const dispatch = useDispatch();
    return (
        <nav className="md:absolute  md:top-0 md:left-0 md:sticky mt-[2%]  w-full h-full space-y-8 overflow-auto sm:w-80  md:px-4 md:pt-4 md:px-8">
            <div className='text-[0.9rem] '>
                <div className=''>
                            <ul>
                            {documentationSideBarLinks?.map((item, idx) => (
                                <li key={idx}>
                                <p
                                    onClick={() => toggleItem(idx , item.href)}
                                    className={`${documentation.current == item.href ? 'text-GebetaMain' : ''} font-semibold block w-full py-2 px-4 hover:text-GebetaMain duration-150 ${expandedItems.includes(idx) ? 'active' : ''  }`}
                                >
                                    {item.name}  
                                </p>
                                <ul className={`ml-[4%] ${expandedItems.includes(idx) ? 'visible' : 'hidden'}`}>
                                    {item.subList.map((nitem, nidx) => (
                                    <li key={nidx}>
                                        <p className='text-black font-semibold block w-full py-2 px-4  duration-150'>
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