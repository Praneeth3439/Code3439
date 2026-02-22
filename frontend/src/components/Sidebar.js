import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="hidden w-56 shrink-0 rounded-lg border border-slate-200 p-4 dark:border-slate-800 md:block">
    <ul className="space-y-2 text-sm">
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/editor">Code Editor</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/leaderboard">Leaderboard</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
