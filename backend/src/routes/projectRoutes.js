const express = require('express');
const { submitProject, getProjectById } = require('../controllers/projectController');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.post('/submit', auth, submitProject);
router.get('/:id', auth, getProjectById);

module.exports = router;
