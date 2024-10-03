import React, { useState, useEffect } from "react";
import adika from "./../../assets/img/adika.webp";
import nid from "./../../assets/img/nid.webp";
import zayride from "./../../assets/img/zayride.webp";
import tewos from "./../../assets/img/tewos.png";

const testimonials = [
  {
    avatar: adika,
    name: "Adika",
  },
  {
    avatar: nid,
    name: "NID",
  },
  {
    avatar: zayride,
    name: "Zayride",
  },
  {
    avatar: tewos,
    name: "Tewos Technology",
  },
];

const OurCustomers = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval on unmount
  }, []);

  return (
      <section className="py-14 mt-[26%] md:mt-[0%]">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ul>
              {testimonials.map((item, idx) =>
                  currentTestimonial === idx ? (
                      <li key={idx}>
                        <figure>
                          <blockquote></blockquote>
                          <div className="mt-6">
                            <img
                                src={item.avatar}
                                className="w-[50px] h-[50px] mx-auto"
                            />
                            <div className="mt-3">
                        <span className="block text-white font-semibold">
                          {item.name}
                        </span>
                            </div>
                          </div>
                        </figure>
                      </li>
                  ) : (
                      ""
                  )
              )}
            </ul>
          </div>
          <div className="mt-6">
            <ul className="flex gap-x-3 justify-center">
              {testimonials.map((item, idx) => (
                  <li key={idx}>
                    <button
                        className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${
                            currentTestimonial === idx
                                ? "bg-indigo-600"
                                : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentTestimonial(idx)}
                    ></button>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  );
};

export default OurCustomers;
