const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
  completed: { type: Boolean, default: false },
  score: { type: Number, default: 0 }
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  progress: [progressSchema],
  completedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  scores: { type: Number, default: 0 },
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  certificates: [{ courseId: mongoose.Schema.Types.ObjectId, issuedAt: Date }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
