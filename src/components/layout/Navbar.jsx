import { Link, useLocation } from "react-router-dom";
import "./layout.css";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/about";
  const isAuthenticated = localStorage.getItem("isAuthenticated");


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">QuizMaster</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          
        </ul>
      </div>
    </nav>
  );
}
