//1
const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];
// 1. Log each student’s name and grade
students.forEach((el) => console.log(el.name, el.grade));

//2

const topStudents = students
  .filter((el) => el.grade > 80)
  .filter((topStudents) =>
    console.log("Top student:", topStudents.name, topStudents.grade)
  );

const youngStudents = students
  .filter((el) => el.age < 22)
  .filter((youngStudents) =>
    console.log(
      "Students younger than 21:",
      youngStudents.name,
      youngStudents.age
    )
  );
