const Course = require('../models/Course');
const Lesson = require('../models/Lesson');
const Project = require('../models/Project');
const Submission = require('../models/Submission');

const getCourses = async (req, res, next) => {
  try {
    const { search = '', language } = req.query;
    const query = {
      title: { $regex: search, $options: 'i' }
    };
    if (language) query.language = language;

    const courses = await Course.find(query).sort({ createdAt: -1 });
    res.json(courses);
  } catch (error) {
    next(error);
  }
};

const getCourseById = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found.' });

    const lessons = await Lesson.find({ courseId: course._id });
    const projects = await Project.find({ courseId: course._id });

    res.json({ ...course.toObject(), lessons, projects });
  } catch (error) {
    next(error);
  }
};

const createCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};

const addLesson = async (req, res, next) => {
  try {
    const lesson = await Lesson.create(req.body);
    res.status(201).json(lesson);
  } catch (error) {
    next(error);
  }
};

const addProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

const viewSubmissions = async (req, res, next) => {
  try {
    const submissions = await Submission.find().populate('userId', 'name email').populate('projectId', 'title');
    res.json(submissions);
  } catch (error) {
    next(error);
  }
};

module.exports = { getCourses, getCourseById, createCourse, addLesson, addProject, viewSubmissions };
