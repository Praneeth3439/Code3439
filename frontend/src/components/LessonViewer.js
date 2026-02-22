import React from 'react';

const LessonViewer = ({ lesson }) => (
  <section className="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
    <h2 className="text-xl font-bold">{lesson?.title}</h2>
    <p className="mt-2 whitespace-pre-line text-sm">{lesson?.content}</p>
    <pre className="mt-4 overflow-x-auto rounded bg-slate-100 p-3 text-xs dark:bg-slate-900">{lesson?.exampleCode}</pre>
  </section>
);

export default LessonViewer;
