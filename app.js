const express = require("express");
const studentRouts = require("./routes/students.routes");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
app.use(express.json());

app.use("/students", studentRouts);

app.use(notFound);
app.use(errorHandler);
module.exports = app;
