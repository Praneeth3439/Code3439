const Lesson = require('../models/Lesson');
const User = require('../models/User');

const getLessonById = async (req, res, next) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) return res.status(404).json({ message: 'Lesson not found.' });
    res.json(lesson);
  } catch (error) {
    next(error);
  }
};

const bookmarkLesson = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user.bookmarks.includes(req.params.id)) {
      user.bookmarks.push(req.params.id);
      await user.save();
    }
    res.json({ bookmarks: user.bookmarks });
  } catch (error) {
    next(error);
  }
};

module.exports = { getLessonById, bookmarkLesson };
