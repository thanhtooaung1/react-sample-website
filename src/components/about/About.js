import React from "react";
import about from "../../images/about.svg";
import News from "./News";

export default function About() {
  return (
    <>
      <div className="container">
        <div className="py-5">
          <div className="row">
            <div className="col-md-8">
              <div className="card border-0">
                <img src={about} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="fw-semibold primary-color">ABOUT</div>
              <div className="fs-2 mb-4">About Us</div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast
              </p>
              <p className="mt-4">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies it with the necessary
                regelialia.
              </p>
              <div className="mt-4">
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
                <div className="col-md-6">
                  <div className="fs-1">59M</div>
                  <div className="fw-normal text-color">MEMBERS</div>
                </div>
                <div className="col-md-6">
                  <div className="fs-1">14</div>
                  <div className="fw-normal text-color">TEAM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <News />
    </>
  );
}
