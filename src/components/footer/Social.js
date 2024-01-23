import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Social() {
  return (
    <>
      <div className="d-flex">
        <a className="social-icon d-block text-center rounded-circle me-1">
          <FontAwesomeIcon
            icon="fab fa-instagram"
            size="sm"
            style={{ color: "#fff" }}
          />
        </a>
        <a className="social-icon d-block text-center rounded-circle me-1">
          <FontAwesomeIcon
            icon="fab fa-twitter"
            size="sm"
            style={{ color: "#fff" }}
          />
        </a>
        <a className="social-icon d-block text-center rounded-circle me-1">
          <FontAwesomeIcon icon="fab fa-facebook-f" style={{ color: "#fff" }} />
        </a>
        <a className="social-icon d-block text-center rounded-circle me-1">
          <FontAwesomeIcon
            icon="fab fa-linkedin-in"
            style={{ color: "#fff" }}
          />
        </a>
        <a className="social-icon d-block text-center rounded-circle me-1">
          <FontAwesomeIcon
            icon="fab fa-pinterest-p"
            style={{ color: "#fff" }}
          />
        </a>
        <a className="social-icon d-block text-center rounded-circle me-1">
          <FontAwesomeIcon icon="fab fa-dribbble" style={{ color: "#fff" }} />
        </a>
      </div>
    </>
  );
}
