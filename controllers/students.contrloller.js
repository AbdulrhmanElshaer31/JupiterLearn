const studentServices = require("../services/student.service");
//GET Methods
const getAllStudents = async (req, res, next) => {
  try {
    const students = await studentServices.getAllStudents();
    return res.status(200).json({
      success: true,
      message:
        students.length > 0
          ? "Data Loaded Successfully!"
          : "No Students Founded!",
      data: students,
    });
  } catch (error) {
    next(error);
  }
};
const getStudentById = async (req, res, next) => {
  try {
    const student = await studentServices.getStudentById(req.params.id);
    if (!student)
      return res.status(404).json({
        success: false,
        message: "Student Not Found!",
        data: null,
      });
    return res.status(200).json({
      success: true,
      message: "Data Loaded Succefully!",
      data: student,
    });
  } catch (error) {
    next(error);
  }
};
//POST Student
const createStudent = async (req, res, next) => {
  try {
    const createdStudent = await studentServices.createStudent(req.body);
    return res.status(201).json({
      success: true,
      message: "Student Created Succefully!",
      student: createdStudent,
    });
  } catch (error) {
    next(error);
  }
};
//PUT method Edit Student
const editStudent = async (req, res, next) => {
  try {
    const editedStudent = await studentServices.editStudent(
      req.params.id,
      req.body,
    );
    if (!editedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student Not Found!",
        student: editedStudent,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Student Edited Succefully!",
      student: editedStudent,
    });
  } catch (error) {
    next(error);
  }
};
//PATCH method Edit Specifc Student Date
const editSpecificData = async (req, res, next) => {
  try {
    const editedStudent = await studentServices.editSpecificData(
      req.params.id,
      req.body,
    );
    if (!editedStudent)
      return res.status(404).json({
        success: false,
        message: "Student Not Found!",
        data: editedStudent,
      });
    return res.status(200).json({
      success: true,
      message: "Student Edited Succefuly!",
      data: editedStudent,
    });
  } catch (error) {
    next(error);
  }
};
//Delte Method
const deletedStudent = async (req, res, next) => {
  try {
    const deletedStudent = await studentServices.deleteStudent(req.params.id);
    console.log(deletedStudent);

    if (!deletedStudent)
      return res.status(404).json({
        success: false,
        message: "Student Not Found!",
        data: deletedStudent,
      });
    return res.status(200).json({
      success: true,
      message: "Student Deleted Succefuly!",
      data: deletedStudent,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  editStudent,
  editSpecificData,
  deletedStudent,
};
