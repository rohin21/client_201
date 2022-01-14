import React from "react";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div
        className="card text-center"
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        }}
      >
        <div className="card-body">
          <h5 className="card-title ">Student CRUD App</h5>
          <p className="card-text p-4">
            Click Add to start adding student information.
          </p>
          <Link
            to="/add"
            className="btn btn-primary"
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            ADD
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
