import React from 'react';
import './login.css'; // Link to your CSS file

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to QuizMaster</h1>
      <p className="home-subtitle">Your gateway to fun and challenging quizzes</p>
      <button className="home-button">
        <a href="/quizzes" className="home-button-link">Start Quizzing</a>
      </button>
    </div>
  );
}
