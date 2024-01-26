import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../images/person.jpg";
import profile2 from "../../images/person_2.jpg";
import profile3 from "../../images/person_3.jpg";

export default function Feedback() {
  return (
    <>
      <div className="py-5">
        <div className="row">
          <div
            className="col-lg-4 mt-3 align-header"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="900"
          >
            <div className="fw-semibold primary-color">TESTIMONIALS</div>
            <div className="fs-2 fw-normal mb-4 subtitle-padding">
              Our Customers Feedbck
            </div>
            <div className="d-flex align-center">
              <button
                className="control-button pre-btn me-1 border-0 rounded-2"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <FontAwesomeIcon icon="fas fa-arrow-left" />
              </button>
              <button
                className="control-button next-btn me-1 border-0 rounded-2"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <FontAwesomeIcon icon="fas fa-arrow-right" />
              </button>
            </div>
          </div>
          <div
            className="col-lg-8 mt-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1100"
          >
            <div className="feedback-carousel">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="card border-0 ">
                      <div>
                        <i>
                          “Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean. A
                          small river named Duden flows by their place and
                          supplies it with the necessary regelialia. ”
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

                  <div className="carousel-item">
                    <div className="card border-0">
                      <div>
                        <i>
                          “Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean. A
                          small river named Duden flows by their place and
                          supplies it with the necessary regelialia. ”
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
                  <div className="carousel-item">
                    <div className="card border-0 ">
                      <div>
                        <i>
                          “Separated they live in Bookmarksgrove right at the
                          coast of the Semantics, a large language ocean. A
                          small river named Duden flows by their place and
                          supplies it with the necessary regelialia. ”
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
