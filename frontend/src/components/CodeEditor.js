import React from 'react';

const CodeEditor = ({ code, setCode }) => (
  <textarea
    value={code}
    onChange={(e) => setCode(e.target.value)}
    className="min-h-72 w-full rounded-lg border border-slate-300 bg-slate-50 p-3 font-mono text-sm dark:border-slate-700 dark:bg-slate-900"
  />
);

export default CodeEditor;
