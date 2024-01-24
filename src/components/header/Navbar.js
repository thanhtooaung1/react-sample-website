import React from "react";

export default function Navbar() {
  return (
    <>
      <div
      // data-aos="fade" data-aos-once="true" data-aos-duration="2000"
      >
        <nav class="navbar fixed-top navbar-expand-lg navbar-fixed-top nav-bg">
          <div class="container-fluid container">
            <a class="fw-bold pe-4 text-decoration-none text-dark" href="#">
              Launch<span className="primary-color">.</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul
                class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                //   style="--bs-scroll-height: 100px;"
              >
                <li class="nav-item text-color pe-2">
                  <a class="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item dropdown parent-dropdown pe-2">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu border-0 parent-menu">
                    <li>
                      <a class="dropdown-item">Action</a>
                    </li>
                    <li className="dropdown dropend child-dropdown">
                      <a
                        class="dropdown-item"
                        href="#"
                        role="hover"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Another Action
                      </a>
                      <ul class="dropdown-menu border-0 child-menu">
                        <li>
                          <a class="dropdown-item">Action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item pe-2">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item pe-2">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item pe-2">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item pe-2">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="my-2">
                <a
                  href="#"
                  className="btn btn-outline-dark btn-sm rounded-5 px-4 me-2"
                >
                  Sign in
                </a>
                <a href="#" className="btn btn-primary btn-sm rounded-5 px-4">
                  Register
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
