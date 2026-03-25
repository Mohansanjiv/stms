const express = require("express");
const router = express.Router();
const {
  addStudent,
  getStudents,
  updateAttendance,
  deleteStudent,
} = require("../controllers/studentController");

router.post("/students", addStudent);
router.get("/students", getStudents);
router.put("/students/:id/attendance", updateAttendance);
router.delete("/students/:id", deleteStudent);

module.exports = router;
