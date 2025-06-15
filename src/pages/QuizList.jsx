import { Link } from 'react-router-dom';
import './login.css'; // Import the CSS

const sampleQuizzes = [
  { id: 1, title: 'JavaScript Basics', questionCount: 10 },
  { id: 2, title: 'React Fundamentals', questionCount: 8 },
  { id: 3, title: 'Node.js Overview', questionCount: 12 },
];

export default function QuizList() {
  return (
    <div className="quizlist-container">
      <h2 className="quizlist-title">Available Quizzes</h2>
      <div className="quiz-cards">
        {sampleQuizzes.map((quiz) => (
          <Link to={`/quiz/${quiz.id}`} key={quiz.id} className="quiz-card">
            <h3>{quiz.title}</h3>
            <p>{quiz.questionCount} Questions</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
