import React from 'react';

const ProgressBar = ({ value }) => (
  <div className="w-full rounded-full bg-slate-200 dark:bg-slate-800">
    <div style={{ width: `${value}%` }} className="rounded-full bg-indigo-500 px-2 py-1 text-right text-xs text-white transition-all">{value}%</div>
  </div>
);

export default ProgressBar;
