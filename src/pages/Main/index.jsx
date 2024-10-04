import React from "react";
import NavBar from "../../component/NavBar/NavBar";

import Contact from "./Contact";
import OurCustomers from "./OurCustomers";
import Testimonials from "./Testimonial";
import Solutions from "./Solutions";
import Footer from "../../component/Footer/Footer";
import Hero from "./Hero";
import SVGAnimation from "./SVGAnim";
import Banner from './Banner'

function Main() {
  return (
      <div className="flex flex-col bg-Dark p-4 md:p-0">
          <div className="flex flex-col w-full items-center relative">
              <SVGAnimation/>
              <Hero/>
          </div>
          {/*<Banner />*/}
          <OurCustomers className="flex flex-col md:flex-row"/>
          <Solutions className="flex flex-col md:flex-row"/>
          <Testimonials className="flex flex-col md:flex-row"/>
          <Contact className="flex flex-col md:flex-row"/>
      </div>
  );
}

export default Main;
