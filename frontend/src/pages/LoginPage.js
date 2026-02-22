import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/client';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const endpoint = isSignup ? '/auth/register' : '/auth/login';
      const { data } = await api.post(endpoint, form);
      login(data);
      navigate('/dashboard');
    } catch {
      setError('Authentication failed.');
    }
  };

  return (
    <form className="mx-auto max-w-md space-y-3 rounded-lg border border-slate-200 p-4 dark:border-slate-800" onSubmit={submit}>
      <h1 className="text-xl font-bold">{isSignup ? 'Create account' : 'Login'}</h1>
      {isSignup && <input className="w-full rounded border p-2" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />}
      <input className="w-full rounded border p-2" placeholder="Email" type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="w-full rounded border p-2" placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button className="w-full rounded bg-indigo-600 py-2 text-white" type="submit">Continue</button>
      <button className="w-full text-sm text-indigo-500" type="button" onClick={() => setIsSignup((v) => !v)}>{isSignup ? 'Already have an account?' : 'Need an account?'}</button>
    </form>
  );
};

export default LoginPage;
