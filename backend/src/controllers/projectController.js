const Project = require('../models/Project');
const Submission = require('../models/Submission');
const User = require('../models/User');
const Course = require('../models/Course');
const { generateCertificate } = require('../utils/certificate');

const evaluateSubmission = async (code, testCases) => {
  let passed = 0;
  testCases.forEach((tc) => {
    if (code.includes(tc.expectedOutput)) passed += 1;
  });
  const score = testCases.length ? Math.round((passed / testCases.length) * 100) : 0;
  return { score, feedback: `Passed ${passed}/${testCases.length} test cases.` };
};

const submitProject = async (req, res, next) => {
  try {
    const { projectId, code } = req.body;
    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ message: 'Project not found.' });

    const { score, feedback } = await evaluateSubmission(code, project.testCases || []);
    const submission = await Submission.create({
      userId: req.user.id,
      projectId,
      code,
      score,
      feedback
    });

    const user = await User.findById(req.user.id);
    user.scores += score;
    await user.save();

    let certificate = null;
    if (score >= 80) {
      const course = await Course.findById(project.courseId);
      certificate = generateCertificate(user.name, course?.title || 'Course');
      user.certificates.push({ courseId: project.courseId, issuedAt: new Date() });
      if (!user.completedCourses.includes(project.courseId)) user.completedCourses.push(project.courseId);
      await user.save();
    }

    res.status(201).json({ submission, certificate });
  } catch (error) {
    next(error);
  }
};

const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found.' });
    res.json(project);
  } catch (error) {
    next(error);
  }
};

module.exports = { submitProject, getProjectById };
