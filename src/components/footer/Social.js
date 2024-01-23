import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Social() {
  return (
    <>
      <div className="d-flex">
        <a className="social-icon d-block text-center rounded-circle">
          <FontAwesomeIcon
            icon="fas fa-arrow-right"
            style={{ color: "#fff" }}
          />
        </a>
      </div>
    </>
  );
}
