import axios from "axios";
import React from "react";

export default function B5() {
  let newUser = {
    student_name: "Nguyễn Văn A",
    email: "a@gmail.com",
    phone: "0123456987",
    status: true,
    address: "TH",
    created_at: "20/12/2015",
  };

  function createStudent(user: any) {
    // thêm 1 mảng ghi trong users
    axios
      .post("http://localhost:8080/students", user)
      .then((res) => console.log("Giá trọ dâta", res.data))
      .catch((err) => console.log(err));
  }
  //   createStudent(newUser);
  function getAllStudent() {
    axios
      .get("http://localhost:8080/students")
      .then((res) => console.log(res.data));
  }
  getAllStudent();
  return <div>B5</div>;
}
