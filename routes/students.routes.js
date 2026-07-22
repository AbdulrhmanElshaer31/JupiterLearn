const express = require("express");
const router = express.Router();
const studentController = require("../controllers/students.contrloller");
const validation = require("../middlewares/validateStudent.middleware");
// GET Router
//==============//
//getAll Students
router.get("/", studentController.getAllStudents);
//get Student By id
router.get("/:id", studentController.getStudentById);
// POST Router
//==============//
//Create Student
router.post(
  "/",
  validation.validateStudent,
  studentController.createStudent,
);
//PUT Router
//=============//
router.put(
  "/:id",
  validation.validateStudent,
  studentController.editStudent,
);
//PATCH Router
//===============//
router.patch(
  "/:id",
  validation.validateStudentForPatch,
  studentController.editSpecificData,
);
//DELETE Router
//==============//
router.delete("/:id", studentController.deletedStudent);
module.exports = router;
