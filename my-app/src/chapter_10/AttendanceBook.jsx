import React from "react";

// students 배열로부터 학생 이름을 목록 형태로 출력하는 component
const students = [
  {
    id: 1,  // id 추가
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {  // map 함수에는 반드시 key를 전달해주어야 함
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;