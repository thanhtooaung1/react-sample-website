import React from "react";
import dashboard from "../../images/dashboard.webp";
import IconOne from "../service-icons/IconOne";
import IconTwo from "../service-icons/IconTwo";
import IconThree from "../service-icons/IconThree";
import IconFour from "../service-icons/IconFour";

export default function ServiceDashboard() {
  return (
    <>
      <div className="bg-light py-5">
        <div className="container my-5">
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="card shadow">
                  <img src={dashboard} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 p-3 mb-3">
                  <div class="d-flex align-items-start service ">
                    <IconOne />
                    <div class="service-contents flex-grow-1 ms-4">
                      <div className="fs-5">Grow Your Business</div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card border-0 p-3 mb-3">
                  <div class="d-flex align-items-start service ">
                    <IconTwo />
                    <div class="service-contents flex-grow-1 ms-4">
                      <div className="fs-5">Build Products</div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card border-0 p-3 mb-3">
                  <div class="d-flex align-items-start service ">
                    <IconThree />
                    <div class="service-contents flex-grow-1 ms-4">
                      <div className="fs-5">Success Everyday</div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card border-0 p-3 mb-3">
                  <div class="d-flex align-items-start service ">
                    <IconFour />
                    <div class="service-contents flex-grow-1 ms-4">
                      <div className="fs-5">Bring Idea to Life</div>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
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
          <div className="col-md-3">
            <IconOne />
            <div className="fs-5 my-3">Group Your Business</div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="col-md-3">
            <IconTwo />
            <div className="fs-5 my-3">Build Products</div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="col-md-3">
            <IconThree />
            <div className="fs-5 my-3">Success Every Day</div>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="col-md-3">
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
