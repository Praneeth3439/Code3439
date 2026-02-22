import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="text-xl font-bold">Code3439 Academy</Link>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="rounded border px-3 py-1 text-sm">
            {darkMode ? 'Light' : 'Dark'}
          </button>
          {user ? (
            <>
              <span className="hidden sm:block">{user.name}</span>
              <button onClick={logout} className="rounded bg-red-500 px-3 py-1 text-white">Logout</button>
            </>
          ) : <Link to="/login">Login</Link>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
