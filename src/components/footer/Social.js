import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Social() {
  return (
    <>
      <div className="d-flex">
        <a
          href=""
          className="social-icon d-flex align-items-center justify-content-center rounded-circle me-1"
        >
          <FontAwesomeIcon
            icon="fab fa-instagram"
            size="sm"
            style={{ color: "#fff" }}
          />
        </a>
        <a
          href=""
          className="social-icon d-flex align-items-center justify-content-center rounded-circle me-1"
        >
          <FontAwesomeIcon
            icon="fab fa-twitter"
            size="sm"
            style={{ color: "#fff" }}
          />
        </a>
        <a
          href=""
          className="social-icon d-flex align-items-center justify-content-center rounded-circle me-1"
        >
          <FontAwesomeIcon
            icon="fab fa-facebook-f"
            size="sm"
            style={{ color: "#fff" }}
          />
        </a>
        <a
          href=""
          className="social-icon d-flex align-items-center justify-content-center rounded-circle me-1"
        >
          <FontAwesomeIcon
            icon="fab fa-linkedin-in"
            size="sm"
            style={{ color: "#fff" }}
          />
        </a>
        <a
          href=""
          className="social-icon d-flex align-items-center justify-content-center rounded-circle me-1"
        >
          <FontAwesomeIcon
            icon="fab fa-pinterest-p"
            size="sm"
            style={{ color: "#fff" }}
          />
        </a>
        <a
          href=""
          className="social-icon d-flex align-items-center justify-content-center rounded-circle me-1"
        >
          <FontAwesomeIcon
            icon="fab fa-dribbble"
            size="sm"
            style={{ color: "#fff" }}
          />
        </a>
      </div>
    </>
  );
}
