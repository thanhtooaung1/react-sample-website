import React from "react";
import Profile from "./Profile";
import dashboard from "../../images/dashboard.webp";

export default function DigitalService() {
  return (
    <>
      <div>
        <div style={{ height: 300 }}></div>
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-10">
              <div className="fw-semibold primary-color">DIGITAL SERVICES</div>
              <div className="fs-1 fw-semibold mb-4">
                Selling Digital
                <br /> Services
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast
              </p>
              <ul>
                <li className="text-color mb-2">There live the blind texts</li>
                <li className="text-color">There live the blind texts</li>
              </ul>
              <div>
                <i>
                  “Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. ”
                </i>
                <Profile />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img src={dashboard} />
            </div>
          </div>
        </div>
        <div style={{ height: 100 }}></div>
      </div>
    </>
  );
}
