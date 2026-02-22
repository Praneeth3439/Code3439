import React from 'react';
import ProgressBar from '../components/ProgressBar';

const DashboardPage = () => {
  const progress = 68;
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
        <h2 className="mb-2 font-semibold">Overall Progress</h2>
        <ProgressBar value={progress} />
      </div>
    </section>
  );
};

export default DashboardPage;
