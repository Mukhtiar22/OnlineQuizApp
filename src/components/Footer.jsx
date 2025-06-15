import React from 'react';
import './layout.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>QuizMaster</h2>
          <p>Challenge your knowledge every day!</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/quizzes">Quizzes</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: quizmaster.support@gmail.com</p>
          <p>Phone: +92 306 9088997</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 QuizMaster. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
