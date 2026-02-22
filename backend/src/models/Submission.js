const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  code: { type: String, required: true },
  score: { type: Number, default: 0 },
  feedback: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);
