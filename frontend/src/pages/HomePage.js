import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <section className="space-y-6">
    <h1 className="text-3xl font-bold">Learn to Code with Hands-on Challenges</h1>
    <p className="max-w-2xl text-slate-600 dark:text-slate-300">A production-ready learning platform for structured courses, coding practice, project submissions, and leaderboard-driven motivation.</p>
    <Link to="/courses" className="inline-block rounded bg-indigo-600 px-4 py-2 text-white">Explore Courses</Link>
  </section>
);

export default HomePage;
