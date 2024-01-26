import { React, useEffect } from "react";
import dashboard from "../../images/dashboard.webp";
import IconOne from "../service-icons/IconOne";
import IconTwo from "../service-icons/IconTwo";
import IconThree from "../service-icons/IconThree";
import IconFour from "../service-icons/IconFour";

import "bootstrap";
import * as bootstrap from "bootstrap";

export default function ServiceDashboard() {
  useEffect(() => {
    addBootstrapToWindow();
  });
  return (
    <>
      <div className="bg-light py-2">
        <div className="container my-2">
          <div>
            <div className="row">
              <div
                className="col-lg-7 mt-5"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="800"
              >
                <div className="card shadow dashboard-carousel border-0 p-2 ">
                  <div
                    id="carouselDashboardIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="card border-0">
                          <div>
                            <div className="position-relative">
                              <img src={dashboard} width="100%" />
                              <div class="position-absolute page-num-indicator end-50 rounded-circle d-flex justify-content-center align-items-center">
                                <div className="">
                                  <div>1/4</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-0 carousel-item">
                        <div>
                          <div className="position-relative">
                            <img src={dashboard} width="100%" />
                            <div class="position-absolute page-num-indicator end-50 rounded-circle d-flex justify-content-center align-items-center">
                              <div className="">
                                <div>2/4</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-0 carousel-item">
                        <div>
                          <div className="position-relative">
                            <img src={dashboard} width="100%" />
                            <div class="position-absolute page-num-indicator end-50 rounded-circle d-flex justify-content-center align-items-center">
                              <div className="">
                                <div>3/4</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-0 carousel-item">
                        <div>
                          <div className="position-relative">
                            <img src={dashboard} width="100%" />
                            <div class="position-absolute page-num-indicator end-50 rounded-circle d-flex justify-content-center align-items-center">
                              <div className="">
                                <div>4/4</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-5">
                <div
                  onClick={() => selectCard(1)}
                  className="service-card p-3 mb-3 dashboard-btn-1 service-card-clicked"
                  data-aos="fade-up"
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
                  onClick={() => selectCard(2)}
                  className="service-card p-3 mb-3 dashboard-btn-2"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1100"
                >
                  <div className="d-flex align-items-start service ">
                    <IconTwo />
                    <div className="service-contents flex-grow-1 ms-4">
                      <div className="fs-5">Build Products</div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => selectCard(3)}
                  className="service-card p-3 mb-3 dashboard-btn-3"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-duration="1300"
                >
                  <div className="d-flex align-items-start service ">
                    <IconThree />
                    <div className="service-contents flex-grow-1 ms-4">
                      <div className="fs-5">Success Everyday</div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => selectCard(4)}
                  className="service-card p-3 mb-3 dashboard-btn-4"
                  data-aos="fade-up"
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
        <div className="row py-3">
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="600"
          >
            <IconOne />
            <div className="fs-5 my-2">Group Your Business</div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
          >
            <IconTwo />
            <div className="fs-5 my-2">Build Products</div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <IconThree />
            <div className="fs-5 my-2">Success Every Day</div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div
            className="col-lg-3"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1200"
          >
            <IconFour />
            <div className="fs-5 my-2">Bring Ideas to Life</div>
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

// Add bootstrap to window
function addBootstrapToWindow() {
  let myCarousel = document.getElementById("carouselDashboardIndicators");
  new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    ride: "carousel",
  });
  myCarousel.addEventListener("slide.bs.carousel", (event) => {
    addBorder(event.to);
  });
}

function selectCard(id) {
  //Get bootstrap carousel
  let dashboard = document.getElementById("carouselDashboardIndicators");
  let dashCarousel = new bootstrap.Carousel(dashboard);
  dashCarousel.to(id - 1);
}

function addBorder(id) {
  for (let i = 1; i <= 4; i++) {
    //Get service card
    let btnName = ".dashboard-btn-" + i;
    let cardElement = document.querySelector(btnName);

    if (i - 1 == id) {
      // Add right border
      cardElement.classList.add("service-card-clicked");
    } else {
      // Remove right border
      cardElement.classList.remove("service-card-clicked");
    }
  }
}
