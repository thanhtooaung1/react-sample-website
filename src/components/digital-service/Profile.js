import React from "react";
import profile from "../../images/person.jpg";

export default function Profile() {
  return (
    <>
      <div className="d-flex mt-4">
        <img
          className="rounded-circle flex-shrink-1"
          src={profile}
          width={50}
          height={50}
        />
        <div className="ms-3 flex-grow-1">
          <div className="small-text">James Anderson</div>
          <p>Facebook, Product Lead</p>
        </div>
      </div>
    </>
  );
}
