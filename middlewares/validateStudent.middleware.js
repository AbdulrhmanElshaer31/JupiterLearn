const validateStudent = (req, res, next) => {
  const { name, grade, age } = req.body ?? {};
  const errors = {};
  if (!name?.trim()) {
    errors.name = "Name is requierd!";
  }

  if (!grade?.trim()) {
    errors.grade = "Grade is requierd!";
  }
  if (age == null) {
    errors.age = "Age is required.";
  } else if (typeof age !== "number") {
    errors.age = "Age must be a number.";
  } else if (age <= 0) {
    errors.age = "Age must be greater than zero.";
  }
  if (Object.keys(req.body ?? {}).length == 0) {
    return res.status(400).json({
      success: false,
      message: "No Data Provided!",
    });
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation Failed!",
      errors,
    });
  }

  next();
};

const validateStudentForPatch = (req, res, next) => {
  const { name, grade, age } = req.body ?? {};
  const errors = {};

  if (age != null) {
    if (typeof age !== "number") {
      errors.age = "Age must be a number.";
    } else if (age <= 0) {
      errors.age = "Age must be greater than zero.";
    }
  }
  if (name != null) {
    if (!name?.trim()) {
      errors.name = "Name is requierd!";
    }
  }
  if (grade != null) {
    if (!grade?.trim()) {
      errors.grade = "Grade is requierd!";
    }
  }
  if (Object.keys(req.body ?? {}).length == 0) {
    return res.status(400).json({
      success: false,
      message: "No Updated Data Provided!",
    });
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation Failed!",
      errors,
    });
  }

  next();
};

module.exports = {
  validateStudent,
  validateStudentForPatch,
};
