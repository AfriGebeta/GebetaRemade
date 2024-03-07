import React, { useState } from "react"
import biruk from "./../../assets/img/output.png"
import habtamu from "./../../assets/img/habtamu.jpg"
import niduser from "./../../assets/img/niduser.jpeg"
const Testimonials = () => {

    const testimonials = [
        {
            avatar: biruk,
            name: "Biruk Fekade",
            title: "CTO at Adika",
            quote: "Gebeta Maps has consistently proven to be an invaluable asset for Adika. The seamless integration of their API into our systems has significantly enhanced our location-based services. The accuracy and up-to-date information provided by Gebeta Maps have played a crucial role in improving the overall user experience for our customers."
        },
        {
            avatar: habtamu,
            name: "Habtamu Tadesse",
            title: "Founder and CEO",
            quote: "I highly recommend Gebeta Maps as an essential mapping service for ZayRide. Their accurate and up-to-date maps have greatly improved navigation for our taxi drivers, ensuring efficient and reliable transportation services for our passengers."
        },
        {
            avatar : niduser,
            name : "Abenezer Feleke",
            title : "NID, Head of Communications",
            quote : "Our experience with Gebeta Maps was very satisfactory and would like to express our utmost appreciation with their mapping services. Their expertise has made a tangible impact on our website by enhancing its functionality and user-friendliness, particularly in terms of helping citizens locate our Registration centers with ease. We are pleased to recommend their services to others seeking reliable and effective mapping solutions."
        }
       
    ]

    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    return (
        <section className="py-14 mt-[5%]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-[#A0AABA] font-semibold pb-6"></h3>
                    <p className="text-gray-300 text-3xl font-semibold sm:text-4xl mb-4" style={{fontFamily: "Zen Dots" }}>
                    What people are saying
                    </p>
                    <ul>
                        {
                            testimonials.map((item, idx) => (
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-gray-400 text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" />
                                                <div className="mt-3">
                                                    <span className="block text-white font-semibold">{item.name}</span>
                                                    <span className="block text-white text-sm mt-0.5">{item.title}</span>
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
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-gray-600 focus:ring ${currentTestimonial == idx ? "bg-gray-600" : "bg-gray-300"}`}
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

export default Testimonials