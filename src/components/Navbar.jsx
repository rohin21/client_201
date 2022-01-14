import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div
        className="container mt-5"
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col btn">
              <Link to={"/all"}>All</Link>
            </div>
            <div className="col btn">
              <Link to={"/add"}>Add</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
