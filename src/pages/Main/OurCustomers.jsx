import React from "react";
import user1 from "./../../assets/img/user1.webp"
import user2 from "./../../assets/img/user2.webp"
import user3 from "./../../assets/img/user3.webp"
import user4 from "./../../assets/img/user4.webp"
import user5 from "./../../assets/img/user5.webp"
import user6 from "./../../assets/img/user6.webp"
import user7 from "./../../assets/img/user7.webp"


const OurCustomers = () =>{
    return (
        <div className="py-14 mt-[2%]">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      {/* font-semibold text-sm text-gray-600 text-center */}
        <p className='text-center mt-[5%] md:mt-[10%] text-[#A0AABA] md:text-2xl text-xl' style={{fontFamily: "Zen Dots" }}>Our Customers</p>
        <div className="mt-6">
            <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                {/* LOGO 1 */}
              <li>
                    <img src={user1} />
              </li>

                {/* LOGO 2 */}
              <li>
                    <img src={user2} />
              </li>

              <li>
                    <img src={user3} />
              </li>


              <li>
                    <img src={user4} />
              </li>

                {/* LOGO 3 */}
              <li>
                    <img src={user2} />
              </li>

                {/* LOGO 4 */}
              <li>
                 <img src={user3} />
              </li>

            </ul>
        </div>
    </div>
</div>
    )

}

export default OurCustomers