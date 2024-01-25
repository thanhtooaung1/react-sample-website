import React from "react";

export default function Navbar() {
  return (
    <>
      <div
      // data-aos="fade" data-aos-once="true" data-aos-duration="2000"
      >
        <nav id="navbar" class="navbar navbar-expand-lg nav-bg">
          <div class="container-fluid container">
            <div
              class="fw-bold pe-4 text-decoration-none text-dark text-center"
              href="#"
            >
              Launch<span className="primary-color">.</span>
            </div>
            <a
              class="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </a>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <a
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></a>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav my-auto me-auto">
                  <li class="nav-item text-color pe-2">
                    <a class="nav-link active" href="#home">
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
                        <ul class="dropdown-menu child-menu">
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
                    <a class="nav-link" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item pe-2">
                    <a class="nav-link" href="#features">
                      Features
                    </a>
                  </li>
                  <li class="nav-item pe-2">
                    <a class="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li class="nav-item pe-2">
                    <a class="nav-link" href="#contact">
                      Contact
                    </a>
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
    </>
  );
}

{
  /* <ul
                class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
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
                <a href="#" className="rounded-5 px-4 me-2 sign-in">
                  Sign in
                </a>
                <a href="#" className="rounded-5 px-4 register-btn">
                  Register
                </a>
              </ul> */
}
