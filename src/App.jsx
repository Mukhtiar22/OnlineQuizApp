import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import QuizList from "./pages/QuizList";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import TakeQuiz from "./pages/TakeQuiz";
import "./App.css"; // Import your global styles

function AppLayout() {
  const location = useLocation();

  // Hide Navbar and Footer on these routes follow
  const hideNavAndFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password";

  return (
    <>
      <div className="app-container">
        {!hideNavAndFooter && <Navbar />}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/quizzes" element={<QuizList />} />
            <Route path="/quiz/:id" element={<TakeQuiz />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {!hideNavAndFooter && <Footer />}
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
