import React from "react";
import { useEffect, useState } from "react";
import StudentCard from "../components/StudentCard";
import { URL } from "../contants";
function ListAll() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    getStudents();
  }, []);
  async function getStudents() {
    const request = await fetch(`${URL}/all`, {
      method: "GET",
    });
    const info = await request.json();
    if (info.status === "ok") {
      setStudent(info.data);
    } else {
      alert(info.error);
    }
  }
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">All Students</h1>
        <div className="container mt-3">
          <div className="row justify-content-evenly">
            {student.map((item) => (
              <StudentCard detail={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListAll;
