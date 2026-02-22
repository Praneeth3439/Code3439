const mongoose = require('mongoose');

const quizQuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String
}, { _id: false });

const lessonSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  exampleCode: { type: String, default: '' },
  quizQuestions: [quizQuestionSchema]
}, { timestamps: true });

module.exports = mongoose.model('Lesson', lessonSchema);
