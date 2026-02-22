const express = require('express');
const { body } = require('express-validator');
const { runCode } = require('../controllers/compilerController');
const validate = require('../middleware/validate');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, [
  body('source_code').notEmpty(),
  body('language_id').isInt(),
  validate
], runCode);

module.exports = router;
