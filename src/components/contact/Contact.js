import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <>
      <div className="py-5">
        <div className="container my-5">
          <div className="text-center">
            <div className="fs-2">Get In Touch</div>
            <p>Far from the countries Vokalia and Consonantia</p>
          </div>
          <div className="row mt-5">
            <div className="col-md-8">
              <form className="pe-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="first_name" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="last_name" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label for="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="message"
                    name="message"
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-5 px-4 py-2"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
            <div className="col-md-4">
              <div className="fs-4 mb-4">Contact Info</div>
              <div className="mb-3">
                <FontAwesomeIcon icon="fas fa-location-dot" className="me-3" />
                43 Raymouth Rd. Baltemoer, London 3910
              </div>
              <div className="mb-3 ">
                <a href="#" className="new-text text-decoration-none">
                  <FontAwesomeIcon icon="fas fa-phone" className="me-3" />{" "}
                  +1(123)-456-7890
                </a>
              </div>
              <div className="mb-3">
                <a href="#" className="new-text text-decoration-none">
                  <FontAwesomeIcon icon="fas fa-phone" className="me-3" />
                  +1(123)-456-7890
                </a>
              </div>
              <div className="mb-3">
                <a href="#" className="new-text text-decoration-none">
                  <FontAwesomeIcon icon="fas fa-envelope" className="me-3" />
                  info@mydomain.com
                </a>
              </div>
              <div className="mb-3">
                <a href="#" className="new-text text-decoration-none">
                  <FontAwesomeIcon icon="fas fa-earth-asia" className="me-3" />
                  https://Colorlib.com/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}