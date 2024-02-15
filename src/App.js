import { useEffect } from "react";
import "./App.css";
import "./css/Responsive.css";
import About from "./components/about/About";
import Adavntage from "./components/advantage/Adavntage";
import Contact from "./components/contact/Contact";
import DigitalService from "./components/digital-service/DigitalService";
import ServiceDashboard from "./components/digital-service/ServiceDashboard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Pricing from "./components/pricing/Pricing";
import News from "./components/about/News";
import Navbar from "./components/header/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  // useEffect(() => {

  // }, []);
  return (
    <div className="App" id="home">
      <Navbar />
      <Outlet />
      {/* <Header />
      <DigitalService />
      <ServiceDashboard />
      <Pricing />
      <Adavntage />
      <About />
      <News />
      <Contact />*/}
      <Footer />
    </div>
  );
}

export default App;
