import React from "react";
import Feedback from "./Feedback";
import IconOne from "../service-icons/IconOne";
import IconTwo from "../service-icons/IconTwo";
import IconThree from "../service-icons/IconThree";
import IconFour from "../service-icons/IconFour";

export default function Adavntage() {
  return (
    <>
      <div className="container">
        <div className="py-5">
          <div className="text-center">
            <div className="fs-2">Advantage of using our products</div>
            <p>Far from the countries Vokalia and Consonantia</p>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <IconOne />
                <div className="align-items-start ms-4">
                  <div className="fs-5 mb-3">Group Your Business</div>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a href="" className="text-decoration-none">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <IconTwo />
                <div className="align-items-start ms-4">
                  <div className="fs-5 mb-3">Build Products</div>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a href="" className="text-decoration-none">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <IconThree />
                <div className="align-items-start ms-4">
                  <div className="fs-5 mb-3">Success Every Day</div>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a href="" className="text-decoration-none">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <IconFour />
                <div className="align-items-start ms-4">
                  <div className="fs-5 mb-3">Bring Ideas to Life</div>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <a href="" className="text-decoration-none">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: 200 }}></div>
        <Feedback />
        <div style={{ height: 200 }}></div>
      </div>
    </>
  );
}
