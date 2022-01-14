import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../contants";
function AddStudent() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [degree, setDegree] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        degree,
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      navigate("/all");
    } else {
      alert("Error");
    }
  }
  return (
    <>
      <div className="container mt-3">
        <h1 className="text-center">Add a Student</h1>
        <div
          className="container mt-5"
          style={{ width: "20rem", height: "25rem" }}
        >
          <div
            className="card"
            style={{
              boxShadow:
                "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
            }}
          >
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="InputName" className="form-label">
                    Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="InputName"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="InputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="InputEmail"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="InputPhone" className="form-label">
                    Phone
                  </label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    className="form-control"
                    id="InputPhone"
                    maxLength="10"
                    minLength="10"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="InputDegree" className="form-label">
                    Degree
                  </label>
                  <input
                    onChange={(e) => setDegree(e.target.value)}
                    type="text"
                    className="form-control"
                    id="InputDegree"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddStudent;
