import axios from "axios";
import React from "react";

export default function B6() {
  let newUser = {
    student_name: "Nguyễn Văn B",
    email: "b@gmail.com",
    phone: "0123456987",
    status: false,
    address: "TH",
    created_at: "20/12/2015",
  };
  function updateStudentById(id: number, user: any) {
    axios
      .patch(`http://localhost:8080/students/${id}`, user)
      .then((res) => console.log(res));
  }
  updateStudentById(1, newUser);
  function getAllStudent() {
    axios
      .get("http://localhost:8080/students")
      .then((res) => console.log(res.data));
  }
  getAllStudent();
  return <div>B6</div>;
}
