import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importing custom CSS

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save signup data in localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check for duplicate email
    const emailExists = existingUsers.some(
      (user) => user.email === formData.email
    );

    if (emailExists) {
      alert("Email is already registered. Please use a different one.");
      return;
    }

    // Add new user to array and save back to localStorage
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert(`Welcome, ${formData.firstName}!`);
    navigate('/login'); // Redirect to login page after signup
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>First Name</label>
          <input 
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input 
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input 
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}
