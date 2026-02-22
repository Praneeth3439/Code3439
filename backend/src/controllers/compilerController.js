const { runCodeWithJudge0 } = require('../services/judge0Service');

const runCode = async (req, res, next) => {
  try {
    const { source_code, language_id, stdin } = req.body;
    const result = await runCodeWithJudge0({ source_code, language_id, stdin });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { runCode };
