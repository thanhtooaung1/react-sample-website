import React from "react";
import OwlCarousel from "react-owl-carousel";
import dashboard from "../../images/dashboard.webp";
import IconOne from "../service-icons/IconOne";
import IconTwo from "../service-icons/IconTwo";
import IconThree from "../service-icons/IconThree";
import IconFour from "../service-icons/IconFour";

export default function ServiceDashboard() {
  return (
    <>
      <div className="bg-light py-5">
        <div className="container my-2">
          <div>
            <div className="row">
              <div className="col-md-7 mt-5">
                <div className="card shadow dashboard-carousel border-0 p-2 ">
                  <OwlCarousel
                    items={1}
                    loop
                    autoplay
                    dots={false}
                    className="owl-theme"
                    margin={20}
                  >
                    <div>
                      <div className="border-0">
                        <div>
                          <div className="position-relative">
                            <img src={dashboard} height="120%" />
                            <div class="position-absolute page-num-indicator end-50 rounded-circle d-flex justify-content-center align-items-center">
                              <div className="">
                                <div>1/4</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card border-0">
                        <div>
                          <div className="position-relative">
                            <img src={dashboard} height="120%" />
                            <div class="position-absolute page-num-indicator end-50 rounded-circle d-flex justify-content-center align-items-center">
                              <div className="">
                                <div>2/4</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card border-0">
                        <div>
                          <div className="position-relative">
                            <img src={dashboard} height="120%" />
                            <div class="position-absolute page-num-indicator end-50 rounded-circle d-flex justify-content-center align-items-center">
                              <div className="">
                                <div>3/4</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="card border-0">
                        <div>
                          <div className="position-relative">
                            <img src={dashboard} height="120%" />
                            <div class="position-absolute page-num-indicator end-50 rounded-circle d-flex justify-content-center align-items-center">
                              <div className="">
                                <div>4/4</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
              <div className="col-md-5 mt-5">
                <div
                  className="service-card p-3 mb-3 dashboard-btn-1 service-card-clicked"
                  data-aos="fade-left"
                  data-aos-once="true"
                  data-aos-duration="800"
                >
                  <div class="d-flex align-items-start service text-decoration-none">
                    <IconOne />
                    <div class="service-contents flex-grow-1 ms-4">
                      <div className="fs-5">Grow Your Business</div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="service-card p-3 mb-3 dashboard-btn-2"
                  data-aos="fade-left"
                  data-aos-once="true"
                  data-aos-duration="1100"
                >
                  <div class="d-flex align-items-start service ">
                    <IconTwo />
                    <div class="service-contents flex-grow-1 ms-4">
                      <div className="fs-5">Build Products</div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="service-card p-3 mb-3 dashboard-btn-3"
                  data-aos="fade-left"
                  data-aos-once="true"
                  data-aos-duration="1300"
                >
                  <div class="d-flex align-items-start service ">
                    <IconThree />
                    <div class="service-contents flex-grow-1 ms-4">
                      <div className="fs-5">Success Everyday</div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="service-card p-3 mb-3 dashboard-btn-4"
                  data-aos="fade-left"
                  data-aos-once="true"
                  data-aos-duration="1500"
                >
                  <div class="d-flex align-items-start service ">
                    <IconFour />
                    <div class="service-contents flex-grow-1 ms-4">
                      <div className="fs-5">Bring Idea to Life</div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row py-5">
          <div
            className="col-md-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="600"
          >
            <IconOne />
            <div className="fs-5 my-3">Group Your Business</div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div
            className="col-md-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
          >
            <IconTwo />
            <div className="fs-5 my-3">Build Products</div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div
            className="col-md-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <IconThree />
            <div className="fs-5 my-3">Success Every Day</div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div
            className="col-md-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1200"
          >
            <IconFour />
            <div className="fs-5 my-3">Bring Ideas to Life</div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
