import axios from "axios";
import React from "react";

export default function B3() {
  function getStudentById(id: number) {
    axios
      .get(`http://localhost:8080/students/${id}`)
      .then((res) => console.log(res.data));
  }
  getStudentById(3);
  return <div>B3</div>;
}
