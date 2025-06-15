import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Reuse your existing styles or extend

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!isAuthenticated || !currentUser) {
      navigate("/login");
    } else {
      setUser(currentUser);
      const allAttempts = JSON.parse(localStorage.getItem("quizAttempts")) || [];
      const userAttempts = allAttempts.filter(
        (attempt) => attempt.email === currentUser.email
      );
      setAttempts(userAttempts);
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-card">
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Date of Birth:</strong> {user.dob}</p>
      </div>

      <h3 className="attempt-history-title">Quiz Attempt History</h3>
      {attempts.length > 0 ? (
        <div className="attempts-list">
          {attempts.map((attempt, idx) => (
            <div key={idx} className="attempt-card">
              <p><strong>Quiz:</strong> {attempt.quizTitle}</p>
              <p><strong>Score:</strong> {attempt.score} / {attempt.total}</p>
              <p><strong>Date:</strong> {attempt.timestamp}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-attempts">No quiz attempts yet.</p>
      )}

      <button
        className="logout-button"
        onClick={() => {
          localStorage.removeItem("isAuthenticated");
          localStorage.removeItem("currentUser");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
