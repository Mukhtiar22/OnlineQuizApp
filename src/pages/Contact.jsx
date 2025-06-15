import { useState } from 'react';
import './login.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. We'll get back to you soon!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name} 
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
          <label>Message</label>
          <textarea 
            name="message"
            value={formData.message} 
            onChange={handleChange} 
            rows="4" 
            required 
          />
        </div>

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}
