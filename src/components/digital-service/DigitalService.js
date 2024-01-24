import React from "react";
import Profile from "./Profile";
import dashboard from "../../images/dashboard.webp";

export default function DigitalService() {
  return (
    <>
      <div id="features">
        <div style={{ height: 140 }}></div>
        <div className="row">
          <div className="col-md-5 mt-3">
            <div className="col-md-10">
              <div
                className="fw-semibold primary-color"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="800"
              >
                DIGITAL SERVICES
              </div>
              <div
                className="fs-2 fw-normal mb-4 service-header-pad"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="900"
              >
                Selling Digital Services
              </div>

              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1100"
              >
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast
                </p>
                <ul className="list-custom-icon">
                  <li className="text-color mb-2">
                    There live the blind texts
                  </li>
                  <li className="text-color">Far far away behind the word</li>
                </ul>
              </div>
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1200"
              >
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
          <div className="col-md-7 mt-3">
            <div
              className="card border-0 shadow p-2"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1300"
            >
              <img src={dashboard} />
            </div>
          </div>
        </div>
        <div style={{ height: 100 }}></div>
      </div>
    </>
  );
}
