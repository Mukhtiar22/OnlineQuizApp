import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Create a CSS file for styles

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!isAuthenticated || !currentUser) {
      navigate("/login");
    } else {
      setUser(currentUser);
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-card">
        <p>
          <strong>First Name:</strong> {user.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {user.lastName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Date of Birth:</strong> {user.dob}
        </p>
        {/* Add more fields like total quizzes taken, score etc., if needed */}
      </div>
      <button
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
