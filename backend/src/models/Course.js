const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  title: String,
  lessonIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }]
}, { _id: false });

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  language: { type: String, required: true },
  modules: [moduleSchema],
  tags: [String],
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
