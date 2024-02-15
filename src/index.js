import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header/Header";

//import fontawesome library
import { library } from "@fortawesome/fontawesome-svg-core";

//import icons
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import DigitalService from "./components/digital-service/DigitalService";
import Pricing from "./components/pricing/Pricing";
import About from "./components/about/About";

//AOS animation
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Main from "./components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/home",
        element: <Header />,
      },
      {
        path: "/features",
        element: <DigitalService />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

library.add(fas, fab, far);
