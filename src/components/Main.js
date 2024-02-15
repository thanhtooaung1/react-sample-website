import React from "react";
import Header from "./header/Header";
import DigitalService from "./digital-service/DigitalService";
import ServiceDashboard from "./digital-service/ServiceDashboard";
import Pricing from "./pricing/Pricing";
import Adavntage from "./advantage/Adavntage";
import About from "./about/About";
import News from "./about/News";
import Contact from "./contact/Contact";

const Main = () => {
  return (
    <div>
      <Header />
      <DigitalService />
      <ServiceDashboard />
      <Pricing />
      <Adavntage />
      <About />
      <News />
      <Contact />
    </div>
  );
};

export default Main;
