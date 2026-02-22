const axios = require('axios');

const JUDGE0_URL = process.env.JUDGE0_URL || 'https://judge0-ce.p.rapidapi.com/submissions';

const runCodeWithJudge0 = async ({ source_code, language_id, stdin = '' }) => {
  const headers = {
    'Content-Type': 'application/json'
  };

  if (process.env.JUDGE0_API_KEY) {
    headers['X-RapidAPI-Key'] = process.env.JUDGE0_API_KEY;
  }
  if (process.env.JUDGE0_HOST) {
    headers['X-RapidAPI-Host'] = process.env.JUDGE0_HOST;
  }

  const createRes = await axios.post(`${JUDGE0_URL}?base64_encoded=false&wait=true`, {
    source_code,
    language_id,
    stdin
  }, { headers });

  return createRes.data;
};

module.exports = { runCodeWithJudge0 };
