import React, { useState } from 'react';

const QuizComponent = ({ questions = [], onComplete }) => {
  const [answers, setAnswers] = useState({});

  const submit = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) score += 1;
    });
    onComplete?.(Math.round((score / Math.max(1, questions.length)) * 100));
  };

  return (
    <div className="space-y-3 rounded-lg border border-slate-200 p-4 dark:border-slate-800">
      {questions.map((q, i) => (
        <div key={i}>
          <p className="font-medium">{q.question}</p>
          <div className="mt-1 grid gap-1">
            {q.options.map((opt) => (
              <label key={opt} className="text-sm">
                <input type="radio" name={`q-${i}`} onChange={() => setAnswers((prev) => ({ ...prev, [i]: opt }))} /> {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button className="rounded bg-indigo-600 px-3 py-1 text-white" onClick={submit}>Submit Quiz</button>
    </div>
  );
};

export default QuizComponent;
