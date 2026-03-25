const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  isPresent: { type: Boolean, default: false },
});

module.exports = mongoose.model("Student", studentSchema);
