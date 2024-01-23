import React from "react";
import dashboard from "../../images/dashboard.webp";
import Profile from "../digital-service/Profile";

export default function Feedback() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="fw-semibold primary-color">TESTIMONIALS</div>
            <div className="fs-1 fw-semibold mb-4">Our Customers Feedbck</div>
          </div>
          <div className="col-md-8">
            <div
              id="carouselExampleRide"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card col-md-6 border-0">
                    <div>
                      <i>
                        “Separated they live in Bookmarksgrove right at the
                        coast of the Semantics, a large language ocean. A small
                        river named Duden flows by their place and supplies it
                        with the necessary regelialia. ”
                      </i>
                      <Profile />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card col-md-6 border-0">
                    <div>
                      <i>
                        “Separated they live in Bookmarksgrove right at the
                        coast of the Semantics, a large language ocean. A small
                        river named Duden flows by their place and supplies it
                        with the necessary regelialia. ”
                      </i>
                      <Profile />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card col-md-6 border-0">
                    <div>
                      <i>
                        “Separated they live in Bookmarksgrove right at the
                        coast of the Semantics, a large language ocean. A small
                        river named Duden flows by their place and supplies it
                        with the necessary regelialia. ”
                      </i>
                      <Profile />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
