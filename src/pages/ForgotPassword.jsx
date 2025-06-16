import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css'; // Updated import to match the CSS file


export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find((user) => user.email === email);

    if (!userExists) {
      alert('No user found with this email.');
      return;
    }

    setStep(2); // Go to next step
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const updatedUsers = users.map((user) =>
      user.email === email ? { ...user, password: newPassword } : user
    );

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('Password has been reset successfully!');
    navigate('/login');
  };

  return (
    <div className="forgot-container">

      {step === 1 && (
        <form onSubmit={handleEmailSubmit} className="forgot-form">
                <h2 className="forgot-title">Forgot Password</h2>

          <div className="forgot-form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="forgot-button">
            Verify Email
          </button>
               <p className="redirect-login">
          Back to Login form <Link to="/login">Login here</Link>
        </p>
 
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleResetPassword} className="forgot-form">
          <div className="forgot-form-group">
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="forgot-button">
            Reset Password
          </button>

        </form>
      )}
    </div>
  );
}
