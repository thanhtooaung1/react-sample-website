import React from "react";
import about from "../../images/about.svg";
import "../../css/About.css";

export default function About() {
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="py-5">
            <div className="row">
              <div className="col-lg-8">
                <div
                  className="card border-0"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  <img src={about} />
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="600"
                >
                  <div className="fw-semibold primary-color">ABOUT</div>
                  <div className="fs-2 mb-4">About Us</div>
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="900"
                >
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast
                </p>
                <p
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1100"
                >
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia.
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1300"
                >
                  <ul className="list-custom-icon">
                    <li className="text-color mb-2">
                      There live the blind texts
                    </li>
                    <li className="text-color mb-2">
                      Far far away behind the word
                    </li>
                    <li className="text-color">Their place and supplies</li>
                  </ul>
                </div>
                <div className="row mt-4">
                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="1200"
                  >
                    <div className="fs-1">
                      <span
                        className="member"
                        data-aos="member-count-up"
                        data-aos-duration="4000"
                        data-aos-once="true"
                      ></span>
                      M
                    </div>
                    <div className="fw-normal text-color small-text">
                      MEMBERS
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="1200"
                  >
                    <div
                      className="fs-1 team"
                      data-aos="team-count-up"
                      data-aos-duration="4000"
                      data-aos-once="true"
                    ></div>
                    <div className="fw-normal text-color small-text">TEAM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
