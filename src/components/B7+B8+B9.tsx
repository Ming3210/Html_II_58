import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalDelete from "./ModalDelete";
import AddStudent from "./AddStudent";

type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};

export default function B7() {
  const [studentList, setStudentList] = useState<Student[]>([]);
  const [deletedStudent, setDeletedStudent] = useState<Student | null>(null);
  const [showModalDelete, setShowModalDelete] = useState<boolean>(true);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const student = {};

  function loadData() {
    axios
      .get("http://localhost:8080/students")
      .then((res) => setStudentList(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = (student: Student) => {
    setDeletedStudent(student);
    setShowModalDelete(true);
  };

  const confirmDelete = () => {
    if (deletedStudent) {
      axios
        .delete(`http://localhost:8080/students/${deletedStudent.id}`)
        .then(() => {
          loadData();
          setShowModalDelete(true);
          setDeletedStudent(null);
        })
        .catch((err) => console.log(err));
    }
  };

  const closeDeleteModal = () => {
    setShowModalDelete(false);
    setDeletedStudent(null);
  };

  const Add = () => {
    setShowAdd(true);
  };

  const closeAdd = () => {
    setShowAdd(false);
  };
  const confirmAdd = (newUser: Student) => {
    setShowAdd(false);
    axios
      .post("http://localhost:8080/students", newUser)
      .then((res) => {
        loadData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="text-white flex w-[100%] bg-blue-950 h-[80px] items-center justify-between px-[20px] sm:px-[40px] md:px-[60px]">
        <h1 className="text-[24px]">Quản lí sinh viên</h1>
        <button
          onClick={Add}
          className="bg-green-600 text-white w-[220px] flex justify-around items-center h-[40px]"
        >
          <span className="w-[30px] h-[30px] rounded-full bg-yellow-400">
            <p className="flex justify-center items-center relative bottom-[5px] text-[40px] w-[30px] h-[30px]">
              +
            </p>
          </span>
          Thên mới sinh viên
        </button>
      </div>
      <br />

      <div>
        <table className="w-[100%] border-collapse border-2 border-purple-800">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th className="text-start">Tên sinh viên</th>
              <th className="text-start">Email</th>
              <th className="text-start">Địa chỉ</th>
              <th className="text-start">Số điện thoại</th>
              <th className="text-start">Lựa chọn</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student) => (
              <tr className="text-start divide-y h-[60px]" key={student.id}>
                <td>
                  <div className="flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                </td>
                <td>{student.student_name}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.phone}</td>
                <td className="flex items-center">
                  <div className="flex gap-5 h-[60px] items-center">
                    <button>
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button onClick={() => handleDelete(student)}>
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <div className="flex justify-end gap-3 mr-[20px]">
        <button className="border-2 w-[50px] h-[50px]">Trước</button>
        <button className="border-2 w-[50px] h-[50px]">1</button>
        <button className="border-2 w-[50px] h-[50px]">2</button>
        <button className="border-2 w-[50px] h-[50px] bg-cyan-500">3</button>
        <button className="border-2 w-[50px] h-[50px]">4</button>
        <button className="border-2 w-[50px] h-[50px]">5</button>
        <button className="border-2 w-[50px] h-[50px]">Sau</button>
      </div>
      {showModalDelete && deletedStudent ? (
        <ModalDelete
          handleClose={closeDeleteModal}
          handleConfirm={confirmDelete}
        />
      ) : (
        " "
      )}
      {showAdd ? (
        <AddStudent handleCancel={closeAdd} handleAdd={confirmAdd}></AddStudent>
      ) : (
        ""
      )}
    </div>
  );
}
