import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProtectedRoute from './routes/ProtectedRoute';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import LessonPage from './pages/LessonPage';
import CodeEditorPage from './pages/CodeEditorPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import LeaderboardPage from './pages/LeaderboardPage';

const App = () => (
  <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <Navbar />
    <div className="mx-auto flex max-w-7xl gap-4 p-4">
      <Sidebar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/editor" element={<CodeEditorPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </main>
    </div>
  </div>
);

export default App;
