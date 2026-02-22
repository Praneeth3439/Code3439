const User = require('../models/User');

const getLeaderboard = async (req, res, next) => {
  try {
    const users = await User.find().select('name scores completedCourses').sort({ scores: -1 }).limit(20);
    res.json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { getLeaderboard };
