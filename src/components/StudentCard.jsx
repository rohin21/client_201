import React from "react";
import { Link } from "react-router-dom";
function StudentCard({ detail }) {
  return (
    <div className="col mt-4">
      <div
        className="card p-3"
        style={{
          alignItems: "center",
          width: "18rem",
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        }}
      >
        <img
          style={{
            width: "10rem",
            height: "10rem",
            borderRadius: "50%",
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
          }}
          src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{detail.name}</h5>
        </div>
        <Link
          to={"/info"}
          state={{ data: detail }}
          className="btn btn-primary"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default StudentCard;
