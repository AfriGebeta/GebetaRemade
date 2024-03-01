import React , {useState} from "react";
import user1 from "./../../assets/img/user1.jpg"
import user2 from "./../../assets/img/user2.png"
import user3 from "./../../assets/img/user3.png"
import user4 from "./../../assets/img/tewos.png"


const testimonials = [
    {
        avatar: user1,
        name: "Adika",
   
    },
    {
        avatar: user2,
        name: "NID",
   
    },
    {
        avatar:user3,
        name: "Zayride",
   
    },
    {
        avatar:user4,
        name: "Tewos Technology",
   
    },
]

const OurCustomers = () =>{

    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    return (

<section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                   
                    <ul>
                        {
                            testimonials.map((item, idx) => (
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                              
                                            </blockquote>
                                            <div className="mt-6">
                                                <img src={item.avatar} className="w-[12%] h-[12%] mx-auto rounded-full" />
                                                <div className="mt-3">
                                                    <span className="block text-white font-semibold">{item.name}</span>
                                                  
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(idx)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )

}

export default OurCustomers


//         <div className="py-14 mt-[25%] md:mt-0 lg:mt-[-20%]">
//     <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//       {/* font-semibold text-sm text-gray-600 text-center */}
//         <p className='text-center mt-[5%] md:mt-[10%] text-[#A0AABA] md:text-2xl text-xl' style={{fontFamily: "Zen Dots" }}>Our Customers</p>
//         <div className="mt-6">


//             <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
//                 {/* LOGO 1 */}
//                <li>
//                     <img src={user1} className="w-28" />
//               </li> 
//               <li>
//                     <img src={user2} className="w-28" />
//               </li> 
//               <li>
//                     <img src={user3} className="w-28" />
//               </li> 
//             </ul>
//         </div>
//     </div>
// </div>