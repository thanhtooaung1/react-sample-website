import React from "react";
import Social from "./Social";

export default function Footer() {
  return (
    <>
      <div className="footer-color py-4">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-5 pe-5">
              <div className="fs-6 pb-4">About Launch</div>
              <p className="small-text">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="fs-6 py-4">Connect</div>
              <div>
                <Social />
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-4">
                  <div className="fs-6 pb-4">Projects</div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      La Lega Stadium
                    </a>
                  </div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      France Building
                    </a>
                  </div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      22 New Homes
                    </a>
                  </div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      Manage Center
                    </a>
                  </div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      Sports Hall
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="fs-6 pb-4">Services</div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      Architect
                    </a>
                  </div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      Interior Design
                    </a>
                  </div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      Landscape Design
                    </a>
                  </div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      Consultancy
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="fs-6 pb-4">Contact</div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      43 Raymouth Rd. Baltemoer, London 3910
                    </a>
                  </div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      +1(123)-456-7890
                    </a>
                  </div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      +1(123)-456-7890
                    </a>
                  </div>
                  <div className="pb-2">
                    <a href="#" className="footer-link">
                      info@mydomain.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <span className="small-text text-color">
              Copyright ©2024 All rights reserved | This template is made with
              ❤️️ by{" "}
            </span>
            <a
              href="#"
              className="text-decoration-none primary-color small-text"
            >
              Colorlib
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
