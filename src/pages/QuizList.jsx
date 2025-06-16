import { Link } from 'react-router-dom';
import quizData from '../data/quizData';
import './login.css';

export default function QuizList() {
  return (
    <div className="quizlist-container">
      <h2 className="quizlist-title">Available Quizzes</h2>
      <div className="quiz-cards">
        {Object.entries(quizData).map(([id, quiz]) => (
          <Link to={`/quiz/${id}`} key={id} className="quiz-card">
            <h3>{quiz.title}</h3>
            <p>{quiz.questions.length} Questions</p>
          </Link>
        ))}
      </div>
    </div>
  );
}