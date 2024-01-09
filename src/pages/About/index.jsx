import React from "react";
import africa5 from "./../../assets/img/africa5.jpeg"
import Hero from "./Hero";
import bek from "./../../assets/img/team/bek.jpg"
import dani from "./../../assets/img/team/dani.jpg"
import bemh from "./../../assets/img/team/bem.jpg"
import rahel from "./../../assets/img/team/rah.jpg"
import dibo from "./../../assets/img/team/deb.jpg"
import aben from "./../../assets/img/team/aben.jpg"
import beny from "./../../assets/img/team/beny.jpg"

const FirstSection = () =>{
    return(
        <div className="mt-[6%] text-black mx-[4%] md:mx-[15%] w-[90%] md:w-[60%] mb-[4%]">
             <p  className='mt-[4%] text-[#A0AABA] md:text-4xl text-2xl' style={{fontFamily: "Zen Dots" }}>
             Welcome to Gebeta Maps – Where Innovation Meets localization in Mapping and Location Services</p>  
            <div className="">
                <p className="mt-[1%]">
                "At Gebeta Maps, movement isn't just a physical journey; it's a dynamic experience we enhance for you, your business, and the world. We're not in the business of rides or deliveries, but we are in the business of mapping the way forward, creating a seamless bridge between the physical and digital worlds. Our journey began in 2021, fueled by a team of seasoned professionals with a shared vision: to redefine the landscape of mapping and location-based services, making accuracy and reliability accessible to all."

                </p>
              
            </div>


            <p  className='mt-[4%] text-[#A0AABA] md:text-4xl text-2xl' style={{fontFamily: "Zen Dots" }}>
            Our Mission: Bridging the Gap with Cutting-edge GIS Services with locally catered services </p>  
            <div className="">
                <p className="mt-[1%]">
                "We were founded with a mission: to democratize GIS and map-related services. Our flagship offerings include a suite of APIs designed to empower individuals and businesses with accurate, reliable mapping tools. Whether you need geocoding, precise directions, matrix calculations, route optimization, or one-to-many calculations, Gebeta Maps is your trusted partner. Our APIs seamlessly integrate into various software, making us the preferred choice among developers and businesses alike."


                </p>
              
            </div>

            <p  className='mt-[4%] text-[#A0AABA] md:text-4xl text-2xl' style={{fontFamily: "Zen Dots" }}>
            Leading with Innovation and Expertise</p>  
            <div className="">
                <p className="mt-[1%]">
                "At Gebeta Maps, innovation is in our DNA. Our team, comprised of industry experts, pushes the boundaries of mapping and location technology. Using state-of-the-art mapping technology and advanced data processing algorithms, we create maps with unparalleled accuracy, measured in inches. As technology evolves, so do we – constantly striving to deliver services that exceed expectations."
                </p>
            </div>


            <p  className='mt-[4%] text-[#A0AABA] md:text-4xl text-2xl' style={{fontFamily: "Zen Dots" }}>
            Serving Africa and Beyond</p>  
            <div className="">
                <p className="mt-[1%]">
                "With our headquarters in Addis Ababa, Ethiopia, Gebeta Maps is deeply rooted in the African market. We're proud to be a pan-African player, serving customers in Djibouti and expanding across the continent. As we continue to grow, our focus remains on providing world-class mapping and location services tailored to the unique needs of the African market."

                </p>
            </div>

            <p  className='mt-[4%] text-[#A0AABA] md:text-4xl text-2xl' style={{fontFamily: "Zen Dots" }}>
            Choose Your Path with Gebeta Maps</p>  
            <div className="">
                <p className="mt-[1%]">
                "Whether you're an individual, a startup, or an enterprise, Gebeta Maps has a plan for you. Our pricing options – Starter, Business, Professional, and Premium – cater to various needs and preferences. Our APIs find applications in navigation, real-time traffic updates, route planning, and location-based advertising, giving you the flexibility to map the world your way."

                </p>
            </div>

            <p  className='mt-[4%] text-[#A0AABA] md:text-4xl text-2xl' style={{fontFamily: "Zen Dots" }}>
            Our Global Footprint: Mapping Tomorrow, Today</p>  
            <div className="">
                <p className="mt-[1%]">
                "As we continue to expand, Gebeta Maps is in talks with companies in Nigeria, Kenya, and other African countries, further solidifying our commitment to shaping the future of mapping and location services worldwide."

                </p>
            </div>

            <p  className=' mt-[4%] text-[#A0AABA] md:text-4xl text-2xl' style={{fontFamily: "Zen Dots" }}>
            Innovation, Reliability, Customer Service – Mapped Together </p>  
            <div className="">
                <p className="mt-[1%]">
                At Gebeta Maps, we stand by our core values: innovation, reliability, and exceptional customer service. We believe that by offering accurate, reliable, and user-friendly mapping and location services, we can drive positive change in the lives and operations of individuals and businesses globally. Thank you for choosing Gebeta Maps – where every journey is an opportunity to map the world together.
                </p>
            </div>

           
             
        </div>
    )
}


const OurTeam =  () => {


    const team = [
        {
            avatar: bek,
            name: "Bereket Terefe",
            title: "Frontend developer",
            // linkedin: "javascript:void(0)",
            // twitter: "javascript:void(0)",
        },
        {
            avatar: dani,
            name: "Daniel Tsegaw",
            title: "Backend developer",
            // linkedin: "javascript:void(0)",
            // twitter: "javascript:void(0)",
        },
        {
            avatar: bemh,
            name: "Bemhreth Gezahegn",
            title: "CEO",
            // linkedin: "javascript:void(0)",
            // twitter: "javascript:void(0)",
        },
        {
            avatar: rahel,
            name: "Rahel Tura",
            title: "Finance head",
            // linkedin: "javascript:void(0)",
            // twitter: "javascript:void(0)",
        },
        {
            avatar: dibo,
            name: "Deborah Terefe",
            title: "Legal Advisor",
            // linkedin: "javascript:void(0)",
            // twitter: "javascript:void(0)",
        },
        {
            avatar: aben,
            name: "Abenezer Seifu",
            title: "CTO",
            // linkedin: "javascript:void(0)",
            // twitter: "javascript:void(0)",
        },
        {
            avatar: beny,
            name: "Benayas Teshome",
            title: "COO",
            // linkedin: "javascript:void(0)",
            // twitter: "javascript:void(0)",
        },
    ]

    return (
        <section className="py-14">
            <div className="mx-[4%] md:mx-[15%] ">
                <div className="max-w-xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-center">
                                    <div className="flex-none w-24 h-24">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        {/* <div className="mt-3 flex gap-4 text-gray-400">
                                            <a href={item.twitter}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                            <a href={item.linkedin}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                        </div> */}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}


function About(){
    return(
        <div className=" flex flex-col bg-Dark bg-white ">
            
            <div className='flex flex-row w-full items-center bg-Dark '>
                <Hero/>       
            </div> 
            <FirstSection/>
            <OurTeam/>
         
               
        </div>  
    )
}

export default About







