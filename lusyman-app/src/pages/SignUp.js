import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    receiveEmails: false,
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/SignUp/', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Signup Success:', response.data);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate('/Login');
      }, 3000);
    } catch (error) {
      console.error('Signup Error:', error.response.data);
      // Handle signup errors here (e.g., display error message to user)
    }
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            id="receiveEmails"
            name="receiveEmails"
            checked={formData.receiveEmails}
            onChange={handleChange}
          />
          Receive emails about news and updates
        </label>
        <button type="submit">Sign Up</button>
      </form>
      {showSuccessMessage && (
        <div className="success-message">
          Signup successful!
        </div>
      )}
    </div>
  );
};

export default SignupForm;
