import axios from "axios";
import React, { useState } from "react";

type AddProps = {
  handleCancel: () => void;
  handleAdd: (student: Student) => void;
};

type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};
export default function AddStudent({ handleCancel, handleAdd }: AddProps) {
  const [student, setStudent] = useState<Student>({
    id: Math.floor(Math.random() * 99999999999999999999999),
    student_name: "",
    email: "",
    address: "",
    phone: "",
    status: true,
    created_at: "",
  });
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col w-[300px] border-2 p-8 bg-white rounded">
        <form action="">
          <div>
            <h1 className="text-start text-[24px]">Thêm mới sinh viên</h1>
          </div>
          <hr />
          <label htmlFor="">Tên sinh viên</label>
          <br />
          <input
            value={student.student_name}
            name="student_name"
            onChange={handleChanges}
            className="border-2"
            type="text"
          />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input
            value={student.email}
            name="email"
            onChange={handleChanges}
            className="border-2"
            type="text"
          />
          <br />
          <label htmlFor="">Địa chi</label>
          <br />
          <input
            value={student.address}
            name="address"
            onChange={handleChanges}
            className="border-2"
            type="text"
          />
          <br />
          <label htmlFor="">Số điện thoại</label>
          <br />
          <input
            value={student.phone}
            name="phone"
            onChange={handleChanges}
            className="border-2"
            type="text"
          />
          <br />
          <div className="mt-[40px] text-end">
            <button onClick={handleCancel}>Cancel</button>
            <button
              type="submit"
              onClick={() => handleAdd(student)}
              className="w-[60px] bg-green-500"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
