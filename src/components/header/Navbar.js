import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="mt-2">
          <nav id="navbar" className="navbar navbar-expand-lg nav-bg">
            <div className="container-fluid container">
              <Link
                to={"/"}
                className="fw-bold pe-4 text-decoration-none text-dark text-center"
              >
                Launch<span className="primary-color">.</span>
              </Link>
              <a
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </a>
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <a
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></a>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav my-auto me-auto">
                    <li className="nav-item text-color pe-2">
                      <Link to={"/home"} className="nav-link active">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown parent-dropdown pe-2">
                      <a
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu border-0 parent-menu">
                        <li>
                          <a className="dropdown-item">Action</a>
                        </li>
                        <li className="dropdown dropend child-dropdown">
                          <a
                            className="dropdown-item"
                            href="#"
                            role="hover"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Another Action
                          </a>
                          <ul className="dropdown-menu child-menu">
                            <li>
                              <a className="dropdown-item">Action</a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item pe-2">
                      <Link to={"/pricing"} className="nav-link">
                        Pricing
                      </Link>
                    </li>
                    <li className="nav-item pe-2">
                      <Link to={"/features"} className="nav-link">
                        Features
                      </Link>
                    </li>
                    <li className="nav-item pe-2">
                      <Link to={"/about"} className="nav-link" href="#about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item pe-2">
                      <Link to={"/contact"} className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <ul className="my-2">
                    <a href="#home" className="rounded-5 px-4 me-2 sign-in">
                      Sign in
                    </a>
                    <a href="#home" className="rounded-5 px-4 register-btn">
                      Register
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
