import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/Login/', {
        username,
        password,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Login Success:', response.data);
      localStorage.setItem('authToken', response.data.token);
      setMessage('Login successful!');
      navigate('/VipClub'); // Assuming this is your protected route
    } catch (error) {
      console.error('Login Error:', error.response.data);
      setMessage(error.response.data.error || 'An error occurred. Please try again later.');
    }
  
};

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <label className="login-label">
          Username:
          <input
            className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="login-label">
          Password:
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="login-button" type="submit">Login</button>
        {message && <p className={`login-message ${message === 'Login successful!' ? 'success' : 'error'}`}>{message}</p>}
      </form>
      <div className="signup-link-container">
        <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
      </div>
    </div>
  );
};

export default LoginForm;
