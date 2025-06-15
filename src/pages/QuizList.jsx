import { Link } from 'react-router-dom';

const sampleQuizzes = [
  { id: 1, title: 'JavaScript Basics', questionCount: 10 },
  { id: 2, title: 'React Fundamentals', questionCount: 8 },
  { id: 3, title: 'Node.js Overview', questionCount: 12 },
];

export default function QuizList() {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Available Quizzes</h2>
      <div className="space-y-4">
        {sampleQuizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white shadow p-4 rounded">
            <h3 className="text-xl font-semibold">{quiz.title}</h3>
            <p className="text-gray-600">Questions: {quiz.questionCount}</p>
            <Link to="/take-quiz" className="mt-2 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Take Quiz</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
