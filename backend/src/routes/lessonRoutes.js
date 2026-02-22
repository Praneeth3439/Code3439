const express = require('express');
const { getLessonById, bookmarkLesson } = require('../controllers/lessonController');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.get('/:id', getLessonById);
router.post('/:id/bookmark', auth, bookmarkLesson);

module.exports = router;
