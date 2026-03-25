const Student = require("../models/Student");

// Add Student
exports.addStudent = async (req, res) => {
  try {
    const { name, rollNo } = req.body;

    if (!name || !rollNo) {
      return res.status(400).json({ message: "Name & Roll No required" });
    }

    const student = await Student.create({ name, rollNo });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Students
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// Update Attendance
exports.updateAttendance = async (req, res) => {
  const { isPresent } = req.body;

  const student = await Student.findByIdAndUpdate(
    req.params.id,
    { isPresent },
    { new: true },
  );

  res.json(student);
};

// Delete Student
exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
