import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './login.css';

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
  const { id } = useParams(); // Get quiz ID from URL
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelected('');
    } else {
      setShowScore(true);
      saveResult(score + (selected === questions[current].answer ? 1 : 0));
    }
  };

  const saveResult = (finalScore) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) return;

    const attempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];

    const newAttempt = {
      email: currentUser.email,
      quizTitle: `Quiz ID: ${id}`, // You can enhance this to use actual title
      score: finalScore,
      total: questions.length,
      timestamp: new Date().toLocaleString()
    };

    localStorage.setItem("quizAttempts", JSON.stringify([...attempts, newAttempt]));
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-id-title">Quiz ID: {id}</h2>
      <div className="quiz-card">
        {showScore ? (
          <div className="score-section">
            <h2>Your Score</h2>
            <p>{score} / {questions.length}</p>
          </div>
        ) : (
          <>
            <h3 className="question">{questions[current].question}</h3>
            <div className="options">
              {questions[current].options.map((option, idx) => (
                <label key={idx} className={`option ${selected === option ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selected === option}
                    onChange={() => setSelected(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={!selected}
              className="next-button"
            >
              {current < questions.length - 1 ? 'Next' : 'Submit'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
