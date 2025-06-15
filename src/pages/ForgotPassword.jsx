import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

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

    // Move to next step
    setStep(2);
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
    <div className="login-container">
      <h2 className="login-title">Forgot Password</h2>

      {step === 1 && (
        <form onSubmit={handleEmailSubmit} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="login-button">
            Verify Email
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleResetPassword} className="login-form">
          <div className="form-group">
            <label>New Password</label>
            <input 
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="login-button">
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
}
