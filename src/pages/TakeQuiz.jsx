import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import quizData from "../data/quizData";
import "./login.css";

export default function TakeQuiz() {
  const { id } = useParams();
  const quiz = quizData[id];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = quiz?.questions || [];

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelected("");
    } else {
      setShowScore(true);
      saveResult(score + (selected === questions[current].answer ? 1 : 0));
    }
  };
  const handlePrevious = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      setSelected(""); // Optional: clear selected when going back
    }
  };

  const saveResult = (finalScore) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) return;

    const attempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];

    const newAttempt = {
      email: currentUser.email,
      quizTitle: quiz.title,
      score: finalScore,
      total: questions.length,
      timestamp: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "quizAttempts",
      JSON.stringify([...attempts, newAttempt])
    );
  };

  if (!quiz) return <p>Quiz not found.</p>;

  return (
    <div className="quiz-container">
      <h2 className="quiz-id-title">{quiz.title}</h2>
      <div className="quiz-card">
        {showScore ? (
          <div className="score-section">
            <h2>Your Score</h2>
            <p>
              {score} / {questions.length}
            </p>
          </div>
        ) : (
          <>
            <h3 className="question">{questions[current].question}</h3>
            <div className="options">
              {questions[current].options.map((option, idx) => (
                <label
                  key={idx}
                  className={`option ${selected === option ? "selected" : ""}`}
                >
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
            <div className="button-group">
              <button
                onClick={handlePrevious}
                disabled={current === 0}
                className="prev-button"
              >
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={!selected}
                className="next-button"
              >
                {current < questions.length - 1 ? "Next" : "Submit"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
