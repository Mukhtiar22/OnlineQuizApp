import { Link, useLocation } from "react-router-dom";
import "./layout.css";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          QuizMaster
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/quizzes">Quizzes</Link>
          </li>
          {!isHomePage && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
            <Link to="/contact">Contact</Link>
          </li>
            </>
          )}
          <li>
            <Link to="/about">About</Link>
          </li>
         

          {isAuthenticated && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
