const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    board: {
        type: String,
        required: true
    },
    topic_name: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    option: {
        type: Array,
        required: true
    },
    correct_answer: {
        type: String,
        required: false
    }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;