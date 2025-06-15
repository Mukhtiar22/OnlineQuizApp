import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import QuizList from './pages/QuizList';
import TakeQuiz from './pages/TakeQuiz';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile'; // Importing Profile component

function AppLayout() {
  const location = useLocation();

  // Hide Navbar and Footer on these routes follow
  const hideNavAndFooter = 
    location.pathname === '/login' || 
    location.pathname === '/signup' || 
    location.pathname === '/forgot-password';

  return (
    <>
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      {!hideNavAndFooter && <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/quizzes" element={<QuizList />} />
          <Route path="/take-quiz" element={<TakeQuiz />} />
          import Profile from './components/Profile';

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
