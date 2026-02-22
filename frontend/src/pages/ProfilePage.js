import React from 'react';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();
  return (
    <section className="space-y-3 rounded-lg border border-slate-200 p-4 dark:border-slate-800">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
    </section>
  );
};

export default ProfilePage;
