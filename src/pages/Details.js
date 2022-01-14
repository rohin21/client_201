import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";
import { URL } from "../contants";
function Details() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { data } = location.state;
  useEffect(() => {
    setShow(false);
  }, [location]);
  async function deleteuser(id) {
    const request = await fetch(`${URL}/delete/${id}`, {
      method: "DELETE",
    });
    const info = await request.json();
    if (info.status === "ok") {
      navigate("/all");
    } else {
      alert("Try Again");
    }
  }
  return (
    <div className="container mt-5">
      <h1 className="text-center">Details</h1>
      <div className="container mt-5">
        <div
          className="row p-3"
          style={{
            alignItems: "center",
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
          }}
        >
          <div className="col d-flex justify-content-center">
            <img
              style={{
                width: "10rem",
                height: "10rem",
                borderRadius: "50%",
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
              }}
              src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
              alt="img"
            />
          </div>
          <div className="col d-flex justify-content-center">
            <div className="row">
              <h3 className="mt-2">{data.name}</h3>
              <h3 className="mt-2">{data.email}</h3>
              <h3 className="mt-2">{data.phone}</h3>
              <h3 className="mt-2">{data.degree}</h3>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="row">
              <button
                onClick={() => setShow(true)}
                className="btn btn-primary mt-3"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                Update
              </button>
              <button
                onClick={() => deleteuser(data._id)}
                className="btn btn-danger mt-3"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {show && <UpdateForm form={data} />}
    </div>
  );
}

export default Details;
