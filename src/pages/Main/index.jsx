import React from "react";
import NavBar from "../../component/NavBar/NavBar";

import Contact from "./Contact";
import OurCustomers from "./OurCustomers";
import Testimonials from "./Testimonial";
import Solutions from "./Solutions";
import Footer from "../../component/Footer/Footer";
import Hero from "./Hero";
import SVGAnimation from "./SVGAnim";

function Main() {
  return (
    <div className=" flex flex-col bg-Dark p-[5%] md:p-0">
      <div className="flex flex-col w-full items-center relative">
        <SVGAnimation />
        <Hero />
      </div>

      <OurCustomers />
      <Solutions />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Main;
