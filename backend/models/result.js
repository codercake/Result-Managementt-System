const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    studentId: { type: String, required: true },
    attendanceMarks: Number,
    projectReviewMarks: Number,
    assessmentMarks: Number,
    projectSubmissionMarks: Number,
    linkedInPostMarks: Number,
});

module.exports = mongoose.model('Result', resultSchema);
