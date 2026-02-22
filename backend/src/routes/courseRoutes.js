const express = require('express');
const { getCourses, getCourseById, createCourse, addLesson, addProject, viewSubmissions } = require('../controllers/courseController');
const { auth, adminOnly } = require('../middleware/auth');

const router = express.Router();

router.get('/', getCourses);
router.post('/', auth, adminOnly, createCourse);
router.post('/admin/lesson', auth, adminOnly, addLesson);
router.post('/admin/project', auth, adminOnly, addProject);
router.get('/admin/submissions/all', auth, adminOnly, viewSubmissions);
router.get('/:id', getCourseById);

module.exports = router;
