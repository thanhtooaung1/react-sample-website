import React from "react";
import Navbar from "./Navbar";
import header from "../../images/header.svg";

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="row d-flex mt-5">
          <div className="col-lg-6 order-lg-1">
            <img
              src={header}
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="1200"
            ></img>
          </div>
          <div className="col-lg-6 order-lg-0">
            <div className="header">
              <div
                className="mb-4 pro-font-size"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="700"
              >
                Promote Your Products by Colorlib
              </div>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                Another cool free html css template by{" "}
                <a href="#" className="text-decoration-none primary-color">
                  Colorlib
                </a>{" "}
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast
              </p>
              <div
                className="d-flex mt-4 align-center"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1200"
              >
                <a
                  href="#features"
                  className="btn btn-primary px-4 py-2 rounded-5 me-3"
                >
                  See Features
                </a>
                <a
                  href="#pricing"
                  className="btn btn-outline-primary px-4 py-2 rounded-5"
                >
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: 120 }}></div>
      </div>
    </>
  );
}
