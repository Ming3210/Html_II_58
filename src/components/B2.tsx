import axios from "axios";

export default function B2() {
  function getAllStudent() {
    axios
      .get("http://localhost:8080/students")
      .then((res) => console.log(res.data));
  }
  getAllStudent();
  return <div></div>;
}
