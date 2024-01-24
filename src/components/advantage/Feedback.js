import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../images/person.jpg";
import profile2 from "../../images/person_2.jpg";
import profile3 from "../../images/person_3.jpg";
import "../../css/OwlCarousel.css";

import OwlCarousel from "react-owl-carousel";

export default function Feedback() {
  return (
    <>
      <div>
        <div className="row">
          <div
            className="col-md-4 mt-3 align-header"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="900"
          >
            <div className="fw-semibold primary-color">TESTIMONIALS</div>
            <div className="fs-2 fw-normal mb-4">Our Customers Feedbck</div>
            <div className="d-flex align-center">
              <button className="control-button pre-btn me-1 border-0 rounded-2">
                <FontAwesomeIcon icon="fas fa-arrow-left" />
              </button>
              <button className="control-button next-btn me-1 border-0 rounded-2">
                <FontAwesomeIcon icon="fas fa-arrow-right" />
              </button>
            </div>
          </div>
          <div
            className="col-md-8 mt-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1100"
          >
            <div className="feedback-carousel">
              <OwlCarousel
                items={2}
                loop
                autoplay
                className="owl-theme"
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 2,
                  },
                }}
                margin={20}
              >
                <div>
                  <div className="card border-0">
                    <div>
                      <i>
                        “Separated they live in Bookmarksgrove right at the
                        coast of the Semantics, a large language ocean. A small
                        river named Duden flows by their place and supplies it
                        with the necessary regelialia. ”
                      </i>
                      <div className="d-flex justify-content-start mt-4">
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          <img
                            className="rounded-circle flex-shrink-1"
                            src={profile}
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className="ms-3">
                          <div className="small-text">James Anderson</div>
                          <p>Facebook, Product Lead</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0">
                    <div>
                      <i>
                        “Separated they live in Bookmarksgrove right at the
                        coast of the Semantics, a large language ocean. A small
                        river named Duden flows by their place and supplies it
                        with the necessary regelialia. ”
                      </i>
                      <div className="d-flex justify-content-start mt-4">
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          <img
                            className="rounded-circle flex-shrink-1"
                            src={profile3}
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className="ms-3">
                          <div className="small-text">James Anderson</div>
                          <p>Facebook, Product Lead</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card border-0">
                    <div>
                      <i>
                        “Separated they live in Bookmarksgrove right at the
                        coast of the Semantics, a large language ocean. A small
                        river named Duden flows by their place and supplies it
                        with the necessary regelialia. ”
                      </i>
                      <div className="d-flex justify-content-start mt-4">
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                          }}
                        >
                          <img
                            className="rounded-circle flex-shrink-1"
                            src={profile2}
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className="ms-3">
                          <div className="small-text">James Anderson</div>
                          <p>Facebook, Product Lead</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
