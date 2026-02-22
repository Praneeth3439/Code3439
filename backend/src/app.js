const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const compilerRoutes = require('./routes/compilerRoutes');
const projectRoutes = require('./routes/projectRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/run-code', compilerRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

app.use(errorHandler);

module.exports = app;
