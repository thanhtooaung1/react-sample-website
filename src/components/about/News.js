import React from "react";
import person1 from "../../images/person.jpg";
import person2 from "../../images/person_2.jpg";
import person3 from "../../images/person_3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function News() {
  return (
    <>
      <div className="bg-light py-3">
        <div className="container my-5">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="600"
          >
            <div className="fs-2">Our News</div>
            <p>Far from the countries Vokalia and Consonantia</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="800"
              >
                <div className="card news-card border-0 rounded-0 shadow-sm p-4">
                  <div className="d-flex">
                    <img
                      className="rounded-circle"
                      src={person1}
                      width={50}
                      height={50}
                    />
                    <div className="ms-3">
                      <div className="fw-semibold">Posted by James</div>
                      <p>Jun 14, 2020</p>
                    </div>
                  </div>
                  <p className="small-text">Digital Service, 4 min read</p>
                  <a href="" className="fs-3 text-decoration-none new-text">
                    Far far away behind the word mountains far from the
                    countries
                  </a>
                  <span className="mt-3 next-button">
                    <a href="#" className="text-dark">
                      <FontAwesomeIcon
                        icon="fas fa-arrow-right-long"
                        className="me-3 right-arrow-size"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
              >
                <div className="card news-card border-0 rounded-0 shadow-sm p-4">
                  <div className="d-flex">
                    <img
                      className="rounded-circle"
                      src={person3}
                      width={50}
                      height={50}
                    />
                    <div className="ms-3">
                      <div className="fw-semibold">Posted by Khan</div>
                      <p>Jun 14, 2020</p>
                    </div>
                  </div>
                  <p className="small-text">Digital Service, 4 min read</p>
                  <a href="" className="fs-3 text-decoration-none new-text">
                    Far far away behind the word mountains far from the
                    countries
                  </a>
                  <div className="mt-3 next-button">
                    <a href="#" className="text-dark">
                      <FontAwesomeIcon
                        icon="fas fa-arrow-right-long"
                        className="me-3 right-arrow-size"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1200"
              >
                <div className="card news-card border-0 rounded-0 shadow-sm p-4">
                  <div className="d-flex">
                    <img
                      className="rounded-circle"
                      src={person2}
                      width={50}
                      height={50}
                    />
                    <div className="ms-3">
                      <div className="fw-semibold">Posted by Rob</div>
                      <p>Jun 14, 2020</p>
                    </div>
                  </div>
                  <p className="small-text">Digital Service, 4 min read</p>
                  <a href="" className="fs-3 text-decoration-none new-text">
                    Far far away behind the word mountains far from the
                    countries
                  </a>
                  <div className="mt-3 next-button">
                    <a href="#" className="text-dark">
                      <FontAwesomeIcon
                        icon="fas fa-arrow-right-long"
                        className="me-3 right-arrow-size"
                      />
                    </a>
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
