import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/client';
import LessonViewer from '../components/LessonViewer';
import QuizComponent from '../components/QuizComponent';

const LessonPage = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);
  const [quizScore, setQuizScore] = useState(null);

  useEffect(() => {
    api.get(`/lessons/${id}`).then((res) => setLesson(res.data)).catch(() => setLesson(null));
  }, [id]);

  return (
    <section className="space-y-4">
      {!lesson ? <p>Loading lesson...</p> : <LessonViewer lesson={lesson} />}
      {lesson?.quizQuestions?.length > 0 && <QuizComponent questions={lesson.quizQuestions} onComplete={setQuizScore} />}
      {quizScore !== null && <p className="font-semibold">Quiz Score: {quizScore}%</p>}
    </section>
  );
};

export default LessonPage;
