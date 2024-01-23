import "./App.css";
import About from "./components/about/About";
import Adavntage from "./components/advantage/Adavntage";
import Contact from "./components/contact/Contact";
import DigitalService from "./components/digital-service/DigitalService";
import ServiceDashboard from "./components/digital-service/ServiceDashboard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Pricing from "./components/pricing/Pricing";

//import library
import { library } from "@fortawesome/fontawesome-svg-core";

//import icons
import { fas } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="container mb-5">
        <Header />
        <DigitalService />
      </div>
      <ServiceDashboard />
      <Pricing />
      <Adavntage />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
library.add(fas);
