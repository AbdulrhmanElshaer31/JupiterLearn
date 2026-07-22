const db = require("../config/database");
//GET
//==================//
//get all students

const getAllStudents = async () => {
  const query = "SELECT * FROM students";
  const result = await db.query(query);
  return result.rows;
};

const getStudentById = async (id) => {
  const query =  "SELECT * FROM students WHERE id = $1"
  const result = await db.query(query, [id]);
  console.log(result.rows);

  return result.rows[0];
};

//POST
//Add New Student
const createStudent = async (student) => {
  const { name, grade, age } = student;
  const query = "insert into students(name, grade, age) values($1,$2,$3) returning *;";
  const result = await db.query(
    query,
    [name, grade, age],
  );
  console.log(result.rows[0]);

  return result.rows[0];
};
//PUT
//Edit Student Data
const editStudent = async (id, studentData) => {
  const { name, grade, age } = studentData;
  const query =
    "update students set name = $1, grade = $2, age = $3 where id = $4 returning *;";
  const result = await db.query(query, [name, grade, age, id]);
  console.log(result.rows[0]);
  console.log(result.rows);
  return result.rows[0];
};
//PATCH
//Edit specific Student Data
const editSpecificData = async (id, studentData) => {
  const { name, grade, age } = studentData;
  const fields = [];
  const values = [];
  if (name != null) {
    fields.push(`name = $${values.length + 1}`);
    values.push(name);
  }
  if (grade != null) {
    fields.push(`grade = $${values.length + 1}`);
    values.push(grade);
  }
  if (age != null) {
    fields.push(`age = $${values.length + 1}`);
    values.push(age);
  }
  if (fields.length == 0) return null;
  values.push(id);
  const result = await db.query(
    `update students set ${fields.join(", ")}
  where id = $${values.length}
  returning *
  `,
    values,
  );
  return result.rows[0] ?? null;
};

//DELETE
//Delete Student By id

const deleteStudent = async (id) => {
  const query = "delete from students where id = $1 returning *";
  const result = await db.query(query, [id]);
  return result.rows[0] ?? null;
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  editStudent,
  editSpecificData,
  deleteStudent,
};
