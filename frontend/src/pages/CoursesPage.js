import React, { useEffect, useState } from 'react';
import api from '../api/client';
import CourseCard from '../components/CourseCard';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/courses?search=${encodeURIComponent(search)}`);
        setCourses(data);
      } catch (e) {
        setError('Failed to load courses.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [search]);

  return (
    <section>
      <h1 className="text-2xl font-bold">Courses</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} className="my-4 w-full rounded border p-2" placeholder="Search courses" />
      {loading && <p>Loading courses...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-4 sm:grid-cols-2">{courses.map((course) => <CourseCard key={course._id} course={course} />)}</div>
    </section>
  );
};

export default CoursesPage;
