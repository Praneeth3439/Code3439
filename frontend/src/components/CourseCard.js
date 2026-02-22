import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => (
  <article className="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
    <p className="text-xs uppercase text-indigo-500">{course.language}</p>
    <h3 className="text-lg font-semibold">{course.title}</h3>
    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{course.description}</p>
    <Link className="mt-3 inline-block text-indigo-500" to={`/lesson/${course.modules?.[0]?.lessonIds?.[0] || ''}`}>Start Learning</Link>
  </article>
);

export default CourseCard;
