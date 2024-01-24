import React from "react";
import Navbar from "./Navbar";
import header from "../../images/header.svg";

export default function Header() {
  return (
    <>
      <div className="mt-3">
        <Navbar />
        <div className="row mt-4">
          <div className="col-md-6 text-start">
            <div className="header">
              <h1
                className="mb-4"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="700"
              >
                Promote Your Products by Colorlib
              </h1>
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
                className="d-flex mt-4"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1200"
              >
                <a
                  href="#"
                  className="btn btn-primary px-4 py-2 rounded-5 me-3"
                >
                  See Features
                </a>
                <a
                  href=""
                  className="btn btn-outline-primary px-4 py-2 rounded-5"
                >
                  Pricing
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src={header}
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="1200"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
