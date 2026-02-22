import React, { useEffect, useState } from 'react';
import api from '../api/client';

const LeaderboardPage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    api.get('/leaderboard').then((res) => setRows(res.data)).catch(() => setRows([]));
  }, []);

  return (
    <section>
      <h1 className="mb-3 text-2xl font-bold">Leaderboard</h1>
      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-900"><tr><th className="p-2">Rank</th><th>Name</th><th>Score</th></tr></thead>
          <tbody>{rows.map((u, idx) => <tr key={u._id} className="border-t border-slate-200 dark:border-slate-800"><td className="p-2">{idx + 1}</td><td>{u.name}</td><td>{u.scores}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
};

export default LeaderboardPage;
