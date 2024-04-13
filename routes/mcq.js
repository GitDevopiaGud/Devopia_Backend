const express = require('express');
const Quiz = require('../schemas/quiz');
const User = require('../schemas/user'); // Import the User model

const router = express.Router();

router.post('/quiz', async (req, res) => {
  const { email, topic_name, question, option, correct_answer } = req.body;

  try {
    // Find the user based on the email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Extract the grade and board from the user object
    const { current_class: grade, board } = user;

    // Create a new quiz
    const newQuiz = new Quiz({ email, topic_name, grade, board, question, option, correct_answer });
    await newQuiz.save();

    res.status(200).json({ message: 'Registration successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;