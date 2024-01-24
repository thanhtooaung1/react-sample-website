import React from "react";

export default function Pricing() {
  return (
    <>
      <div className="bg-light py-4">
        <div className="container my-5">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="600"
          >
            <div className="fs-2">Pricing</div>
            <p>Pricing for everyone. Choose your plan now!</p>
          </div>
          <div className="d-flex justify-content-center my-4">
            <div className="col-md-10 py-1">
              <div className="row">
                <div className="col-md-4 pt-3">
                  <div
                    className="card card-body shadow-sm rounded-5 border-0"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="800"
                  >
                    <div className="text-center p-4">
                      <div className="fs-3">Free</div>
                      <div>
                        <div className="fs-2 primary-color mb-3">
                          <sup>$</sup>0
                        </div>
                        <ul className="list-custom-icon">
                          <li className="text-color mb-3 text-start">
                            There live the blind texts
                          </li>
                          <li className="text-color mb-3 text-start">
                            Far far away behind the word
                          </li>
                          <li className="text-color mb-3 text-start">
                            Far from the countries Vokalia and Consonantia
                          </li>
                        </ul>
                        <div className="mt-5">
                          <a
                            href=""
                            className="btn btn-outline-primary rounded-5 py-2 px-3"
                          >
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 pt-3">
                  <div
                    className="card card-body shadow-sm rounded-5 border-0"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="1000"
                  >
                    <div className="text-center p-4">
                      <div className="fs-3">Standard</div>
                      <div>
                        <div className="fs-2 primary-color mb-3">
                          <sup>$</sup>19.99
                        </div>
                        <ul className="list-custom-icon">
                          <li className="text-color mb-3 text-start">
                            There live the blind texts
                          </li>
                          <li className="text-color mb-3 text-start">
                            Far far away behind the word
                          </li>
                          <li className="text-color mb-3 text-start">
                            Far from the countries Vokalia and Consonantia
                          </li>
                        </ul>
                        <div className="mt-5">
                          <a
                            href=""
                            className="btn btn-primary rounded-5 py-2 px-3"
                          >
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 pt-3">
                  <div
                    className="card card-body shadow-sm rounded-5 border-0"
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="1200"
                  >
                    <div className="text-center p-4">
                      <div className="fs-3">Premium</div>
                      <div>
                        <div className="fs-2 primary-color mb-3">
                          <sup>$</sup>79.99
                        </div>
                        <ul className="list-custom-icon">
                          <li className="text-color mb-3 text-start">
                            There live the blind texts
                          </li>
                          <li className="text-color mb-3 text-start">
                            Far far away behind the word
                          </li>
                          <li className="text-color mb-3 text-start">
                            Far from the countries Vokalia and Consonantia
                          </li>
                        </ul>
                        <div className="mt-5">
                          <a
                            href=""
                            className="btn btn-outline-primary rounded-5 py-2 px-3"
                          >
                            Get Started
                          </a>
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
