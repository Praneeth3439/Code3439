const mongoose = require('mongoose');

const testCaseSchema = new mongoose.Schema({
  input: String,
  expectedOutput: String
}, { _id: false });

const projectSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  requirements: { type: String, required: true },
  starterCode: String,
  testCases: [testCaseSchema]
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
