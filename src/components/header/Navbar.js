import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href="#">
            Launch
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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Contact</a>
              </li>
            </ul>
            <ul className="navbar-nav my-2">
              <a
                href="$#"
                className="btn btn-outline-primary rounded-5 px-4 me-2"
              >
                Sign in
              </a>
              <a href="$#" className="btn btn-primary px-4 rounded-5">
                Register
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
