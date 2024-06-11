import axios from "axios";
import React from "react";

export default function B4() {
  function removeById(id: number) {
    axios.delete(`http://localhost:8080/students/${id}`);
  }
  function getAllStudent() {
    axios
      .get("http://localhost:8080/students")
      .then((res) => console.log(res.data));
  }
  removeById(4);
  getAllStudent();
  return <div>B4</div>;
}
