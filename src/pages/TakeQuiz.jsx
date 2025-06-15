import { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'Which language is used for React?',
    options: ['Python', 'Java', 'JavaScript', 'C++'],
    answer: 'JavaScript',
  },
];

export default function TakeQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) setScore(score + 1);
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelected('');
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Your Score: {score} / {questions.length}</h2>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-semibold mb-4">{questions[current].question}</h3>
          <div className="space-y-2">
            {questions[current].options.map((option, idx) => (
              <div key={idx}>
                <label className="inline-flex items-center">
                  <input type="radio" name="option" value={option} checked={selected === option} onChange={() => setSelected(option)} className="mr-2" />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button onClick={handleNext} disabled={!selected} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50">
            {current < questions.length - 1 ? 'Next' : 'Submit'}
          </button>
        </>
      )}
    </div>
  );
}