# Code3439 Learning Platform

A full-stack coding learning platform inspired by Codecademy + HackerRank.

## Features
- Course catalog, lessons, quizzes, and searchable course list
- Auth with JWT + bcrypt
- Protected student dashboard and profile
- Code execution integration with Judge0
- Project submissions with automatic scoring/test-case checks
- Certificate generation upon strong project scores
- Leaderboard ranking
- Bookmark lesson endpoint
- Admin APIs for course, lesson, project, and submission management
- Responsive UI with dark/light mode and loading/error states

## Project Structure
```
backend/
frontend/
.env.example
README.md
```

## Backend Setup
```bash
cd backend
npm install
npm run dev
```

## Frontend Setup
```bash
cd frontend
npm install
npm start
```

## API Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/courses`
- `GET /api/courses/:id`
- `GET /api/lessons/:id`
- `POST /api/run-code`
- `POST /api/project/submit`
- `GET /api/project/:id`
- `GET /api/leaderboard`
- Admin-only:
  - `POST /api/courses`
  - `POST /api/courses/admin/lesson`
  - `POST /api/courses/admin/project`
  - `GET /api/courses/admin/submissions/all`

## Notes
1. Copy `.env.example` into `.env` and fill values.
2. Make sure MongoDB is running before starting backend.
3. Judge0 key is required for production execution.
